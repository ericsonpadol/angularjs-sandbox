/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

studentApp.controller('GirlController', [
    '$scope',
    'StudentService',
    function($scope, ss) {
        $scope.girl = '';
        
        $scope.addGirl = function() {
            console.log($scope.girl);
            ss.addStudent($scope.girl);
        };
    }
]);

studentApp.controller('BoyController',[
    '$scope',
    'StudentService',
    function($scope, ss) {
        $scope.boy = '';
        
        $scope.addBoy = function() {
            ss.addStudent($scope.boy);
        };
    }
]);

studentApp.controller('DisplayController', [
    '$scope',
    'StudentService',
    function($scope, ss) {
        $scope.displayStudents = function() {
            ss.displayStudents();
        };
    }
]);
