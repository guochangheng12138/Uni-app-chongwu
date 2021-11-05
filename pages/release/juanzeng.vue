<template>
	<view class="contenttem">
		<view class="title">捐赠物资类型</view>
		<view class="select">
			<view :class="['select_item', peopeleselect === true ? 'select_item_a' : '']" @click="handlepeopleselect1()">宠粮</view>
			<view :class="['select_item', peopeleselect === false ? 'select_item_a' : '']" @click="handlepeopleselect2()">其它</view>
		</view>
		<view class="title">物资数量</view>
		<textarea class="textarea" value="" placeholder="例如500斤狗粮" />
		<view class="title">物资名称</view>
		<textarea class="textarea" value="" placeholder="例如买即可全价狗粮" />
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
		<view class="TIitem">
			<view class="title">姓名</view>
			<input class="input" type="text" value="" placeholder="请输入您的姓名" v-model="name" />
		</view>
		<view class="TIitem">
			<view class="title">电话</view>
			<input class="input" type="text" value="" placeholder="请输入您的电话" v-model="name" />
		</view>

		<view class="submit" @click="handlesubmitmess()">发布捐赠</view>
	</view>
</template>

<script>
export default {
	name: 'juanzeng',
	components: {},
	data() {
		return {
			peopeleselect: true,
			sex: 'male',
			name: '',
			nick: '',
			type: '',
			values: []
		};
	},
	methods: {
		handlepeopleselect1() {
			this.peopeleselect = true;
			this.id="adtoper"
		},
		handlepeopleselect2() {
			this.peopeleselect = false;
			this.id="placeouter"
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
	}
};
</script>

<style lang="scss" scoped>
.contenttem {
	width: 95%;
	margin: 30rpx auto 0;
	background-color: #fff;
	padding-bottom: 100rpx;
	padding-top: 20rpx;
}
.select {
	display: flex;
	&_item {
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;
		margin-right: 50rpx;
		text-align: center;
		border-radius: 20rpx;
		color: $uni-color-title;
		background-color: $uni-border-color;
		&_a {
			color: #ffffff;
			background-color: $uni-color-warning;
		}
	}
}
.TIitem {
	display: flex;
	margin-bottom: 30rpx;
	border-bottom: solid 1rpx;
}
.textarea{
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
	width: 230rpx;
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
