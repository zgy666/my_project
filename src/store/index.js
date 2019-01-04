import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个store仓库
export default new Vuex.Store({
	state: {
		count: 10
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrease(state) {
			state.count--;
		}
	},

	actions: {
		// context:承上启下
		increment(context) {
			setTimeout(function() {
				context.commit("increment");
			})
		},
		decrease(context) {
			setTimeout(function() {
				context.commit("decrease");
			})
		}
	},
	getters: {
		getState(state) {
			return state.count > 0 ? state.count : 0
		}
	}
});