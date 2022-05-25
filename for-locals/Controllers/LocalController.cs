﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using for_locals.Models;
using for_locals.Repositories;

namespace for_locals.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocalController : Controller
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

        [HttpGet("api/User/{UserId}")]
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
    }
}
