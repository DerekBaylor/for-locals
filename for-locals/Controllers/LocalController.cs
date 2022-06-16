using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using for_locals.Models;
using for_locals.Repositories;

namespace for_locals.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocalController : ControllerBase
    {
        private readonly ILocalRepository _localRepository;

        public LocalController(ILocalRepository localRepository)
        {
            _localRepository = localRepository;
        }

        [HttpGet]
        public List<Local> GetAllLocals()
        {
            return _localRepository.GetAllLocals();
        }

        [HttpGet("id/{UserId}")]
        public IActionResult GetUserById(int UserId)
        {
            Local local = _localRepository.GetLocalById(UserId);
            if (local == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(local);
            }
        }

        [HttpGet("{firebaseKey}")]
        public IActionResult GetLocalByFirebaseKey(string firebaseKey)
        {
            Local local = _localRepository.GetLocalByFirebaseKey(firebaseKey);
            if (local == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(local);
            }
        }


        [HttpGet("DoesUserExist/{firebaseKey}")]
        public IActionResult DoesUserExist(string firebaseKey)
        {
            var local = _localRepository.GetLocalByFirebaseKey(firebaseKey);
            if (local == null)
            {
                return NotFound();
            }

            return Ok();
        }

        [Authorize]
        [HttpPost]
        public IActionResult AddLocal(Local local)
        {
            _localRepository.AddLocal(local);
            return Ok(local);
        }

        [HttpPatch("edit/{firebasekey}")]
        public IActionResult Put(string firebasekey, Local local)
        {
            if (firebasekey != local.FirebaseKey)
            {
                return BadRequest();
            }
            var currentLocal = _localRepository.GetLocalByFirebaseKey(firebasekey);
            if (currentLocal == null)
            {
                return NotFound();
            }
            else
            {
                _localRepository.UpdateLocal(local);
                return NoContent();
            }
        }

        [HttpDelete("{firebasekey}")]
        public IActionResult Delete(string firebaseKey)
        {
            var currentLocal = _localRepository.GetLocalByFirebaseKey(firebaseKey);
            if (currentLocal == null)
            {
                return NotFound();
            }
            else
            {
                _localRepository.DeleteLocal(currentLocal.FirebaseKey);
                return NoContent();
            }
        }

        [Authorize]
        [HttpGet("Auth")]
        public async Task<IActionResult> GetLocalAuthStatus()
        {
            string firebaseKey = User.FindFirst(claim => claim.Type == "user_id").Value;
            bool localexists = _localRepository.LocalExists(firebaseKey);
            if (!localexists)
            {
                Local localfromtoken = new Local()
                {
                    Name = User.Identity.Name,
                    FirebaseKey = firebaseKey,
                };

                _localRepository.AddLocal(localfromtoken);
                return Ok();
            }
            Local existingAgent = _localRepository.GetLocalByFirebaseKey(firebaseKey);
            return Ok(existingAgent);
        }
    }
}
