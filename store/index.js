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
		//筛选条数据相关
		// 请求宠物索引(给筛选条按钮选中用)
		petindex: 0,
		// 筛选详情页索引（给筛选详情页按钮选中用）
		ageselect: 0,
		sexselect: 0,
		// 身体状况（给筛选详情页按钮选中，以及宠物列表渲染参数用）
		infoselectall: true,
		infoselectaaa: false,
		infoselectbbb: false,
		infoselectccc: false,
		// 设置筛选请求宠物类型（给主页列表渲染用）
		pettype: "dog",
		// 筛选详情页参数修改（给主页列表渲染用）
		//性别
		petsex: "all",
		petsexall: true,
		//年龄
		petage1: "all",
		petage2: "all",
		petageall: true,

		//筛选条样式相关
		// 判断筛选条处于哪个页面（还未进入详情）
		defsetselect: 0,
		// 判断筛选条筛选按钮是否改变样式(已进入过详情，并点击确定返回)
		selectnav: 0
	},
	mutations: {
		//筛选条数据相关
		// 请求宠物索引(给筛选条按钮选中用)
		petindexset(state, payload) {
			const {
				index
			} = payload;
			state.petindex = index;
		},
		// 设置筛选请求宠物类型（给主页列表渲染用）
		pettypeset(state, payload) {
			const {
				type
			} = payload;
			state.pettype = type;
		},
		// 筛选详情页参数修改（给主页列表渲染用）
		//性别
		handlesexselect(state, payload) {
			const {
				petsex,
				sexselect
			} = payload;
			state.sexselect = sexselect;
			if (petsex !== "all") {
				state.petsex = petsex;
				state.petsexall = false;
			} else {
				state.petsexall = true;
			}
		},
		// 年龄
		handleageselect(state, payload) {
			const {
				petage1,
				petage2,
				ageselect
			} = payload;
			state.ageselect = ageselect;
			if (petage1 !== "all") {
				state.petage1 = petage1;
				state.petage2 = petage2;
				state.petageall = false;
			} else {
				state.petageall = true;
			}
		},
		// 身体状况
		handleinfoselect(state, payload) {
			const {
				infoselectall,
				infoselectaaa,
				infoselectbbb,
				infoselectccc
			} = payload;
			state.infoselectall = infoselectall;
			state.infoselectaaa = infoselectaaa;
			state.infoselectbbb = infoselectbbb;
			state.infoselectccc = infoselectccc;
		},
		
		//筛选条样式相关
		// 判断筛选条处于哪个页面（还未进入详情）
		//home页
		defset2(state) {
			state.defsetselect = "d2";
		},
		//adopt页
		defset3(state) {
			state.defsetselect = "d3";
		},
		// lookingpets页
		defset4(state) {
			state.defsetselect = "d4";
		},
		// 判断筛选条筛选按钮是否改变样式(已进入过详情，并点击确定返回)
		// home页
		navset2(state) {
			state.selectnav = "n2";
		},
		// adopt页
		navset3(state) {
			state.selectnav = "n3";
		},
		// lookingpets页
		navset4(state) {
			state.selectnav = "n4";
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
