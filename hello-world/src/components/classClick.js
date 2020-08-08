import React, { Component } from 'react'

class classClick extends Component {
    clickHandler(){
        console.log('click done');
    }
    render() {
        return (
            <div>
              <button onClick={this.clickHandler}>Click Me</button>  
            </div>
        )
    }
}

export default classClick
