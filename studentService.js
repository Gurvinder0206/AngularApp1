mainApp.service('callService', function callService($http) {
    this.getData = function () {
        var result = $http.get('/dummydata.txt');
        return result;
    }
});