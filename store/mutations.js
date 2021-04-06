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
	 * 更新记录
	 */
	updateRecord({ record }, { id, duration }) {
		const tryFindIndex = record.findIndex(item => item.id == id)
		record[tryFindIndex].duration = duration
		record[tryFindIndex].date = Date.now()
		if (tryFindIndex == record.length - 1) record.push({ id: ++id, duration: 0 })
		uni.setStorageSync('record', record)
	},
	/**
	 * 将本地缓存的数据更新到store中
	 */
	updateDataFromLocal(state) {
		const localTheme = uni.getStorageSync('localTheme')
		if (localTheme) state.theme = localTheme
		const record = uni.getStorageSync('record')
		if (record) state.record = record
	}
}
