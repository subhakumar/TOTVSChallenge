// The controller is a regular JavaScript function. It is called
// once when AngularJS runs into the ng-controller declaration.
function NewsFeedController($scope,GetDataFactory){
	$scope.friends = {};
  $scope.channels = {};
	$scope.feeds = {}; 
  $scope.post = {};
  $scope.current = {};
  $scope.rssfeed = {};

  getDatafromFactory("getFriends","friends");
  getDatafromFactory("getAllFeeds","channels");
  getDatafromFactory("getMyPost","post");
  getDatafromFactory("getRSSFeed","rssfeed");
 
  $scope.PostFeed = function()
  {
    if ($scope.current.post != undefined || $scope.current.post != "")
    {
      var d = new Date();
      $scope.post.push({ 'description':$scope.current.post, 'datetime': d });
      $scope.current.post = "";
    }
  }


  function getDatafromFactory(methodName,scopeName)
  {
      var promise = GetDataFactory[methodName]();
      promise.then(
         function(returnData)
         {
           if (scopeName == "rssfeed")
              $scope[scopeName] = returnData.data.responseData.feed;
           else
              $scope[scopeName] = returnData.data[scopeName];
         }
      )  

  }

}
