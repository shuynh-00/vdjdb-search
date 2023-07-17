import React, { useState } from 'react';
import './App.css';

function Search({ onSearch }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        onSearch(inputValue);
    };

    return (
        <div>
            <input className="search-input" type="text" value={inputValue} onChange={handleInputChange} />
            <button className="search-button" onClick={handleButtonClick}>Search</button>
        </div>
    );
}

export default Search;