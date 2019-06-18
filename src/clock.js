import React,{Component} from "react"

export default class Clock extends Component {
    constructor(){
        super()
        this.state = {
            time: new Date()
        }
    }

    componentDidMount(){
        setInterval(() => this.tick(), 1000)
    }

    tick(){
        this.setState({
            time: new Date()
        })
        
    }
    render() {
        return (
            <p>Clock is {this.state.time.toLocaleTimeString()}</p>
        )
    }
}