import Vue from 'vue'
import alert from './alert.vue'

let msgBoxContainer = document.body;
export default function showAlert(text,title='提示') {
  let vm = null;
  let exec = new Promise((resolve,reject)=>{
    let alertOptions = {
      data:function() {
        return {
          title: title,
          text: text,
        }
      },
      methods:{
        close() {
          resolve('ok');
          msgBoxClose(vm);
        }
      },
      template: '<alert @close="close" :title="this.title" :text="this.text"></alert>',
      components: {alert}
    }

    let creator = Vue.extend(alertOptions)
    vm = new creator().$mount()
    msgBoxContainer.appendChild(vm.$el)
  })
  return {vm,exec};
}
//删除组件vm（从文本流中移除，并在vue中销毁）
function msgBoxClose(vm) {
  msgBoxContainer.removeChild(vm.$el);
  vm.$destroy();
}