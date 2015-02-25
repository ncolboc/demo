/**
 * Created by macfly on 21/02/2015.
 */

angular.module('demo.models.categories', [])

    .service('CategoriesModel', function ($http,$q) {
        var service = this;
        var url = {FETCH:'data/categories.json'}
        var categories = null;
        var currentCategory = null;

        var extractCategories = function (result) {
            categories = result.data;
            return categories;
        }
        
        service.setCurrentCategory = function (categoryName) {
            return service.getCategoryByName(categoryName).then(function (result) {
                currentCategory = result;
            });
        }

        service.getCurrentCategory = function () {
            return currentCategory;
        }

        service.getCurrentCategoryName = function () {
            return currentCategory ? currentCategory.name : '';
        }

        service.getCurrentCategoryId = function () {
            return currentCategory ? currentCategory.id : '';
        }

        service.getCategoriesModel = function () {
            return categories ? $q.when(categories) : $http.get(url.FETCH).then(extractCategories);
        }
        
        service.getCategoryByName = function (categoryName) {
            var deferred = $q.defer();

            function findCategory(){
                return _.findWhere(categories,{name:categoryName});
            }

            if (categories){
                deferred.resolve(findCategory())
            }else{
                this.getCategoriesModel().then(function () {
                    deferred.resolve(findCategory());
                })
            }

            return deferred.promise;
        }
    })

;

