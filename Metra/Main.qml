import "md_n.js" as MD_N;
import "ncs.js"  as NCS;
import QtLocation 5.4;
import QtPositioning 5.4;
import QtQuick 2.4;
import Ubuntu.Components 1.3;

/*!
 *  \brief MainView with a Label and Button elements.
 */

MainView {
  // objectName for functional testing purposes (autopilot-qt5)
  objectName                  : "mainView";

  // Note! applicationName needs to match the "name" field of click manifest
  applicationName             : "metra.jaft";

  width                       : units.gu(100);
  height                      : units.gu(75);

  property string circle_color: '#0054A4';
  property string  md_n__color: '#FF821D';
  property string   ncs__color: '#7C53AF';
  property string  up_n__color: '#236214';

  Page {
    header: PageHeader {
              id   : pageHeader;
              title: i18n.tr("Metra");

              StyleHints {
                foregroundColor: UbuntuColors.orange;
                backgroundColor: UbuntuColors.porcelain;
                dividerColor   : UbuntuColors.slate;
              }
            }

    Label {
      id        : label;
      objectName: "label";

      anchors {
        horizontalCenter: parent.horizontalCenter;
        top             : pageHeader.bottom;
        topMargin       : units.gu(2);
      }

      text: i18n.tr("Hello..");
    }

    Button {
      id        : button;
      objectName: "button";
      width     : parent.width;
      text      : i18n.tr("Tap me!");
      onClicked : {
	NCS.destroy();
        label.text = i18n.tr("Longitude: " +
			     pos_src.position.coordinate.longitude +
			     "; Latitude: " +
			     pos_src.position.coordinate.latitude +
			     "; Fox Lake: " + fox_lake);
      }

      anchors {
        horizontalCenter: parent.horizontalCenter;
        top             : label.bottom;
        topMargin       : units.gu(2);
      }
    }

    PositionSource {
      id            : pos_src;
      updateInterval: 1000;
      active        : true;
    }

    Map {
      id               : map;
      plugin           : Plugin {
	                   id       : plugin;
			   preferred: ["here", "osm"];
                         }
      width            : parent.width;
      height           : parent.width;
      zoomLevel        : map.maximumZoomLevel * 0.60;
      gesture.enabled  : true;

      // Milwaukee-District/North Line
      MapPolyline {
	property real radi: Math.pow(100000000000000000000000000,
				     1 / map.zoomLevel);
	property real zoom: map.zoomLevel;
	id                : md_n;
	line.width        : md_n.zoom;
	line.color        : md_n__color;
	path              : [{latitude: 42.398317, longitude: -88.182255},
			     {latitude: 42.394860, longitude: -88.180451},
			     {latitude: 42.389327, longitude: -88.170570},
			     {latitude: 42.381970, longitude: -88.149470},
			     {latitude: 42.373913, longitude: -88.139901},
			     {latitude: 42.368140, longitude: -88.128852},
			     {latitude: 42.364449, longitude: -88.113934},
			     {latitude: 42.360999, longitude: -88.105350},
			     {latitude: 42.356652, longitude: -88.098410},
			     {latitude: 42.352686, longitude: -88.089777},
			     {latitude: 42.327952, longitude: -88.028203},
			     {latitude: 42.321158, longitude: -88.015558},
			     {latitude: 42.314990, longitude: -88.005320},
			     {latitude: 42.309368, longitude: -87.999925},
			     {latitude: 42.307240, longitude: -87.996451},
			     {latitude: 42.302102, longitude: -87.986853},
			     {latitude: 42.300657, longitude: -87.979606},
			     {latitude: 42.291119, longitude: -87.956451},
			     {latitude: 42.290533, longitude: -87.950456},
			     {latitude: 42.287332, longitude: -87.942341},
			     {latitude: 42.286545, longitude: -87.938590},
			     {latitude: 42.284369, longitude: -87.903081},
			     {latitude: 42.283782, longitude: -87.900595},
			     {latitude: 42.282425, longitude: -87.898413},
			     {latitude: 42.280681, longitude: -87.897134},
			     {latitude: 42.256457, longitude: -87.890209},
			     {latitude: 42.167751, longitude: -87.849670},
			     {latitude: 42.133807, longitude: -87.830621},
			     {latitude: 42.080191, longitude: -87.808490},
			     {latitude: 41.909950, longitude: -87.720282},
			     {latitude: 41.904610, longitude: -87.716415},
			     {latitude: 41.898047, longitude: -87.708677},
			     {latitude: 41.895334, longitude: -87.703744},
			     {latitude: 41.888663, longitude: -87.687341},
			     {latitude: 41.888473, longitude: -87.685807},
			     {latitude: 41.888647, longitude: -87.668033},
			     {latitude: 41.888430, longitude: -87.657355},
			     {latitude: 41.888388, longitude: -87.650624},
			     {latitude: 41.887936, longitude: -87.646643},
			     {latitude: 41.887980, longitude: -87.640807},
			     {latitude: 41.887921, longitude: -87.640501},
			     {latitude: 41.887423, longitude: -87.639849},
			     {latitude: 41.885721, longitude: -87.638928},
			     {latitude: 41.878893, longitude: -87.638977}]
      }
      Component.onCompleted: {
	MD_N.create(map);

	// North Central Service
	NCS.create(map);
      }

      center {
        latitude : pos_src.position.coordinate.latitude;
        longitude: pos_src.position.coordinate.longitude;
      }

      anchors {
        horizontalCenter: parent.horizontalCenter;
        top             : button.bottom;
        topMargin       : units.gu(2);
      }
    }
  }
}