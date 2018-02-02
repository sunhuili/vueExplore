import alert from './alert/index.js'
import loading from './loading/index.js'
import tip from './tip/index.js'
import confirm from './confirm/index.js'

/**弹框模块
	*1、close方法：关闭指定窗口
		用法dialog.close(vm)，其中vm=dialog.alert(text[,title])。
	*2、各弹框详解：
	{
		name: 'alert',
		desc: [
			'alert弹框',
			'使用方式：{vm,exec} = dialog.alert(text[,title])',
			'关闭方式：dialog.close(vm)、点击确认按钮',
		],
	},
	{
		name: 'confirm',
		desc: [
			'confirm确认框',
			'使用方式：{vm,exec} = dialog.confirm(text)',
			'关闭方式：dialog.close(vm)、点击确认/取消按钮',
		],
	},
	{
		name: 'tip',
		desc: [
			'tip提示框',
			'使用方式：{vm,exec} = dialog.tip(text[,time])',
			'关闭方式：dialog.close(vm)、超时、点击空白处',
		],
	},
	{
		name: 'loading',
		desc: [
			'loading动画',
			'使用方式：{vm,exec} = dialog.loading([text])',
			'关闭方式：dialog.close(vm)',
		],
	},
	{
		name: 'customBox',
		desc: [
			'customBox自定义弹框',
		],
	},
	**/
let dialogContainer = document.body
function close(vm){
	dialogContainer.removeChild(vm.$el);
	vm.$destroy();
}
const dialog = {
	close,
	alert,
	loading,
	tip,
	confirm,
}
export default dialog;