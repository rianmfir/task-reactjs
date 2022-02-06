import React from "react";
import '../style.css'

const Input = ({ className, type, placeholder, onChange, message }) => {
    return (
        <div className={className}>
            <input
                type={type}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
            />
            <p>{message}</p>
        </div>
    )
}

export default Input