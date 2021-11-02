<template>
	<view class="content_petinfo">
		<view class="content_petinfo_item">
			<image :src="item.imgurl" mode="" class="content_petinfo_item_img"></image>
			<view class="content_petinfo_item_info">
				<view class="content_petinfo_item_info_top">
					<view class="content_petinfo_item_info_top_a">{{ item.title }}</view>
					<view class="content_petinfo_item_info_top_b">{{ item.distance }}km</view>
				</view>

				<view class="content_petinfo_item_info_center">{{ item.address }}</view>

				<view class="content_petinfo_item_info_under">
					<view class="content_petinfo_item_info_under_it content_petinfo_item_info_under_a">本月订单{{ item.orders }}</view>
					<view class="content_petinfo_item_info_under_it content_petinfo_item_info_under_b">好评率{{ item.comment }}%</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'shopInfo',
	props: ['item'],
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
		justify-content: space-around;
		&_img {
			width: 250rpx;
			height: 250rpx;
		}
		&_info {
			height: 250rpx;
			padding-left: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex: 1;
			&_top {
				display: flex;
				margin-bottom: 20rpx;
				justify-content: left;
				font-size: 35rpx;
				font-weight: bold;
				&_a {
					width: 200rpx;
				}
				&_b {
					flex: 1;
					text-align: right;
					padding-right: 20rpx;
				}
			}
			&_center {
				margin-bottom: 20rpx;
			}
			&_under {
				display: flex;
				font-size: 28rpx;
				text-align: center;
				justify-content: space-between;
				line-height: 60rpx;
				&_it {
					width: 180rpx;
					height: 60rpx;
				}
			}
		}
	}
}
</style>
