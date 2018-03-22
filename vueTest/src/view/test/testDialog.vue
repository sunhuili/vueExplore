<template>
  <div>
    <div class="u-item"
      v-for="item,key in dialogList"
      @click="showDialog(key)">
      <div v-for="descInfo in item.desc">
        {{descInfo}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'testDialog',
    data() {
      return {
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
            //  this.$dialog.close(alertBox.vm);
            // },1000);
            // // 2、测试alert关闭事件结果
            // alertBox.exec.then(()=>{
            //  console.log('alert弹框，点击确认');
            // })
            break;
          case 'confirm':
            let confirmBox = this.$dialog.confirm(showText);
            // // 1、测试代码关闭confirm
            // setTimeout(()=>{
            //  this.$dialog.close(confirmBox.vm);
            // },1000);
            // // 2、测试alert关闭事件结果
            // confirmBox.exec.then(btnName=>{
            //  console.log('confirm确认框，选择按钮：',btnName);
            // });
            break;
          case 'tip':
            let tipBox = this.$dialog.tip(showText,3);
            // // 1、测试代码关闭tip
            // setTimeout(()=>{
            //  this.$dialog.close(tipBox.vm);
            // },1000);
            // // 2、测试tip关闭事件结果
            // tipBox.exec.then(()=>{
            //  console.log('tip提示框关闭');
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
            //  console.log('loading动画关闭');
            // })
            break;
          case 'customBox':
          break;
        }
      },
    }
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
  .u-item{
    border-top: 2px solid $gColor-shadow-light;
    background: $gColor-shadow;
    color: $gColor-text-main;
    text-align: left;
    padding: $gSpace-content;
  }
</style>