angular.module('MeiApp', [])
  .controller('MeiController', function($scope, $http) {
	  $scope.atividades = ["aaaa", "sdf", "sdfs"];
	  $scope.descricao = "";

	  $scope.buscar = function() {
		  var param = $scope.descricao;
		  $http({
			    url: "http://localhost:8080/tcc/atividade/descricao", 
			    method: "GET",
			    params: {"descricao": param}
			 })
		  .then(function(response) {
			  console.log(response.data);
			  $scope.atividades = response.data.atividadesEncontradas;
		  });
	  }
  });