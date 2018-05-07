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
        $scope.donald = {
            name: 'Donald Trump',
            party: 'Republican',
            spouse: 'Melania Trump'
        };
        
        $scope.hillary = {
            name: 'Hillary Clinton',
            party: 'Democrat',
            spouse: 'Bill Clinton'
        };        
    }
]);

candidateApp.directive('customCandidate', function(){
    return {
        restrict: 'E',        
        templateUrl: 'assets/js/components/candidate-demo.html',
        scope: {
            candidate: '=candidateInfo',
            candidateInfo: '='
        }
    };
});

