var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN', // ⚠️ ഇവിടെ നിങ്ങളുടെ യഥാർത്ഥ pk. ടോക്കൺ നൽകുക
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Wayanad Places of Interest',
    subtitle: 'Ărramăt Project',
    byline: 'By ImpactMetrics',
    footer: 'Powered by Mapbox Storytelling',
    chapters: [
        {
            id: 'dept-fisheries',
            title: 'Department of Fisheries',
            description: 'വയനാട് ഫിഷറീസ് ഡിപ്പാർട്ട്മെന്റ് ഓഫീസ്.',
            location: {
                center: [76.0269542, 11.5398737],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'dr-sithara',
            title: 'Dr Sithara Dileep, BHMS',
            description: 'ഡോ. സിതാര ദിലീപ് ക്ലിനിക്ക്.',
            location: {
                center: [76.1093966, 11.5754096],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'enna-ooru',
            title: 'Enn Ooru Open Air Theatre',
            description: 'എൻ ഊര് ഗോത്രപൈതൃക ഗ്രാമം ഓപ്പൺ എയർ തിയേറ്റർ.',
            location: {
                center: [76.0155389, 11.528533],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
