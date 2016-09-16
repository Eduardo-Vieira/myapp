// simulação de banco de dados
var Dados =[
            {id:1,nome:'Eduardo Vieira',
             login:'admin',
             email:'gceduvieira@gmail.com'
            }
          ];
angular.module('app.usuarios', ['ngRoute'])

.controller('UsuariosCtrl', function($scope, $location, $routeParams) {
     $scope.frmusuario ={};
     $scope.location = $location.path();
     var id = $routeParams.Id;
     $scope.usuarios = Dados;

     //  chamar a pagina novo
     $scope.doNovo = function(){
         $location.url('/usuarios.add');
     };

     $scope.doSalvar = function(){
         $scope.usuarios.push({
             id: $scope.usuarios.length + 1,
             nome: $scope.frmusuario.nome,
             login:$scope.frmusuario.login,
             email:$scope.frmusuario.email
            }); 
            Dados = $scope.usuarios;
            // Volta pra index
            $location.url('/usuarios');
            
     };
     
     $scope.doSubmitEdit = function(){
            // Código de Edição


            // Ir para pagina detail
            $location.url('/usuarios.detail/'+id);            
     };

     $scope.doEdit = function(){
            // Ir para pagina editar
            $location.url('/usuarios.edit/'+id);            
     };

     $scope.doEditCancel = function(){
            // Ir para pagina editar
            $location.url('/usuarios.detail/'+id);            
     };
     if(id){
         id = id -1;
         $scope.id    = $scope.usuarios[id].id;
         $scope.nome  = $scope.usuarios[id].nome;
         $scope.login = $scope.usuarios[id].login;
         $scope.email = $scope.usuarios[id].email;
         id = id +1;              
     };

 });