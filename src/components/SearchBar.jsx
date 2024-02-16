
import React ,{useState} from "react";
export default function SearchBar ({ onSearch }) {
    const [searchValue, setSearchvalue] = useState("");
    const handleSearch = () => {
      onSearch(searchValue);
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          value={searchValue}
          onChange={(e) => {
            setSearchvalue(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };