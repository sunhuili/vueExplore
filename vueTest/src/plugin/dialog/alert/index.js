import Vue from 'vue'
import alert from './alert.vue'

let dialogContainer = document.body;
export default function showAlert(text,title='提示'){
	let vm = null;
	let exec = new Promise((resolve,reject)=>{
		let alertOptions = {
			data:function(){
				return {
					title: title,
					text: text,
				}
			},
			methods:{
				close() {
					resolve('ok');
					dialogClose(vm);
				}
			},
			template: '<alert @close="close" :title="this.title" :text="this.text"></alert>',
			components: {alert}
		}

		let creator = Vue.extend(alertOptions)
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