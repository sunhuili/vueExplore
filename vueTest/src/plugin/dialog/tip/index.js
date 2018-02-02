import Vue from 'vue'
import tip from './tip.vue'

//text最长30字符
let dialogContainer = document.body;
export default function showTip(text,time=2){
	let vm = null;
	let exec = new Promise((resolve,reject)=>{	
		let tipOptions = {
			data:function(){
				return {
					text,
					time,
				}
			},
			methods:{
				close() {
					resolve();
					dialogClose(vm);
				}
			},
			template: '<tip :text="this.text" :time="time" @close="close"></tip>',
			components: {tip}
		}

		let creator = Vue.extend(tipOptions)
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