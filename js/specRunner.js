(function () {
    'use strict';

    require.config({
        urlArgs: 'cb=' + Math.random(),
        baseUrl: '',
        paths: {
            'jquery': '../lib/jquery/jquery-2.0.0.min',
            'jasmine': '../lib/jasmine-2.0.0/jasmine',
            'jasmine-html': '../lib/jasmine-2.0.0/jasmine-html',
            'boot': '../lib/jasmine-2.0.0/boot',
            'spec': 'spec/'
        },
        shim: {
            'jasmine': {
                exports: 'window.jasmineRequire'
            },
            'jasmine-html': {
                deps: ['jasmine'],
                exports: 'window.jasmineRequire'
            },
            'boot': {
                deps: ['jasmine', 'jasmine-html'],
                exports: 'window.jasmineRequire'
            }
        }
    });

    require(['boot'], function (boot) {

        var specs = [];

        specs.push('spec/PlayerSpec');

        require(specs, function (spec) {

            window.onload();

        });

    });
})();
