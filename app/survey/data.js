var destinations = [
  {
    name: 'Munich, Germany',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    name: 'Regensburg, Germany',
    image: 'http://images2.mygola.com/a300777ba0edd707e51ce644204d54ac_1347382408_l.jpg'
  },
  {
    name: 'Cassis, France',
    image: 'http://www.iorise.com/blog/wp-content/uploads/2013/09/Calanque-dEn-Vau-between-Marseille-and-Cassis-Bouches-du-RhC3B4ne-France.jpg'
  },
  {
    name: 'Paris, France',
    image: 'http://my.mccombs.utexas.edu/bba/ip/programs-overview/short-term-programs/bba-short-term-summer/~/media/9AA64C3A4CAF414CB4263BD6704F2425.ashx'
  },
  {
    name: 'Mullingar, Ireland',
    image: 'http://images4.mygola.com/1b620006d77673d5d5f9abd1635e95de_1390549196_l.jpg'
  },
  {
    name: 'Letterkenny, Ireland',
    image: 'http://cycleireland.ie/wp-content/uploads/2013/01/gweedore-mount-errigal-1000.jpg'
  },
  {
    name: 'Toledo, Spain',
    image: 'http://greatadventure24.com/wp-content/uploads/2015/04/a-view-of-toledo-spain.jpg'
  },
  {
    name: 'Perugia, Italy',
    image: 'https://youthfullyyoursgr.files.wordpress.com/2014/11/perugia-italy.jpg'
  },
  {
    name: 'Taza, Morocco',
    image: 'https://mw2.google.com/mw-panoramio/photos/medium/23149799.jpg'
  },
  {
    name: 'Guelmim, Morocco',
    image: 'http://www.phonebookoftheworld.com/morocco/city/city-of-guelmim2.jpg'
  },
  {
    name: 'Sydney, Australia',
    image: 'http://melleum.com/data/uploads/4/274474-australia-sydney.jpg'
  },
  {
    name: 'Cairns, Australia',
    image: 'http://www.allianceabroad.com/wp-content/uploads/vacation_cairns_australia.jpg'
  },
  {
    name: 'Chengdu, China',
    image: 'http://www.chinafocustravel.com/uploads/travel_guide/Chengdu1.jpg'
  },
  {
    name: 'London, England',
    image: 'http://gatewaytravelonline.ca/v01/wp-content/uploads/2015/04/london_england-city.png'
  },
  {
    name: 'Chiang Rai, Thailand',
    image: 'http://chiangraitimes.com/wp-content/uploads/2011/05/Chiang_Rai_City-Deep_focus-Main_Street-Thailand-Urban_street-hd.jpg'
  },
  {
    name: 'Ko Lanta District, Thailand',
    image: 'http://cdn.thebeachfrontclub.com/media/upload/photos/Thailand_Koh_Lanta_Khlong_Khong_Beach_beach_shots_8544_1.JPG'
  },
  {
    name: 'Khao Sok National Park, Thailand',
    image: 'http://c3039282.cdn.cloudfiles.rackspacecloud.com/homepage/thailandss.jpg'
  },
  {
    name: 'Northeast Greenland National Park, Greenland',
    image: 'http://www.greenland.com/media/2692/the-national-park-01.jpg?width=555&height=390&mode=crop&format=jpg'
  },
  {
    name: 'Uppsala, Sweden',
    image: 'http://www.ciee.org/study-abroad/images/programs/0082/headers/desktop/uppsala-sweden-arts-and-sciences-college-study-abroad-flygbild-325.jpg'
  },
  {
    name: 'Tromsø, Norway',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Panorama_fjellheisen-improved.jpg/1686px-Panorama_fjellheisen-improved.jpg'
  }
];

// var questions = [];
//
// questions = [
//   {
//     now: 'questionOne',
//     next: 'questionTwo',
//     question: 'What best describes you?',
//     choices: {
//       one: {
//         choice: 'I love the hustle and bustle of a place!',
//         value: 'large'
//       },
//       two: {
//         choice: 'I like being around a lot of people sometimes',
//         value: 'medium'
//       },
//       three: {
//         choice: 'I like my quiet, relaxation time',
//         value: 'small'
//       },
//     }
//   },
//   {
//     now: 'questionTwo',
//     next: 'questionThree',
//     question: 'I like an outdoors environment that...',
//     choices: {
//       one: {
//         choice: 'let\'s me burn!',
//         value: 'hotdry'
//       },
//       two: {
//         choice: 'cool summer breeze',
//         value: 'mildwarm'
//       },
//       three: {
//         choice: 'freezing',
//         value: 'subarctic'
//       },
//       four: {
//         choice: 'humid, warm, and rainy',
//         value: 'tropical'
//       },
//     }
//   },
//   {
//     now: 'questionThree',
//     next: 'questionFour',
//     question: 'Food is the love of my life...',
//     choices: {
//       one: {
//         choice: 'I need a place that revolves around food',
//         value: 'yes'
//       },
//       two: {
//         choice: 'Eh, not so important',
//         value: 'no'
//       },
//     }
//   },
//   {
//     now: 'questionFour',
//     next: 'questionFive',
//     question: 'There should at least be... (pick as many as you want)',
//     choices: {
//       one: {
//         choice: 'the arts available! (theatres, museums, galleries)',
//         value: 'arts'
//       },
//       two: {
//         choice: 'fun in the sun...on the water, of course!',
//         value: 'watersports'
//       },
//       three: {
//         choice: 'fishing...it\'s my jam',
//         value: 'fishing'
//       },
//       four: {
//         choice: 'clubs to dance the night away!',
//         value: 'nightlife'
//       },
//       five: {
//         choice: 'festivals, so I have an excuse to drink',
//         value: 'festivals'
//       },
//       six: {
//         choice: 'and of course, sports, so I can watch the game',
//         value: 'sports'
//       },
//       seven: {
//         choice: 'some Jesus time',
//         value: 'cathedrals'
//       },
//     }
//   },
//   {
//     now: 'questionFive',
//     next: 'endOfQuiz',
//     question: 'I must be able to: (pick what you desire)',
//     choices: {
//       one: {
//         choice: 'walk everywhere',
//         value: 'walk'
//       },
//       two: {
//         choice: 'take a boat to where I want to go!',
//         value: 'boat'
//       },
//       three: {
//         choice: 'use the railways',
//         value: 'railways'
//       }
//     }
//   }
//
//
// ];
