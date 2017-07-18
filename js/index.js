
var musicList = [

	{
		musicName:"七里香",
		author:"周杰伦",
		posterImg:"img/qlx.jpg",
		musicSrc:"Music/七里香.mp3"
	},
	{
		musicName:"搁浅",
		author:"周杰伦",
		posterImg:"img/gq.jpg",
		musicSrc:"Music/搁浅.mp3"
	},
	{
		musicName:"看淡",
		author:"田馥甄",
		posterImg:"img/kd.jpg",
		musicSrc:"Music/看淡.mp3"
	},
	{
		musicName:"小幸运",
		author:"田馥甄",
		posterImg:"img/xxy.jpg",
		musicSrc:"Music/小幸运.mp3"
	},
	{
		musicName:"枫",
		author:"周杰伦",
		posterImg:"img/feng.jpg",
		musicSrc:"Music/枫.mp3"
	},
	{
		musicName:"小幸运",
		author:"田馥甄",
		posterImg:"img/xxy.jpg",
		musicSrc:"Music/小幸运.mp3"
	}
];

var playMusic = null;
var isPlay = true;

var songList = document.createElement("div");
songList.className = "musicList";

var str = "";
for(var i = 0; i < musicList.length; i ++){
	
	str += "<div class='songInfo'><div id='songName"+ i +"' class='songName'>"+ musicList[i].musicName +"</div><div class='singerName'>"+ musicList[i].author +"</div><audio class='audioMusic' id='music"+ i +"' src='"+ musicList[i].musicSrc +"'></audio></div>";
}

songList.innerHTML = str;

document.body.appendChild(songList);


/*document.querySelector(".songInfo").onclick = function(event){
	console.log(event);
}*/

var oSongInfo = document.getElementsByClassName("songInfo");
//给每个歌曲列表添加索引
for(var i = 0; i < oSongInfo.length; i ++){
	oSongInfo[i].index = i;
}


//设置当前播放音乐
var currentMusic = null;
for(var i = 0; i < oSongInfo.length; i ++){
	
	for(var j = 0; j < musicList[i].length; j ++){
		console.log(document.querySelector("#music" + j).src);
		document.querySelector("#music" + j).pause();
	}
	oSongInfo[i].onclick = function(){
		
		var currentIndex = this.index;
		
		if(currentMusic != null){
			currentMusic.pause();
			currentMusic.currentTime = 0;
		}
		
		playMusic = document.querySelector("#music" + this.index);
		currentMusic = playMusic;
		playMusic.play();
		console.log(this.index);
		
		var play = document.getElementById("play");
		var playLeft = document.getElementById("playLeft");
		
		var playRight = document.getElementById("playRight");
		playRight.innerHTML = "<span class='iconfont icon-prev'></span><span class='iconfont icon-bofang icon-play'></span><span class='iconfont icon-xiayiqu'></span>";
		
		function getPlayLeft(obj){
			var id = parseInt(obj.id.replace("music",0));
			var img = playLeft.querySelector("img");
			img.src = musicList[id].posterImg;
			var desc = document.getElementById("desc");
			desc.innerHTML = "<p class='title'>"+ musicList[id].musicName +"</p><p class='author'>"+ musicList[id].author +"</p>";
		}
		
		getPlayLeft(currentMusic);
		
		//点击播放按钮
		document.querySelector("#playRight .icon-play").onclick = function(event){
			console.log(isPlay);
			if(isPlay){
				this.className = "iconfont icon-bofang1 icon-play";
				currentMusic.pause();
				isPlay = false;
			}else{
				this.className = "iconfont icon-bofang icon-play";
				currentMusic.play();
				isPlay = true;
			}
		}
		
		//上一曲的方法
		var preSong = function(){
			
			if(currentIndex > 0){
				currentMusic.pause();
				currentMusic.currentTime = 0;
				var preIndex = -- currentIndex;
				currentMusic = document.querySelector("#music" + preIndex);
				getPlayLeft(currentMusic);
				currentMusic.play();
			}
		}
		//下一曲的方法
		var nextSong = function(){
			
			if(currentIndex < musicList.length){
				currentMusic.pause();
				currentMusic.currentTime = 0;
				var nextIndex = ++ currentIndex;
				currentMusic = document.querySelector("#music" + nextIndex);
				getPlayLeft(currentMusic);
				currentMusic.play();
			}
			
		}
		//点击上一曲
		document.querySelector("#playRight .icon-prev").onclick = preSong;
		document.querySelector("#playRight .icon-xiayiqu").onclick = nextSong;
	}
	
}

