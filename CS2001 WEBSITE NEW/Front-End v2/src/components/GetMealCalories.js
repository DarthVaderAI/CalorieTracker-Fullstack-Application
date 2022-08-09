import React, { useState } from "react";
import MealList from "./MealList";


export default function GetMealCalories({ GetMealCalories }) {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=6dfaf90a8a564db78bb14f753c4b5153&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
      
    <div className="GetMealCalories">
      <section className="GetMealCaloriesControles">
        <input className="GetMealCaloriesInput"
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button className="GetMealCaloriesButton" onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}
