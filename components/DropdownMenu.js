import React, { useState } from 'react';
import words from '../my_genre.json';
import { Dropdown } from "@nextui-org/react";

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState('Horror');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
}

  return (
    <div>
      <label htmlFor="dropdown">Preferred Genre:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="Action">Action</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
      </select>
      <AnotherComponent genre={selectedOption} />
    </div>
  );
}

function AnotherComponent(props) {

  const selectedGenre = props.genre

  const myList = words[selectedGenre]

  console.log(props)

  const listItems = myList.map((myList) => {
    return <li>{myList}</li>;
  });

  return (
    <div>
      {listItems}
    </div>
  );
}

export default DropdownMenu;
