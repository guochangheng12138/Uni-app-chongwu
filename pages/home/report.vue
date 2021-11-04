<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">举报</view>
		</uni-nav-bar>

		<view class="title">TA的身份</view>
		<view class="select">
			<view :class="['select_item', peopeleselect === true ? 'select_item_a' : '']" @click="handlepeopleselect1()">领养人</view>
			<view :class="['select_item', peopeleselect === false ? 'select_item_a' : '']" @click="handlepeopleselect2()">送养人</view>
		</view>
		<view class="title">TA的性别</view>
		<view class="select">
			<view :class="['select_item', maleselect === true ? 'select_item_a' : '']" @click="handlemaleselect1()">男</view>
			<view :class="['select_item', maleselect === false ? 'select_item_a' : '']" @click="handlemaleselect2()">女</view>
		</view>
		<view class="title">TA的身份</view>
		<input class="input" type="text" value="" placeholder="选填" v-model="info"/>
		<view class="title">所在地</view>
		<input class="input" type="text" value="" placeholder="选填" v-model="area"/>
		<view class="title">身份证号</view>
		<input class="input" type="text" value="" placeholder="选填" v-model="idcard"/>
		<view class="title">手机号</view>
		<input class="input" type="text" value="" placeholder="选填" v-model="mobile"/>
		<view class="title">举报理由</view>
		<textarea class="textarea" value="" placeholder="请填写举报理由..." v-model="reason"/>
		<view class="title">您的手机号</view>
		<input class="input" type="text" value="" placeholder="选填" v-model="yourtel"/>

		<view class="submit" @click="handlesubmitmess()">提交信息</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';

export default {
	name: 'report',
	components: {
		uniNavBar
	},
	data() {
		return {
			peopeleselect: true,
			maleselect: true,
			id:"adtoper",
			sex:"male",
			info:"",
			area:"",
			idcard:"",
			mobile:"",
			reason:"",
			yourtel:""
		};
	},
	methods: {
		goback() {
			// uni.navigateTo({
			// 	url: "./blacklist"
			// });
			uni.navigateBack();
		},
		
		handlepeopleselect1() {
			this.peopeleselect = true;
			this.id="adtoper"
		},
		handlepeopleselect2() {
			this.peopeleselect = false;
			this.id="placeouter"
		},	
		handlemaleselect1() {
			this.maleselect = true;
			this.sex="male"
		},
		handlemaleselect2() {
			this.maleselect = false;
			this.sex="female"
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
					  id:this.id,
					  sex:this.sex,
					  info:this.info,
					  area:this.area,
					  idcard:this.idcard,
					  mobile:this.mobile,
					  reason:this.reason,
					  yourtel:this.yourtel
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
	},
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
			font-weight: bolder;
		}
	}
}
.select {
	display: flex;
	&_item {
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;
		margin-right: 50rpx;
		text-align: center;
		border-radius: 20rpx;
		color: $uni-color-title;
		background-color: $uni-border-color;
		&_a {
			color: #ffffff;
			background-color: $uni-color-warning;
		}
	}
}
.title {
	margin-top: 40rpx;
	font: 60rpx;
	margin-bottom: 30rpx;
}
.input {
	width: 98%;
	height: 80rpx;
	box-shadow: 0 0 1rpx 3rpx $uni-border-color;
	outline: none;
	padding-left: 20rpx;
}
.textarea {
	width: 98%;
	height: 280rpx;
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
