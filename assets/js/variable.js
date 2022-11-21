const dayNight =document.querySelector(".switch");
const bgVideo = document.querySelector('.background-video');
const bgVideoSub = document.querySelector('.background-video--sub');
const weaTher=document.querySelector('.icon--rain-container');
const weaThericon=document.querySelector(' .icon--rain-container i');
const chillvibes=document.querySelector('#chillvibes');
const bookcafe=document.querySelector('#bookcafe');
const caferoom=document.querySelector('#caferoom');
var chillvibeshl = 1;
var bookcafehl = 0;
var caferoomhl = 0;
const taskItemscreen=document.querySelector('#screen');
const sreenBoard=document.querySelector('#screen-board');
const soundBoard=document.querySelector('.soundboard');
const taskItemsound=document.querySelector('.soundboard-container');
const timeBoard=document.querySelector('.countdown-board');
const taskTime=document.querySelector('.countdown-container');
const musicBoard=document.querySelector('.music-list-board');
const taskMusic=document.querySelector('.music-container');
const fullscreen=document.querySelector('.fs');
const fullscreenicon=document.querySelector('#fullscreen');
const comeoutBtn=document.querySelector('.comeout-btn');
const comeinBtn=document.querySelector('.comein-btn');

let checkweather=1;
let checkday=1;
var dayClear='./assets/videos/Day-sunny.mp4';
var nightClear='./assets/videos/Night-clear.mp4';
var dayRainny='./assets/videos/Day-rainny.mp4';
var nightRainny='./assets/videos/Night-rainny.mp4';
const playBtn=document.querySelector('#play');
const backBtn=document.querySelector('#back');
const nextBtn =document.querySelector('#next');
var isPlaying=false;
const audio=document.querySelector('#audio');
const namesong=document.querySelector('.namesong');
const render=document.querySelector('.render');
const soundvolumectn=document.querySelector('.js-sound__item');
const soundvolume=document.querySelector('.js-sound__volum');
const soundcircle=document.querySelector('.js-sound__circle');
let isReadyToDrag=false;
const CityTraffic=document.querySelector('.CityTraffic');
const RainCity=document.querySelector('.RainCity');
const ForestNight=document.querySelector('.ForestNight');
const KeyBoard=document.querySelector('.KeyBoard');
const Fan=document.querySelector('.Fan');
const People=document.querySelector('.People');
const RainForest=document.querySelector('.RainForest');
const River=document.querySelector('.River');
const Waves=document.querySelector('.Waves');
const Wind=document.querySelector('.Wind');
const CityTrafficbar=document.querySelector('.CityTraffic-bar');
const CityTrafficcircle=document.querySelector('.CityTraffic-circle');

const KeyBoardbar=document.querySelector('.KeyBoard-bar');
const KeyBoardcircle=document.querySelector('.KeyBoard-circle');

const RainCitybar=document.querySelector('.RainCity-bar');
const RainCitycircle=document.querySelector('.RainCity-circle');

const ForestNightbar=document.querySelector('.ForestNight-bar');
const ForestNightcircle=document.querySelector('.ForestNight-circle');

const Fanbar=document.querySelector('.Fan-bar');
const Fancircle=document.querySelector('.Fan-circle');

const Peoplebar=document.querySelector('.People-bar');
const Peoplecircle=document.querySelector('.People-circle');

const RainForestbar=document.querySelector('.RainForest-bar');
const RainForestcircle=document.querySelector('.RainForest-circle');

const Riverbar=document.querySelector('.River-bar');
const Rivercircle=document.querySelector('.River-circle');

const Wavesbar=document.querySelector('.Waves-bar');
const Wavescircle=document.querySelector('.Waves-circle');

const Windbar=document.querySelector('.Wind-bar');
const Windcircle=document.querySelector('.Wind-circle');


const CityTrafficaudio=document.querySelector('#CityTraffic');
const RainCityaudio=document.querySelector('#RainCity');
const ForestNightaudio=document.querySelector('#ForestNight');
const KeyBoardaudio=document.querySelector('#KeyBoard');
const Fanaudio=document.querySelector('#Fan');
const Peopleaudio=document.querySelector('#People');
const RainForestaudio=document.querySelector('#RainForest');
const Riveraudio=document.querySelector('#River');
const Wavesaudio=document.querySelector('#Waves');
const Windaudio=document.querySelector('#Wind');


let isReadyToDragCityTraffic = false;
let isReadyToDragRainCity = false;
let isReadyToDragForestNight = false;
let isReadyToDragKeyBoard = false;
let isReadyToDragFan = false;
let isReadyToDragPeople = false;
let isReadyToDragRainForest = false;
let isReadyToDragRiver = false;
let isReadyToDragWaves = false;
let isReadyToDragWind = false;


const chillcontainer=document.querySelector('.chillvibesenvbtn-container');
const caferoomcontainer=document.querySelector('.caferoomenvbtn-container');
const bookcafecontainer=document.querySelector('.bookcafeenvbtn-container');
//keyboardchill
const chillkeyboardbtnsub=document.querySelector('.chillkeyboard-btn--sub');
const chillkeyboardbtn=document.querySelector('.chillkeyboard-btn');
const envkeyboardchill=document.querySelector('#envkeyboardchill')
const envkeyboardbarchill=document.querySelector('#envkeyboardbarchill')
const envkeyboardcirclechill=document.querySelector('#envkeyboardcirclechill')
// rainstchill
const chillraincitybtnsub=document.querySelector('.chillraincity-btn--sub');
const chillraincitybtn=document.querySelector('.chillraincity-btn');
const envraincitychill=document.querySelector('#envraincitychill')
const envraincitybarchill=document.querySelector('#envraincitybarchill')
const envraincitycirclechill=document.querySelector('#envraincitycirclechill')

//rainendchill


//keyboardcaferoom
const caferoomkeyboardbtnsub=document.querySelector('.caferoomkeyboard-btn--sub');
const caferoomkeyboardbtn=document.querySelector('.caferoomkeyboard-btn');
const envkeyboardcaferoom=document.querySelector('#envkeyboardcaferoom')
const envkeyboardbarcaferoom=document.querySelector('#envkeyboardbarcaferoom')
const envkeyboardcirclecaferoom=document.querySelector('#envkeyboardcirclecaferoom')
// rainstcaferoom
const caferoomraincitybtnsub=document.querySelector('.caferoomraincity-btn--sub');
const caferoomraincitybtn=document.querySelector('.caferoomraincity-btn');
const envraincitycaferoom=document.querySelector('#envraincitycaferoom')
const envraincitybarcaferoom=document.querySelector('#envraincitybarcaferoom')
const envraincitycirclecaferoom=document.querySelector('#envraincitycirclecaferoom')

//rainendcaferoom
//peoplecaferoom
const caferoompeoplebtnsub=document.querySelector('.caferoompeople-btn--sub');
const caferoompeoplebtn=document.querySelector('.caferoompeople-btn');
const envpeoplecaferoom=document.querySelector('#envpeoplecaferoom');
const envpeoplebarcaferoom=document.querySelector('#envpeoplebarcaferoom');
const envpeoplecirclecaferoom=document.querySelector('#envpeoplecirclecaferoom');

//peoplecaferoomend
//raincitybookcafe
const bookcaferaincitybtnsub=document.querySelector('.bookcaferaincity-btn--sub');
const bookcaferaincitybtn=document.querySelector('.bookcaferaincity-btn');
const envraincitybookcafe=document.querySelector('#envraincitybookcafe');
const envraincitybarbookcafe=document.querySelector('#envraincitybarbookcafe');
const envraincitycirclebookcafe=document.querySelector('#envraincitycirclebookcafe');
//citytrafficbookcafe
const bookcafecitytrafficbtnsub=document.querySelector('.bookcafecitytraffic-btn--sub');
const bookcafecitytrafficbtn=document.querySelector('.bookcafecitytraffic-btn');
const envcitytrafficbookcafe=document.querySelector('#envcitytrafficbookcafe');
const envcitytrafficbarbookcafe=document.querySelector('#envcitytrafficbarbookcafe');
const envcitytrafficcirclebookcafe=document.querySelector('#envcitytrafficcirclebookcafe');
const signupBtn=document.querySelector('#signupbtn');
const signinBtn=document.querySelector('#signinbtn');
const signinCtn=document.querySelector('.signin-container');
const signupCtn=document.querySelector('.signup-container');
const signupinCtn=document.querySelector('.signup-in');
var signupinCtnHidden=false;
const signininput=document.querySelector('#email1');
const signupinput=document.querySelector('#email');
const messageError=document.querySelector('.message-error');
const messageSuccess=document.querySelector('.message-success');
const headerSignupin=document.querySelector('.js-header__signupin');
const logout=document.querySelector('.js-logout');
const headerUsername=document.querySelector('.header__username');
const headerUsernameText=document.querySelector('#header__username-text');
var comethruPlaying=false;
var atmyworstPlaying=false;
var coemPlaying=false;
var theoceanPlaying=false;
var deathbedPlaying=false;
var thanhxuanPlaying=false;
var thichemhoinhieuPlaying=false;
var daloyeuemnhieuPlaying=false;
var kissmemorePlaying=false;
var backtohometownPlaying=false;
var dungbamvaonghePlaying=false;
const playcomethruBtn=document.querySelector('#comethru')
const playatmyworstBtn=document.querySelector('#atmyworst')
const playcoemBtn=document.querySelector('#coem')
const playtheoceanBtn=document.querySelector('#theocean')
const playdeathbedBtn=document.querySelector('#deathbed')
const playthanhxuanBtn=document.querySelector('#thanhxuan')
const playthichemhoinhieuBtn=document.querySelector('#thichemhoinhieu')
const playdaloyeuemnhieuBtn=document.querySelector('#daloyeuemnhieu')
const playkissmemoreBtn=document.querySelector('#kissmemore')
const playbacktohometownBtn=document.querySelector('#backtohometown')
const playdungbamvaongheBtn=document.querySelector('#dungbamvaonghe')


const audiocomethru=document.querySelector('#audiocomethru')
const audioatmyworst=document.querySelector('#audioatmyworst')
const audiocoem=document.querySelector('#audiocoem')
const audiotheocean=document.querySelector('#audiotheocean')
const audiodeathbed=document.querySelector('#audiodeathbed')
const audiothanhxuan=document.querySelector('#audiothanhxuan')
const audiothichemhoinhieu=document.querySelector('#audiothichemhoinhieu')
const audiodaloyeuemnhieu=document.querySelector('#audiodaloyeuemnhieu')
const audiokissmemore=document.querySelector('#audiokissmemore')
const audiobacktohometown=document.querySelector('#audiobacktohometown')
const audiodungbamvaonghe=document.querySelector('#audiodungbamvaonghe')






const musicVolumeCtn=document.querySelector('.music-volume--item')
const musicVolume=document.querySelector('.music__volum')
const musicCircle=document.querySelector('.music__circle')
var isReadyToDragMusic=false;







const hoursList=document.querySelectorAll('.oclock-item');
const oclockHours_0=document.querySelector('.oclock-hours-0');
const oclockHours_1=document.querySelector('.oclock-hours-1');
const oclockHours_2=document.querySelector('.oclock-hours-2');
const oclockHours_3=document.querySelector('.oclock-hours-3');
const oclockHours_4=document.querySelector('.oclock-hours-4');
const oclockHours_5=document.querySelector('.oclock-hours-5');
const oclockHours_6=document.querySelector('.oclock-hours-6');
const oclockHours_7=document.querySelector('.oclock-hours-7');
const oclockHours_8=document.querySelector('.oclock-hours-8');
const oclockHours_9=document.querySelector('.oclock-hours-9');
const oclockHours_10=document.querySelector('.oclock-hours-10');
const oclockHours_11=document.querySelector('.oclock-hours-11');
const startCd=document.querySelector('.startcd')
const timeUp=document.querySelector('.timeup')



const startbtn=document.querySelector('#start');
const stopbtn=document.querySelector('#stop');
const resetbtn=document.querySelector('#reset');
var h = null; // Giờ
var m = null; // Phút
var s = null; // Giây
 
var timeout = null; // Timeout



var currentindex=0;

   songs =[
        { name:'Chill1',
        path:'./assets/music_lofi/chill1.mp3',
        },
        { name:'Chill2',
        path:'./assets/music_lofi/chill2.mp3',
        },
        { name:'Chill3',
        path:'./assets/music_lofi/chill3.mp3',
        },
        { name:'Jazz1',
        path:'./assets/music_lofi/jazz1.mp3',
        },
        { name:'Jazz2',
        path:'./assets/music_lofi/jazz2.mp3',
        },
        { name:'Jazz3',
        path:'./assets/music_lofi/jazz3.mp3',
        },
        { name:'Sleepy1',
        path:'./assets/music_lofi/sleepy1.mp3',
        },
        { name:'Sleepy2',
        path:'./assets/music_lofi/sleepy2.mp3',
        },
        { name:'Sleepy3',
        path:'./assets/music_lofi/sleepy3.mp3',
        },
        { name:'Sleepy4',
        path:'./assets/music_lofi/sleepy4.mp3',
        },
    ]
    

  

    
    







