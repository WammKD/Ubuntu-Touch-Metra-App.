var objects = [];

function create(parent) {
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapPolyline { ' +
				    'id        : ncs; ' +
				    'line.width: md_n.zoom; ' +
				    'line.color: up_n__color; ' +
				    'path      : [{latitude :  42.585833, ' +
				                  'longitude: -87.826022}, ' +
		                                 '{latitude :  42.577400, ' +
				                  'longitude: -87.825933}, ' +
		                                 '{latitude :  42.546469, ' +
				                  'longitude: -87.820359}, ' +
		                                 '{latitude :  42.491395, ' +
				                  'longitude: -87.816604}, ' +
		                                 '{latitude :  42.454831, ' +
				                  'longitude: -87.817652}, ' +
		                                 '{latitude :  42.394337, ' +
				                  'longitude: -87.822503}, ' +
		                                 '{latitude :  42.342685, ' +
				                  'longitude: -87.829997}, ' +
		                                 '{latitude :  42.341023, ' +
				                  'longitude: -87.830383}, ' +
		                                 '{latitude :  42.313821, ' +
				                  'longitude: -87.845504}, ' +
		                                 '{latitude :  42.311936, ' +
				                  'longitude: -87.846165}, ' +
		                                 '{latitude :  42.309649, ' +
				                  'longitude: -87.846570}, ' +
		                                 '{latitude :  42.276466, ' +
				                  'longitude: -87.846782}, ' +
		                                 '{latitude :  42.275565, ' +
				                  'longitude: -87.846688}, ' +
		                                 '{latitude :  42.247426, ' +
				                  'longitude: -87.838263}, ' +
		                                 '{latitude :  42.233309, ' +
				                  'longitude: -87.832968}, ' +
		                                 '{latitude :  42.200599, ' +
				                  'longitude: -87.808741}, ' +
		                                 '{latitude :  42.183746, ' +
				                  'longitude: -87.797909}, ' +
		                                 '{latitude :  42.047669, ' +
				                  'longitude: -87.684596}, ' +
		                                 '{latitude :  42.043525, ' +
				                  'longitude: -87.682414}, ' +
		                                 '{latitude :  42.017242, ' +
				                  'longitude: -87.676350}, ' +
		                                 '{latitude :  42.005148, ' +
				                  'longitude: -87.675440}, ' +
		                                 '{latitude :  41.930987, ' +
				                  'longitude: -87.673374}, ' +
		                                 '{latitude :  41.924995, ' +
				                  'longitude: -87.671598}, ' +
		                                 '{latitude :  41.917336, ' +
				                  'longitude: -87.668145}, ' +
		                                 '{latitude :  41.909603, ' +
				                  'longitude: -87.663295}, ' +
		                                 '{latitude :  41.907374, ' +
				                  'longitude: -87.661247}, ' +
		                                 '{latitude :  41.905470, ' +
				                  'longitude: -87.660400}, ' +
		                                 '{latitude :  41.902385, ' +
				                  'longitude: -87.660094}, ' +
		                                 '{latitude :  41.900474, ' +
				                  'longitude: -87.658807}, ' +
		                                 '{latitude :  41.898921, ' +
				                  'longitude: -87.656180}, ' +
		                                 '{latitude :  41.898288, ' +
				                  'longitude: -87.653741}, ' +
		                                 '{latitude :  41.897516, ' +
				                  'longitude: -87.651943}, ' +
		                                 '{latitude :  41.890582, ' +
				                  'longitude: -87.644698}, ' +
		                                 '{latitude :  41.889793, ' +
				                  'longitude: -87.642206}, ' +
		                                 '{latitude :  41.888382, ' +
				                  'longitude: -87.640888}, ' +
		                                 '{latitude :  41.882253, ' +
				                  'longitude: -87.640609}] ' +
				  '}', parent, ""));

  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : up_n__kenosha; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.585879; ' +
				      'longitude: -87.825790; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : up_n__winthrop_harbor; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.482675; ' +
				      'longitude: -87.816095; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'id    : up_n__zion; ' +
				    'color : circle_color; ' +
				    'radius: md_n.radi; ' +

				    'center { ' +
				      'latitude :  42.449207; ' +
				      'longitude: -87.817970; ' +
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
