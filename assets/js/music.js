let songs = [
    {
        number: '01',
        image: '../songimage/despacito.jpg',
        name: 'Despacito',
        Artist: "Justin Bieber",
        Released: 2017,
        duration: "03:50",
        path: '../songs/Justin_Bieber_–_Despacito_(Lyrics)_🎤_ft._Luis_Fonsi_&_Daddy_Yankee_[Pop](128k).mp3'
    },
    {
        number: '02',
        image: './assets/songimage/shapeOfU.jpg',
        name: 'Shape of You',
        Artist: " Ed Sheeran",
        Released: 2017,
        duration: "04:00",
        path: './assets/songs/Ed_Sheeran_-_Shape_of_You_(Lyrics)(128k).mp3'
    },
    {
        number: '03',
        image: './assets/songimage/ImTheOne.jpg',
        name: "I'm the One",
        Artist: " DJ Khaled",
        Released: 2017,
        duration: "04:52",
        path: "./assets/songs/ImtheOne.mp3"
    },
    {
        number: '04',
        image: './assets/songimage/stay.jpg',
        name: 'Stay',
        Artist: "Justin Bieber",
        Released: 2020,
        duration: "02:37",
        path: './assets/songs/The_Kid_LAROI,_Justin_Bieber_-_STAY_(Official_Video)(128k).mp3'
    },
    {
        number: '05',
        image: './assets/songimage/yummy.jpg',
        name: 'Yummy',
        Artist: "Justin Bieber",
        Released: 2020,
        duration: "03:23",
        path: './assets/songs/Justin_Bieber_-_Yummy_(Lyrics)(128k).mp3'
    },
    {
        number: '06',
        image: './assets/songimage/thelazysong.jpg',
        name: 'The Lazy Song',
        Artist: "Bruno Mars",
        Released: 200,
        duration: "03:54",
        path: './assets/songs/The_Lazy_Song_-_Bruno_Mars_(Lyrics)_🎵(128k).mp3'
    },
    {
        number: '07',
        image: './assets/songimage/thelazysong.jpg',
        name: 'Wolves',
        Artist: "Selena Gomez",
        Released: 200,
        duration: "03:32",
        path: './assets/songs/Selena_Gomez,_Marshmello_-_Wolves(128k).mp3'
    },
    {
        number: '07',
        image: './assets/songimage/thelazysong.jpg',
        name: 'Who says',
        Artist: "Selena Gomez",
        Released: 200,
        duration: "03:20",
        path: './assets/songs/Selena_Gomez_&_The_Scene_-_Who_Says(128k).mp3'
    },
    {
        number: '07',
        image: './assets/songimage/thelazysong.jpg',
        name: 'My Dilemma',
        Artist: "Selena Gomez",
        Released: 200,
        duration: '03:22',
        path: './assets/songs/Selena_Gomez_-_My_Dilemma_(Music_video)(128k).mp3'
    },
    {
        number: '07',
        image: './assets/songimage/thelazysong.jpg',
        name: 'The heart whats what it wants',
        Artist: "Selena Gomez",
        Released: 200,
        duration: "04:35",
        path: './assets/songs/Selena_Gomez_-_The_Heart_Wants_What_It_Wants_(Official_Video)(128k).mp3'
    },
]
const Block = document.querySelector('.blocks')
const hamburger = document.querySelectorAll('.hamburger')
const upperBlock = document.querySelector('.upperBlock')
const middleBlock = document.querySelector('.middleBlock')
const lowerBlock = document.querySelector('.lowerBlock')
const mobileNavbar = document.querySelector('.mobile-navigation')
const mobileNavLinks = document.querySelectorAll('.mb-nav-link')
const container = document.querySelector('.playlist-container')
const recentImg = document.querySelector('.recent-img')
const title = document.querySelector('.recent-title')
const artist = document.querySelector('.recent-artist')
const playBtn = document.querySelector('.control')
const playIcon = document.querySelector('.playBtn')
const pauseIcon = document.querySelector('.pauseBtn')
const progressBar = document.querySelector('#progressBar')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const recentVolume = document.querySelector('.recent-volume')
const volume_Slider = document.querySelector('#volume')
const volumeIcon = document.querySelector('.volume-icon')
const volume_Bar = document.querySelector('.volume-bar')
const shuffleBtn = document.querySelector('.shuffleBtn')
const autoPlayBtn = document.querySelector('.autoPlay')
const repeatBtn = document.querySelector('.repeatBtn')
const currentTime = document.querySelector('.currentTime')
const totalTime = document.querySelector('.totalTime')
const searchBtn = document.querySelector('.srch-btn')
const filterBtn = document.querySelector('.filter')
const dropdownBtn = document.querySelector('.dropdown-btn')
const dropdown_links = document.querySelectorAll('.d-link')



Block.addEventListener('click', () => {
    upperBlock.classList.toggle('rotateBlock')
    middleBlock.classList.toggle('rotateBlock')
    lowerBlock.classList.toggle('rotateBlock')
    mobileNavbar.classList.toggle('showNavbar')
})

mobileNavLinks.forEach(e => {
    e.addEventListener('click', () => {
        upperBlock.classList.toggle('rotateBlock')
        middleBlock.classList.toggle('rotateBlock')
        lowerBlock.classList.toggle('rotateBlock')
        mobileNavbar.classList.toggle('showNavbar')
    })
})

const removeGif = () => {
    loaderGif.classList.remove('show')
}

const audioTag = document.createElement("audio")
let sortMusic = songs.sort((a, b) => a.Artist.localeCompare(b.Artist))
console.log(sortMusic)
let currentIndex = 0;
let is_playing = false;
let is_clicked = false;
let timer;
let shuffling = 0;
let autoPlay = 0;
let repeat = 0;

let index = 0;

for (let i = 0; i < songs.length; i++) {
    const playlistDiv = document.createElement('div')
    playlistDiv.classList.add('playlist', 'mt-1', 'd-flex', 'align-items-center', 'justify-content-between', 'px-3')
    const firstItem = document.createElement('div');
    firstItem.classList.add('d-flex', 'align-items-center');
    const secondItem = document.createElement('div');
    secondItem.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'px-3', "d-none", "d-md-block", "d-lg-block");
    const imgTag = document.createElement('img')
    imgTag.classList.add('song-img', 'me-3', 'rounded-1')
    imgTag.src= songs[i].image;
    const titleTag = document.createElement('div')
    titleTag.classList.add('title', 'px-3', 'text-end')
    titleTag.textContent = songs[i].name;
    const durationTag = document.createElement('div')
    durationTag.classList.add('me-2', "me-md-5", "d-block")
    durationTag.textContent = songs[i].duration
    const firstImage = document.createElement('img')
    firstImage.classList.add('icon-png', "me-3")
    firstImage.src = "./assets/img/heart.png";
    const secondImage = document.createElement('img')
    secondImage.classList.add('icon-png', "me-3")
    secondImage.src = "./assets/img/cloud-computing.png"
    const thirdImage = document.createElement('img')
    thirdImage.classList.add('icon-png')
    thirdImage.src = "./assets/img/share.png"
    firstItem.append(imgTag, titleTag)
    secondItem.append(  durationTag, firstImage, secondImage, thirdImage)
    playlistDiv.append(firstItem, secondItem)
    container.append(playlistDiv)

    playlistDiv.addEventListener('click', () => {
        is_clicked = true;
        is_playing = true;
        audioTag.src = songs[i].path;
        recentImg.src = songs[i].image;
        title.textContent = songs[i].name;
        artist.textContent = songs[i].Artist;
        if (is_clicked === true) {
            currentIndex = i;
        } if (is_playing === true) {
            playIcon.classList.add('show')
            pauseIcon.classList.add('show')
        }
        audioTag.play();
    })
    timer = setInterval(range_slider, 1000)
}


dropdown_links.forEach(ele => {
        ele.addEventListener('click', () => {
            
                let uploader = (songss) => {
                    if (songss.Artist === ele.textContent){
                        for (let i = 0; i < songss.length; i++) {
                            const playlistDiv = document.createElement('div')
                            playlistDiv.classList.add('playlist', 'mt-1', 'd-flex', 'align-items-center', 'justify-content-between', 'px-3')
                            const firstItem = document.createElement('div');
                            firstItem.classList.add('d-flex', 'align-items-center');
                            const secondItem = document.createElement('div');
                            secondItem.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'px-3');
                            const imgTag = document.createElement('img')
                            imgTag.classList.add('song-img', 'me-3', 'rounded-1')
                            imgTag.src= songss[i].image;
                            const titleTag = document.createElement('div')
                            titleTag.classList.add('title', 'px-3', 'text-end')
                            titleTag.textContent = songss[i].name;
                            const durationTag = document.createElement('div')
                            durationTag.classList.add('me-2', "me-md-5")
                            durationTag.textContent = "00:00"
                            const firstImage = document.createElement('img')
                            firstImage.classList.add('icon-png', "me-3")
                            firstImage.src = "/assets/img/heart.png";
                            const secondImage = document.createElement('img')
                            secondImage.classList.add('icon-png', "me-3")
                            secondImage.src = "/assets/img/cloud-computing.png"
                            const thirdImage = document.createElement('img')
                            thirdImage.classList.add('icon-png')
                            thirdImage.src = "/assets/img/share.png"
                            firstItem.append(imgTag, titleTag)
                            secondItem.append(  durationTag, firstImage, secondImage, thirdImage)
                            playlistDiv.append(firstItem, secondItem)
                            container.append(playlistDiv)

                            playlistDiv.addEventListener('click', () => {
                                is_clicked = true;
                                is_playing = true;
                                audioTag.src = songss[i].path;
                                recentImg.src = songss[i].image;
                                title.textContent = songss[i].name;
                                artist.textContent = songss[i].Artist;
                                if (is_clicked === true) {
                                    currentIndex = i;
                                } if (is_playing === true) {
                                    playIcon.classList.add('show')
                                    pauseIcon.classList.add('show')
                                }
                                audioTag.play();
                            })
                            timer = setInterval(range_slider, 1000)
                            }
                        
                        }
                        console.log("song artist" + songss)
                    }
                    uploader(sortMusic)
                
                
                console.log(ele.textContent)
            })
    })



// Filter

filterBtn.addEventListener("click", () => {
    dropdownBtn.classList.toggle('show')
})



// Changing Volume

volumeIcon.addEventListener('click', () =>{
    volume_Bar.classList.toggle('show')
    volume_Slider.classList.toggle('show')
})

// Opening Shuffle Button

shuffleBtn.addEventListener('click', () => {
    if (shuffling == 1){
        shuffling = 0;
        shuffleBtn.classList.remove('show');
    } else {
        shuffling = 1;
        autoPlay = 0;
        repeat = 0;
        shuffleBtn.classList.add('show')
        if (autoPlay == 0) {
            autoPlayBtn.classList.remove('show')
        }
        if (repeat == 0) {
            repeatBtn.classList.remove('show')
        }
    }
    console.log("shuffle is" + shuffling + "and autoPlay is" + autoPlay + "repeat is " + repeat)
})

// Opening AutoPlay Button

autoPlayBtn.addEventListener("click", ()=> {
    if (autoPlay == 1) {
        autoPlay = 0;
        autoPlayBtn.classList.remove('show')
    } else {
        autoPlay = 1;
        shuffling = 0;
        repeat = 0;
        autoPlayBtn.classList.add('show');
        if (shuffling == 0) {
            shuffleBtn.classList.remove('show');
        }
        if (repeat == 0) {
            repeatBtn.classList.remove('show')
        }
    }
    console.log("autoplay is " + autoPlay + "and shuffling is " + shuffling + "repeat is " + repeat)
})

// Opening Repeat Button

repeatBtn.addEventListener("click", ()=> {
    if (repeat == 1) {
        repeat = 0;
        repeatBtn.classList.remove('show')
    } else {
        repeat = 1;
        shuffling = 0;
        autoPlay = 0;
        repeatBtn.classList.add('show');
        if (shuffling == 0) {
            shuffleBtn.classList.remove('show');
        }
        if (autoPlay == 0) {
            autoPlayBtn.classList.remove('show')
        }
    }
    console.log("repeat is " + repeat + "and shuffling is " + shuffling + "autoplay is " + autoPlay)
})

// Play Button

playBtn.addEventListener('click', () => {
    if (is_playing === false){
        let currentTime = Math.floor(audioTag.currentTime)
        if (currentTime === 0){
            playSong();
        } else {
            playCurrentSong();
        }
    } else {
        pauseSong();
    }
})

// Function of play button

function playSong() {
    let audioTrack = songs[currentIndex].path;
    audioTag.src = audioTrack;
    recentImg.src = songs[currentIndex].image;
    title.textContent = songs[currentIndex].name;
    artist.textContent = songs[currentIndex].Artist;
    is_playing = true;
    playIcon.classList.add('show')
    pauseIcon.classList.add('show')
    audioTag.play();
}

// Showing Total Duration of a Song

audioTag.addEventListener('loadeddata', () => {
    let minText = Math.floor(audioTag.duration / 60)
    let secondText = Math.floor(audioTag.duration % 60)
    let minResult = minText < 10 ? "0" + minText.toString() : minText;
    let secondResult = secondText < 10 ? "0" + secondText.toString() : secondText;
    let timeTotal = minResult + ":" + secondResult
    totalTime.textContent = timeTotal;
})

// Showing Current Time updating of a Song

audioTag.addEventListener('timeupdate', () => {
    let minText = Math.floor(audioTag.currentTime / 60)
    let secondText = Math.floor(audioTag.currentTime % 60)
    let minResult = minText < 10 ? "0" + minText.toString() : minText;
    let secondResult = secondText < 10 ? "0" + secondText.toString() : secondText;
    let currentTotal  = minResult + ":" + secondResult;
    currentTime.textContent = currentTotal
})

// Function of a play Button

function playCurrentSong() {
    playIcon.classList.add('show')
    pauseIcon.classList.add('show')
    is_playing = true;
    audioTag.play();
}

// Function of a play Button

function pauseSong() {
    playIcon.classList.remove('show');
    pauseIcon.classList.remove('show');
    is_playing = false;
    audioTag.pause();
}

// Changing the volume of a Song

function changevolume() {
    let realVolume;
    audioTag.volume = volume_Slider.value  / 100;
    if (volume_Slider.value < 10) {
        realVolume = "0" + volume_Slider.value + "%";
    } else {
        realVolume = volume_Slider.value + "%";
    }
    recentVolume.innerHTML = realVolume;
}

// Changing the duration of a song

function changingDuration() {
    slider_position = audioTag.duration * (progressBar.value / 100)
    audioTag.currentTime = slider_position
}

// Next Button

nextBtn.addEventListener('click', () => {
    if (currentIndex < songs.length - 1) {
        currentIndex++;
        playSong();
    } else {
        currentIndex = 0;
        playSong();
    }
})

// previous Button

prevBtn.addEventListener('click', () => {
    if (currentIndex < 0) {
        currentIndex = songs.length -1;
        playSong();
    } else {
        currentIndex--;
        playSong();
    }
})

// range of duration slider of a song and function repeat, random, and autoplay Button

function range_slider() {
    let position = 0;
    if (!isNaN(audioTag.duration)) {
        position = audioTag.currentTime * (100 / audioTag.duration);
        progressBar.value = position;
    }
    if (audioTag.ended){
        if (autoPlay == 1){
            if (currentIndex < songs.length - 1) {
                currentIndex++;
                playSong();
            } else {
                currentIndex = 0;
                playSong();
            }
        } else if (shuffling == 1) {
            currentIndex = Math.floor(Math.random() * songs.length);
            playSong();
        } else if (repeat == 1) {
            playSong();
        } 
        else {
            position =0;
            progressBar.value = position;
            pauseSong();
        }
    }
    
}
