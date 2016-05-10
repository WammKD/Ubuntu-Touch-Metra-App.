import QtLocation 5.4
import QtPositioning 5.4
import QtQuick 2.4
import Ubuntu.Components 1.3

/*!
 *  \brief MainView with a Label and Button elements.
 */

MainView {
  // objectName for functional testing purposes (autopilot-qt5)
  objectName     : "mainView";

  // Note! applicationName needs to match the "name" field of click manifest
  applicationName: "metra.jaft";

  width          : units.gu(100);
  height         : units.gu(75);

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
        label.text = i18n.tr("Longitude: " +
			     pos_src.position.coordinate.longitude +
			     "; Latitude: " +
			     pos_src.position.coordinate.latitude);
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
      id             : map;
      plugin         : Plugin {
	                 id       : plugin;
			 preferred: ["here", "osm"];
                       }
      width          : parent.width;
      height         : parent.width;
      zoomLevel      : 9.0;
      gesture.enabled: true;

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