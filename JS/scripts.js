	// Mapa Leaflet
	var mapa = L.map('mapid').setView([10, -84], 7
	);
	
	// Capa base
	var osm = L.tileLayer(
	  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', 
	  {
	    maxZoom: 19,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  }
	).addTo(mapa);	
	
	// Otra capa base
        var esri = L.tileLayer(
	  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
	  {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	  }
	).addTo(mapa);
	
	// otra capa base
		var stamen = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: 'abcd',
		minZoom: 0,
		maxZoom: 20,
		ext: 'png'
		}
	).addTo(mapa);	
	
	// otra capa base
		var natgeo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
		}
	).addTo(mapa);	
	
	// otra capa base
		var Thunderforest = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
		}
	).addTo(mapa);
	
	// otra capa base
		var Terrain = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
		
		}
	).addTo(mapa);
	
	// Marcadores
	liberia = L.marker([10.633333, -85.433333]);
	liberia.bindTooltip("Liberia").openTooltip();
	liberia.bindPopup("<h1>Liberia</h1>Enlace a <a href='https://en.wikipedia.org/wiki/Liberia,_Costa_Rica'>Wikipedia<a/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Liberia%2C_Costa_Rica_-_Church.png/129px-Liberia%2C_Costa_Rica_-_Church.png' height='50'>").openPopup();
	liberia.addTo(mapa);
	
	limon = L.marker([10.002216, -83.084037]);
	limon.bindTooltip("Limón").openTooltip();
	limon.bindPopup("<h1>Limón</h1>Enlace a <a href='https://en.wikipedia.org/wiki/Lim%C3%B3n'>Wikipedia<a/><img src=' https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Vasgas_Park_in_Costa_Rica.PNG/129px-Vasgas_Park_in_Costa_Rica.PNG' height='50'>").openPopup();
	limon.addTo(mapa);	  
	    
	puntarenas = L.marker([9.966667, -84.833333]);
	puntarenas.bindTooltip("Puntarenas").openTooltip();
	puntarenas.bindPopup("<h1>Puntarenas</h1>Enlace a <a href='https://en.wikipedia.org/wiki/Puntarenas'>Wikipedia<a/><img src=' https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Vasgas_Park_in_Costa_Rica.PNG/129px-Vasgas_Park_in_Costa_Rica.PNG' height='50'>").openPopup();
	puntarenas.addTo(mapa);	
	
	sanjose = L.marker([9.933333, -84.083333]);
	sanjose.bindTooltip("San José").openTooltip();
	sanjose.bindPopup("<h1>San José</h1>Enlace a <a href='https://en.wikipedia.org/wiki/San_Jos%C3%A9,_Costa_Rica'>Wikipedia<a/><img src=' https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Vasgas_Park_in_Costa_Rica.PNG/129px-Vasgas_Park_in_Costa_Rica.PNG' height='50'>").openPopup();
	sanjose.addTo(mapa);
	
	// Conjunto de capas base
	var mapasBase = {
	    "ESRI": esri,		
	    "OSM": osm,
		"STAMEN": stamen,
		"NAT GEO" : natgeo,
		"Thunderforest" : Thunderforest,
		"Terrain" : Terrain
	};	    
	
	// Control de capas
        L.control.layers(mapasBase).addTo(mapa);
		
		
	// Control de escala
        L.control.scale({position:'topright', imperial:false}).addTo(mapa);
	
	