<script>
export default {
	onLaunch() {
		plus.navigator.setFullscreen(true)
		 // fast模式下逻辑层和首页视图层同时初始化，所以这里要延迟执行，不然会拿不到store对象
		setTimeout(() => this.$store.commit('updateDataFromLocal'))
	}
}
</script>

<style lang="scss">
.flex-row {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
}
.flex-col {
	/* #ifndef APP-NVUE */
	display: flex;
	flex-direction: column;
	/* #endif */
	align-items: center;
}
.btn {
	transition: transform 0.1s;
	transform: scale(1, 1);
	&:active {
		opacity: 0.7;
		transform: scale(0.8, 0.8);
	}
}
</style>
