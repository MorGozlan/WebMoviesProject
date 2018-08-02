
            var myApp = angular.module("myApp",[]);
            myApp.controller("MyCtrl",MyCtrl)
                function MyCtrl($scope)
                {
                    $scope.price = "6 billion USD";
                    $scope.img = "simpsons.jpg"
                    $scope.series_ar = json_ar;
                }
                
            
