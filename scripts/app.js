'use strict';

angular.module('ttca', ['ui.router', 'ngResource', 'ui.materialize'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/',
            views: {
                'header': { templateUrl: 'views/sidemenu.html' },
                'content': { templateUrl: 'views/home.html', controller: 'homeController' }
            }
        })

    .state('app.whatwedo', {
        url: 'whatwedo',
        views: {
            'content@': { templateUrl: 'views/whatwedo.html', controller: 'whatWeDoController' }
        }
    })

    .state('app.academics', {
        url: 'academics',
        views: {
            'content@': { templateUrl: 'views/academics.html', controller: 'academicsController' }
        }
    })

    .state('app.events', {
        url: 'events',
        views: {
            'content@': { templateUrl: 'views/events.html', controller: 'eventsController' }
        }
    })

    .state('app.sports', {
        url: 'sports',
        views: {
            'content@': { templateUrl: 'views/sports.html', controller: 'sportsController' }
        }
    })

    .state('app.alumni', {
        url: 'alumni',
        views: {
            'content@': { templateUrl: 'views/alumni.html', controller: 'alumniController' }
        }
    })

    .state('app.placements', {
        url: 'placements',
        views: {
            'content@': { templateUrl: 'views/placements.html', controller: 'placementsController' }
        }
    })

    .state('app.aboutus', {
        url: 'aboutus',
        views: {
            'content@': { templateUrl: 'views/aboutus.html', controller: 'aboutusController' }
        }
    });

    $urlRouterProvider.otherwise('/');
});