let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let song_title = document.querySelector('#song_title');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let release = document.querySelector('#release');
let curtimeText = document.querySelector('#curtimeText');
let select1 = document.querySelector('#songSelect1')
let select2 = document.querySelector('#songSelect2')
let select3 = document.querySelector('#songSelect3')

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
        udgivelse: "Single 2021",
        tid: "5:27"
    },
    {
        name: "Åbne Favne",
        path: "/audio/aabne_favne.mp3",
        img: "/images/runddans.jpg",
        udgivelse: "Runddans (album 2018)",
        tid: "2:25"
    },
    {
        name: "Stjernetråde",
        path: "/audio/stjernetraade.mp3",
        img: "/images/overflader-album.jpg",
        udgivelse: "Overflader (album 2020)",
        tid: "4:11"
    }

];

function load_track(index_no){
    track.src = all_song[index_no].path;
    song_title.innerHTML = all_song[index_no].name;
    track_image.src = all_song[index_no].img;
    release.innerHTML = all_song[index_no].udgivelse;
    curtimeText.innerHTML = all_song[index_no].tid;
    track.load();

    total.innerHTML = all_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);
    
}
load_track(index_no);

function justplay(){
    if(playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}

function reset_slider(){
    slider.value = 0;
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
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    } 
}

function previous_song(){
    if (index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = all_song.length;
        load_track(index_no);
        playsong();
    } 
}


function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function range_slider(){
    let position = 0;

    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value =  position;
       }
    }






function songselect1(){
    index_no = 0;
    load_track(index_no);
    playsong();
}

function songselect2(){
    index_no = 1;
    load_track(index_no);
    playsong();
}

function songselect3(){
    index_no = 2;
    load_track(index_no);
    playsong();
}






    //Engelsk tekst//

    const btn1 = document.getElementById('language1');
    const btn2 = document.getElementById('language2');
    const dansk = document.getElementById('dansk');
    const engelsk = document.getElementById('engelsk');

btn1.addEventListener('click', () =>{
    btn1.classList.remove('active');
    btn2.classList.add('active');
    dansk.classList.remove('active');
    dansk.classList.add('inactive')
    engelsk.classList.add('active');
    engelsk.classList.remove('inactive');
})

btn2.addEventListener('click', () =>{
    btn2.classList.remove('active');
    btn1.classList.add('active');
    dansk.classList.add('active');
    dansk.classList.remove('inactive')
    engelsk.classList.remove('active');
    engelsk.classList.add('inactive');
})
    