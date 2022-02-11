import React from 'react'

const Button = (props) => {
    let removeFriends = props.remove

    return (
        <div className='btn-wrapper'>
            <button className="btn" onClick={removeFriends}> clear all</button>
        </div>
    )
}

export default Button