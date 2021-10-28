<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true" shadow="true">
			<view slot="left" class="iconfont content_nav_left" @click="handleaddressselect()">&#xe634;</view>
			<view class="content_nav_center" @click="handleaddressselect()">{{ city }}</view>
			<input type="text" value="" class="content_nav_input" />
		</uni-nav-bar>

		<image class="content_banner" src="/static/home/banner/banner.png"></image>

		<view class="content_list">
			<view class="content_list_item" v-for="(item, index) in list" :key="index" @click="handlelistgo(item.url)">
				<image :src="item.imgurl" class="content_list_item_img"></image>
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
		<view class="content_tem"><selectInfo class="" @handlelistchange="handlelistchangeF" /></view>

		<view class="content_petlist" v-for="(item, index) in petlist" :key="index"><petInfo :item="item" /></view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import selectInfo from '@/components/selectInfo.vue';
import petInfo from '@/components/petInfo.vue';

export default {
	name: 'home',
	components: {
		uniNavBar,
		selectInfo,
		petInfo
	},
	data() {
		return {
			// 地址
			city: '济南',
			// 分页列表
			list: [
				{ imgurl: '../../static/home/list/unname.png', text: '黑名单', url: './blacklist' },
				{ imgurl: '../../static/home/list/heart.png', text: '领养', url: './adopt' },
				{ imgurl: '../../static/home/list/pet.png', text: '寻宠物' },
				{ imgurl: '../../static/home/list/talk.png', text: '话题', url: './talk' },
				{ imgurl: '../../static/home/list/wash.png', text: '洗澡' }
			],
			//宠物列表
			petlistall: [],
			petlist: [],
			type: 'dog'
		};
	},
	methods: {
		// 分页跳转
		handlelistgo(index) {
			uni.navigateTo({
				url: index
			});
		},
		//请求全部宠物列表，及默认小狗列表
		petlistrequest() {
			uni.request({
				url: 'https://www.fastmock.site/mock/e2ce4dd970cec7f48ded6abc9b324290/chongwu/adoptlist',
				success: res => {
					//全部宠物列表
					this.petlistall = res.data.data;
					//默认显示小狗列表
					const arr = [];
					for (let i in this.petlistall) {
						if (this.petlistall[i].type == this.type) {
							arr.push(this.petlistall[i]);
						}
					}
					this.petlist = arr;
				}
			});
		},
		// 被子组件绑定的方法,切换宠物列表显示
		handlelistchangeF(data) {
			this.type = data;
			const arr = [];
			for (let i in this.petlistall) {
				if (this.petlistall[i].type == this.type) {
					arr.push(this.petlistall[i]);
				}
			}
			this.petlist = arr;
		},
		// 修改定位
		handleaddressselect() {
			// ！！！！！！！！！！！！！！保存this指向！！！！！！！！！！！！！！！！！！！！！
			let that = this;
			// ！！！！！！！！！！！！！！保存this指向！！！！！！！！！！！！！！！！！！！！！
			uni.chooseLocation({
				success: function(res) {
					that.city = res.name;
					// console.log('位置名称：' + res.name);
					// console.log('详细地址：' + res.address);
				}
			});
		}
	},
	onLoad() {},
	onShow() {
		this.petlistrequest();
	}
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
			width: 80%;
			height: 60rpx;
			outline: none;
			border: none;
			padding-left: 20rpx;
			box-shadow: 0 0 3rpx 1rpx $uni-border-color;
		}
		&_left {
			width: 30%;
			text-align: center;
		}
		&_center {
			width: 30%;
			text-align: center;
			margin-left: -110rpx;
			text-align: left;
			height: 60rpx;
			line-height: 60rpx;
			overflow: hidden;
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
	&_tem {
		width: 100%;
	}
	&_petlist {
		width: 95%;
		margin: 0 auto 0;
	}
}
</style>
