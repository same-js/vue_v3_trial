// 宣言的レンダリング - データとDOMの紐付けによるリアクティブ化
const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  // counter プロパティを1秒ごとにインクリメントすると
  // 都度、画面上の数値も再レンダリングされる
  mounted() {
    setInterval( () => {
      this.counter++
    }, 1000 )
  }
}

Vue.createApp(Counter).mount(counter)
