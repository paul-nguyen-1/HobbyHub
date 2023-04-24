import React, { useState, useEffect } from "react";
import gif from "../assets/loading.gif";
import Meal from "../components/Meal";

function Meals({search}) {
  const [meals, setMeals] = useState(null);
  const [mealIndex, setMealIndex] = useState(0);
  const [searchMeals, setSearchMeals] = useState("");
  const searchURL = `https://themealdb.com/api/json/v1/1/search.php?s=${search}`;

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        `${searchURL}`
      );
      const json = await response.json();
      setMeals(json.meals);
      console.log(json.meals[0]);
    };
    fetchMeals().catch(console.error);
  }, [searchMeals, search]);

  return (
    <div>
      {meals ? (
        <div>
          <Meal name={meals[mealIndex].strMeal} setSearchMeals={setSearchMeals} youtube={meals[mealIndex].strYoutube} />
        </div>
      ) : (
        <img
          src={gif}
          style={{ height: "150px", width: "150px", padding: "50px" }}
        />
      )}
    </div>
  );
}

export default Meals;
