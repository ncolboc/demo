/**
 * Created by macfly on 21/02/2015.
 */
angular.module('demo.categories', [
    'demo.models.categories'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('demo.categories', {
                url: "/",
                views: {
                    'categories@': {
                        templateUrl: 'app/categories/categories.tpl.html',
                        controller: 'CategoriesCtrl as categoriesCtrl'
                    }
                }
            });
    })

    .controller('CategoriesCtrl', function (CategoriesModel) {
        var ctrl = this;
        CategoriesModel.getCategoriesModel().then(function (result) {
            ctrl.categories = result;
        });
    })
;
