import React from 'react'
import { Link } from 'react-router-dom'

function RecipieList({recipies}) {
  return (
    <ul className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-[30px]'>
        {recipies.map((recipie) => {
            const {id, title, method,cookingTime, img} = recipie;
            return  <li key={id} className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={img} alt={title} className="h-[240px] object-cover w-full"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                {title}
                            </h2>
                            <p>{method.substring(0, 100)}...</p>
                            <Link to={`/recipie/${id}`} className="btn btn-outline btn-secondary">Read More</Link>
                        </div>
                    </li>
                })}
    </ul>
  )
}

export default RecipieList