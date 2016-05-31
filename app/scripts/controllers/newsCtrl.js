(function () {

    'use strict';

    app
        .controller('NewsCtrl', NewsCtrl);

    NewsCtrl.$inject = ['$state','identityService', 'newsService', '$scope', '$filter', '$q', 'ngTableParams','responseService','SERVER_CONSTANT','imageModalService'];

    function NewsCtrl($state,identityService, newsService, $scope, $filter, $q, ngTableParams,responseService,SERVER_CONSTANT,imageModalService) {



        $scope.imageHostPath = SERVER_CONSTANT.IMAGE_HOST_PATH;

        $scope.$parent.headerStyle = "dark";
        $scope.$parent.activePage = "news";



        $scope.totalNews=[];
        $scope.firstNews=[];
        $scope.latestNews=[];
        init();

        function init(){
            getNewsData();

        }

        function getNewsData() {

            var queryData =
            {
                "searchQuery": "",
                "pageNumber": 1,
                "pageSize": 10,
                "sort":{
                    newsDateTime: 'desc'
                }
            };
            newsService.getActivatedNews(queryData).then(function (response) {

                $scope.totalNews = response.data.success.successData.news.totalNews;
                $scope.latestNews = $scope.totalNews.slice(0,3);
                $scope.firstNews.push($scope.totalNews.shift());

            }).catch(function (response) {

                if (response.data.error != undefined) {
                    responseService.showErrorToast(response.data.error.errorTitle, response.data.error.errorDescription);

                } else {
                    responseService.showErrorToast("Something Went Wrong", "Please Refresh the page again.")
                }

            });
        }


    }


})();


