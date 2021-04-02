import Vue from 'vue'

export default {
	/**
	 * 保存主题信息
	 * @param {Object} data
	 */
	saveTheme(state, { key, value }) {
		Vue.set(state.theme[key], 'value', value)
		uni.setStorageSync('localTheme', state.theme)
	},
	/**
	 * 提升关卡等级
	 */
	updateLevel(state, num) {
		state.level = num
		uni.setStorageSync('level', num)
	},
	/**
	 * 将本地缓存的数据更新到store中
	 */
	updateDataFromLocal(state) {
		const localTheme = uni.getStorageSync('localTheme')
		if (localTheme) state.theme = localTheme
		const level = uni.getStorageSync('level')
		if (level) state.level = level
	}
}
