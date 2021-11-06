<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">我的关注</view>
		</uni-nav-bar>

		<view :class="['title', 'iconfont', handlex ? 'click' : '']" @click="handlelist()">&#xe8c1; 管理</view>

		<!-- 宠物列表组件 -->
		<view class="content_petlist" v-for="(item, index) in focuspetlist" :key="index">
			<petInfo @checkchange="checkchangeF" :selectST="selectST" :item="item" :index="index" />
		</view>
		<!-- 宠物列表组件 -->

		<view class="submit" v-if="selectST" @click="handlesubmitmess()">删除</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import petInfo from '@/components/petInfo.vue';

export default {
	name: 'focus',
	components: {
		uniNavBar,
		petInfo
	},
	data() {
		return {
			focuspetlist: [],
			selectST: false,
			handlex: false,
			arr:[]
		};
	},
	methods: {
		goback() {
			uni.switchTab({
				url: './my'
			});
		},
		handlesubmitmess() {
			for (let i in this.focuspetlist) {
				if (this.focuspetlist[i].check == true) {
					this.arr.push(this.focuspetlist[i].id);
				}
			}
			// 接下来请求接口,提交要删除的id数组arr
			uni.navigateTo({
				url: './focus'
			})
		},
		checkchangeF(index) {
			this.focuspetlist[index].check = !this.focuspetlist[index].check;
		},
		handlelist() {
			this.selectST = !this.selectST;
			this.handlex = !this.handlex;
		},
		//请求全部关注的宠物列表
		petlistrequest() {
			uni.request({
				url: 'https://www.fastmock.site/mock/e2ce4dd970cec7f48ded6abc9b324290/chongwu/my/focus',
				success: res => {
					this.focuspetlist = res.data.data;
				}
			});
		}
	},
	onShow() {
		this.petlistrequest();
	}
};
</script>

<style lang="scss" scoped>
.submit {
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	background-color: $uni-color-warning;
	margin: 50rpx auto 30rpx;
	border-radius: 20rpx;
	color: #ffffff;
}
.click {
	color: #fb7426;
}
.title {
	margin: 20rpx auto;
	width: 100%;
	text-align: right;
	box-sizing: border-box;
	padding-right: 30rpx;
	font-size: 35rpx;
}
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
