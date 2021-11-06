<template>
	<view class="content">
		<view class="content_bgtop"></view>
		<view class="content_info">
			<view class="content_info_header">
				<image class="content_info_header_icon" src="../../static/my/logo.png" mode=""></image>
				<view class="content_info_header_name">张三</view>
			</view>
			<view class="content_info_myorders">
				<view class="content_info_myorders_title">
					<view class="content_info_myorders_title_left">我的订单</view>
					<view class="content_info_myorders_title_right">全部订单</view>
				</view>
				<view class="content_info_myorders_items">
					<view class="content_info_myorders_items_item iconfont iconfonts">&#xe9c4;</view>
					<view class="content_info_myorders_items_item iconfont iconfonts">&#xe60a;</view>
					<view class="content_info_myorders_items_item iconfont iconfonts">&#xead1;</view>
					<view class="content_info_myorders_items_item iconfont iconfonts">&#xe797;</view>
					<view class="content_info_myorders_items_item iconfont iconfonts">&#xe62d;</view>
				</view>
				<view class="content_info_myorders_items">
					<view class="content_info_myorders_items_text">全部</view>
					<view class="content_info_myorders_items_text">待付款</view>
					<view class="content_info_myorders_items_text">已付款</view>
					<view class="content_info_myorders_items_text">待收货</view>
					<view class="content_info_myorders_items_text">待评价</view>
				</view>
			</view>
			<view class="content_info_myelse">
				<view class="content_info_myelse_item" @click="handlegoitem(item.url)" v-for="(item, index) in myelselist" :key="index">
					<view class="content_info_myelse_item_img iconfont iconfont2" v-html="item.img"></view>
					<view class="content_info_myelse_item_text">{{ item.text }}</view>
				</view>
			</view>
			<view class="submit">退出登录</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'my',
	components: {},
	data() {
		return {
			myelselist: [
				{ img: '&#xe616;', text: '我的领养' },
				{ img: '&#xe703;', text: '我的关注',url:"./focus" },
				{ img: '&#xe61a;', text: '我的地址' },
				{ img: '&#xe60c;', text: '我的订单' },
				{ img: '&#xe613;', text: '个人信息' ,url:"./personalinfo"},
				{ img: '&#xe60b;', text: '领养协议' },
				{ img: '&#xe60d;', text: '我的送养' }
			]
		};
	},
	methods: {
		handlegoitem(index){
			uni.navigateTo({
				url:index
			})
		},
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
.iconfonts {
	font-size: 60rpx;
	color: #fb7426;
}
.iconfont2 {
	font-size: 50rpx;
	color: #fb7426;
	text-align: center;
}
.content {
	width: 95%;
	margin: 0 auto 0;
	background: #fff;
	padding-bottom: 100rpx;
	&_bgtop {
		width: 100%;
		height: 390rpx;
		background-image: linear-gradient(239deg, #fb7426 0%, #ffbdac 100%);
		border-bottom-left-radius: 90% 40%;
		border-bottom-right-radius: 90% 40%;
	}
	&_info {
		width: 95%;
		margin: -350rpx auto 0;
		&_header {
			display: flex;
			margin-bottom: 50rpx;
			margin-top: 50rpx;
			&_icon {
				border-radius: 50%;
				border: solid #fff;
				width: 100rpx;
				height: 100rpx;
			}
			&_name {
				line-height: 100rpx;
				font-size: 40rpx;
				padding-left: 20rpx;
				color: #fff;
			}
		}
		&_myorders {
			border-radius: 15rpx;
			background-color: #ffffff;
			margin-bottom: 50rpx;
			box-shadow: 0 0 1rpx 5rpx #a7a7a7;
			padding-bottom: 40rpx;
			&_title {
				display: flex;
				padding: 20rpx;
				justify-content: space-between;
				&_left {
					font-size: 35rpx;
				}
				&_right {
				}
			}
			&_items {
				display: flex;
				&_item {
					width: 20%;
					text-align: center;
				}
				&_text {
					width: 20%;
					height: 40rpx;
					text-align: center;
				}
			}
		}
		&_myelse {
			display: flex;
			flex-wrap: wrap;
			border-radius: 15rpx;
			box-shadow: 0 0 1rpx 5rpx #a7a7a7;
			padding: 30rpx 0;
			&_item {
				width: 25%;
				margin-bottom: 20rpx;
				&_text {
					width: 100%;
					text-align: center;
				}
			}
		}
	}
}
</style>
