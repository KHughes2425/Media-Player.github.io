// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var myTimer = false;

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "1024",
        videoId: "uOZ2r_UAfdc",
        playerVars: {
            playsinline: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

// 3. setup the video control buttons
const myplay = document.getElementById("myplay");
const mypause = document.getElementById("mypause");
const slo = document.getElementById("slo");
const normal = document.getElementById("normal");
const fast = document.getElementById("fast");

//add event listners for controls
myplay.addEventListener("click", (e) => {
    player.playVideo();
});

mypause.addEventListener("click", (e) => {
    player.pauseVideo();
});

slo.addEventListener("click", (e) => {
    player.setPlaybackRate(0.25);
});

normal.addEventListener("click", (e) => {
    player.setPlaybackRate(1);
});

fast.addEventListener("click", (e) => {
    player.setPlaybackRate(2);
});

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log("playerReady");
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),

function onPlayerStateChange(event) {
    switch (event.data) {
        case YT.PlayerState.PLAYING:
            console.log("starting timer");
            myTimer = setInterval(getTime, 1000, event);
            break;
        case !YT.PlayerState.PLAYING:
            if (!myTimer) {
                console.log("no timer");
            }
            break;
        default:
            clearInterval(myTimer);
            console.log("stopping timer");
    }
}

// 6. get the currentTime of the video and trigger the
// manageCues function if we are watching the inital video.
function getTime(event) {
    let vidInfo = event.target.getVideoData();
    time = Math.floor(event.target.getCurrentTime());

    // make it so the manageCues only runs for a specific video
    if (vidInfo.video_id == "uOZ2r_UAfdc", "lDV5cM9YE4g", "EaswWiwMVs8") {
        manageCues(time);
    } else {
        console.log("cue NOT managed");
    }
}

// This function acts as the playlist for the inital video
function manageCues(time) {
    console.log(time);

    switch (time) {
        case 1:
            doStuff();
            break;
        case 10:
            doMoreStuff();
            showInfo();
            break;
        case 15:
            moreStuff();
            break;
        case 21:
            showInfo();
            player.pauseVideo();
            setTimeout("player.playVideo();", 3000);
            break;
        case 27:
            showInfo();
            changeLayout();
            player.loadVideoById({
                videoId: "lDV5cM9YE4g",
                startSeconds: 40,
                endSeconds: 200,
            });
            break;
        case 60:
            strayStuff();
            player.loadVideoById({
                videoId: "EaswWiwMVs8",
                startSeconds: 65,
                endSeconds: 102,
            });
            break;
        case 101:
            moonByul();
            player.loadVideoById({
                videoId: "oCTqcTe1lIA",
                startSeconds: 30,
                endSeconds: 58,
            });

        
        




            //undo previous styling caused by inital video
            unDoStuff();
       


            //undo previous styling caused by inital video
    }
}

/**
 * Below are all of the functions called by the
 * manageCues function
 *
 */

function doStuff() {
    console.log("doStuff");
    document.body.style.backgroundColor = "Hotpink";
    player.getIframe().style.border = "10px solid white";
    console.log("BG changed");

}

function doMoreStuff() {
    document.body.style.backgroundColor = "pink";
    document.querySelector("#web").src =
        "https://kprofiles.com/mamamoo-members-profile/";
    console.log("moreStuffDone");
}

function moreStuff(){
    document.body.style.backgroundColor = "yellow";
    player.getIframe().style.border = "10px solid black";


    
}

function changeLayout() {
    let iframe = player.getIframe();
    iframe.classList.add("layout2");
    document.body.style.backgroundColor = "teal";
    player.getIframe().style.border = "10px groove green";
    document.querySelector("#web").src =
    "https://kprofiles.com/chungha-profile/";
    console.log("Open ChungHa Profile")

    console.log("layout changed");    
}

function showInfo() {
    let iframe = player.getIframe();
    iframe.classList.add("layout2");
    document.body.style.backgroundColor = "papayawhip";
    player.getIframe().style.border = "10px outset tan";




}

function changeVid() {
    document.querySelector("#web").src =
    "https://kpopping.com/profiles/group/ITZY";
    let Itzy = document.querySelector(".Itzy");
    Itzy.innerHTML = "<p>One of the most populars in the K-pop Industry, Itzy!</p>";
    document.body.style.backgroundColor = "teal";
    player.getIframe().style.border = "10px solid green";

    let iframe = player.getIframe();
    iframe.classList.add("layout2");




}

function Vid() {
    document.body.style.backgroundColor = "lightblue";
    document.querySelector("#web").src =
    "https://kprofiles.com/chungha-profile/";
    console.log("Open ChungHa Profile")

}

function strayStuff() {
    document.body.style.backgroundColor = "darkblue";
    document.querySelector("#web").src =
    "https://kprofiles.com/stray-kids-members-profile/";
    console.log("Open Stray Kids profile")


}

function moonByul() {
    document.body.style.backgroundColor = "darkred";
    document.querySelector("#web").src =
    "https://kprofiles.com/moonbyul-profile-facts/";
    player.getIframe().style.border = "10px solid purple";

    console.log("Open MoonByul profile");



}

//If the video is switched from initial video, calling this function will undo DOM changed made for the first video.
function unDoStuff() {
    document.body.style.backgroundColor = "teal, red, blue";

    //clear iFrame
    const infoFrame = document.querySelector(".myframe");
    infoFrame.src = "https://kpopping.com/profiles/group/ITZY";
    // clear the article
    document.querySelector("#info").innerHTML = "Korea";
    document.querySelector("#web").src =
    "https://kprofiles.com/mamamoo-members-profile/";

    //re-style the page
    let iframe = player.getIframe();
    iframe.classList.remove("layout2");
    player.getIframe().style.border = "none";
    console.log("UNDONE!!!!!!!");
}

function stopVideo() {
    console.log("video stopped");
    player.stopVideo();
}