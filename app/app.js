
angular.module('app', ['ngRoute',
                       'app.usuarios'])

 .controller('InicioCtrl', function($scope) {
     $scope.titulo = 'OI, AngularJS!';
     $scope.texto = 'Este e um projeto padrão angularJs.';
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'app/views/inicio/index.html',
    controller: 'InicioCtrl'
  })
  .when('/usuarios', {
    templateUrl: 'app/views/usuarios/index.html',
    controller: 'UsuariosCtrl'
  })
   .when('/usuarios.add', {
    templateUrl: 'app/views/usuarios/add.html',
    controller: 'UsuariosCtrl'
  })
   .when('/usuarios.detail/:Id', {
    templateUrl: 'app/views/usuarios/detail.html',
    controller: 'UsuariosCtrl'
  })
   .when('/usuarios.edit/:Id', {
    templateUrl: 'app/views/usuarios/edit.html',
    controller: 'UsuariosCtrl'
  })
  //  .when('/Book/:bookId', {
  //   templateUrl: 'book.html',
  //   controller: 'BookController',
  //   resolve: {
  //     // I will cause a 1 second delay
  //     delay: function($q, $timeout) {
  //       var delay = $q.defer();
  //       $timeout(delay.resolve, 1000);
  //       return delay.promise;
  //     }
  //   }
  // })
  // .when('/Book/:bookId/ch/:chapterId', {
  //   templateUrl: 'chapter.html',
  //   controller: 'ChapterController'
  // });

  // configure html5 to get links working on jsfiddle
  // $locationProvider.html5Mode(true);
});

