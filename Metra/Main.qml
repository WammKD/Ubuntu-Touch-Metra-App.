import QtLocation 5.4
import QtPositioning 5.4
import QtQuick 2.4
import Ubuntu.Components 1.3

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

  function calcCircleRadius(zoom) {
    return Math.pow(100000000000000000000000000, 1 / zoom);
  }

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
			     pos_src.position.coordinate.latitude +
			     "\nMax. Zoom Level: " + map.maximumZoomLevel +
			     "; Min. Zoom Level: " + map.minimumZoomLevel);
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
      zoomLevel      : map.maximumZoomLevel * 0.60;
      gesture.enabled: true;

      // Milwaukee-District/North Line
      MapPolyline {
	id        : md_n;
	line.width: map.zoomLevel;
	line.color: '#FF821D';
	path      : [{latitude: 42.398317, longitude: -88.182255},
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
      MapCircle {
	id    : fox_lake;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.398317;
	  longitude: -88.182255;
	}
      }
      MapCircle {
	id    : ingleside;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.383856;
	  longitude: -88.153554;
	}
      }
      MapCircle {
	id    : long_lake;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.368050;
	  longitude: -88.128056;
	}
      }
      MapCircle {
	id    : round_lake;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.354575;
	  longitude: -88.094129;
	}
      }
      MapCircle {
	id    : grayslake;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.333680;
	  longitude: -88.043307;
	}
      }
      MapCircle {
	id    : prarie_crossing_libertyville;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.320739;
	  longitude: -88.015229;
	}
      }
      MapCircle {
	id    : libertyville;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.291030;
	  longitude: -87.956534;
	}
      }
      MapCircle {
	id    : lake_forest;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.223619;
	  longitude: -87.874699;
	}
      }
      MapCircle {
	id    : deerfield;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.167977;
	  longitude: -87.849967;
	}
      }
      MapCircle {
	id    : lake_cook_road;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.152269;
	  longitude: -87.841452;
	}
      }
      MapCircle {
	id    : northbrook;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.126826;
	  longitude: -87.827902;
	}
      }
      MapCircle {
	id    : glen_of_north_glenview;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.097562;
	  longitude: -87.815908;
	}
      }
      MapCircle {
	id    : glenview;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.075010;
	  longitude: -87.805658;
	}
      }
      MapCircle {
	id    : golf;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.058334;
	  longitude: -87.797018;
	}
      }
      MapCircle {
	id    : morton_grove;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.034936;
	  longitude: -87.785162;
	}
      }
      MapCircle {
	id    : edgebrook;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  41.997777;
	  longitude: -87.765563;
	}
      }
      MapCircle {
	id    : forest_glen;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  41.978184;
	  longitude: -87.755568;
	}
      }
      MapCircle {
	id    : mayfair;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  41.959720;
	  longitude: -87.745841;
	}
      }
      MapCircle {
	id    : grayland;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  41.948887;
	  longitude: -87.740285;
	}
      }
      MapCircle {
	id    : healy;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  41.924778;
	  longitude: -87.727785;
	}
      }
      MapCircle {
	id    : western_avenue;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  41.889155;
	  longitude: -87.688135;
	}
      }
      MapCircle {
	id    : union;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  41.878755;
	  longitude: -87.638858;
	}
      }

      // North Central Service
      MapPolyline {
	id        : ncs;
	line.width: map.zoomLevel;
	line.color: '#7C53AF';
	path      : [{latitude: 42.481071, longitude: -88.092227},
		     {latitude: 42.464225, longitude: -88.090675},
		     {latitude: 42.429313, longitude: -88.084349},
		     {latitude: 42.367944, longitude: -88.057032},
		     {latitude: 42.302731, longitude: -88.005605},
		     {latitude: 42.278998, longitude: -88.003958},
		     {latitude: 42.273015, longitude: -88.002268}]
      }
      MapCircle {
	id    : antioch;
	color : circle_color;
	radius: calcCircleRadius(map.zoomLevel);

	center {
	  latitude :  42.481023;
	  longitude: -88.092387;
	}
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