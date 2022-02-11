import React from 'react'

const Friend = (props) => {
    const {img, name, age} = props
    return (
        <div className='friend'>
            <div className="friend--wrapper">
                <div className="img-wrapper">
                    <img src={img} alt="" />
                </div>
                <div className="friend-info">
                    <div className="name">
                        {name}
                    </div>
                    <div className="friend-age">
                        {age}
                    </div>
                </div>
            </div>
            <div className="remove" onClick={props.remove}>
                remove
            </div>
        </div>
    )
}

export default Friend
