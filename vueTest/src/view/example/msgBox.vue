<template>
  <div>
    <div class="u-item"
      v-for="item,key in msgBoxList"
      @click="showmsgBox(key)">
      <div v-for="descInfo in item.desc">
        {{descInfo}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'msgBox',
    data() {
      return {
        msgBoxList: {
          alert: {
            text: 'alert弹框测试',
            desc: [
              'alert弹框',
              '使用方式：{vm,exec} = this.$msgBox.alert(text[,title])',
              '关闭方式：this.$msgBox.close(vm)、点击确认按钮',
            ],
          },
          confirm: {
            text: 'confirm确认框测试',
            desc: [
              'confirm确认框',
              '使用方式：{vm,exec} = this.$msgBox.confirm(text)',
              '关闭方式：this.$msgBox.close(vm)、点击确认/取消按钮',
            ],
          },
          tip: {
            text: 'tip提示框测试',
            desc: [
              'tip提示框',
              '使用方式：{vm,exec} = this.$msgBox.tip(text[,time])',
              '关闭方式：this.$msgBox.close(vm)、超时、点击空白处',
            ],
          },
          loading: {
            text: 'loading动画测试',
            desc: [
              'loading动画',
              '使用方式：{vm,exec} = this.$msgBox.loading([text])',
              '关闭方式：this.$msgBox.close(vm)',
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
      showmsgBox(key) {
        let showText = this.msgBoxList[key].text;
        switch(key) {
          case 'alert':
            let alertBox = this.$msgBox.alert(showText);
            // // 1、测试代码关闭alert
            // setTimeout(()=>{
            //  this.$msgBox.close(alertBox.vm);
            // },1000);
            // // 2、测试alert关闭事件结果
            // alertBox.exec.then(()=>{
            //  console.log('alert弹框，点击确认');
            // })
            break;
          case 'confirm':
            let confirmBox = this.$msgBox.confirm(showText);
            // // 1、测试代码关闭confirm
            // setTimeout(()=>{
            //  this.$msgBox.close(confirmBox.vm);
            // },1000);
            // // 2、测试alert关闭事件结果
            // confirmBox.exec.then(btnName=>{
            //  console.log('confirm确认框，选择按钮：',btnName);
            // });
            break;
          case 'tip':
            let tipBox = this.$msgBox.tip(showText,3);
            // // 1、测试代码关闭tip
            // setTimeout(()=>{
            //  this.$msgBox.close(tipBox.vm);
            // },1000);
            // // 2、测试tip关闭事件结果
            // tipBox.exec.then(()=>{
            //  console.log('tip提示框关闭');
            // })
            break;
          case 'loading':
            let loadingBox = this.$msgBox.loading(showText);
            // // 1、测试代码关闭loading
            setTimeout(()=>{
              this.$msgBox.close(loadingBox.vm);
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
    border-top: 2px solid $gColor-gray-light;
    background: $gColor-gray;
    color: $gColor-text-main;
    text-align: left;
    padding: $gSpace-content;
  }
</style>