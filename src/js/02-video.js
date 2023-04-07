import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_VIDEO_TIME = 'videoplayer-current-time';
let currentVideoTime = localStorage.getItem(KEY_VIDEO_TIME) ?? '0';
// console.log(currentVideoTime);

const iframe = document.querySelector('iframe');

console.log(iframe);

const player = new Player(iframe);


function onPlay() {
    player.getCurrentTime().then(function(seconds) {
        currentVideoTime = seconds;
        localStorage.setItem(KEY_VIDEO_TIME, currentVideoTime);
    });
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(currentVideoTime);