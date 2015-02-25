/**
 * Created by macfly on 21/02/2015.
 */

angular.module("demo.models.bookmarks", [])

    .service('BookmarksModel', function ($http,$q) {

        var service = this,
            url = {FETCH: 'data/bookmarks.json'},
            bookmarks = null;

        var extractBookmarks = function (result) {
            bookmarks = result.data;
            return bookmarks;
        }

        function findBookmark(bookmarkId) {
            return _.findWhere(bookmarks,{id:parseInt(bookmarkId,10)});
        }

        service.getBookmarkById = function (bookmarkId) {
            var deferred = $q.defer();

            if (bookmarks !== null){
                deferred.resolve(findBookmark(bookmarkId))
            }
            else{
                service.getBookmarksModel().then(function () {
                    deferred.resolve(findBookmark(bookmarkId));
                })
            }


            return deferred.promise;
        }

        service.getBookmarksModel = function () {
            return bookmarks ? $q.when(bookmarks) : $http.get(url.FETCH).then(extractBookmarks);
        }

        service.createBookmark = function(bookmark){

            service.getBookmarksModel().then(function () {
                bookmark.id = bookmarks.length;
                bookmarks.push(bookmark);
            })

        }

        service.updateBookmark = function(bookmark){
            var idx = _.findIndex(bookmarks,{id:bookmark.id});
            bookmarks[idx] = bookmark;
        }

        service.deleteBookmark = function(bookmark){
            var idx = _.findIndex(bookmarks,{id:bookmark.id});
            bookmarks.splice(idx,1);
        }

    })
;