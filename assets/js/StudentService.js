/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('studentService',[])
    .factory('StudentService', [
        '$window',
        function(window) {
            var students = [], //array of students
                addStudent,
                displayStudent; 
            
            addStudent = function(student) {
                students.push(student);
            };
            
            displayStudent = function() {
                window.alert(students.join('\n'));
                students = []; //clear array of students
            };
            
            return {
                addStudent: addStudent,
                displayStudents: displayStudent
            };
        }
    ]);


