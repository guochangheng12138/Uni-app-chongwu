<template>
	<view class="content">
		<view class="content_bgtop"></view>
		<view class="content_info">
			<view class="content_info_nav">
				<view class="iconfont content_info_nav_left" @click="goback()">&#xe612;</view>
				<view class="content_info_nav_text">商城</view>
			</view>
			<view class="content_info_input">
				<input class="content_info_input_left" type="text" value="" />
				<view class="content_info_input_center">|</view>
				<view class="content_info_input_right" @click="handleaddressselect()"><location /></view>
			</view>

			<image class="content_info_img" src="../../static/store/f1.png" mode=""></image>
			<view class="content_info_title"><text class="content_title_text">——— 狗粮 ———</text></view>
			<image class="content_info_png" src="../../static/store/f2.png" mode=""></image>
			<image class="content_info_png" src="../../static/store/f2.png" mode=""></image>
			<image class="content_info_png" src="../../static/store/f2.png" mode=""></image>
			<image class="content_info_png" src="../../static/store/f2.png" mode=""></image>

			<view class="content_info_title"><text class="content_title_text">——— 猫粮 ———</text></view>
			<image class="content_info_png" src="../../static/store/f2.png" mode=""></image>
			<image class="content_info_png" src="../../static/store/f2.png" mode=""></image>
			<image class="content_info_png" src="../../static/store/f2.png" mode=""></image>
			<image class="content_info_png" src="../../static/store/f2.png" mode=""></image>
		</view>
	</view>
</template>

<script>
import location from '@/components/location.vue';

export default {
	name: 'store',
	components: {
		location
	},
	data() {
		return {};
	},
	methods: {
		goback() {
			uni.switchTab({
				url: '../home/home'
			});
		},
		// 修改定位
		handleaddressselect() {
			let that = this;
			uni.chooseLocation({
				success: function(res) {
					that.city = res.name;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	margin: 0 auto 0;
	background: #f5f5f5;
	padding-bottom: 100rpx;
	&_bgtop {
		width: 100%;
		height: 390rpx;
		background-image: linear-gradient(239deg, #fb7426 0%, #ffbdac 100%);
		border-bottom-left-radius: 90% 40%;
		border-bottom-right-radius: 90% 40%;
	}
	&_info {
		width: 90%;
		margin: -390rpx auto 0;
		&_nav {
			display: flex;
			font-size: 40rpx;
			height: 70rpx;
			margin-bottom: 50rpx;
			margin-left: -30rpx;
			color: #fff;
			margin-top: 50rpx;
			&_left {
				font-size: 70rpx;
			}
			&_text {
				font-weight: bolder;
				height: 70rpx;
				line-height: 70rpx;
			}
		}
		&_input {
			height: 80rpx;
			background-color: #fff;
			box-shadow: 0 0 3rpx 1rpx $uni-border-color;
			margin-bottom: 50rpx;
			margin-top: 10rpx;
			display: flex;
			&_left {
				width: 70%;
				height: 80rpx;
				padding-left: 20rpx;
			}
			&_center {
				line-height: 80rpx;
			}
			&_right {
				flex: 1;
				text-align: center;
				line-height: 80rpx;
				height: 80rpx;
				overflow: hidden;
			}
		}
		&_img {
			width: 100%;
			height: 250rpx;
		}
		&_title {
			margin-bottom: 20rpx;
			margin-top: 20rpx;
			width: 95%;
			background: $uni-bg-color;
			text-align: center;
			font-size: 30rpx;
			color: $uni-color-warning;
		}
		&_png {
			width: 50%;
			box-sizing: border-box;
			border-radius: 20rpx;
		}
	}
}
</style>
