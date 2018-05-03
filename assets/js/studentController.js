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
        ss.addStudent = function(){
            
        };
    }
]);
