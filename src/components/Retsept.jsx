import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Retsept() {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' + id
  console.log(id);
  const { data: recipe, error, isPedding } = useFetch(url)
  return <div>
    {recipe && <div className="max-w-5xl mx-auto px-5 mt-11">
      <h1 className="text-center text-5xl">{recipe.title}</h1>
      <div className="flex justify-center items-center gap-20">
        <div className="pt-10" >
          <img className="w-96 h-80 object-cover rounded-xl" src={recipe.image} alt={recipe.title} />
        </div>
        <div className="w-72 pt-6 items-center tracking-wider leading-relaxed">
          <h2 className="text-lg "><b className="text-xl ">Time: </b>{recipe.cookingTime}</h2>
          <p className="text-lg "><b className="text-xl ">Ingredients:</b>{recipe.ingredients}</p>
          <p className="text-lg "><b className="text-xl ">Method:</b>{recipe.method}</p>
        </div>
      </div>
      {console.log(recipe)}
    </div>}
  </div>;
}

export default Retsept;

