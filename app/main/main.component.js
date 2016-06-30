"use strict";

(function(){

  function ctrlFn() {

  }

  angular
    .module('angularFireDemoApp')
      .component('main', {
        bindings: {
          name: '@'
        },
        controller: ctrlFn,
        template: `
          <div>
            <i>*Barra de navegación*</i>
          </div>
          <div>
            <i>*Barra lateral*</i>
          </div>
          <div>
            Contenido: <ng-outlet></ng-outlet>
          </div>
          <div>
            <i>*Pie de página*</i>
          </div>
        `,
        $routeConfig: [
          {path: '/', name: 'Home', component: 'home', useAsDefault: true},
          {path: '/about', name: 'About', component: 'about'},
        ]
       });
})();