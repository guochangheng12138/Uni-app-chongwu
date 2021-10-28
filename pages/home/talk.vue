<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">话题</view>
		</uni-nav-bar>

		<view class="content_list" v-for="(item, index) in talklist" :key="index">
			<image :src="item.imgurl" class="content_list_img" @click="handleurlgo(item.url)"></image>
			<view class="content_list_title">{{ item.title }}</view>
			<view class="content_list_info">{{ item.info }}</view>
			<view class="content_list_under">
				<view class="iconfont iconfonts">&#xe607;</view>
				<view class="content_list_under_num">{{ item.looks }}</view>
				<view class="iconfont" iconfonts>&#xe6ad;</view>
				<view class="content_list_under_num">{{ item.mess }}</view>
				<view class="iconfont iconfonts" v-if="item.collection == false">&#xe605;</view>
				<view class="iconfont iconfonts" v-if="item.collection == true">&#xe642;</view>
				<view class="content_list_under_num" @click="handlestarschange(index)">{{ item.stars }}</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';

export default {
	name: 'talk',
	components: {
		uniNavBar
	},
	data() {
		return {
			talklist: []
		};
	},
	methods: {
		goback() {
			uni.switchTab({
				url: './home'
			});
		},
		talklistrequest() {
			uni.request({
				url: 'https://www.fastmock.site/mock/e2ce4dd970cec7f48ded6abc9b324290/chongwu/talk',
				success: res => {
					this.talklist = res.data.data;
				}
			});
		},
		handlestarschange(index) {
			this.talklist[index].collection = !this.talklist[index].collection;
			if ((this.talklist[index].collection == true)) {
				this.talklist[index].stars++;
				uni.request({
					url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
					method: 'POST',
					timeout: 10000,
					dataType: 'json',
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					data: {
						id: index
					},
					success: res => {
						console.log(1);
					},
					fail: () => {
						console.log(2);
					}
				});
			}else{
				this.talklist[index].stars--;
			}
		},
		handleurlgo(index) {
			uni.navigateTo({
				url: `./talkinfo?url=${index}`
			});
		}
	},
	onShow() {
		this.talklistrequest();
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
		}
	}
	&_list {
		background: #f5f5f5;
		margin-top: 50rpx;
		height: 580rpx;
		&_img {
			width: 100%;
			height: 350rpx;
			border-radius: 10rpx;
		}
		&_title {
			font: 40rpx/50rpx bolder;
			height: 50rpx;
			width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-bottom: 15rpx;
		}
		&_info {
			font-size: 30rpx;
			height: 85rpx;
			width: 100%;
			margin-bottom: 15rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		&_under {
			display: flex;
			&_num {
				margin-right: 20rpx;
			}
		}
	}
}
.iconfonts {
	margin-right: 10rpx;
}
</style>
