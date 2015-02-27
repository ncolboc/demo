/**
 * Created by macfly on 21/02/2015.
 */
angular.module('categories.bookmarks', [

    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'demo.models.bookmarks',
    'demo.models.categories'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('ui-router.categories.bookmarks', {
                url: '/:category',
                views: {
                    'bookmarks@ui-router': {
                        templateUrl: 'app/modules/ui-router/categories/bookmarks/bookmarks.tpl.html',
                        controller: 'BookmarksCtrl as bookmarksListCtrl'
                    }
                }
            })
    })

    .controller('BookmarksCtrl', function ($stateParams,BookmarksModel,CategoriesModel) {

        var bookmarksListCtrl = this;

        CategoriesModel.setCurrentCategory($stateParams.category);

        BookmarksModel.getBookmarksModel().then(function (bookmarks) {
            bookmarksListCtrl.bookmarks = bookmarks;
        });

        function deleteBookmark(bookmark){
            BookmarksModel.deleteBookmark(bookmark);
        }

        bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
        bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
        bookmarksListCtrl.deleteBookmark = deleteBookmark;
    })

;
