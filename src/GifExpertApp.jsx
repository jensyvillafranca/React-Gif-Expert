import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    if (categories.includes(newCategory)) return; // Evitar agregar categorias duplicadas
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      />

      <ol>
        {categories.map((category) => (
          <GifGrid key={ category } category={ category } />
        ))}
      </ol>

    </>
  );
};
