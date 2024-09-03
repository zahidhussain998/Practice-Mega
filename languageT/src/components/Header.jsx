import React, { useState, useEffect } from "react";

function Header() {
  const [racepe, setracepe] = useState([]);
  const [search, setSearch] = useState("");

  const API_KEY = "8a274ddccc9d4046b7985f71f9c80b74";

  useEffect(() => {
    const fetchRacepes = async () => {
      const fetcha = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=pasta&number=10`
      );
      const data = await fetcha.json();
      console.log(data.results);
      setracepe(data.results);
    };

    fetchRacepes();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h1>Recipe App</h1>
      <ul>
        {racepe.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Header;
