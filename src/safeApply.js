    observableProto.safeApply = function($scope, fn){

        fn = isFunction(fn) ? fn : noop;

        return this.doAction(function(data){
            ($scope.$$phase || $scope.$root.$$phase) ? fn(data) : $scope.$apply(function(){
                fn(data);
            });
        });
    };