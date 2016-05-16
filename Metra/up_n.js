var objects = [];

function create(parent) {
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapPolyline { ' +
				    'objectName: "UP-N"; ' +
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
				    'objectName: "UP-N Kenosha"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.585879; ' +
				      'longitude: -87.825790; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Winthrop Harbor"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.482675; ' +
				      'longitude: -87.816095; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Zion"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.449207; ' +
				      'longitude: -87.817970; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Waukegan"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.360671; ' +
				      'longitude: -87.828317; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N North Chicago"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.328614; ' +
				      'longitude: -87.836952; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Great Lakes"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.306994; ' +
				      'longitude: -87.846448; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Lake Bluff"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.279768; ' +
				      'longitude: -87.846569; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Lake Forest"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.252445; ' +
				      'longitude: -87.839595; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Fort Sheridan"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.217417; ' +
				      'longitude: -87.820983; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Highwood"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.203370; ' +
				      'longitude: -87.810527; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Highland Park"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.183247; ' +
				      'longitude: -87.797433; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Ravinia"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.165054; ' +
				      'longitude: -87.782845; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Ravinia Park"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.158284; ' +
				      'longitude: -87.777251; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Braeside"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.152845; ' +
				      'longitude: -87.772589; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Glencoe"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.135635; ' +
				      'longitude: -87.758112; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Hubbard Woods"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.118961; ' +
				      'longitude: -87.743619; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Winnetka"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.105139; ' +
				      'longitude: -87.732862; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Indian Hill"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.094481; ' +
				      'longitude: -87.723989; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Kenilworth"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.086309; ' +
				      'longitude: -87.716646; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Wilmette"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.077360; ' +
				      'longitude: -87.709212; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Evanston: Central " +' +
				                '"Street"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.064079; ' +
				      'longitude: -87.698089; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Evanston: Davis " +' +
				                '"Street"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.047937; ' +
				      'longitude: -87.684643; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Evanston: Main " +' +
				                '"Street"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.033440; ' +
				      'longitude: -87.680195; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Rogers Park"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.009119; ' +
				      'longitude: -87.675406; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Ravenswood"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  41.968707; ' +
				      'longitude: -87.674345; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Clybourn"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  41.917006; ' +
				      'longitude: -87.668234; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "UP-N Ogilvie"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  41.883029; ' +
				      'longitude: -87.640542; ' +
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
