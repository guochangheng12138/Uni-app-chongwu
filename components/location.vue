<template>
	<view>
		<view class="" @click="handleaddressselect">{{ district }}</view>
	</view>
</template>

<script>
export default {
	name: 'location',
	data() {
		return {
			district: '唐冶',
			longitude: '',
			latitude: ''
		};
	},
	methods: {
		// 获取定位位置
		//需要使用npm安装vue-jsonp包，并在mainfest.json的H5配置中开启腾讯地图，及填写官网申请的key，教程地址https://blog.csdn.net/weixin_44694389/article/details/120157271
		getLocation() {
			let that = this;
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					that.longitude = res.longitude;
					that.latitude = res.latitude;
				},
				fail() {
					console.log('获取位置失败');
				},
				complete: () => {
					that
						.$jsonp('https://apis.map.qq.com/ws/geocoder/v1/', {
							// 去腾讯地图申请地图的Key：https://lbs.qq.com/dev/console/application/mine
							key: 'YKWBZ-BO33P-L4IDH-V3DID-4R3N2-3NFFI',
							// 不知道要不要注掉下一句,原作者未注释，但注释掉不影响使用
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
