import React from 'react'
import {FaSun, FaMoon} from 'react-icons/fa6'
import { useThemeContext } from '../hooks/useThemeContext'

const colors = ["#A6F6FF", "#D80032", "#713ABE", "#F8FF95", "#FDE5EC"]

function ColorContainer() {
    const { changeColor , theme , changeTheme } = useThemeContext()

    const setNewTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        changeTheme(newTheme)
        document.documentElement.setAttribute('data-theme', theme)
    }

    return (
        <div className='align-element my-10 flex justify-between'>
            <div onClick={setNewTheme} className="text-3xl cursor-pointer">
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </div>

            <div className='flex items-center gap-3'>
                {colors.map((color) => {
                    return <span key={color} style={{backgroundColor: color}} className='h-7 w-7 rounded-full cursor-pointer' onClick={() => changeColor(color)}></span>
                })}
            </div>
        </div>
    )
}
export default ColorContainer