<template>
	<view class="content">
	<!-- 	<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">文章详情</view>
		</uni-nav-bar> -->
		<web-view :src="url"></web-view>
		<!-- ！！！！！小程序开发工具端代理设置中，必须关闭代理，直连网络，才能正常显示 -->
		<!-- web-view组件必须使用原生导航栏 ，navigationStyle: custom 对 web-view 组件无效-->
	</view>
</template>

<script>
// import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';

export default {
	name: 'talkinfo',
	// components: { uniNavBar },
	components: { },
	data() {
		return {
			url: ''
		};
	},
	methods: {
		// goback() {
		// 	uni.navigateBack();
		// }
	},
	onLoad: function(option) {
		this.url = option.url;
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 95%;
	margin: 0 auto 0;
	background: #fff;
	padding-bottom: 100rpx;
	&_nav {
		&_left {
			font-size: 70rpx;
			margin: 0;
		}
		&_text {
			margin-left: -60rpx;
			font-size: 40rpx;
			font-weight: bolder;
		}
	}
}
</style>
