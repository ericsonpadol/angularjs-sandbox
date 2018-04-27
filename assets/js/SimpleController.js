/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('calculator', [
    'calculatorService'
])
.controller('CalcController', 
    ['CalcService',
    '$scope',
    function(calcService, $scope) {
        this.num1 = 4;
        this.num2 = 2;
        
        console.log($scope);
        
        this.add = function() {
          return calcService.add(this.num1, this.num2);  
        };
        
        this.multiply = function() {
          return calcService.multiply(this.num1, this.num2);  
        };
        
        this.subtract = function() {
          return calcService.subtract(this.num1, this.num2);
        };
        
        this.divide = function() {
            return calcService.divide(this.num1, this.num2);
        };
    }
]);


