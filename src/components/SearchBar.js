import React from "react";

const SearchBar =({searchfield, SearchEvent})=>{
    return (
        <div className="p-2">
            <input
            className="p-2" 
            type="search" 
            placeholder="Search Your Robots"
            onChange={SearchEvent}
            ></input>
        </div>
    );
};

export default SearchBar;