var destinations = [];

destinations = [
  {
    name: 'Munich, Germany',
    size: 'large',
    activities: ['nightlife', 'arts', 'breweries', 'sports', 'Oktoberfest'],
    climate: ['rain', 'snow', 'warm'],
    geography: 'elevated plains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg',
    transportation: ['airport', 'underground railway', 'tram', 'bus']
  },
  {
    name: 'Regensburg, Germany',
    size: 'large',
    activities: ['landmarks', 'museums', 'tours', 'shopping', 'nightlife', 'theatre'],
    climate: ['cold', 'rain'],
    geography: ['rivers', 'forest'],
    image: 'http://images2.mygola.com/a300777ba0edd707e51ce644204d54ac_1347382408_l.jpg',
    transportation: ['airport', 'train', 'bicycle']
  },
  {
    name: 'Cassis, France',
    size: 'small',
    activities: ['fishing', 'boating', 'swimming', 'snorkeling', 'diving'],
    climate: ['mild', 'warm', 'sunny'],
    geography: 'Mediterranean',
    image: 'http://www.iorise.com/blog/wp-content/uploads/2013/09/Calanque-dEn-Vau-between-Marseille-and-Cassis-Bouches-du-RhC3B4ne-France.jpg',
    transportation: ['airport', 'boat', 'train', 'car']
  },
  {
    name: 'Paris, France',
    size: 'small',
    activities: ['museums', 'cathedrals', 'gardens', 'landmarks', 'cooking', 'nightlife'],
    climate: ['mild', 'cool'],
    geography: ['rivers', 'flatland'],
    image: 'http://my.mccombs.utexas.edu/bba/ip/programs-overview/short-term-programs/bba-short-term-summer/~/media/9AA64C3A4CAF414CB4263BD6704F2425.ashx',
    transportation: ['airport', 'car', 'train', 'boat']
  },
  {
    name: 'Mullingar, Ireland',
    size: 'small',
    activities: ['cathedrals', 'sports', 'gardens', 'nightlife'],
    climate: ['rain', 'mild'],
    geography: 'island',
    image: 'http://images4.mygola.com/1b620006d77673d5d5f9abd1635e95de_1390549196_l.jpg',
    transportation: ['airport', 'railway', 'boat', 'car']
  },
  {
    name: 'Letterkenny, Ireland',
    size: 'large',
    activities: ['theatre', 'sports', 'festivals', 'castles'],
    climate: ['warm', 'mild', 'humid'],
    geography: 'island',
    image: 'http://cycleireland.ie/wp-content/uploads/2013/01/gweedore-mount-errigal-1000.jpg',
    transportation: ['airport', 'railway', 'car']
  },
  {
    name: 'Toledo, Spain',
    size: 'small',
    activities: ['sports', 'castles', 'cathedrals', 'monuments','shopping'],
    climate: ['hot', 'dry'],
    geography: 'hill',
    image: 'http://greatadventure24.com/wp-content/uploads/2015/04/a-view-of-toledo-spain.jpg',
    transportation: ['railway', 'car']
  },
  {
    name: 'Perugia, Italy',
    size: 'medium',
    activities: ['sports', 'churches', 'art', 'shopping'],
    climate: 'humid subtropic',
    geography: 'hill',
    image: 'https://youthfullyyoursgr.files.wordpress.com/2014/11/perugia-italy.jpg',
    transportation: ['airport', 'tram', 'railway']
  },
  {
    name: 'Taza, Morocco',
    size: 'medium',
    activities: ['shopping', 'architecture', 'caves'],
    climate: ['hot', 'sunny'],
    geography: 'valley',
    image: 'https://mw2.google.com/mw-panoramio/photos/medium/23149799.jpg',
    transportation: ['train', 'bus', 'taxi']
  },
  {
    name: 'Guelmim, Morocco',
    size: 'medium',
    activities: ['live market', 'music'],
    climate: ['hot', 'dry'],
    geography: 'desert',
    image: 'http://www.phonebookoftheworld.com/morocco/city/city-of-guelmim2.jpg',
    transportation: ['cargo truck', 'taxi', 'bus']
  },
  {
    name: 'Sydney, Australia',
    size: 'large',
    activities: ['opera', 'shopping', 'gardens', 'watersports', 'art galleries'],
    climate: ['humid subtropic'],
    geography: ['flatland', 'ocean'],
    image: 'http://melleum.com/data/uploads/4/274474-australia-sydney.jpg',
    transportation: ['airport', 'train', 'car', 'bus', 'walk']
  },
  {
    name: 'Cairns, Australia',
    size: 'medium',
    activities: ['snorkling', 'Great Barrier Reef', 'rainforest', 'shopping', 'watersports'],
    climate: 'tropical',
    geography: 'flood plains',
    image: 'http://www.allianceabroad.com/wp-content/uploads/vacation_cairns_australia.jpg',
    transportation: ['airport', 'seaport', 'railway', 'bus', 'car']
  },
  {
    name: 'Chengdu, China',
    size: 'large',
    activities: ['cuisine', 'shopping', 'conservation center', 'shopping', 'sports', 'technology'],
    climate: 'humid subtropic',
    geography: 'plain',
    image: 'http://www.chinafocustravel.com/uploads/travel_guide/Chengdu1.jpg',
    transportation: ['airport', 'railway', 'expressways', 'bus', 'car']
  },
  {
    name: 'London, England',
    size: 'small',
    activities: ['films', 'literature', 'art galleries', 'museums', 'music'],
    climate: 'oceanic climate',
    geography: 'floodplain',
    image: 'http://gatewaytravelonline.ca/v01/wp-content/uploads/2015/04/london_england-city.png',
    transportation: ['airport', 'railway', 'tram', 'bus', 'riverboats']
  },
  {
    name: 'Chiang Rai, Thailand',
    size: 'medium',
    activities: ['market', 'adventure park', 'shopping', 'night walks'],
    climate: 'tropical',
    geography: 'plain',
    image: 'http://chiangraitimes.com/wp-content/uploads/2011/05/Chiang_Rai_City-Deep_focus-Main_Street-Thailand-Urban_street-hd.jpg',
    transportation: ['airport', 'railway', 'car', 'bus', 'boat']
  },
  {
    name: 'Ko Lanta District, Thailand',
    size: 'small',
    activities: ['watersports', 'boxing', 'spa', 'cuisine', 'art', 'festivals'],
    climate: 'tropical',
    geography: 'island',
    image: 'http://cdn.thebeachfrontclub.com/media/upload/photos/Thailand_Koh_Lanta_Khlong_Khong_Beach_beach_shots_8544_1.JPG',
    transportation: ['airport', 'railway', 'ferry', 'boat', 'motorbike']
  },
  {
    name: 'Khao Sok National Park, Thailand',
    size: 'small',
    activities: ['rainforest', 'hiking'],
    climate: 'tropical',
    geography: 'mountains',
    image: 'http://c3039282.cdn.cloudfiles.rackspacecloud.com/homepage/thailandss.jpg',
    transportation: ['boat']
  },
  {
    name: 'Northeast Greenland National Park, Greenland',
    size: '',
    activities: '',
    climate: '',
    geography: '',
    image: '',
    transportation: ['airport', 'underground railway', 'trams', 'buses']
  },
  {
    name: 'Uppsala, Sweden',
    size: '',
    activities: '',
    climate: '',
    geography: '',
    image: '',
    transportation: ['airport', 'underground railway', 'trams', 'buses']
  },
  {
    name: 'Tromsø, Norway',
    size: '',
    activities: '',
    climate: '',
    geography: '',
    image: '',
    transportation: ['airport', 'underground railway', 'trams', 'buses']
  }
];
