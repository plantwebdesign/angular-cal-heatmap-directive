angular.module('calHeatmap').directive('calHeatmapControls',
  function ($templateCache) {

    'use strict';

    function link(scope, element) {

      var buttonContainer = element.parent().parent();

    }

    $templateCache.put('cal-heatmap/cal-heatmap-controls',
      '<input class="btn btn-xs btn-default" type="button" value="<" id="prev"/> <input class="btn btn-xs btn-default" type="button" value=">" id="next"/>'
    );

    return {
      link: link,
      restrict: 'E',
      templateUrl: 'cal-heatmap/cal-heatmap-controls'
    };

  });
