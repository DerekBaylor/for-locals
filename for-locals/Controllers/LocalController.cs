using Microsoft.AspNetCore.Http;
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

        [Authorize]
        [HttpGet("{firebasekey}")]
        public IActionResult GetLocalByFirebaseKey(string firebasekey)
        {
            var currentLocal = _localRepository.GetLocalByFirebaseKey(firebasekey);
            if (currentLocal == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(currentLocal);
            }
        }

        [Authorize]
        [HttpPost]
        public IActionResult AddLocal(Local local)
        {
            _localRepository.AddLocal(local);
            return Ok(local);
        }

        [Authorize]
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

        [Authorize]
        [HttpDelete("{firebasekey}")]
        public IActionResult Delete(string firebasekey)
        {
            var currentLocal = _localRepository.GetLocalByFirebaseKey(firebasekey);
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
    }
}
