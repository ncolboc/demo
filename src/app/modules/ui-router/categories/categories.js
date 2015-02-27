/**
 * Created by macfly on 21/02/2015.
 */
angular.module('demo.categories', [
    'demo.models.categories'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('ui-router.categories', {
                url: "/categories",
                views: {
                    'categories@ui-router': {
                        templateUrl: 'app/modules/ui-router/categories/categories.tpl.html',
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
