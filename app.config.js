// define module for app
var newsFeedApp = angular.module('NewsFeedApp', []);

newsFeedApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/status', {templateUrl: 'status.html'}).
                when('/news', {templateUrl: 'news.html'}).
                when('/friends', {templateUrl: 'friends.html'}).
                otherwise({redirectTo: '/status'});
}]);