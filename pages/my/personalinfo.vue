<template>
	<view class="content">
		<uni-nav-bar class="content_nav" fixed="true" statusBar="true">
			<view slot="left" class="iconfont content_nav_left" @click="goback()">&#xe612;</view>
			<view class="content_nav_text">个人资料</view>
		</uni-nav-bar>

		<view class="contenttem">
			<view class="TIitem">
				<view class="title">昵称</view>
				<input class="input" type="text" value="" placeholder="张三" v-model="nick" />
			</view>
			<view class="TIitem">
				<view class="title">生日</view>
				<picker class="input2" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="">{{ date }}</view>
				</picker>
			</view>
			<view class="TIitem">
				<view class="title">性别</view>
				<radio-group class="radiocontent" @change="radioChange">
					<label class="radio">
						<radio value="male" checked="true" />
						男
					</label>
					<label class="radio">
						<radio value="female" />
						女
					</label>
				</radio-group>
			</view>
			<view class="TIitem">
				<view class="title">所在城市</view>
				<picker class="input2" mode="selector" :range="array" @change="bindPickerChange" :value="index">
					<view class="">{{ array[index] }}</view>
				</picker>
			</view>
			<view class="">
				<view class="titles">实名认证</view>
				<view class="smrz">
					<view class="smrz_left" @click="chooseTheImg1">
						<image :src="imgurl2" mode="" class="smrz_left_top"></image>
						<view class="smrz_left_under">正面</view>
					</view>
					<view class="smrz_right" @click="chooseTheImg2">
						<image :src="imgurl1" mode="" class="smrz_left_top"></image>
						<view class="smrz_left_under">反面</view>
					</view>
				</view>
			</view>
		</view>

		<view class="submit" @click="handlesubmitmess()">提交</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';

export default {
	name: 'personalinfo',
	components: {
		uniNavBar
	},

	data() {
		const currentDate = this.getDate({
			format: true
		});
		return {
			index: 0,
			array: ['济南', '菏泽', '曹县', '临沂'],
			date: currentDate,
			nick: '',
			imgurl1: '../../static/my/f1.jpg',
			imgurl2: '../../static/my/f2.jpg'
		};
	},
	methods: {
		goback() {
			uni.switchTab({
				url: './my'
			});
		},
		// 提交
		handlesubmitmess() {
			uni.switchTab({
				url: './my'
			});
		},
		// 实名认证
		chooseTheImg1() {
			uni.chooseImage({
				count: 1, //图片可选择数量
				sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
				sourceType: ['camera'], //album 从相册选图，camera 使用相机，默认二者都有。
				success: res => {
					let imgFiles = res.tempFilePaths; //图片的本地文件(！！被修改后的，即使两次上传同一图片，每次路径不同！！)路径列表，数组
					this.imgurl2 = imgFiles[0];
				}
			});
		},
		chooseTheImg2() {
			uni.chooseImage({
				count: 1, //图片可选择数量
				sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
				sourceType: ['camera'], //album 从相册选图，camera 使用相机，默认二者都有。
				success: res => {
					let imgFiles = res.tempFilePaths; //图片的本地文件(！！被修改后的，即使两次上传同一图片，每次路径不同！！)路径列表，数组
					this.imgurl1 = imgFiles[0];
				}
			});
		},
		// 城市选择
		bindPickerChange: function(e) {
			this.index = e.target.value;
		},
		// 获取日期
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		// 选择日期
		bindDateChange: function(e) {
			this.date = e.target.value;
		}
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	}
};
</script>

<style lang="scss" scoped>
.smrz {
	display: flex;
	justify-content: space-around;
	height: 300rpx;
	&_left {
		width: 45%;
		&_top {
			height: 250rpx;
			width: 100%;
		}
		&_under {
			width: 100%;
			text-align: center;
			background-color: $uni-color-warning;
			border-bottom-left-radius: 20rpx;
			border-bottom-right-radius: 20rpx;
			color: #ffffff;
			margin-top: -10rpx;
		}
	}
	&_right {
		width: 45%;
	}
}
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
.xuanze {
	display: flex;
	flex-wrap: wrap;
}
.imgpre {
	height: 200rpx;
	width: 200rpx;
}
.shangchuantupian {
	font-size: 35rpx;
	margin-top: 30rpx;
	margin-bottom: 30rpx;
}
.iconfont5 {
	font-size: 200rpx;
}
.contenttem {
	width: 95%;
	margin: 30rpx auto 0;
	background-color: #fff;
	padding-bottom: 100rpx;
	padding-top: 20rpx;
}
.TIitem {
	display: flex;
	margin-bottom: 30rpx;
	border-bottom: solid 1rpx;
}
.radio {
	line-height: 80rpx;
	margin-right: 30rpx;
}
.radiocontent {
	flex: 1;
	text-align: right;
}
.title {
	line-height: 80rpx;
	width: 180rpx;
}
.titles {
	font-size: 40rpx;
	line-height: 80rpx;
	width: 180rpx;
}
.input {
	flex: 1;
	height: 80rpx;
	outline: none;
	border: none;
	text-align: right;
}
.input2 {
	flex: 1;
	height: 80rpx;
	line-height: 80rpx;
	outline: none;
	border: none;
	padding-right: 40rpx;
	text-align: right;
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
