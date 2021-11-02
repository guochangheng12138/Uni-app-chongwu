<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">寻宠</view>
		</uni-nav-bar>

		<view class="content_input">
			<input class="content_input_left" type="text" value="" />
			<view class="content_input_center">|</view>
			<view class="content_input_right" @click="handleaddressselect()"><location /></view>
		</view>

		<selectInfo :key="timer" @handlelistchange="handlelistchangeF" />

		<view class="content_petlist" v-for="(item, index) in petlist2" :key="index"><lookingpetInfo :item="item" /></view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import location from '@/components/location.vue';
import selectInfo from '@/components/selectInfo.vue';
import lookingpetInfo from '@/components/lookingpetInfo.vue';

export default {
	name: 'adopt',
	components: {
		uniNavBar,
		location,
		selectInfo,
		lookingpetInfo
	},
	data() {
		return {
			//宠物列表
			petlistall: [],
			petlist2: [],
			type: 'dog',
			// 判断是否重新渲染子组件
			timer: ''
		};
	},
	methods: {
		goback() {
			uni.switchTab({
				url: './home'
			});
		},
		//请求全部宠物列表，及默认小狗列表
		lookingpetlistrequest() {
			uni.request({
				url: 'https://www.fastmock.site/mock/e2ce4dd970cec7f48ded6abc9b324290/chongwu/home/lookingpets',
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
					this.petlist2 = arr;
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
			this.petlist2 = arr;
		},
		// 修改定位
		handleaddressselect() {
			let that = this;
			uni.chooseLocation({
				success: function(res) {
					that.city = res.name;
				}
			});
		},
		// 重新渲染子组件
		handleLoad() {
			// 方法一
			this.timer = new Date().getTime();
		}
	},
	onLoad() {
		// 只在首次载入请求总列表及默认列表,更改显示内容在onshow中操作
		this.lookingpetlistrequest();
	},
	onShow() {
		// 重新渲染子组件
		this.handleLoad();
	}
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
	&_input {
		height: 80rpx;
		background-color: #fff;
		box-shadow: 0 0 3rpx 1rpx $uni-border-color;
		margin-bottom: 10rpx;
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
