define([], function () {

    var currentSong, playing;

    var reset = function(){

        currentSong = null;
        playing = null;

    };

    var play = function (song) {

        currentSong = song;
        playing = true;

    };

    var pause = function () {

        playing = false;

    };

    var resume = function () {

        if (playing) {

            throw new Error("song is already playing");

        }

        playing = true;

    };

    var makeFavorite = function () {

        currentSong.persistFavoriteStatus(true);

    };

    return {

        play: play,
        pause: pause,
        resume: resume,
        makeFavorite: makeFavorite,
        reset: reset,
        get isPlaying (){

            return playing;

        },
        get currentlyPlayingSong (){

            return currentSong;

        },
        get isPaused (){

            return !playing;

        }

    };

});
