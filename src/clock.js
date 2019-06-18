import React,{Component} from "react"

export default class Clock extends Component {
    constructor(){
        super()
        this.state = {
            time: new Date()
        }
    }
    render() {
        return (
            <p>Clock {this.state.time.toLocaleTimeString()}</p>
        )
    }
}