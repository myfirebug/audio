/**
 * 原生audio脚本
 * @date    2015.5.17
 * @version 1.0
 * config
 * @param {String} url   音乐地址
 * @param {String} id    盒子
 * @param {String} style 外层div样式
 * @param {String} btnPalyClass 播放时按钮的样式
 * @param {String} btnPauseClass 暂停时按钮的样式
 * @param {String} html html模版
 */
(function(win){
	var config = {
		url:'',
		id: '',
		style: '',
		btnPalyClass:'',
		btnPauseClass:'',
		html:'<audio autoplay loop></audio><a class="audio-btn"></a>'
	};
	function Audio(options){
		this.settings = Object.assign({},config,options);
		this.init();
	};
	Audio.prototype = {
		init: function(){
			var _this 	 = this,
				settings = _this.settings;
				audioDOM = document.getElementById(settings.id);
			//判断DOM是否存在;
			if(!audioDOM) audioDOM = document.body;

			var audioWrapper = document.createElement('div');
			audioWrapper.id = "audio-wrapper";
			audioWrapper.style = settings.style;
			audioWrapper.innerHTML = settings.html;
			audioDOM.appendChild(audioWrapper);

			_this.audioBtn = audioWrapper.querySelectorAll('a')[0];
			_this.audioBtn.state = true;
			_this.audioTag = audioWrapper.querySelectorAll('audio')[0];
			//判断是否有音乐地址
			if(!settings.url){
				alert('无音乐资源启动失败，请添加音乐资源url');
				return;
			}else{
				_this.audioTag.src = settings.url;
			}
			_this.eventBind();
			_this.play();
		},
		eventBind: function(){
			var _this = this;
			//判断是否是手机设备
			var _device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
			var eventName =  _device ? 'touchstart' : 'click';
			_this.audioBtn.addEventListener( eventName ,fn);
			function fn(){
				if(this.state){
					this.state = false;
					_this.pause();
				}else{
					this.state = true;
					_this.play();
				}
			};
		},
		play: function(){
			this.audioBtn.className = 'audio-btn ' + this.settings.btnPalyClass;
			this.audioTag.play();
		},
		pause: function(){
			this.audioBtn.className = 'audio-btn ' + this.settings.btnPauseClass;
			this.audioTag.pause();
		}
	};
	win.Audio = Audio;
})(typeof window != 'undefind' ? window : this);