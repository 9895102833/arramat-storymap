var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiOTg5NTEwMjgzMyIsImEiOiJjbXVpNGxiYTcwdnk5MnlzYTY1bjR0ZnFlIn0.YaChJ7qN7E6gWJXOpMTxpg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Your Title Goes Here',
    subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    byline: 'By a I.M. Amapper',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
        id: 'fisheries',
        title: 'Department of Fisheries',
        description: 'ഫിഷറീസ് ഡിപ്പാർട്ട്മെന്റ് ലൊക്കേഷൻ.',
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
        id: 'sithara-clinic',
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
