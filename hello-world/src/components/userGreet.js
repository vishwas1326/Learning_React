import React, { Component } from 'react'

export class userGreet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        //short circuit 
      return  this.state.isLoggedIn && <div>Welcome Vishwas</div>
      //ternary Operator
        // return (
        //     this.state.isLoggedIn?
        //     <div>Welcome Vishwas</div>:
        //     <div>Welcome Guest</div>
        // )
        // let message 
        // if(this.state.isLoggedIn){
        //  message =  <div>Welcome Vishwas </div>
        // }
        // else {
        //     message=<div>Welcome Guest</div>
        // }
   // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Vishwas </div>
        // }
        // else{
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //     <div>Welcome Vishwas </div>
        //     <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default userGreet
