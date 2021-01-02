// 宣言的レンダリング - 基本形
const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(Counter).mount(counter)
