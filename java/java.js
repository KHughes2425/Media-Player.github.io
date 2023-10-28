document.addEventListener("DOMContentLoaded", init);

function init() {
    const lowRider = document.querySelector(".low-rider");
    const leverage = document.querySelector(".leverage");
    const ff = document.getElementById("ff");
    const slo = document.getElementById("slo");
    const normal = document.getElementById("normal");
    const pick = document.getElementById("pick");

    /**
     * prepare the audio and video for playing
     */
    lowRider.src = "audio/Everybody Wants To Rule The World.mp3";
    lowRider.load();
    lowRider.volume = 0.5;

    //set video's initial volume
    leverage.volume = 0.5;

    /**
     * create the button event listeners to control the audio
     */

    ff.addEventListener("click", (e) => {
        lowRider.playbackRate = 2;
    });

    slo.addEventListener("click", (e) => {
        lowRider.playbackRate = 0.5;
    });

    normal.addEventListener("click", (e) => {
        lowRider.playbackRate = 1;
    });

    /**
     * select lists emit a "change" event when the choice is changed
     */
    pick.addEventListener("change", (e) => {
        // save the audio's current place in the song.
        let time = lowRider.currentTime;

        lowRider.src = e.target.value;
        lowRider.load();
        lowRider.play();

        // set the new song to the same place as the previous one.
        lowRider.currentTime = time;
    });
} // end init function

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        {seconds: 2, callback: func1},
        {seconds: 5, callback: func2},
        {seconds: 10, callback: func3},
    ];

    cueTimer.setup("leverage", myCues);

    const vid = document.querySelector("#leverage");
    const selectList = document.querySelector("#pick");

    selectList.addEventListener("change", (e) => {
        selectVideo(e, pick);
    });
});



function func1(){
    console.log("backgroundChange");
    document.body.style.backgroundColor = "green";
}

function func2({
    
})

