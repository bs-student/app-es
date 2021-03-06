(function () {

    'use strict';

    app
        .controller('GoogleAnalyticsReportCtrl', GoogleAnalyticsReportCtrl);

    GoogleAnalyticsReportCtrl.$inject = ['$moment', '$timeout', '$state', 'identityService', 'adminReportService', '$scope', '$filter', '$q', 'ngTableParams', 'responseService', 'SERVER_CONSTANT','GOOGLE_ANALYTICS_CONSTANT'];

    function GoogleAnalyticsReportCtrl($moment, $timeout, $state, identityService, adminReportService, $scope, $filter, $q, ngTableParams, responseService, SERVER_CONSTANT,GOOGLE_ANALYTICS_CONSTANT) {

        $scope.accessTokenGoogleServiceAccount = undefined;
        $scope.gaViewId = GOOGLE_ANALYTICS_CONSTANT.GA_ID;

        $scope.imageHostPath = SERVER_CONSTANT.IMAGE_HOST_PATH;
        $scope.$parent.main.title = "Google Analytics Report";
        $scope.$parent.headerStyle = "dark";
        $scope.$parent.activePage = "user";


        $scope.startDate = $moment().subtract(6, 'days').format('MMMM D, YYYY');
        $scope.endDate = $moment().format('MMMM D, YYYY');
        $scope.startDateGoogleFormat = $moment().subtract(6, 'days').format('YYYY-MM-DD');
        $scope.endDateGoogleFormat = $moment().format('YYYY-MM-DD');
        $scope.rangeOptions = {
            ranges: {
                Today: [$moment(), $moment()],
                Yesterday: [$moment().subtract(1, 'days'), $moment().subtract(1, 'days')],
                'Last 7 Days': [$moment().subtract(6, 'days'), $moment()],
                'Last 30 Days': [$moment().subtract(29, 'days'), $moment()],
                'This Month': [$moment().startOf('month'), $moment().endOf('month')],
                'Last Month': [$moment().subtract(1, 'month').startOf('month'), $moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            startDate: $moment().subtract(6, 'days'),
            endDate: $moment(),
            parentEl: '#content'
        };

        $scope.init = _init;

        _init();
        function _init() {

            $scope.startDateGoogleFormat = moment($scope.startDate, 'MMMM D, YYYY').format('YYYY-MM-DD');
            $scope.endDateGoogleFormat = moment($scope.endDate, 'MMMM D, YYYY').format('YYYY-MM-DD');

            if ($scope.accessTokenGoogleServiceAccount == undefined) {
                ($scope.googleAccessTokenPromise = adminReportService.getGoogleAccessToken(identityService.getAccessToken())).then(function (response) {
                    $scope.accessTokenGoogleServiceAccount = response.data.success.successData.accessToken.access_token;
                    renderUsersLineChartGoogleAnalytics();

                }).catch(function (response) {

                    if (response.data.error_description == "The access token provided is invalid.") {

                    } else if (response.data.error_description == "The access token provided has expired.") {
                        ($scope.googleAccessTokenPromise = identityService.getRefreshAccessToken(identityService.getRefreshToken())).then(function (response) {
                            identityService.setAccessToken(response.data);
                            _init();
                        });
                    } else if (response.data.error != undefined) {
                        responseService.showErrorToast(response.data.error.errorTitle, errorDescription + ". " + response.data.error.errorDescription);
                    } else {
                        responseService.showErrorToast("Something Went Wrong", "Please Refresh the page again.")
                    }

                });
            } else {
                renderUsersLineChartGoogleAnalytics();
            }


        }

        function generateActiveUsers() {
            // == NOTE ==
            // This code uses ES6 promises. If you want to use this code in a browser
            // that doesn't supporting promises natively, you'll have to include a polyfill.
            gapi.analytics.ready(function () {

                /**
                 * Authorize the user immediately if the user has already granted access.
                 * If no access has been created, render an authorize button inside the
                 * element with the ID "embed-api-auth-container".
                 */

                gapi.analytics.auth.authorize({
                    'serverAuth': {
                        'access_token': $scope.accessTokenGoogleServiceAccount
                    }
                });


                /**
                 * Create a new ActiveUsers instance to be rendered inside of an
                 * element with the id "active-users-container" and poll for changes every
                 * five seconds.
                 */
                var activeUsers = new gapi.analytics.ext.ActiveUsers({
                    container: 'active-users-container',
                    pollingInterval: 5
                });
                activeUsers.set({ids: $scope.gaViewId}).execute();

                /**
                 * Add CSS animation to visually show the when users come and go.
                 */
                activeUsers.once('success', function () {
                    var element = this.container.firstChild;
                    var timeout;

                    this.on('change', function (data) {
                        var element = this.container.firstChild;
                        var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
                        element.className += (' ' + animationClass);

                        clearTimeout(timeout);
                        timeout = setTimeout(function () {
                            element.className =
                                element.className.replace(/ is-(increasing|decreasing)/g, '');
                        }, 3000);
                    });
                });


            });
        }


        /**
         * Draw the a chart.js line chart with data from the specified view that
         * overlays session data for the current week over session data for the
         * previous week.
         */
        function renderUsersLineChartGoogleAnalytics() {

            generateActiveUsers();


            // Adjust `now` to experiment with different days, for testing only...
//            var now = moment(); // .subtract(3, 'day');

            var userQueryData = query({
                'ids': $scope.gaViewId,
                'dimensions': 'ga:date,ga:nthDay',
                'metrics': 'ga:users',
                'start-date': $scope.startDateGoogleFormat,
                'end-date': $scope.endDateGoogleFormat
            });

            var cityUsaQueryData = query({
                'ids': $scope.gaViewId,
                'dimensions': 'ga:region,ga:country',
                'metrics': 'ga:users',
                'filters': 'ga:country==Spain',
                'start-date': $scope.startDateGoogleFormat,
                'end-date': $scope.endDateGoogleFormat
            });


            Promise.all([userQueryData]).then(function (results) {

                var data1 = results[0].rows.map(function (row) {
                    return +row[2];
                });
                var labels = results[0].rows.map(function (row) {
                    return +row[0];
                });

                labels = labels.map(function (label) {
                    return moment(label, 'YYYYMMDD').format('dddd, DD-MMM-YYYY');
                });

                var data = {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Visited Users',
                            fillColor: 'rgba(68,157,68,1)',
                            strokeColor: 'rgba(68,157,68,1)',
                            pointColor: 'rgba(68,157,68,1)',
                            pointStrokeColor: '#fff',
                            data: data1,
                            backgroundColor: 'rgba(68, 157, 68,.2)',
                            borderColor: 'rgba(68,157,68,1)',
                            borderWidth: 1
                        }
                    ]
                };

                new Chart(makeCanvas('user-line-chart-container',300), {
                    type: "line",
                    data: data
                });
                generateLegend('user-line-chart-legend-container', data.datasets);
            });

            Promise.all([cityUsaQueryData]).then(function (results) {
                $scope.usaRegionMapData = results[0].rows.filter(function(row){ if(row[0] != "(not set)") return row;});
                $scope.usaRegionMapData =  $scope.usaRegionMapData.map(function (row) {
                    return [row[0], parseInt(row[2])];
                });
                $scope.usaRegionMapData.unshift(['State', 'User Visits']);
                google.charts.setOnLoadCallback(drawUsaRegionsMap);
            });



        }

        google.charts.load('current', {'packages': ['geochart']});

        function drawUsaRegionsMap() {

            var data = google.visualization.arrayToDataTable($scope.usaRegionMapData);

            var options = {
                region: 'ES',
                resolution: 'provinces'
            };

            var chart = new google.visualization.GeoChart(document.getElementById('usa_regions_div'));

            chart.draw(data, options);
        }


        /**
         * Extend the Embed APIs `gapi.analytics.report.Data` component to
         * return a promise the is fulfilled with the value returned by the API.
         * @param {Object} params The request parameters.
         * @return {Promise} A promise.
         */
        function query(params) {
            return new Promise(function (resolve, reject) {
                var data = new gapi.analytics.report.Data({query: params});
                data.once('success', function (response) {
                    resolve(response);
                })
                    .once('error', function (response) {
                        reject(response);
                    })
                    .execute();
            });
        }

        /**
         * Create a new canvas inside the specified element. Set it to be the width
         * and height of its container.
         * @param {string} id The id attribute of the element to host the canvas.
         * @return {RenderingContext} The 2D canvas context.
         */
        function makeCanvas(id,height) {
            var container = document.getElementById(id);
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            container.innerHTML = '';
            canvas.width = container.offsetWidth;
            if(height!=undefined){
                canvas.height = height;
            }else{
                canvas.height = container.offsetHeight;
            }
            container.appendChild(canvas);

            return ctx;
        }

        /**
         * Create a visual legend inside the specified element based off of a
         * Chart.js dataset.
         * @param {string} id The id attribute of the element to host the legend.
         * @param {Array.<Object>} items A list of labels and colors for the legend.
         */
        function generateLegend(id, items) {
            var legend = document.getElementById(id);
            legend.innerHTML = items.map(function (item) {
                var color = item.color || item.fillColor;
                var label = item.label;
                return '<li><i style="background:' + color + '"></i>' +
                    escapeHtml(label) + '</li>';
            }).join('');
        }


        // Set some global Chart.js defaults.
        Chart.defaults.global.animationSteps = 60;
        Chart.defaults.global.animationEasing = 'easeInOutQuart';
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.maintainAspectRatio = false;


        /**
         * Escapes a potentially unsafe HTML string.
         * @param {string} str An string that may contain HTML entities.
         * @return {string} The HTML-escaped string.
         */
        function escapeHtml(str) {
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(str));
            return div.innerHTML;
        }


    }


})();


