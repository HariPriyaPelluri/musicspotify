console.log("Welcome to spotify");
let songindex=0;
let masterPlay=document.getElementById('masterPlay');
let myprogress=document.getElementById('myprogress');
let audioElement=new Audio('songs/1.mp3');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songname:"bheemla nayak" ,filePath:"songs/1.mp3",coverPath:"covers/p1.jpg"},
    {songname:"Gallo telinattunde" ,filePath:"songs/2.mp3",coverPath:"covers/p2.jpg"},
    {songname:"Baitikochi chuste" ,filePath:"songs/3.mp3",coverPath:"covers/p7.jpg"},
    {songname:"kiraku kiraku" ,filePath:"songs/4.mp3",coverPath:"covers/p4.jpg"},
    {songname:"Panja" ,filePath:"songs/5.mp3",coverPath:"covers/p5.jpg"},
    {songname:"kodakakoteswarao" ,filePath:"songs/6.mp3",coverPath:"covers/p4.jpg"},
    {songname:"Am an Indian" ,filePath:"songs/7.mp3",coverPath:"covers/p7.jpg"},
    {songname:"Dil se" ,filePath:"songs/8.mp3",coverPath:"covers/p6.jpg"},
    {songname:"Yemerajaha" ,filePath:"songs/9.mp3",coverPath:"covers/p2.jpg"},
    {songname:"Jalsa" ,filePath:"songs/10.mp3",coverPath:"covers/p1.jpg"},
]

document.querySelector('.container').style.backgroundImage = `url('${songs[songindex].coverPath}')`;


songItem.forEach((element,i)=>{
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songname;
})
//play/pausefa-circle-play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        makeAllPlays(); // reset all to play icons
        let firstSongPlayBtn = document.getElementById('0'); // assuming id='0' for first song play btn
        if (firstSongPlayBtn) {
            firstSongPlayBtn.classList.remove('fa-circle-play');
            firstSongPlayBtn.classList.add('fa-circle-pause');
        }
        document.querySelector('.container').style.backgroundImage = `url('${songs[songindex].coverPath}')`;

    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        let firstSongPlayBtn = document.getElementById('0');
        if (firstSongPlayBtn) {
            firstSongPlayBtn.classList.remove('fa-circle-pause');
            firstSongPlayBtn.classList.add('fa-circle-play');
        }

        document.querySelector('.container').style.backgroundImage = `url('${songs[songindex].coverPath}')`;

    }
})
// Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myprogress.value=progress;
})
myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}
Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songindex=parseInt(e.target.id);
        console.log(songindex);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songindex+1}.mp3`;
         masterSongName.innerText=songs[songindex].songname;
        // document.getElementById('background').style.backgroundImage = `url('${songs[songindex].coverPath}')`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');



    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=9;

    }else{
        songindex-=1;
    }

    makeAllPlays(); // reset all play buttons to play icon
    // let currentSongPlayBtn = document.querySelector(`.songItemPlay[data-index="${songindex}"]`);
    let currentSongPlayBtn = document.getElementById(`${songindex}`);

    if (currentSongPlayBtn) {
        currentSongPlayBtn.classList.remove('fa-circle-play');
        currentSongPlayBtn.classList.add('fa-circle-pause');
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    document.querySelector('.container').style.backgroundImage = `url('${songs[songindex].coverPath}')`;

    masterSongName.innerText=songs[songindex].songname;
    // document.getElementById('background').style.backgroundImage = `url('${songs[songindex].coverPath}')`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }else{
        songindex+=1;
    }

    makeAllPlays(); // reset all play buttons to play icon
    // let currentSongPlayBtn = document.querySelector(`.songItemPlay[data-index="${songindex}"]`);
    let currentSongPlayBtn = document.getElementById(`${songindex}`);

    if (currentSongPlayBtn) {
        currentSongPlayBtn.classList.remove('fa-circle-play');
        currentSongPlayBtn.classList.add('fa-circle-pause');
    }


     audioElement.src=`songs/${songindex+1}.mp3`;
     document.querySelector('.container').style.backgroundImage = `url('${songs[songindex].coverPath}')`;
 
     masterSongName.innerText=songs[songindex].songname;
    //   document.getElementById('background').style.backgroundImage = `url('${songs[songindex].coverPath}')`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
