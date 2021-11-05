<template>
	<view class="contentroot">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe611;</view>
			<view class="content_nav_text"></view>
		</uni-nav-bar>

		<view class="content_top">
			<view class="content_top_img">
				<image
					:class="['content_top_img_item', indexs == index ? 'content_top_img_item_click' : '']"
					:src="item.imgurl"
					v-for="(item, index) in imglist"
					:key="index"
					@click="handleinfochange(index)"
				></image>
			</view>
			<view class="content_top_text">
				<view class="content_top_text_item">发布送养</view>
				<view class="content_top_text_item">发布寻宠</view>
				<view class="content_top_text_item">发布捐赠</view>
			</view>
		</view>
		<adoptrelease v-if="indexs == 0" />
		<findrelease v-if="indexs == 1" />
		<juanzeng v-if="indexs == 2" />
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import adoptrelease from './adoptrelease';
import findrelease from './findrelease';
import juanzeng from './juanzeng';

export default {
	name: 'adopt',
	components: {
		uniNavBar,
		adoptrelease,
		findrelease,
		juanzeng
	},
	data() {
		return {
			indexs: 0,
			imglist: [{ imgurl: '../../static/release/f1.png' }, { imgurl: '../../static/release/f2.png' }, { imgurl: '../../static/release/f3.png' }]
		};
	},
	methods: {
		goback() {
			uni.switchTab({
				url: '../home/home'
			});
		},
		handleinfochange(index) {
			this.indexs = index;
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 95%;
	margin: 0 auto 0;
	padding-bottom: 30rpx;
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
	&_top {
		box-sizing: border-box;
		height: 275rpx;
		margin-bottom: 50rpx;
		background-color: #ffff;
		&_img {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 200rpx;
			width: 100%;
			border: solid #fff;
			box-sizing: border-box;
			&_item {
				height: 150rpx;
				&_click {
					border: solid yellow;
				}
			}
		}
		&_text {
			display: flex;
			justify-content: space-between;
			&_item {
				text-align: center;
				width: 33.333333%;
			}
		}
	}
}
</style>
