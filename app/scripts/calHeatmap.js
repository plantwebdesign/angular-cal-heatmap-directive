'use strict';
angular.module('calHeatmap', []).directive('calHeatmap', function ($templateCache) {
  function link(scope, el) {
    var config = scope.config || {};
    var element = el[0];
    var cal = new CalHeatMap();
    var defaults = {
      itemSelector: element,
      domain: 'month',
      subDomain: 'day',
      subDomainTextFormat: '%d',
      data: '',
      start: new Date(),
      cellSize: 25,
      range: 3,
      domainGutter: 10,
      legend: [2, 4, 6, 8, 10],
      itemName: 'item',
      displayLegend: false,
      nextSelector: "#next",
      previousSelector: "#prev"
    };
    angular.extend(defaults, config);
    cal.init(defaults);

    scope.$on('refreshCalHeatMap', function () {
      cal.update(config.data);
    });

  }

  $templateCache.put('cal-heatmap/cal-heatmap-main',
    '<div ng-show="config.displayControls">' +
    '<input class="btn btn-xs btn-default" type="button" value="<" id="prev"/> <input class="btn btn-xs btn-default" type="button" value=">" id="next"/>' +
    '</div>' +
    '<div class="cal-heatmap" config="config"></div>'
  );

  return {
    templateUrl: 'cal-heatmap/cal-heatmap-main',
    restrict: 'E',
    link: link,
    scope: {
      config: '='
    }
  };
});
