import React from 'react'
import './styles.css'

const Btn = ({ text, flag }) => {
    return (
        <div>
            <button className={flag ? "blue" : "normal"}>{text}</button>
        </div>
    )
}

export default Btn