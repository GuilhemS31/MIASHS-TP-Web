angular.module('memory',['ngResource'])
  .factory('LolChamp', ['$resource',
    function($resource) {
      return $resource('./champions-info-image-stats-sort.json', {}, {
      //return $resource('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?locale=fr_FR&api_key=RGAPI-bb62d7e4-9f1b-4764-b829-a63e5f7ff2ca', {}, {
        query: {
          method: 'GET',
          isArray: false
        }
      });
    }
  ]);

 
angular.module("memory")
  .controller('memoryController', ["$scope", "$http", "LolChamp", function caseChampCtrl($scope,$http, LolChamp) {
		
		$scope.ret = [];
		
        $http.get('champions-info-image-stats-sort.json').then(function(championJson) {
			
			let champData = championJson.data.data;
			let nbChamp = Object.keys(champData).length;
			let champSelect = Math.trunc(Math.random() * nbChamp);
			
			let champKey1 = champData[Object.keys(champData)[Math.trunc(Math.random() * nbChamp)]]["key"];
			
			$scope.ret.push({
				name:champKey1,
				skin:0 
			});
			$scope.ret.push({
				name:champKey1,
				skin:1 
			});
			
			champSelect = Math.trunc(Math.random() * nbChamp);
			
			let champKey2 = champData[Object.keys(champData)[Math.trunc(Math.random() * nbChamp)]]["key"];
			
			$scope.ret.push({
				name:champKey2,
				skin:0 
			});
			$scope.ret.push({
				name:champKey2,
				skin:1 
			});
			
			champSelect = Math.trunc(Math.random() * nbChamp);
			
			let champKey3 = champData[Object.keys(champData)[Math.trunc(Math.random() * nbChamp)]]["key"];
			
			$scope.ret.push({
				name:champKey3,
				skin:0 
			});
			$scope.ret.push({
				name:champKey3,
				skin:1 
			});
			
			var j = 0;
		    var valI = '';
		    var valJ = valI;
		    var l = $scope.ret.length - 1;
		    while(l > -1){
			 	j = Math.floor(Math.random() * l);
			 	valI = $scope.ret[l];
			 	valJ = $scope.ret[j];
				$scope.ret[l] = valJ;
				$scope.ret[j] = valI;
				l = l - 1;
			}
		 });
      }]
);

/*
Partie du code pas trouvé par le html, ne sais pas pourquoi
*/
angular.module("memory")
  .controller('jeuMemory', ['$scope', function($scope) {
    console.log("entrée Memory");
	$scope.carteRet="";
	if($scope.carteRet == ""){
		console.log("1er carte");
		$scope.carteRet = idCarte;
		document.getElementById($scope.carteRet).style.transform("rotateY(180deg)");
	}
	else{
		console.log("2eme carte");
		if(idCarte.split("_")[0].equals($scope.carteRet.split("_")[0])){
			//laisser cartes retournées
			console.log("meme");
			document.getElementById($scope.carteRet).style.transform("rotateY(180deg)");
		}
		else{
			console.log("pas meme");	
			//retourner cartes
			document.getElementById($scope.carteRet).style.transform("rotateY(180deg)");
			document.getElementById($scope.carteRet).style.transform("rotateY(180deg)");
		}
		carteRet = "";
	}
}]);