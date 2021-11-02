<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">洗澡</view>
		</uni-nav-bar>

		<view class="content_title">选择门店</view>
		
		<view class="content_input">
			<input class="content_input_left" type="text" value="" />
			<view class="content_input_center">|</view>
			<view class="content_input_right" @click="handleaddressselect()"><location /></view>
		</view>

		<view class="content_petlist" v-for="(item, index) in shoplistall" :key="index"><shopInfo :item="item" /></view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import location from '@/components/location.vue';
import shopInfo from '@/components/shopInfo.vue';

export default {
	name: 'adopt',
	components: {
		uniNavBar,
		location,
		shopInfo
	},
	data() {
		return {
			// 店铺列表
			shoplistall: [],
		};
	},
	methods: {
		goback() {
			uni.switchTab({
				url: './home'
			});
		},
		//请求全部店铺列表
		shoplistrequest() {
			uni.request({
				url: 'https://www.fastmock.site/mock/e2ce4dd970cec7f48ded6abc9b324290/chongwu/home/washing',
				success: res => {
					//全部店铺列表
					this.shoplistall = res.data.data;
				}
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
	},
	onLoad() {
		// 只在首次载入请求总列表及默认列表,更改显示内容在onshow中操作
		this.shoplistrequest();
	},
	onShow() {}
};
</script>

<style lang="scss">
.content {
	width: 95%;
	margin: 0 auto 0;
	background: #f5f5f5;
	padding-bottom: 300rpx;
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
	&_title{
		margin: 15rpx 10rpx 15rpx;
		font-size: 40rpx;
		font-weight: bolder;
	}
	&_input {
		height: 80rpx;
		background-color: #fff;
		box-shadow: 0 0 3rpx 1rpx $uni-border-color;
		margin-bottom: 30rpx;
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
}
</style>
