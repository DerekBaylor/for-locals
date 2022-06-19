import React, { useState } from "react";
import BusinessCard from "./BusinessCard";


export default function SearchBar({data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleFilter = (e) => {
      const inputText = e.target.value;
      setSearchText(inputText);
      const textfilter = data.filter((value) => {
        return (value.businessName.toLowerCase().includes(inputText.toLowerCase())
        || value.description.toLowerCase().includes(inputText.toLowerCase())
        || value.phone.toLowerCase().includes(inputText.toLowerCase())
        || value.address.toLowerCase().includes(inputText.toLowerCase())
        || value.keywords.toLowerCase().includes(inputText.toLowerCase())
        || value.industry.toLowerCase().includes(inputText.toLowerCase())
        );
      });
    
        if (inputText === "") {
          setFilteredData([]);
        } else {
          setFilteredData(textfilter);
        }
    };

    const ClearInput = () => {
        setFilteredData([]);
        setSearchText("");
      };

    return (
        <div className="main-search-bar-div">
          <div className="search-bar">
            <div className="search-inputs">
              <input
                  className="input-field"        
                  type="text"
                  placeholder="Search for a business..."
                  value={searchText}
                  onChange={handleFilter}
                  />
            </div>
              <div className="search-btn-div">
                <button className="btn btn-success clear-btn" onClick ={ClearInput}>Clear Search</button>
              </div>
          </div>
          <div className="card-div search-card-div">
            {filteredData.map((card) => {
              return (
                <BusinessCard 
                key = {card.businessId}
                card = {card}
                />
              )
            })}
          </div>
        </div>
      );
};