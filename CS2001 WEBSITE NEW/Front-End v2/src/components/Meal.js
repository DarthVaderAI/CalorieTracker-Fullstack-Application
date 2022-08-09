import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=6dfaf90a8a564db78bb14f753c4b5153&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article className="GetMealCaloriesarticle">
      <h1 className="GetMealCaloriesh1">{meal.title}</h1>
      <img className="GetMealCaloriesimg" src={imageUrl} alt="recipe" />
      <ul className="GetMealCaloriesinstructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a className="GetMealCaloriesa" href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}