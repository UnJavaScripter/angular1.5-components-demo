"use strict";

(function(){

  function ctrlFn() {
    console.log('home component');
  }

  angular
    .module('angularFireDemoApp')
      .component('home', {
        bindings: {
        },
        controller: ctrlFn,
        template: `
        <style>
          home>h2 {
            font-size: 2em;
          }
        </style>
          <h2 class="text-center">Esta es una aplicación de demostración del uso de componentes en Angular 1.5^</h2>
          <div class="text-center">
            <img src="https://unsplash.it/500/500/?random">
          </div>
        `
       });
})();