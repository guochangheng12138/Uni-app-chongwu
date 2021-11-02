<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">筛选</view>
		</uni-nav-bar>

		<view class="content_div"></view>

		<view class="content_title">年龄</view>
		<view class="content_list">
			<view :class="['content_list_item', ageselect === index ? 'content_list_item_click' : '']" v-for="(item, index) in agelist" :key="index" @click="handleageselect(index)">
				{{ item.name }}
			</view>
		</view>
		<view class="content_title">性别</view>
		<view class="content_list">
			<view :class="['content_list_item', sexselect === index ? 'content_list_item_click' : '']" v-for="(item, index) in sexlist" :key="index" @click="handlesexselect(index)">
				{{ item.name }}
			</view>
		</view>
		<view class="content_title">身体状况</view>
		<view class="content_list">
			<view
				:class="['content_list_item', infoselect === index ? 'content_list_item_click' : '']"
				v-for="(item, index) in infolist"
				:key="index"
				@click="handleinfoselect(index)"
			>
				{{ item.name }}
			</view>
		</view>

		<view class="content_confirm" @click="confirmselect()">确定</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';

export default {
	name: 'selectdeiailed',
	components: {
		uniNavBar
	},
	data() {
		return {
			ageselect: 0,
			sexselect: 0,
			infoselect: 0,
			// 年龄筛选
			agelist: [
				{ name: '全部', type: 'all' },
				{ name: '0-1岁', type: 'one' },
				{ name: '2-6岁', type: 'six' },
				{ name: '7-10岁', type: 'ten' },
				{ name: '10岁以上', type: 'fifteen' }
			],
			// 性别筛选
			sexlist: [{ name: '全部', type: 'all' }, { name: '公', type: 'male' }, { name: '母', type: 'female' }],
			// 身体状况筛选
			infolist: [{ name: '全部', type: 'all' }, { name: '已绝育', type: 'aaa' }, { name: '已驱虫', type: 'bbb' }, { name: '已接种', type: 'ccc' }]
		};
	},
	methods: {
		// goback() {
		// 	uni.switchTab({
		// 		url: './home'
		// 	});
		// },
		goback() {
			uni.navigateBack();
		},
		handleageselect(index) {
			this.ageselect = index;
			console.log(index);
			// this.id="adtoper"
		},
		handlesexselect(index) {
			this.sexselect = index;
			console.log(index);
			// this.id="adtoper"
		},
		handleinfoselect(index) {
			this.infoselect = index;
			console.log(index);
			// this.id="adtoper"
		},
		// 确定跳转
		confirmselect() {
			// 判断是从哪个页面的筛选条跳转筛选详情，并在点击后设置对应的样式修改校验参数
			if (this.$store.state.defsetselect == "d2") {
				this.$store.commit('navset2');
				uni.switchTab({
					url: './home'
				});
			} else if (this.$store.state.defsetselect == "d3") {
				this.$store.commit('navset3');
				uni.navigateTo({
					url: './adopt'
				});
			}
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
	&_div {
		height: 50rpx;
	}
	&_title {
		font-size: 40rpx;
		margin-bottom: 20rpx;
	}
	&_list {
		display: flex;
		&_item {
			font-size: 28rpx;
			margin-right: 10rpx;
			border-radius: 20rpx;
			width: 140rpx;
			text-align: center;
			height: 60rpx;
			line-height: 60rpx;
			margin-bottom: 20rpx;
			color: white;
			border: solid $uni-border-color;
			background-color: $uni-border-color;
			&_click {
				color: $uni-color-error;
				border: solid $uni-color-warning;
				background-color: $uni-color-warning;
			}
		}
	}
	&_confirm {
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-color: $uni-color-warning;
		margin: 50rpx auto 30rpx;
		border-radius: 20rpx;
		color: #ffffff;
	}
}
</style>
