angular.module('services', []).factory('Calculator', function () {
    var calculator = this;
    this.sumNumbers = function (a, b) {
        return a + b;
    }
    return calculator;
});

angular.module("demo", [])
    .controller("DemoController", ["$scope", function ($scope) {
        $scope.num = 2;
        $scope.result = 0;
        $scope.calculate = function () {
            $scope.result = $scope.num + 100;
        }
    }]);

angular.module("demo").component("helloWorld", {
    bindings: {
        name: "@"
    },
    controller: function helloWorldCtrl() {
        this.logName = function () {
            console.log(this.name);
        };
    },
    template:
        '<div><span ng-click="$ctrl.logName()">Hi {{$ctrl.name}}!</span></div>'
});