ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12472227.022983, -853009.855783, 12487790.646764, -843596.893596]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleEarth_1 = new ol.layer.Tile({
            'title': 'Google Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189 &gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_RuteTerpendek_2 = new ol.format.GeoJSON();
var features_RuteTerpendek_2 = format_RuteTerpendek_2.readFeatures(json_RuteTerpendek_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteTerpendek_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteTerpendek_2.addFeatures(features_RuteTerpendek_2);
var lyr_RuteTerpendek_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteTerpendek_2, 
                style: style_RuteTerpendek_2,
                popuplayertitle: 'Rute Terpendek',
                interactive: true,
    title: 'Rute Terpendek<br />\
    <img src="styles/legend/RuteTerpendek_2_0.png" /> Stasiun Kertosono to Masjid Islamic Center Moeldoko Jombang<br />\
    <img src="styles/legend/RuteTerpendek_2_1.png" /> Stasiun Kertosono to Pabrik Gula Lestari<br />\
    <img src="styles/legend/RuteTerpendek_2_2.png" /> Stasiun Kertosono to Pasar Kedungringin<br />\
    <img src="styles/legend/RuteTerpendek_2_3.png" /> Stasiun Kertosono to Pasar Kertosono<br />\
    <img src="styles/legend/RuteTerpendek_2_4.png" /> Stasiun Kertosono to Pasar Rakyat Lengkong<br />\
    <img src="styles/legend/RuteTerpendek_2_5.png" /> Stasiun Kertosono to Pasar Sambikenceng<br />\
    <img src="styles/legend/RuteTerpendek_2_6.png" /> Stasiun Kertosono to RSUD Kertosono<br />' });
var format_RuteTercepat_3 = new ol.format.GeoJSON();
var features_RuteTercepat_3 = format_RuteTercepat_3.readFeatures(json_RuteTercepat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteTercepat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteTercepat_3.addFeatures(features_RuteTercepat_3);
var lyr_RuteTercepat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteTercepat_3, 
                style: style_RuteTercepat_3,
                popuplayertitle: 'Rute Tercepat',
                interactive: true,
    title: 'Rute Tercepat<br />\
    <img src="styles/legend/RuteTercepat_3_0.png" /> Stasiun Kertosono to Masjid Islamic Center Moeldoko Jombang<br />\
    <img src="styles/legend/RuteTercepat_3_1.png" /> Stasiun Kertosono to Pabrik Gula Lestari<br />\
    <img src="styles/legend/RuteTercepat_3_2.png" /> Stasiun Kertosono to Pasar Kedungringin<br />\
    <img src="styles/legend/RuteTercepat_3_3.png" /> Stasiun Kertosono to Pasar Kertosono<br />\
    <img src="styles/legend/RuteTercepat_3_4.png" /> Stasiun Kertosono to Pasar Rakyat Lengkong<br />\
    <img src="styles/legend/RuteTercepat_3_5.png" /> Stasiun Kertosono to Pasar Sambikenceng<br />\
    <img src="styles/legend/RuteTercepat_3_6.png" /> Stasiun Kertosono to RSUD Kertosono<br />' });
var format_RuteRekomendasi_4 = new ol.format.GeoJSON();
var features_RuteRekomendasi_4 = format_RuteRekomendasi_4.readFeatures(json_RuteRekomendasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteRekomendasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteRekomendasi_4.addFeatures(features_RuteRekomendasi_4);
var lyr_RuteRekomendasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteRekomendasi_4, 
                style: style_RuteRekomendasi_4,
                popuplayertitle: 'Rute Rekomendasi',
                interactive: true,
    title: 'Rute Rekomendasi<br />\
    <img src="styles/legend/RuteRekomendasi_4_0.png" /> Stasiun Kertosono to Masjid Islamic Center Moeldoko Jombang<br />\
    <img src="styles/legend/RuteRekomendasi_4_1.png" /> Stasiun Kertosono to Pabrik Gula Lestari<br />\
    <img src="styles/legend/RuteRekomendasi_4_2.png" /> Stasiun Kertosono to Pasar Kedungringin<br />\
    <img src="styles/legend/RuteRekomendasi_4_3.png" /> Stasiun Kertosono to Pasar Kertosono<br />\
    <img src="styles/legend/RuteRekomendasi_4_4.png" /> Stasiun Kertosono to Pasar Rakyat Lengkong<br />\
    <img src="styles/legend/RuteRekomendasi_4_5.png" /> Stasiun Kertosono to Pasar Sambikenceng<br />\
    <img src="styles/legend/RuteRekomendasi_4_6.png" /> Stasiun Kertosono to RSUD Kertosono<br />' });
var format_Lokasi_5 = new ol.format.GeoJSON();
var features_Lokasi_5 = format_Lokasi_5.readFeatures(json_Lokasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_5.addFeatures(features_Lokasi_5);
var lyr_Lokasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_5, 
                style: style_Lokasi_5,
                popuplayertitle: 'Lokasi',
                interactive: true,
    title: 'Lokasi<br />\
    <img src="styles/legend/Lokasi_5_0.png" /> Masjid Islamic Center Moeldoko Jombang<br />\
    <img src="styles/legend/Lokasi_5_1.png" /> Pabrik Gula Lestari<br />\
    <img src="styles/legend/Lokasi_5_2.png" /> Pasar Kedungringin<br />\
    <img src="styles/legend/Lokasi_5_3.png" /> Pasar Kertosono<br />\
    <img src="styles/legend/Lokasi_5_4.png" /> Pasar Rakyat Lengkong<br />\
    <img src="styles/legend/Lokasi_5_5.png" /> Pasar Sambikenceng<br />\
    <img src="styles/legend/Lokasi_5_6.png" /> RSUD Kertosono<br />' });
var format_StartLokasi_6 = new ol.format.GeoJSON();
var features_StartLokasi_6 = format_StartLokasi_6.readFeatures(json_StartLokasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StartLokasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StartLokasi_6.addFeatures(features_StartLokasi_6);
var lyr_StartLokasi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StartLokasi_6, 
                style: style_StartLokasi_6,
                popuplayertitle: 'Start Lokasi',
                interactive: true,
    title: 'Start Lokasi<br />\
    <img src="styles/legend/StartLokasi_6_0.png" /> Stasiun Kertosono<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleEarth_1.setVisible(true);lyr_RuteTerpendek_2.setVisible(true);lyr_RuteTercepat_3.setVisible(true);lyr_RuteRekomendasi_4.setVisible(true);lyr_Lokasi_5.setVisible(true);lyr_StartLokasi_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleEarth_1,lyr_RuteTerpendek_2,lyr_RuteTercepat_3,lyr_RuteRekomendasi_4,lyr_Lokasi_5,lyr_StartLokasi_6];
lyr_RuteTerpendek_2.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteTercepat_3.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteRekomendasi_4.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Lokasi_5.set('fieldAliases', {'Lokasi': 'Lokasi', 'x': 'x', 'y': 'y', });
lyr_StartLokasi_6.set('fieldAliases', {'Lokasi': 'Lokasi', 'x': 'x', 'y': 'y', });
lyr_RuteTerpendek_2.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteTercepat_3.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteRekomendasi_4.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Lokasi_5.set('fieldImages', {'Lokasi': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_StartLokasi_6.set('fieldImages', {'Lokasi': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_RuteTerpendek_2.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_RuteTercepat_3.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_RuteRekomendasi_4.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Lokasi_5.set('fieldLabels', {'Lokasi': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', });
lyr_StartLokasi_6.set('fieldLabels', {'Lokasi': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', });
lyr_StartLokasi_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});