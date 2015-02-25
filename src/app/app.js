/**
 * Created by macfly on 21/02/2015.
 */
angular.module('demo', [
        'ngAnimate',
        'ui.router',
        'demo.categories',
        'categories.bookmarks'
        ]
)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('demo', {
                url: '',
                abstract: true
            });

        $urlRouterProvider.otherwise('/');
    })
;