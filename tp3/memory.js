angular.module('memory', [require('angular-resource')]
  .factory('LolChamp', ['$resource',
    function($resource) {
      return $resource('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?locale=fr_FR&api_key=RGAPI-bb62d7e4-9f1b-4764-b829-a63e5f7ff2ca', {}, {
        query: {
          method: 'GET',
          isArray: false
        }
      });
    }
  ]));
	
angular.module("memory")
  .controller('memoryController', ["$scope", "LolChamp", function caseChampCtrl($scope, LolChamp) {
		
        var champData = LolChamp.query();
		var nbChamp = champData["data"].length();
		var champSelect = Math.trunc( Math.random() * nbChamp);
		$scope.champKey = champSelect["data"][champSelect]["name"];
		/*
		this.champSelectNbSkin = this.champData["data"][this.champSelect]["skins"].length();
		random sur nbSkins
		*/
		console.log($scope.champKey);
      }]//,
    //template:
);