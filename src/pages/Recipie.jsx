import { NavLink, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

function Recipie() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data: recipie, error, isPending } = useFetch(url)
  return (
    <div className="mx-full mt-10 flex gap-7 items-center">
      {recipie && <>
        <img className="rounded-xl" src={recipie.img} alt={recipie.title} height="550" width="550" />
        <div>
          <h2 className="text-xl font-bold mb-4">{recipie.title}</h2>
          <p className="mb-5">
            <span className="font-bold">Method:</span> {recipie.method}
          </p>
          <p className="mb-5">
            <span className="font-bold">Cooking Time:</span> {recipie.cookingTime}
          </p>
          <p><span className="font-bold">Ingredients:</span> {recipie.ingredients}</p>
          <NavLink className="btn btn-outline btn-secondary mt-4" to="/">Go Recipie</NavLink>
        </div>
      </>}
    </div>
  )
}

export default Recipie