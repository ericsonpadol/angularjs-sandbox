/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('emitBroadcast', [])
    .controller('EmitBroadcastController', [
        '$scope',
        function($scope) {
            $scope.count = 0;
            $scope.$watch('count', function(){
                console.log('Mutated');
            });
            $scope.$on('ClickEvent', function() {
               $scope.count++; 
            });
        }
    ]);

