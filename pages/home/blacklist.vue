<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">黑名单</view>
		</uni-nav-bar>

		<view class="content_top">
			<view class="content_top_img">
				<image @click="handlelistgo1()" src="../../static/blacklist/report.png" class="content_top_img_item" mode=""></image>
				<image @click="handlelistgo2()" src="../../static/blacklist/lookup.png" class="content_top_img_item" mode=""></image>
				<image src="../../static/blacklist/forward.png" class="content_top_img_item" mode=""></image>
				<!-- <image @click="handlelistgo3()" src="../../static/blacklist/forward.png" class="content_top_img_item" mode=""></image> -->
			</view>
			<view class="content_top_text">
				<view @click="handlelistgo1()">举报</view>
				<view @click="handlelistgo2()">查询</view>
				<!-- <view @click="handlelistgo3()">转发</view> -->
				<view>转发</view>
			</view>
		</view>

		<view class="content_title">———失信人名单———</view>

		<view class="content_list">
			<view class="content_list_top">
				<view :class="['content_list_top_item', curentIndex === true ? 'content_list_top_item_a' : '']" @click="handletypeselect1()">领养人</view>
				<view :class="['content_list_top_item', curentIndex === false ? 'content_list_top_item_a' : '']" @click="handletypeselect2()">送养人</view>
			</view>
			<view class="content_list_under">
				<view class="content_list_under_title">
					<text class="content_list_under_title_text">微信昵称</text>
					<text class="content_list_under_title_text">手机号</text>
					<text class="content_list_under_title_text">微信号</text>
					<text class="content_list_under_title_last">详情</text>
				</view>
				<view class="content_list_under_list">
					<view class="content_list_under_list_item" v-for="(item, index) in blacklist" :key="index">
						<text class="content_list_under_list_item_text">{{ item.name }}</text>
						<text class="content_list_under_list_item_text">{{ item.mobile }}</text>
						<text class="content_list_under_list_item_text">{{ item.wechat }}</text>
						<text class="content_list_under_list_item_last">详情></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';

export default {
	name: 'blacklist',
	components: {
		uniNavBar
	},
	data() {
		return {
			curentIndex: true,
			blacklist: []
			// num: this.$store.state.num
		};
	},
	methods: {
		goback() {
			uni.switchTab({
				url: './home'
			});
		},
		handletypeselect1() {
			this.curentIndex = true;
			uni.request({
				url: 'https://www.fastmock.site/mock/e2ce4dd970cec7f48ded6abc9b324290/chongwu/home/blacklist/adopter',
				success: res => {
					this.blacklist = res.data.data;
				}
			});
		},
		handletypeselect2() {
			this.curentIndex = false;
			uni.request({
				url: 'https://www.fastmock.site/mock/e2ce4dd970cec7f48ded6abc9b324290/chongwu/home/blacklist/placeout',
				success: res => {
					this.blacklist = res.data.data;
				}
			});
		},
		handlelistgo1() {
			uni.navigateTo({
				url: './report'
			});
		},
		handlelistgo2() {
			uni.navigateTo({
				url: './lookup'
			});
		}
		// handlelistgo3() {
		// 	this.$store.commit('jiayi');
		// 	// 需要重复新赋值,不会自动响应,也可以使用computed
		// 	this.num=this.$store.state.num
		// 	//
		// 	this.$store.commit("blacklistshow",[this.blacklist,this.curentIndex])
		// }
	},
	onShow() {
		this.handletypeselect1();
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 95%;
	margin: 0 auto 0;
	background: #f5f5f5;
	height: 1300rpx;
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
	&_top {
		height: 300rpx;
		box-sizing: border-box;
		padding-top: 70rpx;
		margin-bottom: 20rpx;
		&_img {
			display: flex;
			justify-content: space-around;
			margin-bottom: 10rpx;
			&_item {
				width: 100rpx;
				height: 100rpx;
			}
		}
		&_text {
			display: flex;
			justify-content: space-around;
			font-size: 35rpx;
		}
	}
	&_title {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font: bold;
		margin-bottom: 20rpx;
		background: $uni-bg-color;
		color: $uni-color-warning;
	}
	&_list {
		background-color: $uni-bg-color;
		&_top {
			display: flex;
			justify-content: space-around;
			margin-bottom: 20rpx;
			padding: 20rpx;
			&_item {
				padding: 15rpx 35rpx;
				&_a {
					border-radius: 55rpx;
					background: $uni-color-warning;
					color: #ffffff;
				}
			}
		}
		&_under {
			border: solid 1rpx;
			padding-bottom: 400rpx;
			&_title {
				display: flex;
				justify-content: space-around;
				box-sizing: border-box;
				&_text {
					width: 25%;
					text-align: center;
					height: 100rpx;
					line-height: 100rpx;
					border-right: solid 1rpx;
					border-bottom: solid 1rpx;
				}
				&_last {
					width: 25%;
					text-align: center;
					height: 100rpx;
					line-height: 100rpx;
					border-bottom: solid 1rpx;
					border-right: none;
				}
			}
			&_list {
				box-sizing: border-box;
				font-size: 20rpx;
				&_item {
					display: flex;
					justify-content: space-around;
					&_text {
						width: 25%;
						text-align: center;
						height: 70rpx;
						line-height: 70rpx;
						border-right: solid 1rpx;
						border-bottom: solid 1rpx;
					}
					&_last {
						width: 25%;
						text-align: center;
						height: 70rpx;
						line-height: 70rpx;
						border-bottom: solid 1rpx;
						border-right: none;
					}
				}
			}
		}
	}
}
</style>
