<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true" shadow="true">
			<input type="text" value="" class="content_nav_input" />
			<view slot="left" class="iconfont content_nav_left">&#xe634;</view>
		</uni-nav-bar>

		<image class="content_banner" src="/static/home/banner/banner.png"></image>

		<view class="content_list">
			<view class="content_list_item" v-for="(item, index) in list" :key="index" @click="handlelistgo(item.url)">
				<image :src="item.imgurl" class="content_list_item_img" ></image>
				<text class="content_list_item_text">{{ item.text }}</text>
			</view>
		</view>

		<view class="content_title"><text class="content_title_text">——— 营养品 ———</text></view>

		<view class="content_store">
			<image class="content_store_img" src="../../static/home/store/store.jpg" mode=""></image>
			<view class="content_store_text">
				<view class="content_store_text_a">RedDog红狗营养膏...</view>
				<view class="content_store_text_b">义卖品 销售额10%...</view>
				<view class="content_store_text_c">查看详情</view>
			</view>
		</view>

		<view class="content_select">
			<view
				v-for="(item, index) in typelist"
				:key="index"
				:class="['content_select_item', curentIndex === index ? 'content_select_item_click' : '']"
				@click="handletypeselect(index)"
			>
				<view class="content_select_item_text">{{ item.name }}</view>
				<view class="content_select_item_under" v-show="curentIndex === index"></view>
			</view>
			<view class="content_select_item">筛选></view>
		</view>

		<petInfo />
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import petInfo from '@/components/petInfo.vue';

export default {
	name: 'home',
	components: {
		uniNavBar,
		petInfo
	},
	data() {
		return {
			title: 'Hello2',
			list: [
				{ imgurl: '../../static/home/list/unname.png', text: '黑名单', url: './blacklist' },
				{ imgurl: '../../static/home/list/heart.png', text: '领养' },
				{ imgurl: '../../static/home/list/pet.png', text: '寻宠物' },
				{ imgurl: '../../static/home/list/talk.png', text: '话题' },
				{ imgurl: '../../static/home/list/wash.png', text: '洗澡' }
			],
			// 筛选列表
			curentIndex: 0,
			type: 'dog',
			typelist: [
				{
					name: '狗狗',
					type: 'dog',
					click: true
				},
				{
					name: '猫咪',
					type: 'cat',
					click: false
				},
				{
					name: '其它',
					type: 'elsepet',
					click: false
				}
			]
		};
	},
	methods: {
		handletypeselect(index) {
			this.typelist[index].click = true;
			this.curentIndex = index;
		},
		handlelistgo(index){
			uni.navigateTo({
			    url: index
			});
		}
	},
	onLoad() {}
};
</script>

<style lang="scss" scoped>
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
			box-shadow: 0 0 0 4rpx $uni-border-color;
			outline: none;
			border: none;
		}
		&_left {
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
	&_store {
		width: 95%;
		display: flex;
		height: 300rpx;
		align-items: center;
		border-radius: 15rpx;
		margin-bottom: 30rpx;
		background: $uni-bg-color;
		&_img {
			line-height: 300rpx;
			width: 200rpx;
			height: 275rpx;
			display: inline-block;
		}
		&_text {
			padding-left: 15rpx;
			height: 200rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			&_a {
				font: 40rpx bold;
			}
			&_c {
				width: 150rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				border-radius: 30rpx;
				color: $uni-color-error;
				border: solid $uni-color-warning;
				background-color: $uni-color-warning;
			}
		}
	}
	&_select {
		width: 95%;
		display: flex;
		height: 90rpx;
		padding-top: 30rpx;
		align-items: center;
		margin-bottom: 30rpx;
		background: $uni-bg-color;
		justify-content: space-around;
		&_item {
			width: 100rpx;
			height: 50rpx;
			text-align: center;
			border-radius: 20rpx;
			color: white;
			font: 32rpx/50rpx bold;
			background-color: $uni-border-color;
			margin-bottom: 50rpx;
			&_click {
				color: $uni-color-error;
				border: solid $uni-color-warning;
				background-color: $uni-color-warning;
			}
			&_text {
				margin-bottom: 15rpx;
			}
			&_under {
				width: 100rpx;
				height: 10rpx;
				border-radius: 5rpx;
				background-color: $uni-color-warning;
			}
		}
	}
}
</style>
