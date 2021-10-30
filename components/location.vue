<template>
	<view>
		<view class="" @click="handleaddressselect">{{ district }}</view>
	</view>
</template>

<script>
//微信小程序端解析城市的区地址///////////////////////////////////
//需要腾讯地图下载qqmap-wx-jssdk.min.js导入（https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview）
//申请的key编辑中勾选小程序，并填写APPID
//同时在mainfest.json文件中，微信小程序配置，勾选位置接口
// #ifdef MP-WEIXIN
import TencentMap from './qqmap-wx-jssdk.min.js';
// #endif
//////////////////////////////////////////////////////////////
export default {
	name: 'location',
	data() {
		return {
			district: '定位失败',
			longitude: '',
			latitude: ''
		};
	},
	methods: {
		// 获取定位位置
		getLocation() {
			let that = this;
			uni.getLocation({
				type: 'wgs84',
				geocode: true,
				success: function(res) {
					that.longitude = res.longitude;
					that.latitude = res.latitude;
					// APP端解析城市的区地址///////////////////////////////////////
					// #ifdef APP-PLUS
					that.district = res.address.district;
					// #endif
					////////////////////////////////////////////////////////////////
				},
				fail() {
					console.log('获取位置失败');
				},
				complete: () => {
					//微信小程序端解析城市的区地址///////////////////////////////////////
					//参考地址：https://blog.csdn.net/weixin_46115723/article/details/111482116?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242.1
					// #ifdef MP-WEIXIN
					var map = new TencentMap({
						key: 'YKWBZ-BO33P-L4IDH-V3DID-4R3N2-3NFFI' // 此处填写申请下来的开发者密钥key
					});
					map.reverseGeocoder({
						location: {
							latitude: that.latitude,
							longitude: that.longitude
						},
						success: function(res) {
							// console.log(res.result.address_component);
							that.district = res.result.address_component.district;
						}
					});
					// #endif
					//////////////////////////////////////////////////////////////

					// H5端解析城市的区地址（谷歌浏览器速度过慢）///////////////////////////////////////////
					//需要使用npm安装vue-jsonp包，并在mainfest.json的H5配置中，勾选开启腾讯地图，及填写官网申请的key，
					//教程地址https://blog.csdn.net/weixin_44694389/article/details/120157271
					// #ifdef H5
					that
						.$jsonp('https://apis.map.qq.com/ws/geocoder/v1/', {
							// 去腾讯地图申请地图的Key，勾选WebSeviceAPI：https://lbs.qq.com/dev/console/application/mine
							key: 'YKWBZ-BO33P-L4IDH-V3DID-4R3N2-3NFFI',
							// 不知道要不要注掉下一句,会报错，原作者未注释，但注释掉不影响使用
							// callbackName: 'getJsonData',
							output: 'jsonp',
							location: that.latitude + ',' + that.longitude
						})
						.then(json => {
							// 请求成功的返回数据
							// console.log(json.result.ad_info.city);
							that.district = json.result.ad_info.district;
						})
						.catch(err => {
							// 请求失败的返回数据
							console.log(err);
						});
					// #endif
					///////////////////////////////////////////////////////////////////
				}
			});
		},
		// 修改定位
		handleaddressselect() {
			// ！！！！！！！！！！！！！！保存this指向！！！！！！！！！！！！！！！！！！！！！
			let that = this;
			// ！！！！！！！！！！！！！！保存this指向！！！！！！！！！！！！！！！！！！！！！
			uni.chooseLocation({
				success: function(res) {
					that.district = res.name;
					// console.log('位置名称：' + res.name);
					// console.log('详细地址：' + res.address);
				}
			});
		}
	},
	// 页面中使用的生命周期
	// onLoad() {
	// 	this.getLocation();
	// },

	// 组件中使用的生命周期
	created() {
		this.getLocation();
	}
};
</script>

<style lang="scss"></style>
