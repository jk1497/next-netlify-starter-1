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
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Family">Family</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Thriller">Thriller</option>
        <option value="War">War</option>
      </select>
      <AnotherComponent genre={selectedOption} />
    </div>
  );
}

function AnotherComponent(props) {

  const selectedGenre = props.genre

  const myList = words[selectedGenre].slice(0,15);

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
