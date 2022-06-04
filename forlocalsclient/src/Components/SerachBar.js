import React, { useState } from "react";


export default function SerachBar({data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
    };

    const ClearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };

    return (
        <div className="search-bar">
          <div className="search-inputs">
            <input
                className="input-field"        
                type="text"
                placeholder="Search for a business..."
                value={wordEntered}
                onChange={handleFilter}
            />
          </div>
            <div className="search-btn-div">
             <button className="btn btn-success card-btn" onClick ={ClearInput}>Clear</button>
            </div>
        </div>
      );
};