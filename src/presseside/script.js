let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let song_title = document.querySelector('#song_title');
let slider = document.querySelector('#pduration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let release = document.querySelector('#release');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let all_song = [
    {
        name: "Bløde Universer",
        path: "/audio/blode_universer.mp3",
        img: "/images/blode_universer.png",
        udgivelse: "Single 2021"
    },
    {
        name: "Åbne Favne",
        path: "/audio/aabne_favne.mp3",
        img: "/images/runddans.jpg",
        udgivelse: "Runddans (album 2018)"
    },
    {
        name: "Stjernetråde",
        path: "/audio/stjernetraade.mp3",
        img: "/images/overfladeralbum.jpg",
        udgivelse: "Overflader (album 2020)"
    }

];

function load_track(index_no){
    track.src = all_song[index_no].path;
    song_title.innerHTML = all_song[index_no].name;
    track_image.innerHTML = all_song[index_no].img;
    release.innerHTML = all_song[index_no].udgivelse;
    track.load();
}
load_track(index_no);

function justplay(){
    if(playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}

function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
}

function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fas fa-play"></i>';
}



function next_song(){
    if (index_no < all_song.length - 1){
        index_no += 1;
        
    }
}