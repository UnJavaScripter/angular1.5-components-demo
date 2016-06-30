"use strict";

(function(){
  function config($locationProvider) {
    $locationProvider.html5Mode(false);
  }

  angular
    .module('angularFireDemoApp')
      .config(config)
      .value('$routerRootComponent', 'main')

})();