import React,{Component} from 'react';
import './App.css';
import Language from './components/Language';

class Voting extends Component{
	// die props könnten auch in einem constructor angelegt werden. mit hilfe von object destructuring wird das aber eingespart, da man ja alles übergeben muss und dann mit this.xxx zuweist.
	// einzelne props im constructor => eher nicht, meist viel zu viele; this.props.xxx ist üblich, es ist understood, dass es auch dem props-objekt kommt. es geht aber auch wie mit einem java-style constructor
	// damit macht man ja die variablen einzeln bekannt und zieht die aus dem props-objekt raus. dann kann man die einfach nutzen wie normale variablen.
	// props sind automatisch hierr, ohne dass die implementiert werden müssen. state genauso, beides reserved words. die komponente hier hat nohc keine props, da oberste komponente in dieser app
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
