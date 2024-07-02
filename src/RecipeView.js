import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
    return (
        <tr>
          <td className="content_td">
            <p name="name" value={recipe.name}>{(recipe.name)}</p>
          </td>
          <td className="content_td">
            <p name="cuisine">{(recipe.cuisine)}</p>
          </td>
          <td className="content_td">
            <img name="photo" src={recipe.photo}></img>
          </td>
          <td className="content_td">
            <p name="ingredients">{(recipe.ingredients)}</p>
          </td>
          <td className="content_td">
            <p name="preparation">{(recipe.preparation)}</p>
          </td>
          <td className="content_td">
            <button type="Delete" name="delete" onClick={deleteRecipe}>Delete</button>
          </td>
      </tr>
    );
}
  
export default RecipeView;