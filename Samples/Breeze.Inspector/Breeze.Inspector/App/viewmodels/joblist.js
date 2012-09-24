﻿define(function(require) {
    var data = require('services/dataservice'),
        shell = require('viewmodels/shell'),
        InspectionViewModel = require('viewmodels/inspection');

    var vm = {
        jobs: ko.observableArray([]),
        activate: function() {
            shell.title(shell.inspector().Name());
            shell.addCommand('add',
                function() {
                    alert('not implemented');
                }
            );
            data.getJobsFor(shell.inspector().Id()).then(function(response) {
                vm.jobs(response.results);
                var locations = vm.jobs().length;
                shell.subtitle1(locations.toString() + (locations > 1 ? " locations" : " location"));
            });
        },
        navigateTo: function(inspection) {
            shell.navigate("inspection", new InspectionViewModel(inspection));
        }
    };

    return vm;
});