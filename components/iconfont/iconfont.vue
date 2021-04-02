<template>
	<text class="iconfont">{{ iconUnicode }}</text>
</template>

<script>
const domModule = weex.requireModule('dom')
domModule.addRule('fontFace', {
	fontFamily: 'iconfont',
	src: `url('/static/iconfont.ttf')`
})

const sourceMap = {
	flag: '\ue633',
	mine: '\uece8',
	back: '\ue605',
	selected: '\ue62d'
}

export default {
	name: 'iconfont',

	props: {
		type: {
			validator: val => Object.keys(sourceMap).includes(val)
		}
	},

	computed: {
		iconUnicode() {
			return sourceMap[this.type]
		}
	}
}
</script>

<style scoped>
.iconfont {
	font-family: iconfont;
}
</style>
