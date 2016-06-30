"use strict";

(function(){

  function ctrlFn() {
    console.log("about component");
    this.$routerOnActivate = function(next) {
      console.log(next)
    }

  }

  angular
    .module('angularFireDemoApp')
      .component('about', {
        bindings: {
          name: '@',
          pic: '@',
          description: '@'
        },
        controller: ctrlFn,
        template: `
        
          <h2>{{$ctrl.elMainnn.userData.name}}</h2>
          <div class="pic-container">
            <img src="{{$ctrl.elMainnn.userData.pic}}">
          </div>
          <p>{{$ctrl.elMainnn.userData.description}}</p>
        `,
        require: {
          elMainnn: '^main'
        }
       });
})();