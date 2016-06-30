"use strict";

(function(){

  function ctrlFn($firebaseArray) {
    let ref, data;

    this.$onInit = function (params) {
      ref = firebase.database().ref(this.userName);
      data = $firebaseArray(ref);
    }

    this.send = function () {
      let dataObj = {
        date: Date.now(),
        message: this.feedback,
        page: window.location.href
      };

      data.$add(dataObj).then(ref => {
        console.log("Added", ref);
      });

    }
  }

  angular
    .module('unJS', ['firebase'])
      .component('feedback', {
        bindings: {
          userName: '<'
        },
        controller: ctrlFn,
        template: `
          <div>¿Qué nos quieres comentar {{$ctrl.userName}}?</div>
          <form ng-submit="$ctrl.send()">
            <textarea name="feedback" ng-model="$ctrl.feedback" placeholder="Tu sugerencia"></textarea>
            <input type="submit" value="Enviar">
          </form>
        `
       });
})();