/*
    - an object is a container that stores multiple sets of data
        - stores objects as key/value pairs
    - ojbects denoted by curly braces {}

*/

let netflix = {
    id: 1, 
    showname: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            }, {
                episode: 2,
                episodeName: 'Diversity Day'
            }, {

                episode: 3,
                episodeName: 'Health Care'
            }, {
                episode: 4,
                episodeName: 'The Alliance'
            }, {
                episode: 5,
                episodeName: 'Basketball'
            }, {
                episode: 6,
                episodeName: 'Hot Girl'
            }]
        }
    }, 
    season2: {},
    season3: {},
    season4: {},
}

// to access data insidd of an ojbecxt, or to dive iinto an objecxt, we ue dot notation

//console.log('all data', netflix)
//console.log('season info', netflix.season1.seasonInfo)
//console.log('specific episode name', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

console.log('episode and episodeName', netflix.season1.seasonInfo.episodeInfo[5].episodeName);
console.log('episode', netflix.season1.seasonInfo.episodeInfo[5]);

// could have used string interpelattion ``
console.log(`episode number: ${netflix.season1.seasonInfo.episodeInfo[4].episode} - episode name: 
$[netflix.season1.seasonInfo.episodeInfo[4].episodeName}`)


/*
    - JSON stands for Java Script Objecxt Notatioin
    - JSON syntax is derived from JavaScript Object syntax, but JSON data is in a text only format
    - JSON exists as a string, and needs to be converted to a native JavaScript object if we want to access the data
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}


//console.log(Object.keys(spaceJam.toonSquad));

console.log(Object.keys(spaceJam.toonSquad.duck));

//console.log(Object.values(spaceJam.nbaPlayers));
O
/*
    - object braket notation 
        - object bracket notation, just like dot notation, allow us to find a value in an object
        - object bracket noation allow us to find keys in an object
        - aslo hand it we want to store keys of an object as a variable
        - object bracket noations work because all keys inside of an object are strings, even though they'e not wrapped
        in a single or double quotes
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
}

let test = Object.keys(garden); // Object.keys returns an array of all keys in an object
console.log(test);
console.log(typeof test[0]);

let zucchini = garden['vegetable'
console.log(zucchini);

let baking = [];
baking['zucchini']= 'better make some bread';
console.log(baking);

console.log(baking[garden[vegetable]]);

let testObj = [
    "Spaces Here": true,
    noSpaces: true,
]

console.log(testObj);