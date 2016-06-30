"use strict";

(function(){

  function ctrlFn() {
    this.$onInit = function(){
      this.userData = {
        name: 'Diego',
        pic: 'https://pbs.twimg.com/profile_images/705056200652619776/0FnCBemc.jpg',
        description: 'I code and teach JavaScript for a living.'
      }
    }
  }

  angular
    .module('angularFireDemoApp')
      .component('main', {
        bindings: {
          name: '@'
        },
        controller: ctrlFn,
        template: `
          <style>
            main>nav.navbar {
              background: #8e44ad;
              padding: 0.5em;
              color: white;
            }
            main>nav.navbar>h1 {
              font-size: 2em;
            }
            main>div.split {
              display: flex;
            }
            main>div.split>aside {
              flex: 1 1 20%;
              max-width: 20%;
              background: #9b59b6;
              box-shadow: 1px 3px 3px -1px #777;
            }
            main>div.split>aside>div {
              padding: 2em;
            }
            main>div.split>.site-content {
              padding: 2em;
            }

          </style>

          <nav class="navbar">
            <h1>Angular Fire - Demo App</h1>
          </nav>
          
          <div class="split">
            <aside>
              <div>
                <div>
                  <a ng-link="['Home']">Home</a>
                </div>
                <div>
                  <a ng-link="['About']">About</a>
                </div>
                <div>
                  <a ng-link="['Cosa', {titulo: 'Mira la URL 😱!!!', texto: 'Los valores llegan como parámetros de URL y deben ser decodificados 😖'}]">Cosa</a>
                </div>
              </div>
            </aside>
            <div class="site-content">
              <ng-outlet></ng-outlet>
            </div>
          </div>
        `,
        $routeConfig: [
          {path: '/', name: 'Home', component: 'home', useAsDefault: true},
          {path: '/about', name: 'About', component: 'about'},
          {path: '/cosa', name: 'Cosa', component: 'cosa'},
        ]
       });
})();