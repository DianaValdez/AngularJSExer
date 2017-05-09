(function(){

	//
	var app = angular.module('book', ['ui.router']);


	app.config(Route);

    function Route ($stateProvider) {

      $stateProvider.state('books', {
              url: '/',
              templateUrl: 'index1.html',
              controller: 'BookApp'
          });
    }


})();