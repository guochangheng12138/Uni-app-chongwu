<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
@font-face {
  font-family: 'iconfont';  /* Project id 2811089 */
  src: url('https://at.alicdn.com/t/font_2811089_5dhzuyejuwb.woff2?t=1635144378910') format('woff2'),
       url('https://at.alicdn.com/t/font_2811089_5dhzuyejuwb.woff?t=1635144378910') format('woff'),
       url('https://at.alicdn.com/t/font_2811089_5dhzuyejuwb.ttf?t=1635144378910') format('truetype');
}
.iconfont {
	font-family: 'iconfont' !important;
	/* font-size: 0.16rem; */
	font-style: normal;
	/* border:solid; */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
