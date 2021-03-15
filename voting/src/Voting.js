import React,{Component} from 'react';
import './App.css';
import Language from './components/Language';

class Voting extends Component{

	state = {totalcount: 0, lastVoted: "none"};
	languages = ["Javascript", "Python", "Go", "Java", "Typescript", "Ruby", "Elixir"];

	totalVoteIncrementer = () => this.setState({totalcount: this.state.totalcount +1})
	updateLastVoted = (param) => this.setState({lastVoted: param})

	render(){
		return(
			<div className="body"> 
				<h1>Vote for a language</h1>
				<div>total count: {this.state.totalcount}</div>
				<div>last voted: {this.state.lastVoted}</div>
				<div className="languages"> {this.languages.map(lang => <Language language={lang} 
																				   masterCounter ={this.totalVoteIncrementer}
																				   updateLastVoted = {this.updateLastVoted} />)} 
				</div>
			 </div>
		);
	}
}
export default Voting;
