/**
 * Created by macfly on 27/02/2015.
 */
angular.module('modules.cross-origin', [])

    .config(function ($stateProvider) {

        $stateProvider.state('cross-origin', {
            url: '/cross-origin',
            templateUrl: 'app/modules/cross-origin/cross-origin.tpl.html',
            controller: 'CrossOriginPageCtrl as crossOriginPageCtrl'
        });

    })

    .controller('CrossOriginPageCtrl', function () {
        var crossOriginPageCtrl = this;
        crossOriginPageCtrl.title = 'cross-origin';
    })
;


