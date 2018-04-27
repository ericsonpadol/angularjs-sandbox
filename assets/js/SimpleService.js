/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('calculatorService',[])
    .factory('CalcService', function() {
        var add,
            multiply,
            divide,
            subtract;
        
        add = function(num1, num2) {
            return num1 + num2;
        };
        
        multiply = function(num1, num2) {
            return num1 * num2;
        };
        
        divide = function(num1, num2) {
            return num1 + num2;
        };
        
        subtract = function(num1, num2) {
            return num1 - num2;
        };
        
        return {
            /*
             * return function as an object.
             */
            add: add,
            multiply: multiply,
            divide: divide,
            subtract: subtract
        };
    });

