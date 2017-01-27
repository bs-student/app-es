(function () {

    'use strict';
    app.directive("valSellingPrice",valSellingPrice);

    valSellingPrice.$inject=['$q','$timeout','securityService'];

    function valSellingPrice ($q, $timeout, securityService) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function($scope, $element, $attrs, ctrl) {

                ctrl.$validators.valSellingPrice = function(modelValue, viewValue) {

                    if (ctrl.$isEmpty(modelValue)) {
                        // consider empty model valid
                        return true;
                    }
                    var originalPrice = parseFloat($attrs.originalPrice);
                    var enteredPrice = parseFloat(modelValue.replace(",", "."));

                    if(enteredPrice<=originalPrice){
                        return true;
                    }else{
                        return false;
                    }

                };
            }
        };
    }

})();