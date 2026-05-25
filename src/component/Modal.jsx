import React from 'react'
import Dropdown from './Dropdown'

const Modal = ({subText, setBtnSubText}) => {
    // const
    // login => modal => dropdown => Label

    // useContext hook
    
    return (
        <div className='pt-20'>
            <p
            >
                modal
            </p>

            <Dropdown subText={subText} setBtnSubText={setBtnSubText} />
        </div>
    )
}

export default Modal