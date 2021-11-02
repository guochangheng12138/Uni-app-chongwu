<template>
	<view class="content_select">
		<view
			v-for="(item, index) in typelist"
			:key="index"
			:class="['content_select_item', curentIndex === index ? 'content_select_item_click' : '']"
			@click="handletypeselect(index, item.type)"
		>
			<view class="content_select_item_text">{{ item.name }}</view>
			<view class="content_select_item_under" v-show="curentIndex === index"></view>
		</view>
		<view class="">
			<view
				:class="['content_select_item', selectinfos === true ? 'content_select_item_click' : '', selectinfos === true ? 'content_select_items' : '']"
				@click="handlelistgo()"
			>
				筛选>
			</view>
			<view class="content_select_item_unders" v-if="selectinfos === true"></view>
		</view>
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
			],
			// 详细筛选样式
			selectinfos: false
		};
	},
	methods: {
		// 筛选切换
		handletypeselect(index, type) {
			this.typelist[index].click = true;
			this.curentIndex = index;
			this.type = type;
			// 绑定父组件
			this.$emit('handlelistchange', this.type);
		},
		// 筛选详情页跳转
		handlelistgo() {
			// 寻宠页不使用筛选按钮
			if (this.$store.state.defsetselect !== 'd4') {
				const type = this.type;
				this.$store.commit('pettypeset', { type });
				uni.navigateTo({
					url: './selectdetailed'
				});
			}
		}
	},
	created() {
		//利用时间戳（方法1）或$nextTick（方法2），每次显示组件都将其重新渲染，并根据从哪里进来，以及是否进入过详情页点击确定，联合判断筛选按钮是否更改样式
		if (this.$store.state.selectnav == 'n2' && this.$store.state.defsetselect == 'd2') {
			this.selectinfos = true;
		} else if (this.$store.state.selectnav == 'n3' && this.$store.state.defsetselect == 'd3') {
			this.selectinfos = true;
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
		&_unders {
			width: 100rpx;
			height: 10rpx;
			border-radius: 5rpx;
			background-color: $uni-color-warning;
			margin-top: -40rpx;
			margin-left: 0rpx;
		}
	}
	&_items {
		margin-top: -30rpx;
	}
}
</style>
