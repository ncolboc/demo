/**
 * Created by macfly on 21/02/2015.
 */
angular.module('categories.bookmarks.create', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('ui-router.categories.bookmarks.create', {
                url: '/bookmarks/create',
                templateUrl: 'app/modules/ui-router/categories/bookmarks/create/bookmark-create.tpl.html',
                controller: 'CreateBookmarksCtrl as createBookmarkCtrl'
            })
    })

    .controller('CreateBookmarksCtrl', function ($state,$stateParams,BookmarksModel,CategoriesModel) {
        var createBookmarkCtrl = this;

        function returnToBookmark(){
            $state.go('ui-router.categories.bookmarks',{category:$stateParams.category});
        }

        createBookmarkCtrl.cancelBookmark = function () {
            returnToBookmark();
        }

        createBookmarkCtrl.createBookmark = function (bookmark) {
            CategoriesModel.getCategoryByName($stateParams.category).then(function (category) {
                 bookmark.category = category.id;
                BookmarksModel.createBookmark(bookmark);
                returnToBookmark();
            });
        }

    })
;
