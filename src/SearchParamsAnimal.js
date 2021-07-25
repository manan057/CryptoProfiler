import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParamsAnimal = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);

  // const breeds = [];
  const [breeds] = useBreedList(animal);    //using custom hooks (something we should have done that for Kaieek)

  useEffect(() => {
    requestPets();
  }, []); //using the square brackets you effectively use call it once

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);

    setPets(json.pets);
  }

  // if location is Seattle then set it to true for isRaining,
  // such conditions can be set in the fucntion as well
  //const isRaining = location === "Seattle, WA" ? true : false;

  function updateLocation(input) {
    setLocation(input.target.value);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
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
            <option /> // the empty option at the start
            {ANIMALS.map((
              animal //map loops throught the array
            ) => (
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
            <option /> // the empty option at the start
            {breeds.map((
              breed //map loops throught the array
            ) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />;
    </div>
  );
};

export default SearchParamsAnimal;
