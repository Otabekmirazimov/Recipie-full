import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useThemeContext } from '../hooks/useThemeContext'
import { ThemeProvider } from '../context/ThemeContext'


function Navbar() {
  const {color} = useThemeContext()
  return (
    <div className='bg-neutral-content' style={{background: color}}>
        <div className="align-element flex justify-between items-center py-3">
            <h1 className="text-3xl">
                <Link to="/">Recipie</Link>
            </h1>
            <Link className="btn btn-secondary" to="/create">
                Create
            </Link>
        </div>
    </div>
  )
}

export default Navbar