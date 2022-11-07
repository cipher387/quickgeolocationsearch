ymaps = window.ymaps;
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [35.00, 1.00],
        zoom: 4
    }, {
        searchControlProvider: 'yandex#search'
    });
myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
		document.getElementById("latitude").value = [coords[0].toPrecision(9)];
		document.getElementById("longitude").value = [coords[1].toPrecision(9)];
            myMap.balloon.open(coords, {
                contentHeader:'Coordinates:',
                contentBody:'<p>' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });

}

function buttonOpen(buttonValue) {

    latitude = Number(document.getElementById("latitude").value).toFixed(4);
    longitude = Number(document.getElementById("longitude").value).toFixed(4);
	

    const links = [];
    links["YandexMaps"] = "https://maps.yandex.com/?ll="+longitude+","+latitude+"&pt="+longitude+","+latitude;
    links["YandexPhotos"] = "https://yandex.com/maps/?l=pht&ll="+longitude+","+latitude+"&pt="+longitude+","+latitude;
    links["Twitter"] = "https://twitter.com/search?q=near%3A"+latitude+"%2C"+longitude+"&src=typed_query&f=live";
    links["Onlyfinder"] = "https://onlyfinder.com/location%3a"+latitude+"%2c"+longitude+"%2c100km/profiles/";
    links["Ventusky"] = "https://www.ventusky.com/"+latitude+";"+longitude;
    links["Strava"] = "https://labs.strava.com/heatmap/#10.86/"+longitude+"/"+latitude+"/hot/all";
    links["Wikimapia"] = "http://wikimapia.org/#lang=en&lat="+latitude+"&lon="+longitude+"&z=15&m=b";
    links["Pastvu"] = "https://pastvu.com?g="+latitude+","+longitude+"&z=16&s=osm&t=mapnik&type=1";
    links["LightPollutionMap"] = "https://www.lightpollutionmap.info/#zoom=10.00&lat="+latitude+"&lon="+longitude+"&layers=B0FFFFFFFTFFFFFFFFFF";
    links["Skyvector"] = "https://skyvector.com/?ll="+latitude+","+longitude+"&chart=301&zoom=6";
    links["Emporis"] = "https://www.emporis.com/buildings/map#c="+latitude+","+longitude+"&z=16";
    links["Opencellid"] = "https://opencellid.org/#zoom=13&lat="+latitude+"&lon="+longitude;
    links["GoogleMaps"] = "https://www.google.com/maps/@"+latitude+","+longitude+",12.12z";
    links["ShadowMap"] = "https://app.shadowmap.org/?lat="+latitude+"&lng="+longitude+"&zoom=16&basemap=map&time=1654604735200&vq=2";
    links["SunCalc"] = "https://www.suncalc.org/#/"+latitude+","+longitude+",3/2022.06.07/15:53/1/3";
    links["SentinelHub"] = "https://apps.sentinel-hub.com/sentinel-playground/?source=S2L2A&lat="+latitude+"&lng="+longitude+"&zoom=12&preset=1_TRUE_COLOR&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2021-06-01%7C2021-12-06&atmFilter=&showDates=false";
    links["Copernix"] = "https://copernix.io/#?where="+longitude+","+latitude+",9&?query=&?map_type=hybrid";
    links["Openstreetmap"] = "https://www.openstreetmap.org/#map=10/"+latitude+"/"+longitude;
    links["Virtualglobetrotting"] = "https://virtualglobetrotting.com/ll/"+latitude+","+longitude;
    links["YouTube"] = "https://mattw.io/youtube-geofind/location?location="+latitude+","+longitude+"&doSearch=true";
    links["OpenMapSwitcher"] = "https://tankaru.github.io/OpenSwitchMapsWeb/index.html#https://www.openstreetmap.org/#map=10/"+latitude+"/"+longitude;

    window.open(links[buttonValue]);

}


 
   



