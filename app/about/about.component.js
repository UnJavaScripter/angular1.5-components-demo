"use strict";

(function(){

  function ctrlFn() {
    console.log("about component");
    this.$routerOnActivate = function(next) {
      console.log(next);
    }
  }

  angular
    .module('angularFireDemoApp')
      .component('about', {
        bindings: {
        },
        controller: ctrlFn,
        template: `
          aboooout <a ng-link="['Home']">Hoooome</a>
        `,
        $routeConfig: []
       });
})();