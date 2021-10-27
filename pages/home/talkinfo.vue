<template>
	<view class=""><web-view :src=url></web-view></view>
</template>

<script>
export default {
	name: 'talkinfo',
	components: {},
	data() {
		return {
			url: ''
		};
	},
	onLoad: function(option) {
		this.url=option.url
	}
};
</script>

<style></style>
