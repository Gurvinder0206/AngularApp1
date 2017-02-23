mainApp.controller("studentController", function ($scope) {
    $scope.student = {
        firstName: "Prabh",
        lastName: "Singh",
        fees: 1000,
        subjects: [
            { name: 'Physics', marks: 70 },
            { name: 'Maths', marks: 85 },
            { name: 'English', marks: 75 }
        ],

        fullName: function () {
            var obj;
            obj = $scope.student;
            return obj.firstName + ' ' + obj.lastName;
        }
    };
});

mainApp.controller("mathsController", function ($scope) {
    $scope.firstNumber = 0;
    $scope.secondNumber = 0;

    $scope.result = function () {
        return parseInt($scope.firstNumber) + parseInt($scope.secondNumber);
    }

    $scope.reset = function () {
        $scope.firstNumber = 0;
        $scope.secondNumber = 0;
    }
    
});

mainApp2.controller('AddStudentController', function ($scope) {
    $scope.message = "This page will be used to display add student form";
});

mainApp2.controller('ViewStudentsController', function ($scope) {
    $scope.message = "This page will be used to display all the students";
});

mainApp.controller('ajaxController', function ($scope, callService) {
    var result = callService.getData();
    result.then(function (response) {
        console.log(response);
        $scope.students = response.data;
    });
});