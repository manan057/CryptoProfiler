import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParamsAnimal = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");

  const breeds = [];

  // if location is Seattle then set it to true for isRaining,
  // such conditions can be set in the fucntion as well
  //const isRaining = location === "Seattle, WA" ? true : false;

  function updateLocation(input) {
    setLocation(input.target.value);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id={location}
            // onChange={(e) => setLocation(e.target.value)}        //same as the updateLocation function
            onChange={updateLocation}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />                    // the empty option at the start
            {ANIMALS.map((animal) => (    //map loops throught the array
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />                    // the empty option at the start
            {breeds.map((breed) => (    //map loops throught the array
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParamsAnimal;
