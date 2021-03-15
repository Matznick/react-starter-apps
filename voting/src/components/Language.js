import './Language.css';
import React, { Component } from 'react';

class Language extends Component {

state = {count: 0};

increment = () => {
    return (this.setState({count: this.state.count+1}),
            this.props.masterCounter(),
            this.props.updateLastVoted(this.props.language));
} 


render(){
    return(
    <div className="language"> 
        <span>
            {this.state.count}
        </span>
        <span>
            {this.props.language} 
        </span> 
        <span>
            <button className="language button" onClick={this.increment}>Vote! ⚡</button> 
        </span>
    </div>
    )
}

}

export default Language