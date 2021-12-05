function buttonOpen(buttonValue) {

    latitude = document.getElementById("latitude").value;
    longitude = document.getElementById("longitude").value;
    const links = [];
    links["YandexMaps"] = "https://maps.yandex.com/?ll="+longitude+","+latitude+"&pt="+longitude+","+latitude;
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
    links["SentinelHub"] = "https://apps.sentinel-hub.com/sentinel-playground/?source=S2L2A&lat="+latitude+"&lng="+longitude+"&zoom=12&preset=1_TRUE_COLOR&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2021-06-01%7C2021-12-06&atmFilter=&showDates=false";
    links["Copernix"] = "https://copernix.io/#?where="+longitude+","+latitude+",9&?query=&?map_type=hybrid";
    links["Openstreetmap"] = "https://www.openstreetmap.org/#map=10/"+latitude+"/"+longitude;

    window.open(links[buttonValue]);

}


 
   



