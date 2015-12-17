angular
    .module('NewsFeedApp')
    .directive('postStatus', postStatus);

function postStatus() {
    var directive = {
        templateUrl: 'template/yourpost.html',
        restrict: 'EA'
    };
    return directive;
}    