/**
 * 时间格式化
 * @param {Date_Object, timestamp_Number, Date_String} date* 时间
 * @param {String} fmt* 生成格式 ‘yyyy-MM-dd hh-mm-ss’
 */
export const dateFormat = (date, fmt) => {
	let ret
	date = ['string', 'number'].includes(typeof date) ? new Date(date) : date
	const opt = {
		'y+': (date.getFullYear()).toString(),
		'M+': (date.getMonth() + 1).toString(),
		'd+': (date.getDate()).toString(),
		'h+': (date.getHours()).toString(),
		'm+': (date.getMinutes()).toString(),
		's+': (date.getSeconds()).toString()
	}
	for (let k in opt) {
		ret = new RegExp('(' + k + ')').exec(fmt)
		if (ret) fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
	}
	return fmt
}

/**
 * 生成随机数
 * @param {Number} startNum* 开始数
 * @param {Number} startNum* 结束数
 * @param {Boolean} isIncludeEnd 是否包含结束位置
 */
export const randomNum = (startNum, endNum, isIncludeEnd = false) => parseInt(Math.random() * (endNum - startNum +
	Number(
		isIncludeEnd)) + startNum)

/**
 * 秒数转为时间格式字符串 60 => 01:00
 * @param {Number} date* 秒数
 */
export const dateToTime = date => date >= 60 ?
	`${date / 60 >= 10 ? '' : '0'}${parseInt(date / 60)}:${date % 60 >= 10 ? '' : '0'}${parseInt(date % 60)}` :
	`00:${date >= 10 ? '' : '0'}${parseInt(date)}`

/**
 * 深拷贝2
 * @param {Object, Array} obj* 需要进行深拷贝的对象
 */
export const deepClone = obj => JSON.parse(JSON.stringify(obj))

/**
 * 获取高对比度颜色
 * @param {String} hexcolor* hex颜色
 */
export const getContrastYIQ = hexcolor => {
	hexcolor = hexcolor.replace('#', '')
	const r = parseInt(hexcolor.substr(0, 2), 16)
	const g = parseInt(hexcolor.substr(2, 2), 16)
	const b = parseInt(hexcolor.substr(4, 2), 16)
	const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
	return yiq >= 128 ? '#000' : '#fff'
}

/**
 * hex转rgb
 * @param {String} hex
 */
export const hexToRgb = hex => ({
	r: parseInt(`0x${hex.slice(1, 3)}`),
	g: parseInt(`0x${hex.slice(3, 5)}`),
	b: parseInt(`0x${hex.slice(5, 7)}`)
})

/**
 * rgb转hex
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 */
export const rgbToHex = (r, g, b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
