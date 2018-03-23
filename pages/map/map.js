Page({
  onReady() {
    this.dialog = this.selectComponent("#dialog");  //获取组件实例
  },
  data: {
    moduleName: 'map'
  },
  // ------- methods-------
  showDialog() {
    this.dialog.showDialog();
  },
  _cancelEvent() {
    console.log("点击了取消");
    this.dialog.hideDialog();
  },
  _confirmEvent() {
    console.log("点击了确定");
    this.dialog.hideDialog();
  }
})