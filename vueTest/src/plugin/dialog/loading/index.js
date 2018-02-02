import Vue from 'vue'
import loading from './loading.vue'

//text最长30字符
let dialogContainer = document.body;
export default function showLoading(text){
	let vm = null;
	let exec = new Promise((resolve,reject)=>{
		let loadingOptions = {
			data:function(){
				return {
					text: text,
				}
			},
			beforeDestroy() {
				resolve();
			},
			methods:{},
			template: '<loading :text="this.text"></loading>',
			components: {loading}
		}

		let creator = Vue.extend(loadingOptions)
		vm = new creator().$mount()
		dialogContainer.appendChild(vm.$el)
	})
	return {vm,exec};
}
//删除组件vm（从文本流中移除，并在vue中销毁）
function dialogClose(vm){
	dialogContainer.removeChild(vm.$el);
	vm.$destroy();
}