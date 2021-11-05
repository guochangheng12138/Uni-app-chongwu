<template>
	<view class="contenttem">
		<view class="xuanze">
			<image :src="imgurlall[index]" class="imgpre" v-for="(item, index) in imgurlall" :key="index"></image>
			<view class="iconfont iconfont5" @click="chooseTheImg">&#xe649;</view>
		</view>
		<view @click="chooseTheImg" class="shangchuantupian">上传图片</view>

		<view class="TIitem">
			<view class="title">昵称</view>
			<input class="input" type="text" value="" placeholder="输入宠物昵称" v-model="nick" />
		</view>
		<view class="TIitem">
			<view class="title">种类</view>
			<input class="input" type="text" value="" placeholder="输入宠物种类 例如猫" v-model="type" />
		</view>
		<view class="TIitem">
			<view class="title">公母</view>
			<radio-group class="radiocontent" @change="radioChange">
				<label class="radio">
					<radio value="male" checked="true" />
					公
				</label>
				<label class="radio">
					<radio value="female" />
					母
				</label>
			</radio-group>
		</view>
		<view class="TIitem">
			<view class="title">是否免费</view>
			<radio-group class="radiocontent">
				<label class="radio">
					<radio value="r1" checked="true" />
					是
				</label>
				<label class="radio">
					<radio value="r2" />
					否
				</label>
				<label class="radio">
					<radio value="r2" />
					收押金
				</label>
			</radio-group>
		</view>

		<view class="TIitem">
			<view class="title">姓名</view>
			<input class="input" type="text" value="" placeholder="请输入您的姓名" v-model="name" />
		</view>
		<view class="title">领养条件</view>
		<view class="sTIitem">
			<checkbox-group @change="checkboxChange">
				<label>
					<checkbox value="cb1" />
					仅限同城
				</label>
				<label>
					<checkbox value="cb2" />
					按时打疫苗
				</label>
				<label>
					<checkbox value="cb3" />
					同意适龄绝育
				</label>
				<label>
					<checkbox value="cb4" />
					不得遗弃、虐待、转让、贩卖、繁殖
				</label>
				<label>
					<checkbox value="cb5" />
					有一定的经济基础
				</label>
			</checkbox-group>
		</view>

		<view class="submit" @click="handlesubmitmess()">发布送养</view>
	</view>
</template>

<script>
export default {
	name: 'adoptrelease',
	components: {},
	data() {
		return {
			Namefilesall: [],
			imgurlall: [],
			sex: 'male',
			name: '',
			nick: '',
			type: '',
			values: []
		};
	},
	methods: {
		// 选择图片
		chooseTheImg() {
			uni.chooseImage({
				count: 6, //图片可选择数量
				sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
				sourceType: ['album'], //album 从相册选图，camera 使用相机，默认二者都有。
				success: res => {
					let imgFiles = res.tempFilePaths; //图片的本地文件(！！被修改后的，即使两次上传同一图片，每次路径不同！！)路径列表，数组

					// #ifndef H5
					for (let i in imgFiles) {
						this.imgurlall.push(imgFiles[i]);
					}
					console.log(this.imgurlall);
					// #endif

					// #ifdef H5
					// 小程序与APP端的res.tempFiles没有name属性,图片去重只在H5有
					let imgNames = res.tempFiles; //图片名字和其他属性数组，不会被修改，不会重复。
					// 同界面填充预览选中的图片(利用图片名字判断是否重复)
					for (let j in imgNames) {
						if (this.Namefilesall.indexOf(imgNames[j].name) == -1) {
							this.Namefilesall.push(imgNames[j].name);
							this.imgurlall.push(imgFiles[j]);
						}
					}
					// #endif
					
					// 预览图片
					// uni.previewImage({
					// 	urls: res.tempFilePaths,
					// 	// 长按图片功能
					// 	longPressActions: {
					// 		itemList: ['发送给朋友', '保存图片', '收藏'],
					// 		success: function(data) {
					// 			console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					// 		},
					// 		fail: function(err) {
					// 			console.log(err.errMsg);
					// 		}
					// 	}
					// });
					// 上传图片;
					this.uploadTheImg(imgFiles);
				}
			});
		},
		//上传图片
		uploadTheImg(imgFiles) {
			uni.uploadFile({
				url: `https://www.example.com/upload`, //后端用于处理图片并返回图片地址的接口
				filePath: imgFiles[0],
				name: 'file',
				success: res => {
					let data = JSON.parse(res.data); //返回的是字符串，需要转成对象格式，打印data如下图
					if (data.code == 200) {
						console.log(data.msg); //图片地址
					}
				},
				fail: () => {}
			});
		},
		// 性别选择
		radioChange: function(evt) {
			this.sex = evt.detail.value;
		},
		// 领养条件
		checkboxChange(e) {
			this.values = e.detail.value;
			// console.log(this.values)
		},
		// 提交信息
		handlesubmitmess() {
			uni.request({
				url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
				method: 'POST',
				timeout: 10000,
				dataType: 'json',
				header: {
					'custom-header': 'hello' //自定义请求头信息
				},
				data: {
					id: this.id,
					sex: this.sex,
					info: this.info,
					area: this.area,
					idcard: this.idcard,
					mobile: this.mobile,
					reason: this.reason,
					yourtel: this.yourtel
				},
				success: res => {
					console.log(1);
				},
				fail: () => {
					console.log(2);
				}
			});
			uni.switchTab({
				url: '../home/home'
			});
		}
	},
	created() {}
};
</script>

<style lang="scss" scoped>
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
	font: 60rpx;
	line-height: 80rpx;
	width: 130rpx;
}
.input {
	flex: 1;
	height: 80rpx;
	outline: none;
	border: none;
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
