var destinations = [];

destinations = [
  {
    name: 'Munich, Germany',
    size: 'large',
    activities: ['nightlife', 'arts', 'breweries', 'sports', 'festivals'],
    food: 'yes',
    climate: 'rainymild',
    geography: 'elevated plains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg',
    transportation: ['airport', 'underground railway', 'tram', 'bus']
  },
  {
    name: 'Regensburg, Germany',
    size: 'large',
    activities: ['landmarks', 'arts', 'tours', 'shopping', 'nightlife'],
    food: 'no',
    climate: 'rainycool',
    geography: ['rivers', 'forest'],
    image: 'http://images2.mygola.com/a300777ba0edd707e51ce644204d54ac_1347382408_l.jpg',
    transportation: ['airport', 'train', 'bicycle']
  },
  {
    name: 'Cassis, France',
    size: 'small',
    activities: ['fishing', 'boating', 'swimming', 'snorkeling', 'diving'],
    food: 'yes',
    climate: 'mildwarm',
    geography: 'Mediterranean',
    image: 'http://www.iorise.com/blog/wp-content/uploads/2013/09/Calanque-dEn-Vau-between-Marseille-and-Cassis-Bouches-du-RhC3B4ne-France.jpg',
    transportation: ['airport', 'boat', 'train', 'car']
  },
  {
    name: 'Paris, France',
    size: 'small',
    activities: ['arts', 'cathedrals', 'gardens', 'landmarks', 'nightlife'],
    food: 'yes',
    climate: 'mildcool',
    geography: ['rivers', 'flatland'],
    image: 'http://my.mccombs.utexas.edu/bba/ip/programs-overview/short-term-programs/bba-short-term-summer/~/media/9AA64C3A4CAF414CB4263BD6704F2425.ashx',
    transportation: ['airport', 'car', 'train', 'boat', 'walk']
  },
  {
    name: 'Mullingar, Ireland',
    size: 'small',
    activities: ['cathedrals', 'sports', 'gardens', 'nightlife'],
    food: 'no';
    climate: 'rainymild',
    geography: 'island',
    image: 'http://images4.mygola.com/1b620006d77673d5d5f9abd1635e95de_1390549196_l.jpg',
    transportation: ['airport', 'railway', 'boat', 'car']
  },
  {
    name: 'Letterkenny, Ireland',
    size: 'large',
    activities: ['arts', 'sports', 'festivals', 'castles'],
    food: 'no',
    climate: 'humidmild',
    geography: 'island',
    image: 'http://cycleireland.ie/wp-content/uploads/2013/01/gweedore-mount-errigal-1000.jpg',
    transportation: ['airport', 'railway', 'car']
  },
  {
    name: 'Toledo, Spain',
    size: 'small',
    activities: ['sports', 'castles', 'cathedrals', 'monuments','shopping'],
    food: 'no',
    climate: 'hotdry',
    geography: 'hill',
    image: 'http://greatadventure24.com/wp-content/uploads/2015/04/a-view-of-toledo-spain.jpg',
    transportation: ['railway', 'car']
  },
  {
    name: 'Perugia, Italy',
    size: 'medium',
    activities: ['sports', 'churches', 'arts', 'shopping'],
    food: 'no',
    climate: 'humidsubtropic',
    geography: 'hill',
    image: 'https://youthfullyyoursgr.files.wordpress.com/2014/11/perugia-italy.jpg',
    transportation: ['airport', 'tram', 'railway']
  },
  {
    name: 'Taza, Morocco',
    size: 'medium',
    activities: ['shopping', 'architecture', 'caves'],
    food: 'no',
    climate: 'hotdry',
    geography: 'valley',
    image: 'https://mw2.google.com/mw-panoramio/photos/medium/23149799.jpg',
    transportation: ['train', 'bus', 'taxi']
  },
  {
    name: 'Guelmim, Morocco',
    size: 'medium',
    activities: ['live market', 'music'],
    food: 'no',
    climate: 'hotdry',
    geography: 'desert',
    image: 'http://www.phonebookoftheworld.com/morocco/city/city-of-guelmim2.jpg',
    transportation: ['cargo truck', 'taxi', 'bus']
  },
  {
    name: 'Sydney, Australia',
    size: 'large',
    activities: ['opera', 'shopping', 'gardens', 'watersports', 'arts'],
    food: 'no',
    climate: 'humidsubtropic',
    geography: ['flatland', 'ocean'],
    image: 'http://melleum.com/data/uploads/4/274474-australia-sydney.jpg',
    transportation: ['airport', 'train', 'car', 'bus', 'walk']
  },
  {
    name: 'Cairns, Australia',
    size: 'medium',
    activities: ['snorkling', 'Great Barrier Reef', 'rainforest', 'shopping', 'watersports'],
    food: 'no',
    climate: 'tropical',
    geography: 'flood plains',
    image: 'http://www.allianceabroad.com/wp-content/uploads/vacation_cairns_australia.jpg',
    transportation: ['airport', 'seaport', 'railway', 'bus', 'car']
  },
  {
    name: 'Chengdu, China',
    size: 'large',
    activities: ['shopping', 'conservation center', 'shopping', 'sports', 'technology'],
    food: 'yes',
    climate: 'humid subtropic',
    geography: 'dryplain',
    image: 'http://www.chinafocustravel.com/uploads/travel_guide/Chengdu1.jpg',
    transportation: ['airport', 'railway', 'expressways', 'bus', 'car']
  },
  {
    name: 'London, England',
    size: 'small',
    activities: ['arts', 'music'],
    food: 'no',
    climate: 'oceanicclimate',
    geography: 'floodplain',
    image: 'http://gatewaytravelonline.ca/v01/wp-content/uploads/2015/04/london_england-city.png',
    transportation: ['airport', 'railway', 'tram', 'bus', 'riverboats']
  },
  {
    name: 'Chiang Rai, Thailand',
    size: 'medium',
    activities: ['market', 'adventure park', 'shopping', 'night walks'],
    food: 'yes',
    climate: 'tropical',
    geography: 'plain',
    image: 'http://chiangraitimes.com/wp-content/uploads/2011/05/Chiang_Rai_City-Deep_focus-Main_Street-Thailand-Urban_street-hd.jpg',
    transportation: ['airport', 'railway', 'car', 'bus', 'boat']
  },
  {
    name: 'Ko Lanta District, Thailand',
    size: 'small',
    activities: ['watersports', 'boxing', 'spa', 'cuisine', 'arts', 'festivals'],
    food: 'yes',
    climate: 'tropical',
    geography: 'island',
    image: 'http://cdn.thebeachfrontclub.com/media/upload/photos/Thailand_Koh_Lanta_Khlong_Khong_Beach_beach_shots_8544_1.JPG',
    transportation: ['airport', 'railway', 'ferry', 'boat', 'motorbike']
  },
  {
    name: 'Khao Sok National Park, Thailand',
    size: 'small',
    activities: ['rainforest', 'hiking'],
    food: 'no',
    climate: 'tropical',
    geography: 'mountains',
    image: 'http://c3039282.cdn.cloudfiles.rackspacecloud.com/homepage/thailandss.jpg',
    transportation: ['boat']
  },
  {
    name: 'Northeast Greenland National Park, Greenland',
    size: 'large',
    activities: ['nature', 'wintersports', 'hunt', 'fish', 'hiking'],
    food: 'no',
    climate: 'icycool',
    geography: ['hills', 'mountains', 'ocean'],
    image: 'http://www.greenland.com/media/2692/the-national-park-01.jpg?width=555&height=390&mode=crop&format=jpg',
    transportation: ['airport', 'boat', 'ferry', 'helicopter']
  },
  {
    name: 'Uppsala, Sweden',
    size: 'small',
    activities: ['museums', 'sports', 'shopping'],
    food: 'yes',
    climate: 'humid',
    geography: 'flatland',
    image: 'http://www.ciee.org/study-abroad/images/programs/0082/headers/desktop/uppsala-sweden-arts-and-sciences-college-study-abroad-flygbild-325.jpg',
    transportation: ['airport', 'railway', 'bicycle', 'bus', 'walk']
  },
  {
    name: 'Tromsø, Norway',
    size: 'small',
    activities: ['gardens', 'planetarium', 'festivals', 'wintersports', 'arts'],
    food: 'no',
    climate: 'subarctic',
    geography: 'mountains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Panorama_fjellheisen-improved.jpg/1686px-Panorama_fjellheisen-improved.jpg',
    transportation: ['airport', 'tram', 'bus']
  }
];

var questions = [];

questions = [
  {
    now: 'questionOne',
    next: 'questionTwo',
    question: 'What best describes you?',
    choices: {
      one: {
        choice: 'I love the hustle and bustle of a place!',
        value: 'large'
      },
      two: {
        choice: 'I like being around a lot of people sometimes'
        value: 'medium'
      },
      three: {
        choice: 'I like my quiet, relaxation time',
        value: 'small'
      },
    }
  },
  {
    now: 'questionTwo',
    next: 'questionThree',
    question: 'I like an outdoors environment that...'
    choices: {
      one: {
        choice: 'let\'s me burn!',
        value: 'hotdry'
      },
      two: {
        choice: 'cool summer breeze',
        value: 'mildwarm'
      },
      three: {
        choice: 'freezing',
        value: 'subarctic'
      },
      four: {
        choice: 'humid, warm, and rainy',
        value: 'tropical'
      },
    }
  },
  {
    now: 'questionThree',
    next: 'questionFour',
    question: 'Food is the love of my life...'
    choices: {
      one: {
        choice: 'I need a place that revolves around food',
        value: 'yes'
      },
      two: {
        choice: 'Eh, not so important'
        value: 'no'
      },
    }
  },
  {
    now: 'questionFour',
    next: 'questionFive',
    question: 'There should at least be... (pick as many as you want)'
    choices: {
      one: {
        choice: 'the arts available! (theatres, museums, galleries)',
        value: 'arts'
      },
      two: {
        choice: 'fun in the sun...on the water, of course!'
        value: 'watersports'
      },
      three: {
        choice: 'fishing...it\'s my jam',
        value: 'fishing'
      },
      four: {
        choice: 'clubs to dance the night away!'
        value: 'nightlife'
      },
      five: {
        choice: 'festivals, so I have an excuse to drink'
        value: 'festivals'
      },
      six: {
        choice: 'and of course, sports, so I can watch the game'
        value: 'sports'
      },
      seven: {
        choice: 'some Jesus time'
        value: 'cathedrals'
      },
    }
  },
  {
    now: 'questionFive',
    next: 'endOfQuiz',
    question: 'I must be able to: (pick what you desire)'
    choices: {
      one: {
        choice: 'walk everywhere',
        value: 'walk'
      },
      two: {
        choice: 'take a boat to where I want to go!'
        value: 'boat'
      },
      three: {
        choice: 'use the railways',
        value: 'railways'
      }
    }
  }


];
