<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">领养</view>
		</uni-nav-bar>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';

export default {
	name: 'adopt',
	components: {
		uniNavBar
	},
	data() {
		return {};
	},
	methods: {
		goback() {
			uni.switchTab({
				url: './home'
			});
		}
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
