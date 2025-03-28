const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id: 1,
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "1.jpg"
    },
    {
        id: 2,
        songName: `Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "2.jpg"
    },
    {
        id: 3,
        songName: `Cartoon On & On <br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "3.jpg"
    },
    {
        id: 4,
        songName: `Mortals <br>
        <div class="subtitle">Mortals</div>`,
        poster: "4.jpg"
    },
    {
        id: 5,
        songName: `Baarishein <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "5.jpg"
    },
    {
        id: 6,
        songName: `Electronic Music <br>
        <div class="subtitle">Electronic</div>`,
        poster: "6.jpg"
    },
    {
        id: 7,
        songName: `Agar Tum Saath Ho <br>
        <div class="subtitle">Tamashaa</div>`,
        poster: "7.jpg"
    },
    {
        id: 8,
        songName: `Suna Hai  <br>
        <div class="subtitle">Naha Kakker</div>`,
        poster: "8.jpg"
    },
    {
        id: 9,
        songName: `Dilbar <br>
        <div class="subtitle">Satyatmeva Jayatej</div>`,
        poster: "9.jpg"
    },
    {
        id: 10,
        songName: `Duniya <br>
        <div class="subtitle">Luka Chuppi </div>`,
        poster: "10.jpg"
    },


    {
        id: 11,
        songName: `Gulabi Sadi <br>
        <div class="subtitle">Sanju Rathod</div>`,
        poster: "11.jpg"
    },
    {
        id: 12,
        songName: `Arjan Vailly <br>
        <div class="subtitle">Bhupinder Babbal</div>`,
        poster: "12.jpg"
    },
    {
        id: 13,
        songName: `Zingaat<br>
        <div class="subtitle">Ajay Atul</div>`,
        poster: "13.jpg"
    },
    {
        id: 14,
        songName: `Jhoome Jo Pathan <br>
        <div class="subtitle">Sukhwinder Singh</div>`,
        poster: "14.jpg"
    },
    {
        id: 15,
        songName: `Lutt Putt Gaya <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "15.jpg"
    },
    {
        id: 16,
        songName: `Kahani Suno <br>
        <div class="subtitle">Kaifi Khalil</div>`,
        poster: "16.jpg"
    },
    {
        id: 17,
        songName: `Galti Se Mistake <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "17.jpg"
    },
    {
        id: 18,
        songName: `O Maahi <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "18.jpg"
    },
    {
        id: 19,
        songName: `Nacho Nacho <br>
        <div class="subtitle">Vishal Mishra</div>`,
        poster: "19.jpg"
    },
    {
        id: 20,
        songName: `Mahiya Jinna Sohna <br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "20.jpg"
    },
    {
        id: 21,
        songName: `Vaaste <br>
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "21.jpg"
    },
    {
        id: 22,
        songName: `Khairiyat <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "22.jpg"
    },
    {
        id: 23,
        songName: `Raataan Lambiyan <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "23.jpg"
    },
    {
        id: 24,
        songName: `Apna Bana Le <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "24.jpg"
    },
    {
        id: 25,
        songName: `Tere Vaaste <br>
        <div class="subtitle">Varun Jain</div>`,
        poster: "25.jpg"
    },
    {
        id: 26,
        songName: `Kesariya <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "26.jpg"
    },
    {
        id: 27,
        songName: `Lut Gaya <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "27.jpg"
    },
    {
        id: 28,
        songName: `Pasoori <br>
        <div class="subtitle">Ali Sethi</div>`,
        poster: "28.jpg"
    },
    {
        id: 29,
        songName: `Heeriye <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "29.jpg"
    },
    {
        id: 30,
        songName: `Aankh Marey <br>
        <div class="subtitle">Kumar Sanu</div>`,
        poster: "30.jpg"
    }
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


// search data start 
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
        
    }
})
// search data end 

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        // add
        download_music.href = `audio/${index}.mp3`;

        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            // add 
            download_music.setAttribute('download', songName)
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

const next_music = () => {

    music.addEventListener('ended', ()=>{
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        if (index == songs.length) {
            index == 0;
        }
        index++;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        // add
        download_music.href = `audio/${index}.mp3`;
    
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
    
        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
              // add 
              download_music.setAttribute('download', songName)
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)"; 
        makeAllPlays();
        document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
        document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
    })
    
}

const repeat_music = () => {

    music.addEventListener('ended', ()=>{
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        index;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        // add
        download_music.href = `audio/${index}.mp3`;
    
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
    
        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
              // add 
              download_music.setAttribute('download', songName)
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)"; 
        makeAllPlays();
        document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
        document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
    })
}

const random_music = () => {

    music.addEventListener('ended', ()=>{
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        if (index == songs.length) {
            index == 0;
        }
        index = Math.floor((Math.random()* songs.length)+1);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        // add
        download_music.href = `audio/${index}.mp3`;
        
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        
        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
              // add 
              download_music.setAttribute('download', songName)
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)"; 
        makeAllPlays();
        document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
        document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
    })
        
}
    
let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
       case "repeat": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
       case "random": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        // add 
        download_music.setAttribute('download', songName)
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        // add 
        download_music.setAttribute('download', songName)
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
