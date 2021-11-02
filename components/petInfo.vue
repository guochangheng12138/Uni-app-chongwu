<template>
	<view class="content_petinfo">
		<view class="content_petinfo_item">
			<image :src=item.imgurl mode="" class="content_petinfo_item_img"></image>
			<view class="content_petinfo_item_info">
				<view class="content_petinfo_item_info_top">
					<view class="content_petinfo_item_info_top_left">
						<view class="content_petinfo_item_info_top_left_a">{{item.title}}</view>
						<view class="content_petinfo_item_info_top_left_b">{{item.info}}</view>
					</view>
					<view class="content_petinfo_item_info_top_right iconfont" v-if="item.type=='dog'">&#xe670;</view>
					<view class="content_petinfo_item_info_top_right iconfont" v-if="item.type=='cat'">&#xe69e;</view>
				</view>
				<view class="content_petinfo_item_info_under">
					<view class="content_petinfo_item_info_under_it content_petinfo_item_info_under_a" v-if="item.aaa==true">未免疫</view>
					<view class="content_petinfo_item_info_under_it content_petinfo_item_info_under_b" v-if="item.bbb==true">未驱虫</view>
					<view class="content_petinfo_item_info_under_it content_petinfo_item_info_under_c" v-if="item.ccc==true">未绝育</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'petInfo',
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
				margin-bottom: 50rpx;
				justify-content: space-between;
				&_left {
					&_a {
						margin-bottom: 30rpx;
						font-size: 40rpx;
						font-weight: bold;
					}
				}
				&_right {
					font-size: 50rpx;
					margin-right: 20rpx;
				}
			}
			&_under {
				display: flex;
				&_it {
					width: 130rpx;
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
					margin-right: 15rpx;
					border-radius: 15rpx;
				}
				&_a {
					background-color: #97cbff;
				}
				&_b {
					background-color: #00e3e3;
				}
				&_c {
					background-color: #ff79bc;
				}
			}
		}
	}
}
</style>
