/**
 * 就实现一个解除绑定动画的方法
 */

const BindingX = uni.requireNativePlugin('bindingx')

export default {
	methods: {
		unbindAnimate(key = 'bindingxToken') {
			if (!this[key]) return
			BindingX.unbind({
				token: this[key],
				eventType: 'timing'
			})
			this[key] = null
		}
	}
}