import React, { useState } from "react";

function RecipeCreate({setRecipes}) {
  const initRecipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState({ ...initRecipe });
 
  const createRecipe = (newRecipe) => {
   setRecipes((currentRecipes) => [
      ...currentRecipes,
      newRecipe
    ]);
    setFormData({
      ...initRecipe
    });
  }
    
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("event:", event);
    event.preventDefault();
    console.log("Submitted:", formData);
    createRecipe(formData);
  };
  
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" onChange={handleChange} value={formData.name}></input>
            </td>
            <td>
              <input name="cuisine" onChange={handleChange} value={formData.cuisine}></input>
            </td>
            <td>
              <input name="photo" onChange={handleChange} value={formData.photo}></input>
            </td>
            <td>
              <textarea name="ingredients" onChange={handleChange} value={formData.ingredients}></textarea>
            </td>
            <td>
              <textarea name="preparation" onChange={handleChange} value={formData.preparation}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
