taskItemscreen.addEventListener('click', () => {
    if (sreenBoard.style.display === 'block') {
        sreenBoard.style.display = 'none';
    }
    else {
        sreenBoard.style.display = 'block';
        soundBoard.style.display = 'none';
        timeBoard.style.display = 'none';
        musicBoard.style.display = 'none';


    }
});

sreenBoard.addEventListener('click', function (event) {
    event.stopPropagation();
})
taskTime.addEventListener('click', () => {
    if (timeBoard.style.display === 'block') {
        timeBoard.style.display = 'none';
    }
    else {
        timeBoard.style.display = 'block';
        sreenBoard.style.display = 'none';
        soundBoard.style.display = 'none';
        musicBoard.style.display = 'none';
    }
});

timeBoard.addEventListener('click', function (event) {
    event.stopPropagation();
})
taskMusic.addEventListener('click', () => {
    if (musicBoard.style.display === 'block') {
        musicBoard.style.display = 'none';
    }
    else {
        musicBoard.style.display = 'block';
        timeBoard.style.display = 'none';
        sreenBoard.style.display = 'none';
        soundBoard.style.display = 'none';

    }
});

musicBoard.addEventListener('click', function (event) {
    event.stopPropagation();
})
taskItemsound.addEventListener('click', () => {
    if (soundBoard.style.display === 'block') {
        soundBoard.style.display = 'none';
    }
    else {
        soundBoard.style.display = 'block';
        musicBoard.style.display = 'none';
        timeBoard.style.display = 'none';
        sreenBoard.style.display = 'none';

    }
});

soundBoard.addEventListener('click', function (event) {
    event.stopPropagation();
})
chillkeyboardbtn.addEventListener('click', () => {
    if (chillkeyboardbtnsub.style.display === 'block') {
        chillkeyboardbtnsub.style.display = 'none';
        KeyBoardaudio.pause();
    }
    else {
        chillkeyboardbtnsub.style.display = 'block';
    }
});

chillkeyboardbtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
chillraincitybtn.addEventListener('click', () => {
    if (chillraincitybtnsub.style.display === 'block') {
        chillraincitybtnsub.style.display = 'none';
    }
    else {
        chillraincitybtnsub.style.display = 'block';
        RainCityaudio.pause();
    }
});

chillraincitybtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
// caferoomkeyboard
caferoomkeyboardbtn.addEventListener('click', () => {
    if (caferoomkeyboardbtnsub.style.display === 'block') {
        caferoomkeyboardbtnsub.style.display = 'none';
    }
    else {
        caferoomkeyboardbtnsub.style.display = 'block';
        KeyBoardaudio.pause();
    }
});

caferoomkeyboardbtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})

// caferoomraincity
caferoomraincitybtn.addEventListener('click', () => {
    if (caferoomraincitybtnsub.style.display === 'block') {
        caferoomraincitybtnsub.style.display = 'none';
    }
    else {
        caferoomraincitybtnsub.style.display = 'block';
        RainCityaudio.pause();
    }
});

caferoomraincitybtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
//caferoompeople
caferoompeoplebtn.addEventListener('click', () => {
    if (caferoompeoplebtnsub.style.display === 'block') {
        caferoompeoplebtnsub.style.display = 'none';
    }
    else {
        caferoompeoplebtnsub.style.display = 'block';
        Peopleaudio.pause();
    }
});

caferoompeoplebtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
//bookcaferaincity
bookcaferaincitybtn.addEventListener('click', () => {
    if (bookcaferaincitybtnsub.style.display === 'block') {
        bookcaferaincitybtnsub.style.display = 'none';
    }
    else {
        bookcaferaincitybtnsub.style.display = 'block';
        RainCityaudio.pause();
    }
});

bookcaferaincitybtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
//bookcafecitytraffic
bookcafecitytrafficbtn.addEventListener('click', () => {
    if (bookcafecitytrafficbtnsub.style.display === 'block') {
        bookcafecitytrafficbtnsub.style.display = 'none';
    }
    else {
        bookcafecitytrafficbtnsub.style.display = 'block';
        CityTrafficaudio.pause();
    }
});

bookcafecitytrafficbtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})



function changeScene() {
    if (checkday === 1 && checkweather === 1) {
        bgVideoSub.src = nightClear;
        setTimeout(() => {
            bgVideo.src = nightClear;
        }, 200);

        checkday = 0;
        checkweather = 1;
    }
    else if (checkday === 1 && checkweather === 0) {
        bgVideoSub.src = nightRainny;
        setTimeout(() => {
            bgVideo.src = nightRainny;
        }, 200);
        checkday = 0;
        checkweather = 0;
    }
    else if (checkday === 0 && checkweather === 1) {
        bgVideoSub.src = dayClear;
        setTimeout(() => {
            bgVideo.src = dayClear;
        }, 200);
        checkday = 1;
        checkweather = 1;
    }
    else if (checkday === 0 && checkweather === 0) {
        bgVideoSubsrc = dayRainny;

        setTimeout(() => {
            bgVideo.src = dayRainny;
        }, 200);
        checkday = 1;
        checkweather = 0;
    }
}
// function daynight(){
//     bgVideo1Night.style.opacity='1' ;

// }
function changeweaTher() {

    if (checkweather === 1 && checkday === 1) {
        weaThericon.style.color = '#91ccc2';

        bgVideoSub.src = dayRainny;
        setTimeout(() => {
            bgVideo.src = dayRainny;
        }, 200);
        checkday = 1;
        checkweather = 0;
    }
    else if (checkweather === 0 && checkday === 1) {
        weaThericon.style.color = '#fff';
        bgVideoSub.src = dayClear;

        setTimeout(() => {
            bgVideo.src = dayClear;
        }, 200);
        checkday = 1;
        checkweather = 1;
    }
    else if (checkweather === 1 && checkday === 0) {
        weaThericon.style.color = '#91ccc2';
        bgVideoSub.src = nightRainny;
        setTimeout(() => {
            bgVideo.src = nightRainny;
        }, 200);
        checkweather = 0;
    }
    else if (checkweather === 0 && checkday === 0) {
        weaThericon.style.color = '#fff';
        bgVideoSub.src = nightClear;
        setTimeout(() => {
            bgVideo.src = nightClear;
        }, 200);
        checkday = 0;
        checkweather = 1;

    }

}
function checksreenhightlight() {
    if (chillvibeshl === 1) {
        console.log('chill....');
        chillvibes.style.opacity = "1";
        bookcafe.style.opacity = "0.5";
        caferoom.style.opacity = "0.5";
    }
    else if (bookcafehl === 1) {
        bookcafe.style.opacity = "1";
        caferoom.style.opacity = "0.5";
        chillvibes.style.opacity = "0.5";

    }
    else if (caferoomhl === 1) {
        console.log('caferoom....');

        caferoom.style.opacity = "1";
        bookcafe.style.opacity = "0.5";
        chillvibes.style.opacity = "0.5";


    }

}
function updatescreen() {
    if (checkweather === 1 && checkday === 1) {
        bgVideoSub.src = dayClear;
        setTimeout(() => {
            bgVideo.src = dayClear;
        }, 200);

    }
    if (checkweather === 0 && checkday === 1) {
        bgVideoSub.src = dayRainny;
        setTimeout(() => {
            bgVideo.src = dayRainny;
        }, 200);


    }
    if (checkweather === 1 && checkday === 0) {
        bgVideoSub.src = nightClear;
        setTimeout(() => {
            bgVideo.src = nightClear;
        }, 200);
    }
    if (checkweather === 0 && checkday === 0) {
        bgVideoSub.src = nightRainny;
        setTimeout(() => {
            bgVideo.src = nightRainny;
        }, 200);
    }
}


function caferoomchange() {
    chillcontainer.style.display = 'none';
    caferoomcontainer.style.display = 'block';
    bookcafecontainer.style.display = 'none';
    Peopleaudio.pause();


    CityTrafficaudio.pause();
    RainCityaudio.pause();
    KeyBoardaudio.pause();
    dayClear = './assets/videos/CafeDay.mp4';
    nightClear = './assets/videos/CafeNight.mp4';
    dayRainny = './assets/videos/CafeRainyDay.mp4';
    nightRainny = './assets/videos/CafeRainyNight.mp4';
    updatescreen();
    chillvibeshl = 0;
    bookcafehl = 0;
    caferoomhl = 1;
    checksreenhightlight();
}

function chillvibeschange() {
    caferoomcontainer.style.display = 'none';
    bookcafecontainer.style.display = 'none';

    CityTrafficaudio.pause();
    Peopleaudio.pause();


    RainCityaudio.pause();
    KeyBoardaudio.pause();

    dayClear = './assets/videos/Day-sunny.mp4';
    nightClear = './assets/videos/Night-clear.mp4';
    dayRainny = './assets/videos/Day-rainny.mp4';
    nightRainny = './assets/videos/Night-rainny.mp4';
    updatescreen();
    chillcontainer.style.display = 'block';
    chillvibeshl = 1;
    bookcafehl = 0;
    caferoomhl = 0;
    checksreenhightlight();
}

function bookcafechange() {
    chillcontainer.style.display = 'none';
    caferoomcontainer.style.display = 'none';
    Peopleaudio.pause();
    CityTrafficaudio.pause();

    RainCityaudio.pause();
    KeyBoardaudio.pause();
    dayClear = './assets/videos/ExteriorDay.mp4';
    nightClear = './assets/videos/ExteriorNight.mp4';
    dayRainny = './assets/videos/ExteriorRainyDay.mp4';
    nightRainny = './assets/videos/ExteriorRainyNight.mp4';
    updatescreen();
    bookcafecontainer.style.display = 'block';

    chillvibeshl = 0;
    bookcafehl = 1;
    caferoomhl = 0;
    checksreenhightlight();
}

function loadSong() {
    nextBtn.addEventListener('click', function () {
        currentindex += 1;
        console.log(songs[currentindex].path);
        audio.src = songs[currentindex].path;
        namesong.textContent ='Name Song : '+ songs[currentindex].name;
        if (isPlaying == true) {
            audio.play();
        }
        else {
            audio.pause();
        }

    });
    backBtn.addEventListener('click', function () {
        currentindex -= 1;
        audio.src = songs[currentindex].path;
        namesong.textContent ='Name Song : '+ songs[currentindex].name;
        if (isPlaying == true) {
            audio.play();
        }
        else {
            audio.pause();
        }
    })
}
loadSong();


    // playMusic();


// function renderclear() {
//     setTimeout(function () {
//         render.removeAttribute('src');
//     }, 5000);
// }
playBtn.addEventListener('click', function () {
    if (isPlaying === false) {
        console.log('play...');
        audio.play();
        isPlaying = true;
        playBtn.src = "./assets/img/pause.png";
        // volumeBar.style.width=audio.currentTime/audio.duration *100+ '%' ;
        // volumeCircle.style.left=audio.currentTime/audio.duration *100 -1+ '%' ;
    }
    else {
        console.log('pause...');

        audio.pause();
        isPlaying = false;
        playBtn.src = "./assets/img/play.png";


    }
})

let newTime = 0;
soundvolumectn.addEventListener('mousedown', () => {
    isReadyToDrag = true;
    // console.log('mousedown');
});
CityTraffic.addEventListener('mousedown', () => {
    isReadyToDragCityTraffic = true;
    // console.log('mousedown');
})
RainCity.addEventListener('mousedown', () => {
    isReadyToDragRainCity = true;
})
ForestNight.addEventListener('mousedown', () => {
    isReadyToDragForestNight = true;
})
KeyBoard.addEventListener('mousedown', () => {
    isReadyToDragKeyBoard = true;
})
envkeyboardchill.addEventListener('mousedown', () => {
    isReadyToDragKeyBoard = true;
})
envraincitychill.addEventListener('mousedown', () => {
    isReadyToDragRainCity = true;
})
envkeyboardcaferoom.addEventListener('mousedown', () => {
    isReadyToDragKeyBoard = true;
    console.log('envkeyboardcaferoom');
})
envraincitycaferoom.addEventListener('mousedown', () => {
    isReadyToDragRainCity = true;

})
envpeoplecaferoom.addEventListener('mousedown', () => {
    isReadyToDragPeople = true;

})
envraincitybookcafe.addEventListener('mousedown', () => {
    isReadyToDragRainCity = true;

})
envcitytrafficbookcafe.addEventListener('mousedown', () => {
    isReadyToDragCityTraffic = true;

})



Fan.addEventListener('mousedown', () => {
    isReadyToDragFan = true;
})
People.addEventListener('mousedown', () => {
    isReadyToDragPeople = true;
})
RainForest.addEventListener('mousedown', () => {
    isReadyToDragRainForest = true;
})
River.addEventListener('mousedown', () => {
    isReadyToDragRiver = true;
})
Waves.addEventListener('mousedown', () => {
    isReadyToDragWaves = true;
})
Wind.addEventListener('mousedown', () => {
    isReadyToDragWind = true;
})
soundvolumectn.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    // console.log(clientX);
    const left = soundvolumectn.getBoundingClientRect().left
    const width = soundvolumectn.getBoundingClientRect().width
    // console.log(left,width);

    const min = left
    const max = soundvolumectn.getBoundingClientRect().width + left
    if (isReadyToDrag && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log('mousemove');

        // console.log(percent);

        soundvolume.style.width = (percent * 100) + '%';
        soundcircle.style.left = percent * 100 + '%';

        audio.volume = percent;
        // console.log(audio.volume);
        // newTime = audio.duration * percent
        // audio.curentTime = newTime
        // console.log(audio.currentTime);
        // console.log(newTime);


    }

})
CityTraffic.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    // console.log(clientX);

    const left = CityTraffic.getBoundingClientRect().left
    const width = CityTraffic.getBoundingClientRect().width
    // console.log(left,width);



    const min = left
    const max = CityTraffic.getBoundingClientRect().width + left
    if (isReadyToDragCityTraffic && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log('mousemove');

        // console.log(percent);

        CityTrafficbar.style.width = (percent * 100) + '%';
        CityTrafficcircle.style.left = percent * 100 + '%';
        CityTrafficaudio.play();

        CityTrafficaudio.volume = percent;
        // console.log(CityTrafficaudio.volume);
        // console.log(audio.volume);



    }

})
RainCity.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = RainCity.getBoundingClientRect().left
    const width = RainCity.getBoundingClientRect().width
    const min = left
    const max = RainCity.getBoundingClientRect().width + left
    if (isReadyToDragRainCity && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainCitybar.style.width = (percent * 100) + '%';
        RainCitycircle.style.left = percent * 100 + '%';
        RainCityaudio.play();
        RainCityaudio.volume = percent;
    }

})
//ForestNight
ForestNight.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = ForestNight.getBoundingClientRect().left
    const width = ForestNight.getBoundingClientRect().width
    const min = left
    const max = ForestNight.getBoundingClientRect().width + left
    if (isReadyToDragForestNight && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        ForestNightbar.style.width = (percent * 100) + '%';
        ForestNightcircle.style.left = percent * 100 + '%';
        ForestNightaudio.play();
        ForestNightaudio.volume = percent;
    }

})
//KeyBoard
KeyBoard.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = KeyBoard.getBoundingClientRect().left
    const width = KeyBoard.getBoundingClientRect().width
    const min = left
    const max = KeyBoard.getBoundingClientRect().width + left
    if (isReadyToDragKeyBoard && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        KeyBoardbar.style.width = (percent * 100) + '%';
        KeyBoardcircle.style.left = percent * 100 + '%';
        KeyBoardaudio.play();
        KeyBoardaudio.volume = percent;
    }

})
//KeyBoardenvchill
envkeyboardchill.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = envkeyboardchill.getBoundingClientRect().left
    const width = envkeyboardchill.getBoundingClientRect().width
    const min = left
    const max = envkeyboardchill.getBoundingClientRect().width + left
    if (isReadyToDragKeyBoard && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        KeyBoardbar.style.width = (percent * 100) + '%';
        KeyBoardcircle.style.left = percent * 100 + '%';
        envkeyboardbarchill.style.width = (percent * 100) + '%';
        envkeyboardcirclechill.style.left = percent * 100 + '%';
        KeyBoardaudio.play();
        KeyBoardaudio.volume = percent;
    }

})
// envraincitychill
envraincitychill.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = envraincitychill.getBoundingClientRect().left
    const width = envraincitychill.getBoundingClientRect().width
    const min = left
    const max = envraincitychill.getBoundingClientRect().width + left
    if (isReadyToDragRainCity && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainCitybar.style.width = (percent * 100) + '%';
        RainCitycircle.style.left = percent * 100 + '%';
        envraincitybarchill.style.width = percent * 100 + '%';
        envraincitycirclechill.style.left = percent * 100 + '%';
        RainCityaudio.play();
        RainCityaudio.volume = percent;
        // console.log(percent);
        if (percent < 0.01) RainCityaudio.volume = 0;
    }

})
// envraincitycaferoom
envraincitycaferoom.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = envraincitycaferoom.getBoundingClientRect().left
    const width = envraincitycaferoom.getBoundingClientRect().width
    const min = left
    const max = envraincitycaferoom.getBoundingClientRect().width + left
    if (isReadyToDragRainCity && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainCitybar.style.width = (percent * 100) + '%';
        RainCitycircle.style.left = percent * 100 + '%';
        envraincitybarcaferoom.style.width = percent * 100 + '%';
        envraincitycirclecaferoom.style.left = percent * 100 + '%';
        RainCityaudio.play();
        RainCityaudio.volume = percent;
        // console.log(percent);
        if (percent < 0.01) RainCityaudio.volume = 0;
    }

})
// envkeyboardcaferoom
// envkeyboardcaferoom
envkeyboardcaferoom.addEventListener('mousemove', (evt) => {
    // console.log('envkeyboardcaferoom');
    const clientX = evt.clientX;
    const left = envkeyboardcaferoom.getBoundingClientRect().left
    const width = envkeyboardcaferoom.getBoundingClientRect().width
    const min = left
    const max = envkeyboardcaferoom.getBoundingClientRect().width + left
    if (isReadyToDragKeyBoard && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        KeyBoardbar.style.width = (percent * 100) + '%';
        KeyBoardcircle.style.left = percent * 100 + '%';
        envkeyboardbarcaferoom.style.width = percent * 100 + '%';
        envkeyboardcirclecaferoom.style.left = percent * 100 + '%';
        KeyBoardaudio.play();
        KeyBoardaudio.volume = percent;
        // console.log(percent);
        if (percent < 0.01) KeyBoardaudio.volume = 0;
    }

})
//envpeoplecaferoom
envpeoplecaferoom.addEventListener('mousemove', (evt) => {
    // console.log('envpeoplecaferoom');
    const clientX = evt.clientX;
    const left = envpeoplecaferoom.getBoundingClientRect().left
    const width = envpeoplecaferoom.getBoundingClientRect().width
    const min = left
    const max = envpeoplecaferoom.getBoundingClientRect().width + left
    if (isReadyToDragPeople && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Peoplebar.style.width = (percent * 100) + '%';
        Peoplecircle.style.left = percent * 100 + '%';
        envpeoplebarcaferoom.style.width = percent * 100 + '%';
        envpeoplecirclecaferoom.style.left = percent * 100 + '%';
        Peopleaudio.play();
        Peopleaudio.volume = percent;
        // console.log(percent);
        if (percent < 0.01) Peopleaudio.volume = 0;
    }

})
//envraicitybookcafe
envraincitybookcafe.addEventListener('mousemove', (evt) => {
    // console.log('envraincitybookcafe');
    const clientX = evt.clientX;
    const left = envraincitybookcafe.getBoundingClientRect().left
    const width = envraincitybookcafe.getBoundingClientRect().width
    const min = left
    const max = envraincitybookcafe.getBoundingClientRect().width + left
    if (isReadyToDragRainCity && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainCitybar.style.width = (percent * 100) + '%';
        RainCitycircle.style.left = percent * 100 + '%';
        envraincitybarbookcafe.style.width = percent * 100 + '%';
        envraincitycirclebookcafe.style.left = percent * 100 + '%';
        RainCityaudio.play();
        RainCityaudio.volume = percent;
        // console.log(percent);
        if (percent < 0.01) RainCityaudio.volume = 0;
    }

})
//envcitytrafficbookcafe
envcitytrafficbookcafe.addEventListener('mousemove', (evt) => {
    // console.log('envcitytrafficbookcafe');
    const clientX = evt.clientX;
    const left = envcitytrafficbookcafe.getBoundingClientRect().left
    const width = envcitytrafficbookcafe.getBoundingClientRect().width
    const min = left
    const max = envcitytrafficbookcafe.getBoundingClientRect().width + left
    if (isReadyToDragCityTraffic && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        CityTrafficbar.style.width = (percent * 100) + '%';
        CityTrafficcircle.style.left = percent * 100 + '%';
        envcitytrafficbarbookcafe.style.width = percent * 100 + '%';
        envcitytrafficcirclebookcafe.style.left = percent * 100 + '%';
        CityTrafficaudio.play();
        CityTrafficaudio.volume = percent;
        // console.log(percent);
        if (percent < 0.01) CityTrafficaudio.volume = 0;
    }

})


//Fan
Fan.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = Fan.getBoundingClientRect().left
    const width = Fan.getBoundingClientRect().width
    const min = left
    const max = Fan.getBoundingClientRect().width + left
    if (isReadyToDragFan && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Fanbar.style.width = (percent * 100) + '%';
        Fancircle.style.left = percent * 100 + '%';
        Fanaudio.play();
        Fanaudio.volume = percent;
    }

})
//People
People.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = People.getBoundingClientRect().left
    const width = People.getBoundingClientRect().width
    const min = left
    const max = People.getBoundingClientRect().width + left
    if (isReadyToDragPeople && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Peoplebar.style.width = (percent * 100) + '%';
        Peoplecircle.style.left = percent * 100 + '%';
        Peopleaudio.play();
        Peopleaudio.volume = percent;
    }

})
//RainForest
RainForest.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = RainForest.getBoundingClientRect().left
    const width = RainForest.getBoundingClientRect().width
    const min = left
    const max = RainForest.getBoundingClientRect().width + left
    if (isReadyToDragRainForest && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainForestbar.style.width = (percent * 100) + '%';
        RainForestcircle.style.left = percent * 100 + '%';
        RainForestaudio.play();
        RainForestaudio.volume = percent;
    }

})
//River
River.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = River.getBoundingClientRect().left
    const width = River.getBoundingClientRect().width
    const min = left
    const max = River.getBoundingClientRect().width + left
    if (isReadyToDragRiver && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Riverbar.style.width = (percent * 100) + '%';
        Rivercircle.style.left = percent * 100 + '%';
        Riveraudio.play();
        Riveraudio.volume = percent;
    }

})
//Waves
Waves.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = Waves.getBoundingClientRect().left
    const width = Waves.getBoundingClientRect().width
    const min = left
    const max = Waves.getBoundingClientRect().width + left
    if (isReadyToDragWaves && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Wavesbar.style.width = (percent * 100) + '%';
        Wavescircle.style.left = percent * 100 + '%';
        Wavesaudio.play();
        Wavesaudio.volume = percent;
    }

})
//Wind
Wind.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = Wind.getBoundingClientRect().left
    const width = Wind.getBoundingClientRect().width
    const min = left
    const max = Wind.getBoundingClientRect().width + left
    if (isReadyToDragWind && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Windbar.style.width = (percent * 100) + '%';
        Windcircle.style.left = percent * 100 + '%';
        Windaudio.play();
        Windaudio.volume = percent;
    }

})


document.addEventListener('mouseup', () => {
    // console.log('mouseup');
    // audio.curentTime=newTime


    isReadyToDrag = false;
    isReadyToDragCityTraffic = false;
    isReadyToDragRainCity = false;
    isReadyToDragForestNight = false;
    isReadyToDragKeyBoard = false;
    isReadyToDragFan = false;
    isReadyToDragPeople = false;
    isReadyToDragRainForest = false;
    isReadyToDragRiver = false;
    isReadyToDragWaves = false;
    isReadyToDragWind = false;
    isReadyToDragMusic=false;

})




function signupinchange() {
    signupBtn.addEventListener('click', function () {
        signinCtn.style.display = 'none';
        signupCtn.style.display = 'block';
    });
    signinBtn.addEventListener('click', function () {
        signupCtn.style.display = 'none';
        signinCtn.style.display = 'block';
    });

}
function signupinctnchange() {
    if (signupinCtnHidden == false) {
        signupinCtn.style.display = 'none';
        signupinCtnHidden = true;

        console.log('none');
    }
    else {
        signupinCtn.style.display = 'block';
        signupinCtnHidden = false;
        console.log('block');

    }
}
logout.addEventListener('click', function () {
    signupinCtn.style.display = 'block';
    headerSignupin.style.display = 'block';
    headerUsername.style.display = 'none';
    logout.style.display = 'none'
})






















//countdown-start




var isHours = true;
var h_val = null;
var m_val = null;
var s_val = 59;
function setTime() {

    if (m_val < 10) {

        document.getElementById('m').innerText = '0' + m_val.toString();
    }
    else {
        document.getElementById('m').innerText = m_val.toString();

    }
    document.getElementById('s').innerText = '00';
}

oclockHours_0.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 0
        console.log('m_val=0');
        setTime()


    }
    if (h_val == null && isHours == true) {
        console.log('h_val=0');
        h_val = 0
        changeminute();
    }
})
oclockHours_1.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 5
        console.log('m_val=5');
        setTime()

    }
    if (h_val == null && isHours == true) {
        h_val = 1
        console.log('h_val=1');
        changeminute();

    }
})
oclockHours_2.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 10;
        console.log('m_val=10');
        setTime()

    }
    if (h_val == null && isHours == true) {
        h_val = 2;
        console.log('h_val=2');
        changeminute();




    }

})
oclockHours_3.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 15
        setTime()
    }
    if (h_val == null && isHours == true) {
        h_val = 3
        changeminute();

    }
})
oclockHours_4.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 20
        setTime()
    }
    if (h_val == null && isHours == true) {
        h_val = 4
        changeminute();

    }

})
oclockHours_5.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 25
        setTime()
    }
    if (h_val == null && isHours == true) {
        h_val = 5
        changeminute();

    }

})
oclockHours_6.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 30
        setTime()
    }
    if (h_val == null && isHours == true) {
        h_val = 6
        changeminute();

    }

})
oclockHours_7.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 35
        setTime()
    }
    if (h_val == null && isHours == true) {
        h_val = 7
        changeminute();

    }

})
oclockHours_8.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 40
        setTime()
    }
    if (h_val == null && isHours == true) {
        h_val = 8
        changeminute();

    }

})
oclockHours_9.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 45
        setTime()
    }
    if (h_val == null && isHours == true) {
        h_val = 9
        changeminute();

    }

})
oclockHours_10.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 50
        setTime()
    }
    if (h_val == null && isHours == true) {
        h_val = 10
        changeminute();

    }

})
oclockHours_11.addEventListener('click', function () {
    if (m_val == null && isHours == false) {
        m_val = 55
        setTime()
    }
    if (h_val == null && isHours == true) {
        h_val = 11
        changeminute();

    }

})



function changeminute() {
    if (h_val < 10) {

        document.getElementById('h').innerText = '0' + h_val.toString();
    }
    else {
        document.getElementById('h').innerText == h_val.toString();

    }
    console.log('hours');
    oclockHours_0.innerText = '0';
    oclockHours_1.innerText = "5";
    oclockHours_2.innerHTML = '10'
    oclockHours_3.innerHTML = '15'
    oclockHours_4.innerHTML = '20'
    oclockHours_5.innerHTML = '25'
    oclockHours_6.innerHTML = '30'
    oclockHours_7.innerHTML = '35'
    oclockHours_8.innerHTML = '40'
    oclockHours_9.innerHTML = '45'
    oclockHours_10.innerHTML = '50'
    oclockHours_11.innerHTML = '55'
    isHours = false;

}









function newTimee() {
    if (s === -1) {
        m -= 1;
        s = 59;
    }

    // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
    //  - giảm số giờ xuống 1 đơn vị
    //  - thiết lập số phút lại 59
    if (m === -1) {
        h -= 1;
        m = 59;
    }

    // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
    //  - Dừng chương trình
    if (h === -1) {
        clearTimeout(timeout);
        CityTrafficaudio.pause();
        RainCityaudio.pause();
        ForestNightaudio.pause();
        KeyBoardaudio.pause();
        Fanaudio.pause();
        Peopleaudio.pause();
        RainForestaudio.pause();
        Riveraudio.pause();
        Wavesaudio.pause();
        Windaudio.pause();
        audio.pause();
        audiocomethru.pause();
        audiothanhxuan.pause();
        audiokissmemore.pause();
        audiobacktohometown.pause();
        audiodungbamvaonghe.pause();
        audiodeathbed.pause();
        audiotheocean.pause();
        audiothichemhoinhieu.pause();
        audiodaloyeuemnhieu.pause();
        audiocoem.pause();
        audioatmyworst.pause();
        playBtn.src = "./assets/img/play.png";
        timeUp.style.display = 'block';
        setTimeout(function () {
            timeUp.style.display = 'none';

        }, 1000)
        h = null;
        m = null;
        s = null;
        return;
    }

    /* HIỂN THỊ ĐỒNG HỒ*/
    // document.getElementById('h').innerText = h.toString();
    // document.getElementById('m').innerText = m.toString();
    // document.getElementById('s').innerText = s.toString();
    if (h < 10) {

        document.getElementById('h').innerText = '0' + h.toString();
    }
    else {
        document.getElementById('h').innerText == h.toString();

    }
    if (m < 10) {

        document.getElementById('m').innerText = '0' + m.toString();
    }
    else {
        document.getElementById('m').innerText = m.toString();

    }
    if (s < 10) {

        document.getElementById('s').innerText = '0' + s.toString();
    }
    else {
        document.getElementById('s').innerText = s.toString();

    }

    timeout = setTimeout(function () {
        s--;
        newTimee();
    }, 1000);
}

function start() {
    startCd.style.display = 'block';
    setTimeout(function () {
        startCd.style.display = 'none';

    }, 1000)
    console.log('start');

    if (h === null) {
        h = h_val
        // console.log(h);
        // if (isNaN(h)) {
        //     console.log(h);
        //     h = 0;

        // }

        // console.log(h);
        // h=0;
        m = m_val - 1;
        // if (isNaN(m)) {
        //     console.log(m);
        //     m = 0;
        // }
        s = s_val;
        // if (isNaN(s)) {
        //     console.log(s);
        //     s = 0;

        // }
    }
    newTimee();

}

function stop() {
    clearTimeout(timeout);
    console.log('stop');
}
function reset() {
    clearTimeout(timeout);
    document.getElementById('h').innerText = '00';
    document.getElementById('m').innerText = '00';
    document.getElementById('s').innerText = '00';

    oclockHours_0.innerText = '0';
    oclockHours_1.innerText = "1";
    oclockHours_2.innerHTML = '2'
    oclockHours_3.innerHTML = '3'
    oclockHours_4.innerHTML = '4'
    oclockHours_5.innerHTML = '5'
    oclockHours_6.innerHTML = '6'
    oclockHours_7.innerHTML = '7'
    oclockHours_8.innerHTML = '8'
    oclockHours_9.innerHTML = '9'
    oclockHours_10.innerHTML = '10'
    oclockHours_11.innerHTML = '11'
    isHours = true;
    h_val = null;
    m_val = null;

    h = null;
    m = null;
    s = null;
}

//countdown-end


var web = document.documentElement;
var webfullscreen = false;

fullscreen.addEventListener('click', function () {
     
    if (webfullscreen === true) {
        document.exitFullscreen();
        

        fullscreenicon.classList.add('fa-expand');
        fullscreenicon.classList.remove("fa-compress");
        webfullscreen = false;
    }
    else if (webfullscreen === false) {
        web.requestFullscreen();

        fullscreenicon.classList.add('fa-compress');
        fullscreenicon.classList.remove('fa-expand');
        webfullscreen = true;
    }

})
// music-start
playcomethruBtn.addEventListener('click',function(){
    if(comethruPlaying==false)
    {
        
        playcomethruBtn.classList.remove('fa-circle-play')
        playcomethruBtn.classList.add('fa-circle-pause')
        audiocomethru.play();
        audiothanhxuan.pause();
        audiokissmemore.pause();
        audiobacktohometown.pause();
        audiodungbamvaonghe.pause();
        audiodeathbed.pause();
        audiotheocean.pause();
        audiothichemhoinhieu.pause();
        audiodaloyeuemnhieu.pause();
        audiocoem.pause();
        audioatmyworst.pause();
        
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
         if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        }
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }
        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
       
        comethruPlaying=true
                          


    }
    else{
        playcomethruBtn.classList.add('fa-circle-play')
        playcomethruBtn.classList.remove('fa-circle-pause')
        audiocomethru.pause();

        comethruPlaying=false
    }

})
playatmyworstBtn.addEventListener('click',function(){
    if(atmyworstPlaying==false)
    {
        
        playatmyworstBtn.classList.remove('fa-circle-play')
        playatmyworstBtn.classList.add('fa-circle-pause')
        audioatmyworst.play();
        audiokissmemore.pause();
        audiobacktohometown.pause();
        audiodungbamvaonghe.pause();



        audiodaloyeuemnhieu.pause();
        audiodeathbed.pause();
        audiotheocean.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        } 
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        } 
         if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }               

        audiothanhxuan.pause();

        audiothichemhoinhieu.pause();


        audiocoem.pause();

        audiocomethru.pause();
        atmyworstPlaying=true
        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
       


    }
    else{
        playatmyworstBtn.classList.add('fa-circle-play')
        playatmyworstBtn.classList.remove('fa-circle-pause')
        audioatmyworst.pause();

        atmyworstPlaying=false
    }

})
playcoemBtn.addEventListener('click',function(){
    if(coemPlaying==false)
    {
        
        playcoemBtn.classList.remove('fa-circle-play')
        playcoemBtn.classList.add('fa-circle-pause')
        audiocoem.play();
        audiodaloyeuemnhieu.pause();
        audiodeathbed.pause();
        audiobacktohometown.pause();
        audiodungbamvaonghe.pause();


        audiokissmemore.pause();

        audiotheocean.pause();
        audiothanhxuan.pause();
        audiothichemhoinhieu.pause();
        audiocomethru.pause();
        audioatmyworst.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        }
         if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        }
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }

        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
        
        coemPlaying=true


    }
    else{
        playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        audiocoem.pause();

        coemPlaying=false
    }

})
playtheoceanBtn.addEventListener('click',function(){
    if(theoceanPlaying==false)
    {
        
        playtheoceanBtn.classList.remove('fa-circle-play')
        playtheoceanBtn.classList.add('fa-circle-pause')
        audiotheocean.play();
        audiothichemhoinhieu.pause();
        audiodeathbed.pause();
        audiobacktohometown.pause();
        audiodungbamvaonghe.pause();


        audiothanhxuan.pause();
        audiokissmemore.pause();

        audiocoem.pause();



        audiodaloyeuemnhieu.pause();
        audioatmyworst.pause();


        audiocomethru.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        }
         if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
       
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }
        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
        theoceanPlaying=true


    }
    else{
        playtheoceanBtn.classList.add('fa-circle-play')
        playtheoceanBtn.classList.remove('fa-circle-pause')
        audiotheocean.pause();

        theoceanPlaying=false
    }

})
playdeathbedBtn.addEventListener('click',function(){
    if(deathbedPlaying==false)
    {
        
        playdeathbedBtn.classList.remove('fa-circle-play')
        playdeathbedBtn.classList.add('fa-circle-pause')
        audiodeathbed.play();
        audiothanhxuan.pause();
        audiobacktohometown.pause();
        audiodungbamvaonghe.pause();


        audiokissmemore.pause();

        audiothichemhoinhieu.pause();
        audiotheocean.pause();
        audioatmyworst.pause();
        audiocoem.pause();
        audiodaloyeuemnhieu.pause();
        audiocomethru.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        }
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        }
        
        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
         if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
        
        deathbedPlaying=true


    }
    else{
        playdeathbedBtn.classList.add('fa-circle-play')
        playdeathbedBtn.classList.remove('fa-circle-pause')
        audiodeathbed.pause();

        deathbedPlaying=false
    }

})
playthanhxuanBtn.addEventListener('click',function(){
    if(thanhxuanPlaying==false)
    {
        
        playthanhxuanBtn.classList.remove('fa-circle-play')
        playthanhxuanBtn.classList.add('fa-circle-pause')
        audiothanhxuan.play();
        audioatmyworst.pause();
        audiobacktohometown.pause();

        audiokissmemore.pause();
        audiodungbamvaonghe.pause();


        audiodeathbed.pause();

        audiotheocean.pause();
        audiocoem.pause();



        audiothichemhoinhieu.pause();

        audiodaloyeuemnhieu.pause();

        audiocomethru.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        }
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        }
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
         if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
        thanhxuanPlaying=true


    }
    else{
        playthanhxuanBtn.classList.add('fa-circle-play')
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        audiothanhxuan.pause();

        thanhxuanPlaying=false
    }

})
playthichemhoinhieuBtn.addEventListener('click',function(){
    if(thichemhoinhieuPlaying==false)
    {
        
        playthichemhoinhieuBtn.classList.remove('fa-circle-play')
        playthichemhoinhieuBtn.classList.add('fa-circle-pause')
        audiothichemhoinhieu.play();
        audiodeathbed.pause();
        audiobacktohometown.pause();
        audiodungbamvaonghe.pause();


        audiokissmemore.pause();

        audiotheocean.pause();
        audiocoem.pause();


        audiothanhxuan.pause();

        audioatmyworst.pause();

        audiodaloyeuemnhieu.pause();

        audiocomethru.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        }
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }
        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
        thichemhoinhieuPlaying=true


    }
    else{
        playthichemhoinhieuBtn.classList.add('fa-circle-play')
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        audiothichemhoinhieu.pause();

        thichemhoinhieuPlaying=false
    }

})
playdaloyeuemnhieuBtn.addEventListener('click',function(){
    if(daloyeuemnhieuPlaying==false)
    {
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-play')
        playdaloyeuemnhieuBtn.classList.add('fa-circle-pause')
        audiodaloyeuemnhieu.play();
        audiodeathbed.pause();
        audiobacktohometown.pause();
        audiodungbamvaonghe.pause();


        audiokissmemore.pause();

        audiotheocean.pause();
        audiocoem.pause();
        audiothanhxuan.pause();
        audioatmyworst.pause();
        audiothichemhoinhieu.pause();
        audiocomethru.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        }
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        }
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }
        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
        daloyeuemnhieuPlaying=true
    }
    else{
        playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        audiodaloyeuemnhieu.pause();
        daloyeuemnhieuPlaying=false
    }
})
playkissmemoreBtn.addEventListener('click',function(){
    if(kissmemorePlaying==false)
    {
        playkissmemoreBtn.classList.remove('fa-circle-play')
        playkissmemoreBtn.classList.add('fa-circle-pause')
        audiokissmemore.play();
        audiodaloyeuemnhieu.pause();
        audiodungbamvaonghe.pause();

        audiobacktohometown.pause();

        audiodeathbed.pause();
        audiotheocean.pause();
        audiocoem.pause();
        audiothanhxuan.pause();
        audioatmyworst.pause();
        audiothichemhoinhieu.pause();
        audiocomethru.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        }
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        }
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }
        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
        kissmemorePlaying=true
    }
    else{
        playkissmemoreBtn.classList.add('fa-circle-play')
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        audiokissmemore.pause();
        kissmemorePlaying=false
    }
})
playbacktohometownBtn.addEventListener('click',function(){
    if(backtohometownPlaying==false)
    {
        playbacktohometownBtn.classList.remove('fa-circle-play')
        playbacktohometownBtn.classList.add('fa-circle-pause')
        audiobacktohometown.play();
        audiodaloyeuemnhieu.pause();
        audiodungbamvaonghe.pause();

        audiodeathbed.pause();
        audiotheocean.pause();
        audiocoem.pause();
        audiokissmemore.pause();
        audiothanhxuan.pause();
        audioatmyworst.pause();
        audiothichemhoinhieu.pause();
        audiocomethru.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        }
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        }
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }
        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playdungbamvaongheBtn.classList.contains('fa-circle-pause')) {
            playdungbamvaongheBtn.classList.add('fa-circle-play')
            dungbamvaonghePlaying=false;
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        }
        backtohometownPlaying=true
    }
    else{
        playbacktohometownBtn.classList.add('fa-circle-play')
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        audiobacktohometown.pause();

        backtohometownPlaying=false
    }
})
playdungbamvaongheBtn.addEventListener('click',function(){
    if(dungbamvaonghePlaying==false)
    {
        playdungbamvaongheBtn.classList.remove('fa-circle-play')
        playdungbamvaongheBtn.classList.add('fa-circle-pause')
        audiodungbamvaonghe.play();
        audiodaloyeuemnhieu.pause();
        audiodeathbed.pause();
        audiotheocean.pause();
        audiobacktohometown.pause();
        audiocoem.pause();
        audiokissmemore.pause();
        audiothanhxuan.pause();
        audioatmyworst.pause();
        audiothichemhoinhieu.pause();
        audiocomethru.pause();
        if(playcomethruBtn.classList.contains('fa-circle-pause')) {
            playcomethruBtn.classList.add('fa-circle-play')
            comethruPlaying=false;
        playcomethruBtn.classList.remove('fa-circle-pause')
        }
        if(playatmyworstBtn.classList.contains('fa-circle-pause')) {
            playatmyworstBtn.classList.add('fa-circle-play')
            atmyworstPlaying=false;
        playatmyworstBtn.classList.remove('fa-circle-pause')
        }
        if(playcoemBtn.classList.contains('fa-circle-pause')) {
        coemPlaying=false;
            playcoemBtn.classList.add('fa-circle-play')
        playcoemBtn.classList.remove('fa-circle-pause')
        }
        if(playtheoceanBtn.classList.contains('fa-circle-pause')) {
            playtheoceanBtn.classList.add('fa-circle-play')
            theoceanPlaying=false;
        playtheoceanBtn.classList.remove('fa-circle-pause')
        }
         if(playdeathbedBtn.classList.contains('fa-circle-pause')) {
            playdeathbedBtn.classList.add('fa-circle-play')
            deathbedPlaying=false;
        playdeathbedBtn.classList.remove('fa-circle-pause')
        }
        if(playthanhxuanBtn.classList.contains('fa-circle-pause')) {
            playthanhxuanBtn.classList.add('fa-circle-play')
            thanhxuanPlaying=false;
        playthanhxuanBtn.classList.remove('fa-circle-pause')
        }
        if(playthichemhoinhieuBtn.classList.contains('fa-circle-pause')) {
            playthichemhoinhieuBtn.classList.add('fa-circle-play')
            thichemhoinhieuPlaying=false;
        playthichemhoinhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playdaloyeuemnhieuBtn.classList.contains('fa-circle-pause')) {
            playdaloyeuemnhieuBtn.classList.add('fa-circle-play')
            daloyeuemnhieuPlaying=false;
        playdaloyeuemnhieuBtn.classList.remove('fa-circle-pause')
        }
        if(playkissmemoreBtn.classList.contains('fa-circle-pause')) {
            playkissmemoreBtn.classList.add('fa-circle-play')
            kissmemorePlaying=false;
        playkissmemoreBtn.classList.remove('fa-circle-pause')
        }
        if(playbacktohometownBtn.classList.contains('fa-circle-pause')) {
            playbacktohometownBtn.classList.add('fa-circle-play')
            backtohometownPlaying=false;
        playbacktohometownBtn.classList.remove('fa-circle-pause')
        }
        dungbamvaonghePlaying=true
    }
    else{
        playdungbamvaongheBtn.classList.add('fa-circle-play')
        playdungbamvaongheBtn.classList.remove('fa-circle-pause')
        audiodungbamvaonghe.pause();

        dungbamvaonghePlaying=false
    }
})

musicVolumeCtn.addEventListener('mousedown',function(){
    isReadyToDragMusic=true;
    console.log('isReadyToDragMusic=true;');
})
document.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    // console.log(clientX);
    const left = musicVolumeCtn.getBoundingClientRect().left
    const width = musicVolumeCtn.getBoundingClientRect().width
    // console.log(left,width);

    const min = left
    const max = musicVolumeCtn.getBoundingClientRect().width + left
    if (isReadyToDragMusic==true&& clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log('mousemove');

        // console.log(percent);

        musicVolume.style.width = (percent * 100) + '%';
        musicCircle.style.left = percent * 100 + '%';
        if(comethruPlaying==true){
            audiocomethru.volume=percent;
        }
        else if(atmyworstPlaying==true){
            audioatmyworst.volume=percent;
        }
        else if(coemPlaying==true){
            audiocoem.volume=percent;
        }
        else if(theoceanPlaying==true){
            audiotheocean.volume=percent;
        }
        else if(deathbedPlaying==true){
            audiodeathbed.volume=percent;
        }
        else if(thanhxuanPlaying==true){
            audiothanhxuan.volume=percent;
        }
        else if(thichemhoinhieuPlaying==true){
            audiothichemhoinhieu.volume=percent;
        }
        else if(daloyeuemnhieuPlaying==true){
            audiodaloyeuemnhieu.volume=percent;
        }
        else if(kissmemorePlaying==true){
            audiokissmemore.volume=percent;
        }
        else if(backtohometownPlaying==true){
            audiobacktohometown.volume=percent;
        }

        


    }

})




































//tiến độ của bài hát
// function tiendo() {
//     volumeBar.style.width = (audio.currentTime ) / audio.duration * 100 + '%';
//     console.log((audio.currentTime + 1) / audio.duration * 100 + '%');
//     volumeCircle.style.left = (audio.currentTime ) / audio.duration * 100 + '%';
//     console.log((audio.currentTime + 1) / audio.duration * 100 + '%');

//     requestAnimationFrame(tiendo);
// };




























































