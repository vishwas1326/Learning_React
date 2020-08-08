import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count :0
        }
    }
    increment(){
        // this.setState({
        //     count: this.state.count =this.state.count + 1
        // },
        //     () => {
        //         console.log('Call back Value', this.state.count)
        //     })
        this.setState((prevState,props)=>({
            count:prevState.count+1
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        for(var i=1;i<=5;i++){
            this.increment()
        }
    }
    render() {
        return (
            <div>
                <div>Count-{this.state.count}</div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
