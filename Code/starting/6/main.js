// 条件分岐とループ - 条件分岐
const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  },
  // v-if 動作確認用の関数
  methods: {
    reverse() {
      this.seen = !this.seen
    }
  }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
