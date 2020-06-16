import React, { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return(
            <div>
                <h1 className="title" onClick={this.updateClicks}>Welcome to { this.props.name }-{this.props.year} - ({this.state.clicks})</h1>
                <label htmlFor="username">
                    <input type="text" name="username"/>
                </label>
                <img src="logo.ong"/>
            </div>
        )
    }
}

export default Welcome;