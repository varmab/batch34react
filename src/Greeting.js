import React, {Component} from 'react'

class Greeting extends Component{
    constructor(){
        super();

        this.state={
            name:''
        }
    }

    onNameChange=(e)=>{
        var name=e.target.value;

        this.setState({
            name:name,
            greeting:''
        })
    }

    generate=()=>{
        this.setState({
            greeting:'Happy Birthday ' + this.state.name,
            name:''
        })
    }

    render(){
        return(
            <div>
                <h1>Greeting Generator</h1>
                <input type="text" value={this.state.name} onChange={this.onNameChange} name="name"/>
                <button onClick={this.generate}>Generate</button>
                <p>{this.state.greeting}</p>
            </div>
        )
    }
}

export default Greeting;