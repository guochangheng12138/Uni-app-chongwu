<template>
	<view class="content_select">
		<view
			v-for="(item, index) in typelist"
			:key="index"
			:class="['content_select_item', curentIndex === index ? 'content_select_item_click' : '']"
			@click="handletypeselect(index,item.type)"
		>
			<view class="content_select_item_text">{{ item.name }}</view>
			<view class="content_select_item_under" v-show="curentIndex === index"></view>
		</view>
		<view class="content_select_item">筛选></view>
	</view>
</template>

<script>
export default {
	name: 'selectInfo',
	data() {
		return {
			// 筛选列表
			curentIndex: 0,
			type: 'dog',
			typelist: [
				{
					name: '狗狗',
					type: 'dog',
					click: true
				},
				{
					name: '猫咪',
					type: 'cat',
					click: false
				},
				{
					name: '其它',
					type: 'elsepet',
					click: false
				}
			]
		};
	},
	methods: {
		handletypeselect(index,type) {
			this.typelist[index].click = true;
			this.curentIndex = index;
			this.type=type;
			this.$emit('handlelistchange',this.type)
		}
	}
};
</script>

<style lang="scss">
.content_select {
	width: 95%;
	display: flex;
	height: 90rpx;
	padding-top: 30rpx;
	align-items: center;
	background: $uni-bg-color;
	justify-content: space-around;
	border-radius: 25rpx;
	margin: 0 auto 20rpx;
	&_item {
		width: 100rpx;
		height: 50rpx;
		text-align: center;
		border-radius: 20rpx;
		color: white;
		font: 32rpx/50rpx bold;
		background-color: $uni-border-color;
		margin-bottom: 50rpx;
		&_click {
			color: $uni-color-error;
			border: solid $uni-color-warning;
			background-color: $uni-color-warning;
		}
		&_text {
			margin-bottom: 15rpx;
		}
		&_under {
			width: 100rpx;
			height: 10rpx;
			border-radius: 5rpx;
			background-color: $uni-color-warning;
		}
	}
}
</style>
