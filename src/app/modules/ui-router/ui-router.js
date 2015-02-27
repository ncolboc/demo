/**
 * Created by macfly on 27/02/2015.
 */
angular.module('modules.ui-router', ['demo.categories'])

    .config(function ($stateProvider) {

        $stateProvider
            .state('ui-router', {
                url: '/ui-router',
                templateUrl: 'app/modules/ui-router/ui-router.tpl.html',
                controller: 'UIRouterCtrl as uiRouterCtrl'
            });

    })

    .controller('UIRouterCtrl', function () {
        var uiRouterCtrl = this;
        uiRouterCtrl.title = 'UI-Router';
    })
;
