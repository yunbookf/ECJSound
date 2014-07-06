ECJSound = {
	flash: false,
	init: function(path, callback) {
		var randomString = Math.round(new Date().getTime()/1000).toString() + Math.random().toString();
		$('<div style="position:absolute;left:-999px;top:-999px;"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,0,0,0" width="85" height="16" id="ecjsound"><param name="movie" value="'+path+'/ecjsound.swf?'+randomString+'" /><embed src="'+path+'/ecjsound.swf?'+randomString+'" width="85" height="16" type="application/x-shockwave-flash" name="ecjsound" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object></div>').appendTo('body');
		ECJSound.onLoad = callback;
	},
	load: function(url) {
		ECJSound.flash.ecLoad(url);
	},
	play: function() {
		ECJSound.flash.ecPlay();
	},
	stop: function() {
		ECJSound.flash.ecStop();
	},
	onProgress: function() {
		
	},
	onSampleData: function() {
		
	},
	onPlaying: function() {
		
	},
	onSoundComplete: function() {
	}
};

function ECJSoundLoaded() {
	// --- 选择动画 ---
	if (window.document['ecjsound'])
		ECJSound.flash = window.document['ecjsound'];
	if (navigator.appName.indexOf('Microsoft') == -1) {
		if (document.embeds && document.embeds['ecjsound']) {
			ECJSound.flash = document.embeds['ecjsound'];
		}
	} else
		ECJSound.flash = document.getElementById('ecjsound');
	//*/
	// --- 已加载 ---
	ECJSound.onLoad();
}