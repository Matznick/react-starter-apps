import React,{Component} from 'react';
import './App.css';
import Language from './components/Language';

class Voting extends Component{

	languages = ["Javascript", "Python", "Go", "Java", "Typescript", "Ruby", "Elixir"];

	render(){
		return(
			<div className="body"> 
				<h1>Vote for a language</h1>
				<div className="languages"> {this.languages.map(lang => <Language language={lang}/>)} </div>
			 </div>
		);
	}
}
export default Voting;
