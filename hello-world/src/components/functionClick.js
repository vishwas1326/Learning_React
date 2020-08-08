import React from 'react'

function functionClick() {
    function clickHandler(){
        console.log('CLick')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default functionClick
