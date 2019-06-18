import React,{Component} from "react"

export default class Welcome extends Component {
    render(){
        const { streetName } = this.props;
        const { colorName } = this.props

        return (
            <h1>Hallo, {colorName} {streetName}  !</h1>
        )
    }
}



