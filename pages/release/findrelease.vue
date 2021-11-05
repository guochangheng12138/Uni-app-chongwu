<template>
	<view class="contenttem">
		<view class="iconfont iconfont5" @click="chooseTheImg">&#xe649;</view>
		<view @click="chooseTheImg" class="shangchuantupian">上传图片</view>
		<view class="TIitem">
			<view class="title">发布类型</view>
			<radio-group class="radiocontent" @change="radioChange">
				<label class="radio">
					<radio value="male" checked="true" />
					丢失
				</label>
				<label class="radio">
					<radio value="female" />
					捡到
				</label>
			</radio-group>
		</view>
		<view class="TIitem">
			<view class="title">昵称</view>
			<input class="input" type="text" placeholder="输入宠物昵称" v-model="nick" />
		</view>

		<view class="TIitem">
			<view class="title">城市名称</view>
			<picker class="input2" mode="selector" :range="array" @change="bindPickerChange" :value="index">
				<view class="">{{ array[index] }}</view>
			</picker>
		</view>

		<view class="TIitem">
			<view class="title">有效期</view>
			<radio-group class="radiocontent">
				<label class="radio">
					<radio value="r1" checked="true" />
					10
				</label>
				<label class="radio">
					<radio value="r2" />
					20
				</label>
				<label class="radio">
					<radio value="r2" />
					30
				</label>
			</radio-group>
		</view>
		<view class="title">宠物描述</view>
		<textarea class="textarea" value="" placeholder="请输入宠物描述" />

		<view class="TIitem">
			<view class="title">姓名</view>
			<input class="input" type="text" value="" placeholder="请输入您的姓名" v-model="name" />
		</view>
		<view class="TIitem">
			<view class="title">电话</view>
			<input class="input" type="text" value="" placeholder="请输入您的电话" v-model="name" />
		</view>

		<view class="submit" @click="handlesubmitmess()">发布寻宠</view>
	</view>
</template>

<script>
export default {
	name: 'findrelease',
	components: {},
	data() {
		return {
			index: 0,
			array: ['济南', '菏泽', '曹县', '临沂'],
			sex: 'male',
			name: '',
			type: '',
			nick:''
		};
	},
	methods: {
		// 选择图片
		chooseTheImg() {
			uni.chooseImage({
				count: 1, //图片可选择数量
				sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
				sourceType: ['album'], //album 从相册选图，camera 使用相机，默认二者都有。
				success: res => {
					let imgFiles = res.tempFilePaths; //图片的本地文件路径列表，数组
					
					// #ifndef H5
					// 数组合并
					this.imgurlall.concat(imgFiles);
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
		// 城市选择
		bindPickerChange: function(e) {
			this.index = e.target.value;
		},
		// 类型选择
		radioChange: function(evt) {
			this.type = evt.detail.value;
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
	}
};
</script>

<style lang="scss" scoped>
.shangchuantupian {
	font-size: 35rpx;
	margin-top: 30rpx ;
	margin-bottom: 30rpx ;
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
.textarea {
	border: solid 1rpx;
	height: 300rpx;
	width: 100%;
	margin-bottom: 20rpx;
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
