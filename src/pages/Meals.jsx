import React, { useState, useEffect } from "react";
import gif from "../assets/loading.gif";
import Meal from "../components/Meal";

function Meals({ search, meals, setMeals }) {
  const [mealIndex, setMealIndex] = useState(0);
  const [searchMeals, setSearchMeals] = useState("");
  const searchURL = `https://themealdb.com/api/json/v1/1/search.php?s=${search}`;

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`${searchURL}`);
      const json = await response.json();
      setMeals(json.meals);
      // console.log(json.meals[0]);
    };
    fetchMeals().catch(console.error);
  }, [searchMeals, search]);

  return (
    <div className="meals">
      {meals ? (
        <div>
          <Meal
            name={meals[mealIndex].strMeal}
            setSearchMeals={setSearchMeals}
            youtube={meals[mealIndex].strYoutube}
            instructions={meals[mealIndex].strInstructions}
            category={meals[mealIndex].strCategory}
            area={meals[mealIndex].strArea}
            image={meals[mealIndex].strMealThumb}
            source={meals[mealIndex].strSource}
          />
        </div>
      ) : (
        <img src={gif} className="mealsLoader" />
      )}
    </div>
  );
}

export default Meals;
