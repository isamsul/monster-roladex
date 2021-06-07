import React from 'react';
import './SearchBox.css';

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div>
            <input
                className='search'
                type="search"
                name=""
                id=""
                placeholder={placeholder}
                onChange={handleChange} />
        </div>
    )
}

export default SearchBox
