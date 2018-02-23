import React, { Component } from 'react';

class Memory extends Component {
	
	constructor(props){
		super(props);
		var state = {champs: []} ;
	}
	
	getJson() {
		fetch('/champions-info-image-stats-sort.json')
		.then(res => res.json())
        .then(champs => this.setState({ champs }));
	}
  
    render() {
		console.log(state);
		return (
		  <div className="Memory">
				<div class="row">
					<div class="col-lg-4 col-md-4 col-xs-6 thumb">
						<a class="thumbnail">
							<img id= "Ahri_0" class="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div class="champName">Ahri</div> 
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-xs-6 thumb">
						<a class="thumbnail">
							<img id= "Ahri_0" class="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div class="champName">Ahri</div> 
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-xs-6 thumb">
						<a class="thumbnail">
							<img id= "Ahri_0" class="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div class="champName">Ahri</div> 
						</a>
					</div>
				</div>
				
				<div class="row">
					<div class="col-lg-4 col-md-4 col-xs-6 thumb">
						<a class="thumbnail">
							<img id= "Ahri_0" class="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div class="champName">Ahri</div> 
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-xs-6 thumb">
						<a class="thumbnail">
							<img id= "Ahri_0" class="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div class="champName">Ahri</div> 
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-xs-6 thumb">
						<a class="thumbnail">
							<img id= "Ahri_0" class="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" alt="Ahri_0"></img>
							<div class="champName">Ahri</div> 
						</a>
					</div>
				</div>
		  </div>
		);
    }
}

export default Memory;
