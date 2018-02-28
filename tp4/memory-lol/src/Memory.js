import React, { Component } from 'react';

class Memory extends Component {
	/*
	constructor(props){
		super(props);
		var state = {champs: []} ;
	}
	*/
	state = {champs: [], champsSelect :[]} ;
	
	getJson() {
		fetch('/champions-info-image-stats-sort')
		.then(res => res.json())
        .then(champs => this.setState({ champs }));
	}
	
	selectChamps(){
		//select 1
		//put _0 _1 in champsSelect
		//select 2
		//check != 1
		//put _0 _1 in champsSelect
		//check != 1,2
		//put _0 _1 in champsSelect
		//shuffle
	}
	
    render() {
		{console.log(this.state.champs)}
		return (
		  <div className="Memory">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= "Ahri_0" className="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div className="champName">Ahri</div> 
						</a>
					</div>
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= "Ahri_0" className="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div className="champName">Ahri</div> 
						</a>
					</div>
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= "Ahri_0" className="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div className="champName">Ahri</div> 
						</a>
					</div>
				</div>
				
				<div className="row">
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= "Ahri_0" className="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div className="champName">Ahri</div> 
						</a>
					</div>
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= "Ahri_0" className="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div className="champName">Ahri</div> 
						</a>
					</div>
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= "Ahri_0" className="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div className="champName">Ahri</div> 
						</a>
					</div>
				</div>
		  </div>
		);
    }
}

export default Memory;
