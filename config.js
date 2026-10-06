var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiOTg5NTEwMjgzMyIsImEiOiJjbXVpNGxiYTcwdnk5MnlzYTY1bjR0ZnFlIn0.YaChJ7qN7E6gWJXOpMTxpg', // ഇവിടെ നിങ്ങളുടെ യഥാർത്ഥ pk. ടോക്കൺ നൽകുക
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Wayanad Place of Interests (ILPBPs)',
    subtitle: 'Mapping Pathway 4 - Ărramăt Project',
    byline: 'By ImpactMetrics',
    footer: 'Data source from QGIS Layer. Powered by Mapbox & GitHub.',
    chapters: [
        {
            id: 'dept-fisheries',
            title: 'Department of Fisheries',
            description: 'വയനാട് ഫിഷറീസ് ഡിപ്പാർട്ട്മെന്റ് ഓഫീസ്.',
            location: { center: [76.0269542, 11.5398737], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'dr-sithara',
            title: 'Dr Sithara Dileep, BHMS',
            description: 'ഡോ. സിതാര ദിലീപ് ക്ലിനിക്ക്.',
            location: { center: [76.1093966, 11.5754096], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'nallannoor-anganwadi',
            title: 'Cno.04 Nallannoor Anganwadi, Muppinad',
            description: 'മുപ്പൈനാട് നല്ലണ്ണൂർ അങ്കണവാടി.',
            location: { center: [76.1720224, 11.5550103], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'chennalode-2',
            title: 'Chennalode 2',
            description: 'ചെന്നലോട് പ്രൊജക്റ്റ് ഏരിയ 2.',
            location: { center: [75.9939676, 11.650111], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'church',
            title: 'Church',
            description: 'പ്രദേശത്തെ പ്രധാന ക്രൈസ്തവ ദേവാലയം.',
            location: { center: [76.2118451, 11.551255], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'parakunnu-anganvadi',
            title: 'Parakunnu Anganvadi',
            description: 'പാറക്കുന്ന് അങ്കണവാടി കേന്ദ്രം.',
            location: { center: [76.0128141, 11.5882674], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'parnirappkunnu-anganvadi',
            title: 'Parnirappkunnu Anganvadi',
            description: 'പാറനിരപ്പ്കുന്ന് അങ്കണവാടി.',
            location: { center: [76.0303199, 11.6156969], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'poi-8',
            title: 'Wayanad POI Location 8',
            description: 'പ്രൊജക്റ്റുമായി ബന്ധപ്പെട്ട ലൊക്കേഷൻ പോയിന്റ്.',
            location: { center: [76.0068318, 11.6073016], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'ems-colony-ward-1',
            title: 'EMS COLONY Ward 1',
            description: 'ഇ.എം.എസ് കോളനി ഒന്നാം വാർഡ്.',
            location: { center: [76.0064632, 11.61693], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'edathil-colony-1',
            title: 'Edathil Tribal Colony, Vazhavatta (Point 1)',
            description: 'വാഴവറ്റ ഇടത്തിൽ ഗോത്രവർഗ്ഗ കോളനി ലൊക്കേഷൻ 1.',
            location: { center: [76.1531611, 11.6234209], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'edathil-colony-2',
            title: 'Edathil Tribal Colony, Vazhavatta (Point 2)',
            description: 'വാഴവറ്റ ഇടത്തിൽ ഗോത്രവർഗ്ഗ കോളനി ലൊക്കേഷൻ 2.',
            location: { center: [76.1542877, 11.6227454], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'abdul-kalam-hall',
            title: 'Dr A P J Abdul Kalam Community Hall, Meppadi',
            description: 'മേപ്പാടി ഡോ. എ.പി.ജെ. അബ്ദുൽ കലാം കമ്മ്യൂണിറ്റി ഹാൾ.',
            location: { center: [76.131318, 11.559379], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'ems-town-hall',
            title: 'E M S Memorial Town Hall, Meppadi',
            description: 'മേപ്പാടി ഇ.എം.എസ് മെമ്മോറിയൽ ടൗൺ ഹാൾ.',
            location: { center: [76.1349809, 11.5532576], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: '50-acer-estate',
            title: '50 Acer Estate',
            description: 'മേപ്പാടി മേഖലയിലെ 50 ഏക്കർ എസ്റ്റേറ്റ് പരിസരം.',
            location: { center: [76.1454789, 11.5377802], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'family-wealth-care',
            title: 'Family Wealth Care Thrikaipetta',
            description: 'തൃകൈപ്പറ്റ ഫാമിലി ഹെൽത്ത് കെയർ സെന്റർ.',
            location: { center: [76.1386163, 11.5927193], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'esaf-bank',
            title: 'Esaf Bank',
            description: 'മേഖലയിലെ ഇസാഫ് ബാങ്ക് ബ്രാഞ്ച്.',
            location: { center: [76.03922, 11.5558281], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'chundale-estate',
            title: 'Chundale Estate',
            description: 'ചുണ്ടേൽ എസ്റ്റേറ്റ് പ്രൊജക്റ്റ് ലൊക്കേഷൻ.',
            location: { center: [76.0460553, 11.5806189], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'chundale-anganvady',
            title: 'Chundale Anganavady, Chundale',
            description: 'ചുണ്ടേൽ അങ്കണവാടി കേന്ദ്രം.',
            location: { center: [76.056966, 11.5745304], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'dtpc-toilet',
            title: 'DTPC Public Toilet, Pookode',
            description: 'പൂക്കോട് തടാക പരിസരത്തെ ഡി.റ്റി.പി.സി പബ്ലിക് ടോയ്‌‌ലറ്റ്.',
            location: { center: [76.0279024, 11.536199], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'coffee-board',
            title: 'Coffee Board, Chundale',
            description: 'ചുണ്ടേൽ കോഫി ബോർഡ് ഓഫീസ്.',
            location: { center: [76.0568886, 11.5732197], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'chundale-po',
            title: 'Chundale Post Office, Chundale',
            description: 'ചുണ്ടേൽ പോസ്റ്റ് ഓഫീസ്.',
            location: { center: [76.0569485, 11.5732999], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'fhc-vazhavatta',
            title: 'Family Health Centre Vazhavatta',
            description: 'വാഴവറ്റ ഫാമിലി ഹെൽത്ത് സെന്റർ.',
            location: { center: [76.143777, 11.6004629], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: '4-cent-colony',
            title: '4 cent Colony, Karingannikunn',
            description: 'കരിങ്കണ്ണിക്കുന്ന് 4 സെന്റ് കോളനി പരിസരം.',
            location: { center: [76.1367771, 11.6285536], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'kuruma-colony',
            title: 'Pannikuzhi Kuruma Colony',
            description: 'പന്നിக்குഴി കുറുമ ഗോത്രവർഗ്ഗ കോളനി.',
            location: { center: [76.1330644, 11.6286446], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'colony-vazhavatta',
            title: 'Colony',
            description: 'പ്രദേശത്തെ തദ്ദേശീയ ജനവാസ കേന്ദ്രം.',
            location: { center: [76.1564596, 11.5752869], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'erumad',
            title: 'Erumad',
            description: 'എരുമാട് പ്രൊജക്റ്റ് കോർഡിനേഷൻ പോയിന്റ്.',
            location: { center: [76.2588715, 11.568791], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'diary-office',
            title: 'Diary Office',
            description: 'കല്പറ്റ ഡയറി വികസന വകുപ്പ് ഓഫീസ് പരിസരം.',
            location: { center: [76.0846419, 11.6127697], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'excise-office',
            title: 'Circle Inspector of Excise Office Kalpetta',
            description: 'കല്പറ്റ എക്സൈസ് സർക്കിൾ ഇൻസ്പെക്ടർ ഓഫീസ്.',
            location: { center: [76.0737443, 11.6144288], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'diary-hostel',
            title: "Diary Men's hostel",
            description: 'ഡയറി ഡെവലപ്‌മെന്റ് മെൻസ് ഹോസ്റ്റൽ.',
            location: { center: [76.0204239, 11.5408998], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'enna-ooru-tickets',
            title: 'Enna Ooru Tickets',
            description: 'എൻ ഊര് ഗോത്ര പൈതൃക ഗ്രാമം ടിക്കറ്റ് കൗണ്ടർ ലൊക്കേഷൻ.',
            location: { center: [76.0250455, 11.5327527], zoom: 15, pitch: 0, bearing: 0 },
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'handcraft-shop',
            title: 'Elly Handcraft Shop',
            description: 'എൻ ഊര് തദ്ദേശീയ കരകൗശല ഉത്പന്ന വിപണന കേന്ദ്രം.',
            location: { center: [76.0248500, 11.5325000], zoom: 15, pitch: 0, bearing: 0 }, // എൻ ഊര് ടിക്കറ്റ് കൗണ്ടറിന് സമീപമുള്ള നിർദ്ദിഷ്ട കോർഡിനേറ്റ്
            onChapterEnter: [], 
            onChapterExit: []
        }
    ]
};
