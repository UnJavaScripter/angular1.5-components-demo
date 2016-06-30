"use strict";

(function(){

  function ctrlFn() {
    this.$routerOnActivate = function(next) {
      this.titulo = decodeURI(next.params.titulo);
      this.texto = decodeURI(next.params.texto);
    }
  }

  angular
    .module('angularFireDemoApp')
      .component('cosa', {
        bindings: {
          titulo: '@',
          texto: '@'
        },
        controller: ctrlFn,
        template: `
          <h2>{{$ctrl.titulo}}</h2>
          <div>{{$ctrl.texto}}</div>
        `
       });
})();