"use strict";

(function(){

  function ctrlFn() {
    console.log("home component");
    this.$routerOnActivate = function(next) {
      console.log(next);
    }
  }

  angular
    .module('angularFireDemoApp')
      .component('home', {
        bindings: {
        },
        controller: ctrlFn,
        template: `
          hoooome <a ng-link="['About']">Aaaabout</a>
        `,
        $routeConfig: []
       });
})();