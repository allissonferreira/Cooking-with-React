import React, { Component } from "react";
import { ThemeContext } from "../App";

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }

    decreaseCounter = () => this.setState(prevState => ({count: prevState.count - 1 }));
    increaseCounter = () => this.setState(prevState => ({count: prevState.count + 1 }));

    render(){
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <p>Counter</p>
                        <button style={style} onClick={this.decreaseCounter}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={this.increaseCounter}>+</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}
