import Vue from 'vue'
import confirm from './confirm.vue'

let dialogContainer = document.body;
export default function showConfirm(text){
	let vm = null;
	let exec = new Promise((resolve,reject)=>{
		let confirmOptions = {
			data:function(){
				return {
					text: text,
				}
			},
			methods:{
				clickBtn(btnName) {
					resolve(btnName);
					dialogClose(vm);
				}
			},
			template: '<confirm @clickBtn="clickBtn" :title="this.title" :text="this.text"></confirm>',
			components: {confirm}
		}

		let creator = Vue.extend(confirmOptions)
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