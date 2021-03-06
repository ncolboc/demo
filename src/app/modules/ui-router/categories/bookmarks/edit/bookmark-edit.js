/**
 * Created by macfly on 21/02/2015.
 */
angular.module('categories.bookmarks.edit', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('ui-router.categories.bookmarks.edit', {
                url: '/bookmarks/:bookmarkId/edit',
                templateUrl: 'app/modules/ui-router/categories/bookmarks/edit/bookmark-edit.tpl.html',
                controller: 'EditBookmarksCtrl as editBookmarkCtrl'
            })
    })

    .controller('EditBookmarksCtrl', function ($state,$stateParams,BookmarksModel) {

        var bookmarkToSave;
        var editBookmarkCtrl = this;

        BookmarksModel.getBookmarkById($stateParams.bookmarkId).then(function (bookmark) {
            bookmarkToSave = bookmark;
            editBookmarkCtrl.bookmark = angular.copy(bookmark);
        });

        function editBookmark(bookmark){
            BookmarksModel.updateBookmark(editBookmarkCtrl.bookmark)
            $state.go('ui-router.categories.bookmarks',{category:$stateParams.category});
        }

        editBookmarkCtrl.editBookmark = editBookmark;

    })

;
