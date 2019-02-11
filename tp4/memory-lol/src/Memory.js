import React, { Component } from 'react';

class Memory extends Component {

	constructor(props) {
		super(props);
		this.state = { champs: {}, clicked: "", bonnePaires: 0 }; // try to always set variable names in english 
	}


	//componentDidMount is a built-in function from react, part of the component lifecycle
	componentDidMount() { // start fetching after the component is rendered in the DOM
		this.getJson();
	}

	getJson() {
		fetch('./champions.json')
			.then(res => res.json())
			.then(champs => {
				this.setState({ champs }) //this.setState() triggers a rerender (it calls the render() function once again)
			});
	}

	selectChamps() {
		if (!this.state.champs.data) { return; } // do not execute if no champions has been defined
		var listeChamps = Object.values(this.state.champs.data);
		var nbChamp = listeChamps.length;

		do {
			var champKey1 = listeChamps[Math.trunc(Math.random() * nbChamp)]["key"];
			var champKey2 = listeChamps[Math.trunc(Math.random() * nbChamp)]["key"];
			var champKey3 = listeChamps[Math.trunc(Math.random() * nbChamp)]["key"];
		} while (champKey1 == champKey2 && champKey2 == champKey3 && champKey1 == champKey3);


		var champsSelect = [];
		champsSelect.push({
			name: champKey1,
			skin: 0
		});
		champsSelect.push({
			name: champKey1,
			skin: 1
		});

		champsSelect.push({
			name: champKey2,
			skin: 0
		});
		champsSelect.push({
			name: champKey2,
			skin: 1
		});

		champsSelect.push({
			name: champKey3,
			skin: 0
		});
		champsSelect.push({
			name: champKey3,
			skin: 1
		});

		//shuffle
		var j = 0;
		var valI = '';
		var valJ = valI;
		var l = champsSelect.length - 1;
		while (l > -1) {
			j = Math.floor(Math.random() * l);
			valI = champsSelect[l];
			valJ = champsSelect[j];
			champsSelect[l] = valJ;
			champsSelect[j] = valI;
			l = l - 1;
		}
		return champsSelect;
	}

	isWin() {
		console.log("Bonnes paires : " + this.state.bonnePaires);
		if (this.state.bonnePaires == 3) {
			alert("Vous avez gagné !");
			window.location.reload();
		}
	}
	checkMemory(e, idCarte) {
		var SidCarte = idCarte.toString();
		if (this.state.clicked == "") {
			console.log("1er carte");
			this.state.clicked = SidCarte;
			//document.getElementById(this.state.clicked).style.transform ="rotateY(180deg)";
			//document.getElementById(this.state.clicked).style.opacity ="0";
			document.getElementById("img" + this.state.clicked).style.opacity = "1";
			document.getElementById("div" + this.state.clicked).style.opacity = "1";
		}
		else {
			console.log("2eme carte");
			if (SidCarte === this.state.clicked) {
				alert("Même carte sélectionée, en choisir une autre");
			}
			else {
				if (SidCarte.split("_")[0] == this.state.clicked.split("_")[0]) {
					console.log("Meme champion");
					//laisser cartes retournées
					//document.getElementById(this.state.clicked).style.transform ="rotateY(180deg)";
					document.getElementById("img" + SidCarte).style.opacity = "1";
					document.getElementById("div" + SidCarte).style.opacity = "1";
					this.state.bonnePaires += 1;
				}
				else {
					console.log("Pas même campions");
					//retourner cartes
					//document.getElementById(SidCarte).style.transform ="rotateY(180deg)";
					//document.getElementById(this.state.clicked).style.transform ="rotateY(180deg)";
					document.getElementById("img" + this.state.clicked).style.opacity = "0";
					document.getElementById("div" + this.state.clicked).style.opacity = "0";
				}
				this.state.clicked = "";
			}
		}
		this.isWin();
	}


	render() {
		var toPrint = this.selectChamps();
		if (toPrint) { // always check for null cases
			return (
				<div className="Memory">

					<div className="row">
						<div className="col-lg-4 col-md-4 col-xs-6 thumb">
							<a id={toPrint[0].name + "_" + toPrint[0].skin} className="thumbnail" onClick={(e) => this.checkMemory(e, toPrint[0].name + "_" + toPrint[0].skin)}>
								<img id={"img" + toPrint[0].name + "_" + toPrint[0].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + toPrint[0].name + "_" + toPrint[0].skin + ".jpg"} alt={toPrint[0].name + "_" + toPrint[0].skin}></img>
								<div id={"div" + toPrint[0].name + "_" + toPrint[0].skin} className="champName">{toPrint[0].name}</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-xs-6 thumb">
							<a id={toPrint[1].name + "_" + toPrint[1].skin} className="thumbnail" onClick={(e) => this.checkMemory(e, toPrint[1].name + "_" + toPrint[1].skin)}>
								<img id={"img" + toPrint[1].name + "_" + toPrint[1].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + toPrint[1].name + "_" + toPrint[1].skin + ".jpg"} alt={toPrint[1].name + "_" + toPrint[1].skin}></img>
								<div id={"div" + toPrint[1].name + "_" + toPrint[1].skin} className="champName">{toPrint[1].name}</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-xs-6 thumb">
							<a id={toPrint[2].name + "_" + toPrint[2].skin} className="thumbnail" onClick={(e) => this.checkMemory(e, toPrint[2].name + "_" + toPrint[2].skin)}>
								<img id={"img" + toPrint[2].name + "_" + toPrint[2].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + toPrint[2].name + "_" + toPrint[2].skin + ".jpg"} alt={toPrint[2].name + "_" + toPrint[2].skin}></img>
								<div id={"div" + toPrint[2].name + "_" + toPrint[2].skin} className="champName">{toPrint[2].name}</div>
							</a>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-4 col-xs-6 thumb">
							<a id={toPrint[3].name + "_" + toPrint[3].skin} className="thumbnail" onClick={(e) => this.checkMemory(e, toPrint[3].name + "_" + toPrint[3].skin)}>
								<img id={"img" + toPrint[3].name + "_" + toPrint[3].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + toPrint[3].name + "_" + toPrint[3].skin + ".jpg"} alt={toPrint[3].name + "_" + toPrint[3].skin}></img>
								<div id={"div" + toPrint[3].name + "_" + toPrint[3].skin} className="champName">{toPrint[3].name}</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-xs-6 thumb">
							<a id={toPrint[4].name + "_" + toPrint[4].skin} className="thumbnail" onClick={(e) => this.checkMemory(e, toPrint[4].name + "_" + toPrint[4].skin)}>
								<img id={"img" + toPrint[4].name + "_" + toPrint[4].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + toPrint[4].name + "_" + toPrint[4].skin + ".jpg"} alt={toPrint[4].name + "_" + toPrint[4].skin}></img>
								<div id={"div" + toPrint[4].name + "_" + toPrint[4].skin} className="champName">{toPrint[4].name}</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-xs-6 thumb">
							<a id={toPrint[5].name + "_" + toPrint[5].skin} className="thumbnail" onClick={(e) => this.checkMemory(e, toPrint[5].name + "_" + toPrint[5].skin)}>
								<img id={"img" + toPrint[5].name + "_" + toPrint[5].skin} className="img-responsive" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + toPrint[5].name + "_" + toPrint[5].skin + ".jpg"} alt={toPrint[5].name + "_" + toPrint[5].skin}></img>
								<div id={"div" + toPrint[5].name + "_" + toPrint[5].skin} className="champName">{toPrint[5].name}</div>
							</a>
						</div>
					</div>
				</div>
			);
		} else { // display a loading state until we get champions 
			return (<div>Loading...</div>)
		}

	}
}

export default Memory;
