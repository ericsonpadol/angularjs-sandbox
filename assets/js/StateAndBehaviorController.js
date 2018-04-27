/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('hello', [])
    .controller('HelloController', [
        '$scope',
        function($scope) {
            $scope.entity = 'World';
            $scope.customPerson = '';
            
            $scope.randomEntities = [
                'Manila',
                'Makati',
                'Marikina',
                'Piolo',
                'Monkey King'
            ];
            
            $scope.generateRandomEntity = function() {                
                $scope.entity = $scope.randomEntities[Math.floor(Math.random() * 5)];
                console.log(Math.floor(Math.random()*5));
            };
            
            $scope.generateSpecificEntity = function(person) {
                $scope.entity = person;
            };
                        
        }
    ]);

