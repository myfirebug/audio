# audio
<p>audio学用于h5活动页面播放音乐</p>
 
# 使用
```javascript
/
 * config
 * @param {String} url   音乐地址
 * @param {String} id    盒子
 * @param {String} style 外层div样式
 * @param {String} btnPalyClass 播放时按钮的样式
 * @param {String} btnPauseClass 暂停时按钮的样式
 * @param {String} html html模版
 */
new Audio({
		id:'',
		style:'right:10px;top:10px;',
		btnPalyClass:'play',
		btnPauseClass:'pause',
		url:'http://www.w3school.com.cn/i/horse.ogg'
	});
```
