import './Language.css';
import React, { Component } from 'react';

class Language extends Component {

state = {count: 0};

// props sind automatisch hierr, ohne dass die implementiert werden müssen. state genauso, beides reserved words

// masterCOunter und updateLatVoted leben auf edm parent, dass die funktion runterreicht! das child "leiht" diese nur aus, setzt damit aber die states im parent!!!
increment = () => {
    return (console.log(this.props),
        this.setState({count: this.state.count+1}),
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