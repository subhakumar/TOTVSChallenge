// getdata.factory.js
(function() {
    'use strict';

    angular
        .module('NewsFeedApp')
        .factory('GetDataFactory', getDataFactory);

    function getDataFactory($http) { 
	    var getDataInfoFactory = {
		        getFriends: getFriendsFunction,
		        getAllFeeds: getAllFeedsFunction,
		        getMyPost: getMyPostFunction,
		        getRSSFeed: getRSSFeedFunction
		};	    
	    return getDataInfoFactory;  	

	    function getFriendsFunction()
	    {
	    	return $http.get('json/friends.json');
	    }

	    function getAllFeedsFunction() {
	    	
	    	return $http.get('json/channelfeeds.json');
	    }
	    function getMyPostFunction() {
	    	
	    	return $http.get('json/post.json');
	    }

	    function getRSSFeedFunction()
	    {
	    	return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent('http://www.techlearning.com/RSS'));
	    }

    }
})();