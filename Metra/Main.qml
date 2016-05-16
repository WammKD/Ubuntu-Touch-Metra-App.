import "md_n.js" as MD_N;
import "ncs.js"  as NCS;
import "up_n.js" as UP_N;
import QtLocation 5.4;
import QtPositioning 5.4;
import QtQuick 2.4;
import Ubuntu.Components 1.3;
import Ubuntu.Components.Themes 1.3;

/*!
 *  \brief MainView with a Label and Button elements.
 */

MainView {
  // objectName for functional testing purposes (autopilot-qt5)
  objectName                         : "mainView";

  // Note! applicationName needs to match the "name" field of click manifest
  applicationName                    : "metra.jaft";

  width                              : units.gu(100);
  height                             : units.gu(75);

  property string         metra_color: '#0054A4';
  property string        circle_color: 'white';
  property string circle_border_color: metra_color;
  property string         md_n__color: '#FF821D';
  property string          ncs__color: '#7C53AF';
  property string         up_n__color: '#236214';
  
  theme.palette                      : Palette {
                                         selected.backgroundTertiaryText: UbuntuColors.porcelain;

					 normal {
					   base: metra_color;
					   backgroundTertiaryText: UbuntuColors.porcelain;
					 }
                                       }

  Page {
    header: PageHeader {
              id       : page_header;
              title    : "Metra";
	      extension: Column {
		           width  : parent.width;
			   height : children[0].height +
			            children[1].height +
				    units.gu(1);
		           spacing: units.gu(1);

			   Row {
			     height                  : children[0].height;
			     spacing                 : units.gu(3);
			     anchors.horizontalCenter: parent.horizontalCenter;

			     Column {
			       spacing: units.gu(1);

			       Label {
				 text     : "UP-N";
				 color    : UbuntuColors.porcelain;
				 font.bold: true;

				 anchors {
				   horizontalCenter: parent.horizontalCenter;
				 }
			       }

			       Switch {
				 id       : up_n__switch;
				 onClicked: {
				   if(checked) {
				     ncs__switch.checked = false;
				     NCS.destroy();
				     md_n__switch.checked = false;
				     MD_N.destroy();
				     UP_N.create(map);
				   } else {
				     UP_N.destroy();
				   }
				 }

				 StyleHints {
				   backgroundColor: UbuntuColors.red;
				 }
			       }
			     }

			     Column {
			       spacing: units.gu(1);

			       Label {
				 text     : "MD-N";
				 color    : UbuntuColors.porcelain;
				 font.bold: true;

				 anchors {
				   horizontalCenter: parent.horizontalCenter;
				 }
			       }

			       Switch {
				 id       : md_n__switch;
				 checked  : true;
				 onClicked: {
				   if(checked) {
				     ncs__switch.checked = false;
				     NCS.destroy();
				     up_n__switch.checked = false;
				     UP_N.destroy();
				     MD_N.create(map);
				   } else {
				     MD_N.destroy();
				   }
				 }

				 StyleHints {
				   backgroundColor: UbuntuColors.red;
				 }
			       }
			     }

			     Column {
			       spacing: units.gu(1);

			       Label {
				 text     : "NCS";
				 color    : UbuntuColors.porcelain;
				 font.bold: true;

				 anchors {
				   horizontalCenter: parent.horizontalCenter;
				 }
			       }

			       Switch {
				 id       : ncs__switch;
				 onClicked: {
				   if(checked) {
				     md_n__switch.checked = false;
				     MD_N.destroy();
				     up_n__switch.checked = false;
				     UP_N.destroy();
				     NCS.create(map);
				   } else {
				     NCS.destroy();
				   }
				 }

				 StyleHints {
				   foregroundColor: UbuntuColors.purple;
				   backgroundColor: UbuntuColors.red;
				 }
			       }
			     }
			   }

			   Sections {
			     id           : sects;
			     width        : parent.width;
			     actions      : [Action { text: "Schedule"; },
					     Action { text: "Map";      }]
			   }
	                 }

              StyleHints {
                foregroundColor: UbuntuColors.porcelain;
                backgroundColor: metra_color;
                dividerColor   : UbuntuColors.slate;
              }
            }

    Label {
      id        : label;
      objectName: "label";

      anchors {
        horizontalCenter: parent.horizontalCenter;
        top             : page_header.bottom;
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
	MD_N.init(map, md_n);
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