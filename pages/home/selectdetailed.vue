<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">筛选</view>
		</uni-nav-bar>

		<view class="content_div"></view>

		<view class="content_title">年龄</view>
		<view class="content_list">
			<view
				:class="['content_list_item', ageselect === index ? 'content_list_item_click' : '']"
				v-for="(item, index) in agelist"
				:key="index"
				@click="handleageselect(index, item.type1, item.type2)"
			>
				{{ item.name }}
			</view>
		</view>
		<view class="content_title">性别</view>
		<view class="content_list">
			<view
				:class="['content_list_item', sexselect === index ? 'content_list_item_click' : '']"
				v-for="(item, index) in sexlist"
				:key="index"
				@click="handlesexselect(item.type, index)"
			>
				{{ item.name }}
			</view>
		</view>
		<view class="content_title">身体状况</view>
		<view class="content_list">
			<view @click="handleinfoselectall()" :class="['content_list_item',infoselectall == true ? 'content_list_item_click' : '']">全部</view>
			<view @click="handleinfoselectaaa()" :class="['content_list_item',infoselectaaa == true ? 'content_list_item_click' : '']">已绝育</view>
			<view @click="handleinfoselectbbb()" :class="['content_list_item',infoselectbbb == true ? 'content_list_item_click' : '']">已驱虫</view>
			<view @click="handleinfoselectccc()" :class="['content_list_item',infoselectccc == true ? 'content_list_item_click' : '']">已免疫</view>
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
			// 渲染按钮判断
			ageselect: 0,
			sexselect: 0,

			// 性别判断传参vuex
			petsex: 'all',
			// 年龄判断传参vuex
			petage1: 'all',
			petage2: 'all',
			// 身体状况筛选（渲染按钮和身体状况传参vuex同时使用）
			infoselectall: true,
			infoselectaaa: false,
			infoselectbbb: false,
			infoselectccc: false,

			// 年龄筛选tem列表
			agelist: [
				{ name: '全部', type1: 'all', type2: 'all' },
				{ name: '0-1岁', type1: 0, type2: 1 },
				{ name: '2-6岁', type1: 2, type2: 6 },
				{ name: '7-10岁', type1: 7, type2: 10 },
				{ name: '10岁以上', type1: 10, type2: 100 }
			],
			// 性别筛选tem列表
			sexlist: [{ name: '全部', type: 'all' }, { name: '公', type: 'male' }, { name: '母', type: 'female' }]
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
		
		// 筛选按钮点击
		// 年龄选择
		handleageselect(index, type1, type2) {
			this.ageselect = index;
			this.petage1 = type1;
			this.petage2 = type2;
		},
		// 性别选择
		handlesexselect(type, index) {
			this.sexselect = index;
			this.petsex = type;
		},
		// 身体情况选择
		handleinfoselectall(index) {
			this.infoselectall = !this.infoselectall;
			if (this.infoselectall == true) {
				this.infoselectaaa = false;
				this.infoselectbbb = false;
				this.infoselectccc = false;
			}
		},
		handleinfoselectaaa(index) {
			this.infoselectaaa = !this.infoselectaaa;
			if (this.infoselectaaa == true) {
				this.infoselectall = false;
			}
		},
		handleinfoselectbbb(index) {
			this.infoselectbbb = !this.infoselectbbb;
			if (this.infoselectbbb == true) {
				this.infoselectall = false;
			}
		},
		handleinfoselectccc(index) {
			this.infoselectccc = !this.infoselectccc;
			if (this.infoselectccc == true) {
				this.infoselectall = false;
			}
		},

		// 确定跳转vuex传参（列表参数与筛选条参数）
		confirmselect() {
			// 性别判断传参
			const petsex = this.petsex;
			const sexselect = this.sexselect;
			this.$store.commit('handlesexselect', { petsex, sexselect });
			// 年龄判断传参
			const petage1 = this.petage1;
			const petage2 = this.petage2;
			const ageselect = this.ageselect;
			this.$store.commit('handleageselect', { petage1, petage2, ageselect });
			// 身体状况判断
			const infoselectall = this.infoselectall;
			const infoselectaaa = this.infoselectaaa;
			const infoselectbbb = this.infoselectbbb;
			const infoselectccc = this.infoselectccc;
			this.$store.commit('handleinfoselect', { infoselectall, infoselectaaa, infoselectbbb, infoselectccc });

			// 判断是从哪个页面的筛选条跳转筛选详情，并在点击后设置对应的筛选条样式修改校验参数
			if (this.$store.state.defsetselect == 'd2') {
				this.$store.commit('navset2');
				uni.switchTab({
					url: './home'
				});
			} else if (this.$store.state.defsetselect == 'd3') {
				this.$store.commit('navset3');
				uni.navigateTo({
					url: './adopt'
				});
			}
			// else if (this.$store.state.defsetselect == "d4") {
			// 	this.$store.commit('navset4');
			// 	uni.navigateTo({
			// 		url: './lookingpets'
			// 	});
			// }
		}
	},
	onShow() {
		// 再次进入页面渲染筛选按钮选中状态
		// 性别按钮选中
		this.sexselect = this.$store.state.sexselect;
		this.petsex = this.$store.state.petsex;
		// 年龄按钮选中
		this.ageselect = this.$store.state.ageselect;
		this.petage1 = this.$store.state.petage1;
		this.petage2 = this.$store.state.petage2;
		// 身体状况按钮选中
		this.infoselectall = this.$store.state.infoselectall;
		this.infoselectaaa = this.$store.state.infoselectaaa;
		this.infoselectbbb = this.$store.state.infoselectbbb;
		this.infoselectccc = this.$store.state.infoselectccc;
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
			font-weight: bold;
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
