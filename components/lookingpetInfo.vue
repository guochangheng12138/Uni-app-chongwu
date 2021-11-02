<template>
	<view class="content_petinfo">
		<view class="content_petinfo_item">
			<image :src=item.imgurl mode="" class="content_petinfo_item_img"></image>
			<view class="content_petinfo_item_info">
				<view class="content_petinfo_item_info_top">
					<view class="content_petinfo_item_info_top_left">
						<view class="content_petinfo_item_info_top_left_a">{{item.title}}</view>
						<view class="content_petinfo_item_info_top_left_b">{{item.info}}</view>
						<view class="content_petinfo_item_info_top_left_c iconfont">&#xe609;{{item.losttime}}</view>
						<view class="content_petinfo_item_info_top_left_d iconfont">&#xe634;{{item.lostaddress}}</view>
					</view>
					<view class="content_petinfo_item_info_top_right iconfont" v-if="item.type=='dog'">&#xe670;</view>
					<view class="content_petinfo_item_info_top_right iconfont" v-if="item.type=='cat'">&#xe69e;</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'lookingpetInfo',
	props:["item"],
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.content_petinfo {
	width: 95%;
	margin: 0 auto 0;
	padding-bottom: 50rpx;
	&_item {
		border-radius: 20rpx;
		height: 300rpx;
		margin-bottom: 0rpx;
		background-color: white;
		display: flex;
		align-items: center;
		&_img {
			width: 250rpx;
			height: 250rpx;
		}
		&_info {
			padding-left: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			&_top {
				display: flex;
				justify-content: space-between;
				&_left {
					&_a {
						margin-bottom: 10rpx;
						font-size: 40rpx;
						font-weight: bold;
					}
					&_b{
						font-size: 30rpx;
						margin-bottom: 10rpx;
					}&_c{
						font-size: 30rpx;
						margin-bottom: 10rpx;
						color: blue;
					}&_d{
						font-size: 30rpx;
						color: blue;
					}
				}
				&_right {
					font-size: 50rpx;
					margin-right: 20rpx;
				}
			}
		}
	}
}
</style>
