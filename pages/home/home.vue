<template>
	<view class="content">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<uni-nav-bar class="content_nav" fixed="true">
			<input type="text" value="" class="content_nav_input" />
			<view slot="left" class="iconfont content_nav_left">&#xe634;</view>
		</uni-nav-bar>

		<image class="content_banner" src="/static/home/banner/banner.png"></image>

		<view class="content_list">
			<view class="content_list_item" v-for="(item, index) in list" :key="index">
				<image :src="item.imgurl" mode="" class="content_list_item_img"></image>
				<text class="content_list_item_text">{{ item.text }}</text>
			</view>
		</view>

		<view class="content_title"><text class="content_title_text">——— 营养品 ———</text></view>

		<view class="content_store">
			<image src="" mode=""></image>
			<view class=""></view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: { uniNavBar },
	data() {
		return {
			title: 'Hello2',
			list: [
				{ imgurl: '../../static/home/list/unname.png', text: '黑名单' },
				{ imgurl: '../../static/home/list/heart.png', text: '领养' },
				{ imgurl: '../../static/home/list/pet.png', text: '寻宠物' },
				{ imgurl: '../../static/home/list/talk.png', text: '话题' },
				{ imgurl: '../../static/home/list/wash.png', text: '洗澡' }
			]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.status_bar {
	height: 38rpx;
}
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #f5f5f5;
	&_nav {
		width: 100%;
		box-sizing: border-box;
		border-bottom: none;
		&_input {
			width: 85%;
			height: 60rpx;
			box-shadow: 0 0 10rpx 0 $uni-text-color-disable;
		}
		&_left {
			// border: solid;
			width: 100%;
			text-align: center;
		}
	}
	&_banner {
		width: 95%;
		height: 300rpx;
		margin: 20rpx auto 30rpx;
	}
	&_list {
		background: white;
		display: flex;
		flex-direction: row;
		width: 95%;
		height: 180rpx;
		margin-bottom: 30rpx;
		&_item {
			width: 20%;
			box-sizing: border-box;
			&_img {
				width: 90rpx;
				height: 48%;
				display: block;
				text-align: center;
				margin: 20rpx auto 10rpx;
			}
			&_text {
				display: block;
				width: 100%;
				text-align: center;
				font-size: 30rpx;
			}
		}
	}
	&_title {
		margin-bottom: 30rpx;
		width: 95%;
		background: $uni-bg-color;
		text-align: center;
		font-size: 30rpx;
		color: $uni-color-warning;
	}
}
</style>
