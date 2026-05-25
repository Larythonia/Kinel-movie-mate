import React from 'react'

const Dropdown = ({subText, setBtnSubText}) => {
    return (
        <div>
            <p>{subText}</p>
            <button onClick={() => setBtnSubText("clicked")}>Click me</button>
        </div>
    )
}

export default Dropdown