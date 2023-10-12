import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { useFetch } from "../hooks/useFetch";

function Create() {
  const {data, isPending, error, newData} = useFetch("https://glow-spring-elf.glitch.me/recipes", "POST")
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState(0);
  const [img, setImg] = useState("");
  const [method, setMethod] = useState("");
  const [ingradient, setIngradient] = useState("");
  const [ingradients, setIngradients] = useState([])

  const addIngredient = (e) => {
    e.preventDefault()
    if (!ingradients.includes(ingradient)) {
      setIngradients((prev) => {
        return [...prev, ingradient]
      })
    }
    setIngradient("")
  }

  const resetInputs = () => {
    setTitle('')
    setCookingTime('')
    setImg('')
    setMethod('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    newData({
      title: title,
      cookingTime: cookingTime,
      img: img,
      method: method,
      id: uuidv4(),
      ingradients
    })
    resetInputs()
  }
  return (
    <div>
      <h1 className="text-3xl text-center">Create New Recipie</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Ingradients :</span>
          </label>
          <div className="flex gap-5 mb-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setIngradient(e.target.value)}
              value={ingradient}
            />
            <button onClick={addIngredient} className="btn btn-primary">Add</button>
          </div>
          <p>
            Ingradients: {ingradients.map((ing) => {
              return <span key={ing}>{ing}, </span>
            })}
          </p>
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Cooking Time :</span>
          </label>
          <input
            type="text"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Image Url:</span>
          </label>
          <input
            type="url"
            onChange={(e) => setImg(e.target.value)}
            value={img}
            placeholder="Put image url"
            className="textarea input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Method:</span>
          </label>
          <textarea
            type="textarea"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            placeholder="Type here"
            className="textarea input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary w-[320px] mt-5">Create</button>
      </form>
    </div>
  );
}

export default Create;