Component({
  options: {
    multipleSlots: true //在组件自定义时的选项中启用多slot支持
  },
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    content: {
      type: String,
      value: '弹窗内容'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },
  data: {
    isShow: false
  },
  methods: {
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    _cancelEvent() {
      this.triggerEvent('cancelEvent');
    },
    _contrimEvent() {
      this.triggerEvent("confirmEvent");
    }
  }
})