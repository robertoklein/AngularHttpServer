  //encontra o modulo
        angular.module("listaTelefonicaModulo").controller("listaCtrl", function($scope){
            $scope.app = "Lista Telefonica";

            //cria o array de contatos
            $scope.contatos = [
                {nome: "Pedro", telefone: "99998888", data: new Date()},
                {nome: "Ana", telefone: "99997777", data: new Date()},
                {nome: "Maria", telefone: "99996666", data: new Date()},
            ]

            //cria o array de operadoras
            $scope.operadoras = [
                {nome: "Oi", codigo: 14, categoria: "Celular"},
                {nome: "Vivo", codigo: 15, categoria: "Celular" },
                {nome: "Tim", codigo: 41, categoria: "Celular"},
                {nome: "Gvt", codigo: 25, categoria: "Fixo"},
                {nome: "Embratel", codigo: 21, categoria: "Fixo"},
            ]

            //funcao para adicionar na tabela
            $scope.adicionarContato = function(contato){
                $scope.contatos.push(angular.copy(contato));
                delete $scope.contato;
                //voltar o formulario para o estado pristine, para que a msg nao apareca ao cadastrar um contato.
                $scope.contatoForm.$setPristine();
            }

            //funcao para apagar contato na tabela, reatribuindo o valor dos contatos que ficam, no array contatos
            $scope.apagarContato = function(contatos){
              $scope.contatos = contatos.filter(function (contato){
                if(!contato.selecionado) return contato;
                });
            };

            //funcao que verifica se algum contato foi selecionado
            $scope.isContatoSelecionado = function (contatos){
               return contatos.some(function (contato){
                return contato.selecionado;
               });
            };

        });