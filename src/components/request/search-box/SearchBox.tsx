import React, {useState} from 'react';

export default function SearchBox() {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    return (
        <input type="search" value={inputValue} onChange={handleInputChange}/>
    )
}