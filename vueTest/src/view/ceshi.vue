<template>
  <div class="module-ceshi">
  	<div class="page-title">测试页面</div>
  	<div class="page-content">
	  	<div v-if="testList.indexOf('dialog')!==-1" class="feature-item">
	  		<div class="feature-title">弹框</div>
				<div class="dialog-item"
					v-for="item,key in dialogList"
					@click="showDialog(key)">
					<div class="dialog-desc"
						v-for="descInfo in item.desc">
						{{descInfo}}
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	export default {
		name: 'ceshi',
		data() {
			return {
				testList: [],
				feactureList: [
					'dialog',
					'setDate',
					'setDateTime',
				],
				dialogList: {
					alert: {
						text: 'alert弹框测试',
						desc: [
							'alert弹框',
							'使用方式：{vm,exec} = this.$dialog.alert(text[,title])',
							'关闭方式：this.$dialog.close(vm)、点击确认按钮',
						],
					},
					confirm: {
						text: 'confirm确认框测试',
						desc: [
							'confirm确认框',
							'使用方式：{vm,exec} = this.$dialog.confirm(text)',
							'关闭方式：this.$dialog.close(vm)、点击确认/取消按钮',
						],
					},
					tip: {
						text: 'tip提示框测试',
						desc: [
							'tip提示框',
							'使用方式：{vm,exec} = this.$dialog.tip(text[,time])',
							'关闭方式：this.$dialog.close(vm)、超时、点击空白处',
						],
					},
					loading: {
						text: 'loading动画测试',
						desc: [
							'loading动画',
							'使用方式：{vm,exec} = this.$dialog.loading([text])',
							'关闭方式：this.$dialog.close(vm)',
						],
					},
					customBox: {
						text: '',
						desc: [
							'customBox自定义弹框',
						],
					},
				},
				nowDate: [2018,2,1],
				nowDateTime: [2018,2,1,18,6],
			}
		},
		created() {
			let queryList = this.$route.query;
			for(let key in queryList){
				this.testList.push(key);
			}
			if (this.testList.length <= 0) {
				this.testList = this.feactureList;
			}
		},
		methods: {
			showDialog(key) {
				let showText = this.dialogList[key].text;
				switch(key){
					case 'alert':
						let alertBox = this.$dialog.alert(showText);
						// // 1、测试代码关闭alert
						// setTimeout(()=>{
						// 	this.$dialog.close(alertBox.vm);
						// },1000);
						// // 2、测试alert关闭事件结果
						// alertBox.exec.then(()=>{
						// 	console.log('alert弹框，点击确认');
						// })
						break;
					case 'confirm':
						let confirmBox = this.$dialog.confirm(showText);
						// // 1、测试代码关闭confirm
						// setTimeout(()=>{
						// 	this.$dialog.close(confirmBox.vm);
						// },1000);
						// // 2、测试alert关闭事件结果
						// confirmBox.exec.then(btnName=>{
						// 	console.log('confirm确认框，选择按钮：',btnName);
						// });
						break;
					case 'tip':
						let tipBox = this.$dialog.tip(showText,3);
						// // 1、测试代码关闭tip
						// setTimeout(()=>{
						// 	this.$dialog.close(tipBox.vm);
						// },1000);
						// // 2、测试tip关闭事件结果
						// tipBox.exec.then(()=>{
						// 	console.log('tip提示框关闭');
						// })
						break;
					case 'loading':
						let loadingBox = this.$dialog.loading(showText);
						// // 1、测试代码关闭loading
						setTimeout(()=>{
							this.$dialog.close(loadingBox.vm);
						},1000);
						// // 2、测试loading关闭事件结果
						// loadingBox.exec.then(()=>{
						// 	console.log('loading动画关闭');
						// })
						break;
					case 'customBox':
					break;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "~scss/_variable.scss";
	$header-height: 2rem;
	.page-title{
		position: fixed;
		top: 0;
		width: 100%;
		height: $header-height;
		line-height: $header-height;
		background: #fff;
		box-shadow: 0px 1px 1rem rgba(#000,.5);
	}
	.page-content{
		padding: 0 .5rem;
		padding-top: $header-height + .5rem;
		.feature-item{
			margin-bottom: 1rem;
			box-shadow: 0px .5rem 1rem rgba(#000,.5);
			.feature-title{
				height: 1.5rem;
				line-height: 1.5rem;
				background: #0ff;
			}
		}
	}
	.dialog-item{
		border-top: 2px solid $theme-color-lightGray;
		background: $theme-color-gray;
		color: #fff;
		text-align: left;
		padding: .5rem;
	}
</style>
