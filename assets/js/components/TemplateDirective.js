/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

var candidateApp = angular.module('candidates', []);

candidateApp.controller('CandidateController',[
    '$scope',
    function($scope) {
        $scope.candidate = {
            name: 'Donald Trump',
            party: 'Republican',
            spouse: 'Melania Trump'
        };
    }
]);

candidateApp.directive('customCandidate', function(){
    return {
        templateUrl: 'assets/js/components/candidate-demo.html'
    };
});

