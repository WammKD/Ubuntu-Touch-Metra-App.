var objects = [];

function create(parent) {
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapPolyline { ' +
				    'id        : ncs; ' +
				    'line.width: md_n.zoom; ' +
				    'line.color: ncs__color; ' +
				    'path      : [{latitude :  42.481071,  ' +
				                  'longitude: -88.092227}, ' +
		                                 '{latitude :  42.464225, ' +
                                                  'longitude: -88.090675}, ' +
		                                 '{latitude :  42.429313, ' +
				                  'longitude: -88.084349}, ' +
		                                 '{latitude :  42.367944, ' +
				                  'longitude: -88.057032}, ' +
		                                 '{latitude :  42.302731, ' +
				                  'longitude: -88.005605}, ' +
		                                 '{latitude :  42.278998, ' +
				                  'longitude: -88.003958}, ' +
		                                 '{latitude :  42.273015, ' +
				                  'longitude: -88.002268}, ' +
		                                 '{latitude :  42.249312, ' +
				                  'longitude: -87.984706}, ' +
		                                 '{latitude :  42.075291, ' +
				                  'longitude: -87.900787}, ' +
		                                 '{latitude :  42.058745, ' +
				                  'longitude: -87.900726}, ' +
		                                 '{latitude :  42.053285, ' +
				                  'longitude: -87.899993}, ' +
		                                 '{latitude :  41.962317, ' +
				                  'longitude: -87.870078}, ' +
		                                 '{latitude :  41.957563, ' +
				                  'longitude: -87.868011}, ' +
		                                 '{latitude :  41.954925, ' +
				                  'longitude: -87.866277}, ' +
		                                 '{latitude :  41.938546, ' +
				                  'longitude: -87.860397}, ' +
		                                 '{latitude :  41.934201, ' +
				                  'longitude: -87.857749}, ' +
		                                 '{latitude :  41.932887, ' +
				                  'longitude: -87.843552}, ' +
		                                 '{latitude :  41.925616, ' +
				                  'longitude: -87.817676}, ' +
		                                 '{latitude :  41.924537, ' +
				                  'longitude: -87.813087}, ' +
		                                 '{latitude :  41.922985, ' +
				                  'longitude: -87.804801}, ' +
		                                 '{latitude :  41.916619, ' +
				                  'longitude: -87.786863}, ' +
		                                 '{latitude :  41.916460, ' +
				                  'longitude: -87.782579}, ' +
		                                 '{latitude :  41.916703, ' +
				                  'longitude: -87.766331}, ' +
		                                 '{latitude :  41.916616, ' +
				                  'longitude: -87.763640}, ' +
		                                 '{latitude :  41.913838, ' +
				                  'longitude: -87.741088}, ' +
		                                 '{latitude :  41.913353, ' +
				                  'longitude: -87.722645}, ' +
		                                 '{latitude :  41.912228, ' +
				                  'longitude: -87.721480}, ' +
		                                 '{latitude :  41.907677, ' +
				                  'longitude: -87.718785}, ' +
		                                 '{latitude :  41.901894, ' +
				                  'longitude: -87.713724}, ' +
		                                 '{latitude :  41.897000, ' +
				                  'longitude: -87.706924}, ' +
		                                 '{latitude :  41.894139, ' +
				                  'longitude: -87.701252}, ' +
		                                 '{latitude :  41.889130, ' +
				                  'longitude: -87.688607}, ' +
		                                 '{latitude :  41.888491, ' +
				                  'longitude: -87.686261}, ' +
		                                 '{latitude :  41.888443, ' +
				                  'longitude: -87.684787}, ' +
		                                 '{latitude :  41.888471, ' +
				                  'longitude: -87.653724}, ' +
		                                 '{latitude :  41.887991, ' +
				                  'longitude: -87.647684}, ' +
		                                 '{latitude :  41.887949, ' +
				                  'longitude: -87.640616}, ' +
		                                 '{latitude :  41.887532, ' +
				                  'longitude: -87.639963}, ' +
		                                 '{latitude :  41.885834, ' +
				                  'longitude: -87.638960}, ' +
		                                 '{latitude :  41.878893, ' +
				                  'longitude: -87.638977}] ' +
				  '}', parent, ""));

  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__antioch; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.481023; ' +
				      'longitude: -88.092387; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__lake_villa; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.417439; ' +
				      'longitude: -88.079439; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__round_lake_beach; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.384994; ' +
				      'longitude: -88.065551; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__washington_grayslake; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.359282; ' +
				      'longitude: -88.050333; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__prarieCrossing_libertyville; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.318418; ' +
				      'longitude: -88.017592; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__mundelein; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.266808; ' +
				      'longitude: -87.997964; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__vernon_hills; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.215603; ' +
				      'longitude: -87.964567; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__prarie_view; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.198045; ' +
				      'longitude: -87.955819; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__buffalo_grove; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.168614; ' +
				      'longitude: -87.941381; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__wheeling; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.136474; ' +
				      'longitude: -87.927343; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__prospect_heights; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.082392; ' +
				      'longitude: -87.908108; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__oHare_transfer; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  41.995010; ' +
				      'longitude: -87.880619; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__rosemont; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  41.976111; ' +
				      'longitude: -87.873898; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__schiller_park; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  41.962283; ' +
				      'longitude: -87.870442; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__belmontAve_franklinPark; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  41.937777; ' +
				      'longitude: -87.860006; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs__river_grove; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  41.931022; ' +
				      'longitude: -87.836162; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs_western_avenue; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  41.889155; ' +
				      'longitude: -87.688135; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : ncs_union; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  41.878755; ' +
				      'longitude: -87.638858; ' +
				    '} ' +
				  '}', parent, ""));

  for(var i = 0; i < objects.length; i++) {
    parent.addMapItem(objects[i]);
  }
}

function destroy() {
  var items = objects.length;
  for(var i = 0; i < items; i++) {
    objects.pop().destroy(0);
  }
}
