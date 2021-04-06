<template>
	<list :show-scrollbar="false" class="list-page">
		<header>
			<div class="navbar flex-row" :style="navBarStyles">
				<div class="flex-row" @tap="backFn">
					<iconfont type="back" />
					<text class="navbar-content">{{ title }}</text>
				</div>
			</div>
		</header>
		<slot />
	</list>
</template>

<script>
export default {
	name: 'list-page',

	props: {
		title: String
	},

	data() {
		const { statusBarHeight } = uni.getSystemInfoSync()
		const navBarStyles = {
			height: statusBarHeight + 44,
			paddingTop: statusBarHeight
		}
		return { navBarStyles }
	},

	methods: {
		backFn() {
			uni.navigateBack()
		}
	}
}
</script>

<style lang="scss" scoped>
.list-page {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	.navbar {
		padding: 0 30rpx;
		background-color: #fff;
		border-bottom: 1px solid #eee;
		.iconfont {
			margin-right: 5px;
		}
		.navbar-content,
		.iconfont {
			font-size: 18px;
		}
	}
}
</style>
