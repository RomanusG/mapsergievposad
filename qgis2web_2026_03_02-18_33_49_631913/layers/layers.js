var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_QuickWKT_1 = new ol.format.GeoJSON();
var features_QuickWKT_1 = format_QuickWKT_1.readFeatures(json_QuickWKT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuickWKT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuickWKT_1.addFeatures(features_QuickWKT_1);
var lyr_QuickWKT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuickWKT_1, 
                style: style_QuickWKT_1,
                popuplayertitle: 'QuickWKT',
                interactive: true,
                title: '<img src="styles/legend/QuickWKT_1.png" /> QuickWKT'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_QuickWKT_1.setVisible(true);lyr_building_2.setVisible(true);lyr_highway_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_QuickWKT_1,lyr_building_2,lyr_highway_3];
lyr_QuickWKT_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wikidata': 'wikidata', 'layer': 'layer', 'drive_through': 'drive_through', 'dispensing': 'dispensing', 'smoking': 'smoking', 'house': 'house', 'substation': 'substation', 'abandoned': 'abandoned', 'disused': 'disused', 'ref': 'ref', 'email': 'email', 'contact:phone': 'contact:phone', 'energy_class': 'energy_class', 'source:addr:housenumber': 'source:addr:housenumber', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'medical_system:western': 'medical_system:western', 'healthcare': 'healthcare', 'health_specialty:emergency_medicine': 'health_specialty:emergency_medicine', 'emergency': 'emergency', 'old_name': 'old_name', 'building:flats': 'building:flats', 'building:part': 'building:part', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand:en': 'brand:en', 'brand': 'brand', 'health_facility:type': 'health_facility:type', 'official_name': 'official_name', 'payment:cards': 'payment:cards', 'inscription': 'inscription', 'landuse': 'landuse', 'shelter': 'shelter', 'addr2:street': 'addr2:street', 'addr2:housenumber': 'addr2:housenumber', 'office': 'office', 'government': 'government', 'contact:website': 'contact:website', 'contact:vk': 'contact:vk', 'contact:twitter': 'contact:twitter', 'contact:facebook': 'contact:facebook', 'contact:email': 'contact:email', 'building:levels:underground': 'building:levels:underground', 'addr:country': 'addr:country', 'power': 'power', 'preschool': 'preschool', 'roof:levels': 'roof:levels', 'tourism': 'tourism', 'toilets': 'toilets', 'phone': 'phone', 'operator': 'operator', 'addr:place': 'addr:place', 'name:sr': 'name:sr', 'name:hr': 'name:hr', 'name:fr': 'name:fr', 'name:et': 'name:et', 'name:de': 'name:de', 'opening_hours': 'opening_hours', 'description': 'description', 'barrier': 'barrier', 'website': 'website', 'wikipedia': 'wikipedia', 'tower:type': 'tower:type', 'roof:shape': 'roof:shape', 'roof:height': 'roof:height', 'man_made': 'man_made', 'source:addr': 'source:addr', 'sport': 'sport', 'leisure': 'leisure', 'height': 'height', 'roof:material': 'roof:material', 'roof:colour': 'roof:colour', 'alt_name': 'alt_name', 'addr:postcode': 'addr:postcode', 'name:en': 'name:en', 'addr:city': 'addr:city', 'shop': 'shop', 'building:architecture': 'building:architecture', 'start_date': 'start_date', 'religion': 'religion', 'ref:temples.ru': 'ref:temples.ru', 'ref:sobory.ru': 'ref:sobory.ru', 'name:ru': 'name:ru', 'name': 'name', 'denomination': 'denomination', 'building:material': 'building:material', 'building:colour': 'building:colour', 'amenity': 'amenity', 'comment': 'comment', 'type': 'type', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'mapillary': 'mapillary', 'maxspeed:forward': 'maxspeed:forward', 'maxspeed:backward': 'maxspeed:backward', 'maxspeed:type': 'maxspeed:type', 'crossing:markings': 'crossing:markings', 'crossing:island': 'crossing:island', 'kerb': 'kerb', 'tactile_paving': 'tactile_paving', 'access': 'access', 'check_date:smoothness': 'check_date:smoothness', 'turn:lanes:forward': 'turn:lanes:forward', 'source:position': 'source:position', 'crossing': 'crossing', 'covered': 'covered', 'footway': 'footway', 'wheelchair': 'wheelchair', 'old_ref': 'old_ref', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'maxlength': 'maxlength', 'width': 'width', 'description': 'description', 'bridge': 'bridge', 'int_name': 'int_name', 'tunnel': 'tunnel', 'layer': 'layer', 'alt_name': 'alt_name', 'sidewalk': 'sidewalk', 'ramp:wheelchair': 'ramp:wheelchair', 'ramp': 'ramp', 'step_count': 'step_count', 'incline': 'incline', 'handrail': 'handrail', 'bus': 'bus', 'foot': 'foot', 'motor_vehicle': 'motor_vehicle', 'bicycle': 'bicycle', 'lane_markings': 'lane_markings', 'smoothness': 'smoothness', 'service': 'service', 'living_street': 'living_street', 'maxspeed': 'maxspeed', 'lit': 'lit', 'lanes': 'lanes', 'image': 'image', 'name:etymology:wikidata': 'name:etymology:wikidata', 'oneway': 'oneway', 'surface': 'surface', 'ref': 'ref', 'postal_code': 'postal_code', 'name': 'name', });
lyr_QuickWKT_1.set('fieldImages', {'fid': '', 'name': 'TextEdit', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wikidata': '', 'layer': '', 'drive_through': '', 'dispensing': '', 'smoking': '', 'house': '', 'substation': '', 'abandoned': '', 'disused': '', 'ref': '', 'email': '', 'contact:phone': '', 'energy_class': '', 'source:addr:housenumber': '', 'internet_access:fee': '', 'internet_access': '', 'medical_system:western': '', 'healthcare': '', 'health_specialty:emergency_medicine': '', 'emergency': '', 'old_name': '', 'building:flats': '', 'building:part': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'brand:en': '', 'brand': '', 'health_facility:type': '', 'official_name': '', 'payment:cards': '', 'inscription': '', 'landuse': '', 'shelter': '', 'addr2:street': '', 'addr2:housenumber': '', 'office': '', 'government': '', 'contact:website': '', 'contact:vk': '', 'contact:twitter': '', 'contact:facebook': '', 'contact:email': '', 'building:levels:underground': '', 'addr:country': '', 'power': '', 'preschool': '', 'roof:levels': '', 'tourism': '', 'toilets': '', 'phone': '', 'operator': '', 'addr:place': '', 'name:sr': '', 'name:hr': '', 'name:fr': '', 'name:et': '', 'name:de': '', 'opening_hours': '', 'description': '', 'barrier': '', 'website': '', 'wikipedia': '', 'tower:type': '', 'roof:shape': '', 'roof:height': '', 'man_made': '', 'source:addr': '', 'sport': '', 'leisure': '', 'height': '', 'roof:material': '', 'roof:colour': '', 'alt_name': '', 'addr:postcode': '', 'name:en': '', 'addr:city': '', 'shop': '', 'building:architecture': '', 'start_date': '', 'religion': '', 'ref:temples.ru': '', 'ref:sobory.ru': '', 'name:ru': '', 'name': '', 'denomination': '', 'building:material': '', 'building:colour': '', 'amenity': '', 'comment': '', 'type': '', 'building:levels': '', 'addr:street': '', 'addr:housenumber': '', 'address': '', });
lyr_highway_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'mapillary': '', 'maxspeed:forward': '', 'maxspeed:backward': '', 'maxspeed:type': '', 'crossing:markings': '', 'crossing:island': '', 'kerb': '', 'tactile_paving': '', 'access': '', 'check_date:smoothness': '', 'turn:lanes:forward': '', 'source:position': '', 'crossing': '', 'covered': '', 'footway': '', 'wheelchair': '', 'old_ref': '', 'lanes:forward': '', 'lanes:backward': '', 'maxlength': '', 'width': '', 'description': '', 'bridge': '', 'int_name': '', 'tunnel': '', 'layer': '', 'alt_name': '', 'sidewalk': '', 'ramp:wheelchair': '', 'ramp': '', 'step_count': '', 'incline': '', 'handrail': '', 'bus': '', 'foot': '', 'motor_vehicle': '', 'bicycle': '', 'lane_markings': '', 'smoothness': '', 'service': '', 'living_street': '', 'maxspeed': '', 'lit': '', 'lanes': '', 'image': '', 'name:etymology:wikidata': '', 'oneway': '', 'surface': '', 'ref': '', 'postal_code': '', 'name': '', });
lyr_QuickWKT_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wikidata': 'no label', 'layer': 'no label', 'drive_through': 'no label', 'dispensing': 'no label', 'smoking': 'no label', 'house': 'no label', 'substation': 'no label', 'abandoned': 'no label', 'disused': 'no label', 'ref': 'no label', 'email': 'no label', 'contact:phone': 'no label', 'energy_class': 'no label', 'source:addr:housenumber': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'medical_system:western': 'no label', 'healthcare': 'no label', 'health_specialty:emergency_medicine': 'no label', 'emergency': 'no label', 'old_name': 'no label', 'building:flats': 'no label', 'building:part': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand:en': 'no label', 'brand': 'no label', 'health_facility:type': 'no label', 'official_name': 'no label', 'payment:cards': 'no label', 'inscription': 'no label', 'landuse': 'no label', 'shelter': 'no label', 'addr2:street': 'no label', 'addr2:housenumber': 'no label', 'office': 'no label', 'government': 'no label', 'contact:website': 'no label', 'contact:vk': 'no label', 'contact:twitter': 'no label', 'contact:facebook': 'no label', 'contact:email': 'no label', 'building:levels:underground': 'no label', 'addr:country': 'no label', 'power': 'no label', 'preschool': 'no label', 'roof:levels': 'no label', 'tourism': 'no label', 'toilets': 'no label', 'phone': 'no label', 'operator': 'no label', 'addr:place': 'no label', 'name:sr': 'no label', 'name:hr': 'no label', 'name:fr': 'no label', 'name:et': 'no label', 'name:de': 'no label', 'opening_hours': 'no label', 'description': 'no label', 'barrier': 'no label', 'website': 'no label', 'wikipedia': 'no label', 'tower:type': 'no label', 'roof:shape': 'no label', 'roof:height': 'no label', 'man_made': 'no label', 'source:addr': 'no label', 'sport': 'no label', 'leisure': 'no label', 'height': 'no label', 'roof:material': 'no label', 'roof:colour': 'no label', 'alt_name': 'no label', 'addr:postcode': 'no label', 'name:en': 'no label', 'addr:city': 'no label', 'shop': 'no label', 'building:architecture': 'no label', 'start_date': 'no label', 'religion': 'no label', 'ref:temples.ru': 'no label', 'ref:sobory.ru': 'no label', 'name:ru': 'no label', 'name': 'no label', 'denomination': 'no label', 'building:material': 'no label', 'building:colour': 'no label', 'amenity': 'no label', 'comment': 'no label', 'type': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_highway_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'mapillary': 'no label', 'maxspeed:forward': 'no label', 'maxspeed:backward': 'no label', 'maxspeed:type': 'no label', 'crossing:markings': 'no label', 'crossing:island': 'no label', 'kerb': 'no label', 'tactile_paving': 'no label', 'access': 'no label', 'check_date:smoothness': 'no label', 'turn:lanes:forward': 'no label', 'source:position': 'no label', 'crossing': 'no label', 'covered': 'no label', 'footway': 'no label', 'wheelchair': 'no label', 'old_ref': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'maxlength': 'no label', 'width': 'no label', 'description': 'no label', 'bridge': 'no label', 'int_name': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'alt_name': 'no label', 'sidewalk': 'no label', 'ramp:wheelchair': 'no label', 'ramp': 'no label', 'step_count': 'no label', 'incline': 'no label', 'handrail': 'no label', 'bus': 'no label', 'foot': 'no label', 'motor_vehicle': 'no label', 'bicycle': 'no label', 'lane_markings': 'no label', 'smoothness': 'no label', 'service': 'no label', 'living_street': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'lanes': 'no label', 'image': 'no label', 'name:etymology:wikidata': 'no label', 'oneway': 'no label', 'surface': 'no label', 'ref': 'no label', 'postal_code': 'no label', 'name': 'no label', });
lyr_highway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});