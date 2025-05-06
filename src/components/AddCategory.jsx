import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Buscar categoria");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    if( inputValue.trim().length <= 1 ) return; // Evitar agregar categorias vacias
    // setCategories( categories => [inputValue, ...categories] );
    onNewCategory(inputValue.trim()); 
    setInputValue(""); // Limpiar el input
  };

  return (
    <form onSubmit={ onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue } 
        onChange={ onInputChange }
      />
    </form>
  );
};
