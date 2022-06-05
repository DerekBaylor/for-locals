﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using for_locals.Models;
using for_locals.Repositories;

namespace for_locals.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusinessController : ControllerBase
    {

        private readonly IBusinessRepository _businessRepository;

        public BusinessController(IBusinessRepository businessRepository)
        {
            _businessRepository = businessRepository;
        }

        [HttpGet]
        public List<Business> GetAllBusiness()
        {
            return _businessRepository.GetAllBusiness();
        }

        [HttpGet("id/{BusinessId}")]
        public IActionResult Get(int BusinessId)
        {
            Business business = _businessRepository.GetBusinessById(BusinessId);
            if (business == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(business);
            }
        }

        [HttpPost]
        public IActionResult AddBusiness(Business business)
        {
            _businessRepository.AddBusiness(business);
            return Ok(business);
        }

        [HttpPatch("edit/{BusinessId}")]
        public IActionResult Put(int businessId, Business business)
        {
            if (businessId != business.BusinessId)
            {
            return BadRequest();
            }
            var currentBusiness = _businessRepository.GetBusinessById(businessId);
            if (currentBusiness == null)
            {
                return NotFound();
            }
            else
            {
                _businessRepository.UpdateBusiness(business);
                return NoContent();
            }
        }

        [HttpDelete("{BusinessId}")]
        public IActionResult Delete(int businessId)
        { 
            var currentBusiness = _businessRepository.GetBusinessById(businessId);
            if (currentBusiness == null)
            {
                return NotFound();
            }
            else
            {
                _businessRepository.DeleteBusiness(currentBusiness.BusinessId);
                return NoContent();
            }
        }

    }
}
