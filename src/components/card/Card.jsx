import { NavLink } from "react-router-dom";
import React from "react";

function Card({ data }) {
  console.log(data);
  return (
    <div className="flex gap-4 flex-wrap my-16 mx-auto justify-center">
      {data &&
        data.map((recipe) => {
          return (
            <div key={recipe.id} className="py-7 shadow-2xl p-5 w-72">
              <img
                className="w-72 h-52 object-cover rounded-xl"
                src={recipe.image}
                alt="cooking"
              />
              <h1 className="pt-3 text-3xl">{recipe.title}</h1>
              <p className="pt-3 opacity-40">{recipe.ingredients}</p>
              <p className="pt-3 mb-5 opacity-40 truncate">
                Tayyorlanishi:{recipe.method}
              </p>
              <NavLink
                to={`/recipes/${recipe.id}`}
                className="border rounded-xl p-2 bg-blue-800 text-white hover:bg-orange-500 hover:text-black flex justify-center "
              >
                Read More
              </NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
