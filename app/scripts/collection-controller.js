 angular.module('blocJams').controller('CollectionController', function ($scope, FixtureService) {
    $scope.albumArray = FixtureService.getCollection(30);
});