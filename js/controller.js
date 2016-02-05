/**
 * Created by Merrick on 22.01.2016.
 */

var app = angular.module('myApp', ['ngRoute'])

.controller('main', function($scope) {

})
.controller('video_page', function($scope) {
    //Скрипт выборки видео в портфолио
    //При нажатии на "ВСЕ"
    document.querySelectorAll('.choosen')[0].onclick = function() {
    		changeChoosenActivity(0);
    		doNormalRepertory();
    	}
    	// При нажатии на "30 секундные ролики"
    document.querySelectorAll('.choosen')[1].onclick = function() { //При нажатии на "30 секундные ролики"
    	changeChoosenActivity(1);
    	doNormalRepertory();
    	changeRepertoryShort();
    }
    document.querySelectorAll('.choosen')[2].onclick = function() {
    	changeChoosenActivity(2);
    	doNormalRepertory();
    	changeRepertoryLong();
    }

    $(".fancybox").click(function() {
        $(".fancybox").fancybox({
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: document.documentElement.clientWidth > 700?'80%':'90%',
            height: document.documentElement.clientWidth > 700?'80%':'50%',
            autoSize: false,
            closeClick: false,
            openEffect: 'fade',
            closeEffect: 'elastic',
            helpers: {
                title: {
                    type: 'inside'
                }
            }
        });
    });
})
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'route_content/section1.html',
            controller : 'main_page'
        })
        .when('/video', {
            templateUrl : 'route_content/section2.html',
            controller : 'video_page'
        })
        .when('/complex', {
            templateUrl : 'route_content/section3.html',
            controller : 'complex_page'
        })
        .when('/smm', {
            templateUrl : 'route_content/section4.html',
            controller : 'smm_page'
        })
});