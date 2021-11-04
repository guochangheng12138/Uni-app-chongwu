<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true" shadow="true">
			<view slot="left" class="iconfont content_nav_left" @click="handleaddressselect()">&#xe634;</view>
			<!-- 定位组件 -->
			<location class="content_nav_center"></location>
			<!-- 定位组件 -->
			<input type="text" value="" class="content_nav_input" />
		</uni-nav-bar>

		<swiper class="content_banner" :circular="true" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
			<swiper-item class="content_banner_item"><image class="content_banner_item_img" src="/static/home/banner/banner1.png"></image></swiper-item>
			<swiper-item class="content_banner_item"><image class="content_banner_item_img" src="/static/home/banner/banner2.png"></image></swiper-item>
			<swiper-item class="content_banner_item"><image class="content_banner_item_img" src="/static/home/banner/banner3.png"></image></swiper-item>
			<swiper-item class="content_banner_item"><image class="content_banner_item_img" src="/static/home/banner/banner4.png"></image></swiper-item>
		</swiper>

		<view class="content_list">
			<view class="content_list_item" v-for="(item, index) in list" :key="index" @click="handlelistgo(item.url, index)">
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
		<!-- 筛选条组件 -->
		<view class="content_tem"><selectInfo v-if="sonRefresh" :key="timer" @handlelistchange="handlelistchangeF" /></view>
		<!-- 筛选条组件 -->

		<!-- 宠物列表组件 -->
		<view class="content_petlist" v-for="(item, index) in petlist" :key="index"><petInfo :item="item" /></view>
		<!-- 宠物列表组件 -->
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import location from '@/components/location.vue';
import selectInfo from '@/components/selectInfo.vue';
import petInfo from '@/components/petInfo.vue';

export default {
	name: 'home',
	components: {
		uniNavBar,
		location,
		selectInfo,
		petInfo
	},
	data() {
		return {
			// 分页tem列表
			list: [
				{ imgurl: '../../static/home/list/unname.png', text: '黑名单', url: './blacklist' },
				{ imgurl: '../../static/home/list/heart.png', text: '领养', url: './adopt' },
				{ imgurl: '../../static/home/list/pet.png', text: '寻宠物', url: './lookingpets' },
				{ imgurl: '../../static/home/list/talk.png', text: '话题', url: './talk' },
				{ imgurl: '../../static/home/list/wash.png', text: '洗澡', url: './washing' }
			],
			//宠物tem列表
			petlistall: [],
			petlist: [],
			type: 'dog',
			// 两种方法（参数）判断是否重新渲染筛选条子组件
			timer: '',
			sonRefresh: true
		};
	},
	methods: {
		// banner分页跳转
		handlelistgo(url, index) {
			if (index == 1) {
				// adopt页跳转筛选详情页校验参数
				this.$store.commit('defset3');
			} else if (index == 2) {
				// lookingpets页跳转筛选详情页校验参数
				this.$store.commit('defset4');
			}
			uni.navigateTo({
				url: url
			});
		},
		//请求全部宠物列表，及默认小狗列表
		petlistrequest() {
			uni.request({
				url: 'https://www.fastmock.site/mock/e2ce4dd970cec7f48ded6abc9b324290/chongwu/home/adoptlist',
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
				// 初次进入home点击
				if (this.$store.state.selectnav == 0) {
					if (this.petlistall[i].type == this.type) {
						arr.push(this.petlistall[i]);
					}
					this.petlist = arr;
				}
				// 进入过筛选后点击
				else if (this.$store.state.selectnav !== 0) {
					// 类型与性别判断
					if (this.petlistall[i].type == this.type) {
						if (this.$store.state.petsexall == false && this.petlistall[i].sex == this.$store.state.petsex) {
							arr.push(this.petlistall[i]);
						} else if (this.$store.state.petsexall == true) {
							arr.push(this.petlistall[i]);
						}
					}
					// 年龄判断;
					const brr = [];
					for (let i in arr) {
						if (this.$store.state.petageall == false && arr[i].age >= this.$store.state.petage1 && arr[i].age <= this.$store.state.petage2) {
							brr.push(arr[i]);
						} else if (this.$store.state.petageall == true) {
							brr.push(arr[i]);
						}
					}
					// 身体状况判断
					const crr = [];
					for (let i in brr) {
						if (this.$store.state.infoselectall == false && brr[i].aaa == this.$store.state.infoselectaaa && brr[i].bbb == this.$store.state.infoselectbbb && brr[i].ccc == this.$store.state.infoselectccc) {
							crr.push(brr[i]);
						} else if (this.$store.state.infoselectall == true && brr[i].aaa !== this.$store.state.infoselectaaa && brr[i].bbb !== this.$store.state.infoselectbbb && brr[i].ccc !== this.$store.state.infoselectccc) {
							crr.push(brr[i]);
						}
					}
					this.petlist = crr;
				}
			}
		},
		// 检查跳转来源后（是否为第一次显示）重新渲染宠物列表
		checksource() {
			if (this.$store.state.selectnav !== 0) {
				const arr = [];
				// 类型与性别判断
				for (let i in this.petlistall) {
					if (this.petlistall[i].type == this.type) {
						if (this.$store.state.petsexall == false && this.petlistall[i].sex == this.$store.state.petsex) {
							arr.push(this.petlistall[i]);
						} else if (this.$store.state.petsexall == true) {
							arr.push(this.petlistall[i]);
						}
					}
				};
				// 年龄判断;
				const brr = [];
				for (let i in arr) {
					if (this.$store.state.petageall == false && arr[i].age >= this.$store.state.petage1 && arr[i].age <= this.$store.state.petage2) {
						brr.push(arr[i]);
					} else if (this.$store.state.petageall == true) {
						brr.push(arr[i]);
					}
				};
				// 身体状况判断
				const crr = [];
				for (let i in brr) {
					if (this.$store.state.infoselectall == false && brr[i].aaa == this.$store.state.infoselectaaa && brr[i].bbb == this.$store.state.infoselectbbb && brr[i].ccc == this.$store.state.infoselectccc) {
						crr.push(brr[i]);
					} else if (this.$store.state.infoselectall == true && brr[i].aaa !== this.$store.state.infoselectaaa && brr[i].bbb !== this.$store.state.infoselectbbb && brr[i].ccc !== this.$store.state.infoselectccc) {
						crr.push(brr[i]);
					}
				}
				this.petlist = crr;
			}
		},
		// 进入页面重新渲染筛选条子组件
		handleLoad() {
			// 方法一。。。。。。。。跳转tbar页面在小程序端!!无效!!
			this.timer = new Date().getTime();
			// 方法二。。。。。。。。。。。跳转tbar页面在小程序端!!有效!!
			this.sonRefresh = false;
			this.$nextTick(() => {
				this.sonRefresh = true;
			});
		}
	},
	onLoad() {
		// 只在首次载入请求总列表及默认列表,更改显示内容在onshow中操作
		this.petlistrequest();
	},
	onShow() {
		// 执行从home页跳转筛选详情页校验参数
		this.$store.commit('defset2');
		// 重新渲染子组件
		this.handleLoad();
		// 检查跳转来源（是否为第一次显示）重新渲染宠物列表
		this.checksource();
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
			width: 70%;
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
		height: 250rpx;
		margin: 20rpx auto 30rpx;
		&_item {
			width: 100%;
			text-align: center;
			box-sizing: border-box;
			border-radius: 20rpx;
			border: solid white 10rpx;
			&_img {
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
		}
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
				border-radius: 20rpx;
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
		height: 250rpx;
		align-items: center;
		border-radius: 15rpx;
		margin-bottom: 30rpx;
		background: $uni-bg-color;
		&_img {
			width: 210rpx;
			height: 250rpx;
			line-height: 250rpx;
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
				font-size: 30rpx;
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
