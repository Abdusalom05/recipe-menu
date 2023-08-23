import Card from "../components/card/Card";
import { useFetch } from "../hooks/useFetch"

function Home() {
  const {data, isPedding, error} = useFetch('http://localhost:3000/recipes')
  // console.log(data);
  return (
    <div className="max-w-5xl mx-auto px-5">
        <Card data={data}/>
        
    </div>
  )
}

export default Home