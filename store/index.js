import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const setLocalCarList = (state) => {
	const {
		num
	} = state;
	const carListString = JSON.stringify(num);
	uni.setStorageSync("carList", carListString)
}
const getLocalCarList = () => {
	// return JSON.parse(localStorage.getItem("carList")) || {}
	return uni.getStorageSync("carList") || {}
}

export default new Vuex.Store({
	state: {
		num:5
	},
	mutations:{
		jiayi(state){
			state.num++;
			setLocalCarList(state);
		},
	}
})




// const store = new Vuex.Store({
// 	state: {
// 		// cartList: getLocalCarList(),
// 		num:1
// 	},
// 	mutations: {
// 		add(state){
// 			state.num++;
// 			// setLocalCarList(state);
// 		},
// 		// 点击添加或减少商品数量
// 		changeCartItemInfo(state, payload) {
// 			const {
// 				shopId,
// 				shopTitle,
// 				productId,
// 				productInfo,
// 				num
// 			} = payload;
// 			let shopInfo = state.cartList[shopId];
// 			if (!shopInfo) {
// 				shopInfo = {
// 					title: "",
// 					pId: {}
// 				}
// 			};
// 			let product = shopInfo.pId[productId];
// 			if (!product) {
// 				product = productInfo;
// 				product.count = 0;
// 			}
// 			product.count += num;

// 			if (payload.num > 0) {
// 				product.check = true
// 			}
// 			if (payload.num < 0 && product.count < 1) {
// 				product.count = 0
// 			}

// 			shopInfo.pId[productId] = product;
// 			shopInfo.title = shopTitle;
// 			state.cartList[shopId] = shopInfo;

// 			setLocalCarList(state)
// 		},
// 		// 改变选中状态
// 		changeCartItemChecked(state, payload) {
// 			const {
// 				shopId,
// 				productId
// 			} = payload;
// 			// const product = state.cartList[shopId][productId];
// 			const product = state.cartList[shopId].pId[productId];
// 			product.check = !product.check;

// 			setLocalCarList(state)
// 		},
// 		// 清空购物车
// 		clearCartProducts(state, payload) {
// 			const {
// 				shopId
// 			} = payload;
// 			// state.cartList[shopId] = {};
// 			state.cartList[shopId].pId = {};

// 			setLocalCarList(state)
// 		},
// 	},
// 	mutations: {},
// 	actions: {}
// })
// export default store