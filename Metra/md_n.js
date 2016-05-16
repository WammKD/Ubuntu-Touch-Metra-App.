var stored_item;
var objects = [];

function init(rent, item) {
  stored_item = item;
  create(rent);
}

function create(parent) {
  stored_item.visible = true;

  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Fox Lake"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.398317; ' +
				      'longitude: -88.182255; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Ingleside"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.383856; ' +
				      'longitude: -88.153554; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Long Lake"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.368050; ' +
				      'longitude: -88.128056; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Round Lake"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.354575; ' +
				      'longitude: -88.094129; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Grayslake"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.333680; ' +
				      'longitude: -88.043307; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Prarie-Crossing/" +' +
				                '"Libertyville"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.320739; ' +
				      'longitude: -88.015229; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Libertyville"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.291030; ' +
				      'longitude: -87.956534; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Lake Forest"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.223619; ' +
				      'longitude: -87.874699; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Deerfield"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.167977; ' +
				      'longitude: -87.849967; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Lake Cook Road"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.152269; ' +
				      'longitude: -87.841452; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Northbrook"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.126826; ' +
				      'longitude: -87.827902; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Glen of North " +' +
				                '"Glenview"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.097562; ' +
				      'longitude: -87.815908; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Glenview"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.075010; ' +
				      'longitude: -87.805658; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Golf"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.058334; ' +
				      'longitude: -87.797018; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Morton Grove"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  42.034936; ' +
				      'longitude: -87.785162; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Edgebrook"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  41.997777; ' +
				      'longitude: -87.765563; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Forest Glen"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  41.978184; ' +
				      'longitude: -87.755568; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Mayfair"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  41.959720; ' +
				      'longitude: -87.745841; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Grayland"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  41.948887; ' +
				      'longitude: -87.740285; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Healy"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  41.924778; ' +
				      'longitude: -87.727785; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Western Avenue"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

				    'center { ' +
				      'latitude :  41.889155; ' +
				      'longitude: -87.688135; ' +
				    '} ' +
				  '}', parent, ""));
  objects.push(Qt.createQmlObject('import QtLocation 5.4; ' +
				  'import QtPositioning 5.4; ' +
				  'import QtQuick 2.4; ' +

				  'MapCircle { ' +
				    'objectName: "MD-N Union"; ' +
				    'color     : circle_color; ' +
				    'radius    : md_n.radi; ' +

				    'border { ' +
				      'color: circle_border_color; ' +
				    '} ' +

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
  stored_item.visible = false;

  var items = objects.length;
  for(var i = 0; i < items; i++) {
    objects.pop().destroy(0);
  }
}
