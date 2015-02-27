/**
 * Created by macfly on 27/02/2015.
 */
angular.module('modules.welcomePage', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'app/modules/welcomePage/welcomePage.tpl.html',
                controller: 'WelcomePageCtrl as welcomeCtrl'
            });

    })

    .controller('WelcomePageCtrl', function () {

        var welcomeCtrl = this;
        welcomeCtrl.title = 'welcome';

    })

;
