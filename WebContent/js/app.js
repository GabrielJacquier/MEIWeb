angular.module('MeiApp', [])
  .controller('MeiController', function($scope, $http) {
	  
	  $scope.trocarDescricao = function() {
		  $scope.descricao = "";
		  $scope.descricaoCheck = true;
		  $scope.ocupacaoCheck = false;
		  $scope.codigoCheck = false;
	  }
	  
	  $scope.trocarOcupacao = function() {
		  $scope.descricao = "";
		  $scope.descricaoCheck = false;
		  $scope.ocupacaoCheck = true;
		  $scope.codigoCheck = false;
	  }
	  
	  $scope.trocarCodigo = function() {
		  $scope.descricao = "";
		  $scope.descricaoCheck = false;
		  $scope.ocupacaoCheck = false;
		  $scope.codigoCheck = true;
	  }

	  $scope.trocarDescricao();

	  $scope.buscar = function() {
		  var param = $scope.descricao;
		  if($scope.descricaoCheck) {
			  $http({
				    url: "http://localhost:8080/tcc/atividade/descricao", 
				    method: "GET",
				    params: {"descricao": param}
				 })
			  .then(function(response) {
				  console.log(response.data);
				  $scope.atividadesDescricao = response.data.atividadesEncontradas;
			  });
		  }

		  if($scope.ocupacaoCheck) {
			  $http({
				    url: "http://localhost:8080/tcc/cnae", 
				    method: "GET",
				    params: {"ocupacao": param}
				 })
			  .then(function(response) {
				  console.log(response.data);
				  $scope.atividadesOcupacao = response.data;
			  });
		  }

		  if($scope.codigoCheck) {
			  $http({
				    url: "http://localhost:8080/tcc/atividade/cnae", 
				    method: "GET",
				    params: {"cnae": param}
				 })
			  .then(function(response) {
				  console.log(response.data);
				  $scope.atividadesCodigo = response.data;
			  });
		  }
	  }
  });