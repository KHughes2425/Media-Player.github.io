var player;

// This code loads the IFrame Player API code asynchronously. This is the Youtube-recommended script loading method
var tag = document.createElement("script");
tag.src = "https://youtube.com/iframe_api";
tag.id = "youtubeScript";
var firstScriptTag = document.getElementsByTagName("script")[1];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create youtube player (function called by YouTube API)
function onYouTubeIframeAPIReady() {
	player = new YT.Player("player-div", {
		width: "562",
		videoId: "M7lc1UVf-VE",
		playerVars: {
			autoplay: 0,
			controls: 0,
			rel: 0,
			fs: 0,
			showinfo: 0,
			modestbranding: 1
		},
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange
		}
	});
}
// Player ready handler. Autoplay video when player is ready
function onPlayerReady(event) {
	$('.btn').removeClass( "disabled" );
}

$('#play').click(function(){ player.playVideo(); });

$('#pause').click(function(){ player.pauseVideo(); });

$('#stop').click(function(){ player.stopVideo(); });

$('#speed').click(function(){ 
	var rate = player.getPlaybackRate();
	player.setPlaybackRate(rate + 0.25); 
});

$('#slow').click(function(){
	var rate = player.getPlaybackRate();
	if (rate > 0.25)
	{
		player.setPlaybackRate(rate - 0.25); 
	}
});

$('#mute').click(function()
{
	if(player.isMuted())
	{
		player.unMute();
		$('#mute').text('Mute');
	}
	else
	{
		player.mute();
		$('#mute').text('Unmute');
	}
});


$('#volup').click(function(){ 
	var volume = player.getVolume();
	if (volume <= 95)
	{
		player.setVolume(volume + 5); 
	}
});

$('#voldown').click(function(){
	var volume = player.getVolume();
	if (volume > 5)
	{
		player.setVolume(volume - 5); 
	}
});
// Video state change handler.
function onPlayerStateChange(event) {

}
