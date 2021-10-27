<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">查询</view>
		</uni-nav-bar>

		<view class="top">
			<picker class="top_select" mode="selector" :range="array" @change="bindPickerChange" :value="index">
				<view class="">{{ array[index] }}</view>
				<view class="top_select_right">
					>>
				</view>
			</picker>

			<input type="text" v-model="message" class="input" placeholder="请输入" />
		</view>

		<view class="submit" @click="handlesubmitmess()">确定</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';

export default {
	name: 'lookup',
	components: {
		uniNavBar
	},
	data() {
		return {
			array: ['按真实名称查询', '按电话查询', '按微信名称查询'],
			index: 0,
			message:""
		};
	},
	methods: {
		goback() {
			uni.navigateTo({
				url: "./blacklist"
			});
		},
		bindPickerChange: function(e) {
			this.index = e.target.value;
		},
		handlesubmitmess() {
			uni.request({
			    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
				 method:"POST",
				 timeout:10000,
				 dataType:"json",
			    header: {
			        'custom-header': 'hello' //自定义请求头信息
			    },
			    data: {
					  selectIndex:this.array[this.index],
					  message:this.message,
			    },
			    success: (res) => {
			        console.log(1);
			    },
				 fail:()=>{
					 console.log(2);
				 }
			});
			uni.navigateTo({
				url: "./blacklist"
			});
		}
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
}
.top {
	padding-top: 120rpx;
	&_select {
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
		margin-bottom: 50rpx;
		box-shadow: 0 0 1rpx 3rpx $uni-border-color;
		display: flex;
		&_right{
			position: absolute;
			top: 0;
			right: 10rpx;
		}
	}
}
.input {
	height: 80rpx;
	box-shadow: 0 0 1rpx 3rpx $uni-border-color;
	outline: none;
	padding-left: 20rpx;
}
.submit {
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	background-color: $uni-color-warning;
	margin: 50rpx auto 30rpx;
	border-radius: 20rpx;
	color: #ffffff;
}
</style>
