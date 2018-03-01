import React, { Component } from 'react';
import champs from './champions.json';

class Memory extends Component {
	/*
	constructor(props){
		super(props);
		var state = {champs: []} ;
	}
	*/
	/*
	getJson() {
		fetch('/champions')
		.then(res => res.json())
        .then(champs => this.setState({ champs }));
	}
	*/
	selectChamps(){
		var listeChamps = Object.values(champs.data);
		var nbChamp = listeChamps.length;
		var champsSelect = []
		
		do{
		var champKey1 = listeChamps[Math.trunc(Math.random() * nbChamp)]["key"];
		var champKey2 = listeChamps[Math.trunc(Math.random() * nbChamp)]["key"];
		var champKey3 = listeChamps[Math.trunc(Math.random() * nbChamp)]["key"];
		}while(champKey1 === champKey2 && champKey2 === champKey3 && champKey1 === champKey3);
		
		champsSelect.push({
			name:champKey1,
			skin:0 
		});
		champsSelect.push({
			name:champKey1,
			skin:1 
		});
		
		champsSelect.push({
			name:champKey2,
			skin:0 
		});
		champsSelect.push({
			name:champKey2,
			skin:1 
		});
		
		champsSelect.push({
			name:champKey3,
			skin:0 
		});
		champsSelect.push({
			name:champKey3,
			skin:1 
		});
		
		//shuffle
		var j = 0;
		var valI = '';
		var valJ = valI;
		var l = champsSelect.length - 1;
		while(l > -1){
			j = Math.floor(Math.random() * l);
			valI = champsSelect[l];
			valJ = champsSelect[j];
			champsSelect[l] = valJ;
			champsSelect[j] = valI;
			l = l - 1;
		}
		return champsSelect;
	}
	
    render() {
		var toPrint = this.selectChamps();
		
		return (
		  <div className="Memory">
			  
				<div className="row">
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= {toPrint[0].name+"_"+toPrint[0].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+toPrint[0].name+"_"+toPrint[0].skin+".jpg"} alt={toPrint[0].name+"_"+toPrint[0].skin}></img>
							<div className="champName">{toPrint[0].name}</div> 
						</a>
					</div>
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= {toPrint[1].name+"_"+toPrint[1].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+toPrint[1].name+"_"+toPrint[1].skin+".jpg"} alt={toPrint[1].name+"_"+toPrint[1].skin}></img>
							<div className="champName">{toPrint[1].name}</div> 
						</a>
					</div>
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= {toPrint[2].name+"_"+toPrint[2].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+toPrint[2].name+"_"+toPrint[2].skin+".jpg"} alt={toPrint[2].name+"_"+toPrint[2].skin}></img>
							<div className="champName">{toPrint[2].name}</div> 
						</a>
					</div>
				</div>
				
				<div className="row">
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= {toPrint[3].name+"_"+toPrint[3].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+toPrint[3].name+"_"+toPrint[3].skin+".jpg"} alt={toPrint[3].name+"_"+toPrint[3].skin}></img>
							<div className="champName">{toPrint[3].name}</div> 
						</a>
					</div>
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= {toPrint[4].name+"_"+toPrint[4].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+toPrint[4].name+"_"+toPrint[4].skin+".jpg"} alt={toPrint[4].name+"_"+toPrint[4].skin}></img>
							<div className="champName">{toPrint[4].name}</div> 
						</a>
					</div>
					<div className="col-lg-4 col-md-4 col-xs-6 thumb">
						<a className="thumbnail">
							<img id= {toPrint[5].name+"_"+toPrint[5].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+toPrint[5].name+"_"+toPrint[5].skin+".jpg"} alt={toPrint[5].name+"_"+toPrint[5].skin}></img>
							<div className="champName">{toPrint[5].name}</div> 
						</a>
					</div>
				</div>
		  </div>
		);
    }
}

export default Memory;
