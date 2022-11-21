checksreenhightlight();
// renderclear();
dayNight.addEventListener('click',changeScene);
weaTher.addEventListener('click',changeweaTher);
// taskItemscreen.addEventListener('click',showhidden('sreenBoard'));
// taskItemscreen.addEventListener('click',()=>{
//     if(sreenBoard.style.display==='block'){
//                 sreenBoard.style.display='none';
//             }
//             else{
//                 sreenBoard.style.display='block';
//             }
// });

// sreenBoard.addEventListener('click',function(event){
// event.stopPropagation();
// })

caferoom.addEventListener('click',caferoomchange);
bookcafe .addEventListener('click',bookcafechange);
chillvibes.addEventListener('click',chillvibeschange);
comeoutBtn.addEventListener('click',bookcafechange);
comeinBtn.addEventListener('click',caferoomchange);
signupinchange();
headerSignupin.addEventListener('click',signupinctnchange);

// playBtn.addEventListener('click',function(){
//     if(isPlaying===false){
//         console.log('play...');
//         audio.play();   
//         isPlaying=true;  
//         playBtn.src="./assets/img/pause.png";
//         // volumeBar.style.width=audio.currentTime/audio.duration *100+ '%' ;
//         // volumeCircle.style.left=audio.currentTime/audio.duration *100 -1+ '%' ;
//     }
//     else{
//         console.log('pause...');

//         audio.pause();
//         isPlaying=false;
//         playBtn.src="./assets/img/play.png";

        
//     }
// })

//chạy hàm theo dõi tiến độ
// setTimeout(tiendo(),100)




// requestAnimationFrame(function(){
//     bgVideo.src = dayRainny;
// })






// caferoom.addEventListener('click',()=>{
//     console.log('caferoom....');
//      dayClear='./assets/videos/CafeDay.mp4';
//  nightClear='./assets/videos/CafeNight.mp4';
//  dayRainny='./assets/videos/CafeRainyDay.mp4';
//  nightRainny='./assets/videos/CafeRainyNight.mp4';
//  updatescreen();
//  chillvibeshl = 0;
//  bookcafehl = 0;
//  caferoomhl = 1;
//  checksreenhightlight();
// });

// caferoom.addEventListener('click',()=>{
//     console.log('caferoom....');
//      dayClear='./assets/videos/CafeDay.mp4';
//  nightClear='./assets/videos/CafeNight.mp4';
//  dayRainny='./assets/videos/CafeRainyDay.mp4';
//  nightRainny='./assets/videos/CafeRainyNight.mp4';
//  updatescreen();
//  chillvibeshl = 0;
//  bookcafehl = 0;
//  caferoomhl = 1;
//  checksreenhightlight();
// });

// startbtn.addEventListener('click',start);
// stopbtn.addEventListener('click',stop);
// resetbtn.addEventListener('click',reset);