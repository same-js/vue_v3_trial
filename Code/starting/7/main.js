// 条件分岐とループ - ループ
const ListRendering = {
  data() {
    return {
      todos: [
        {text:  'Learn JavaScript'},
        {text:  'Learn Vue'},
        {text:  'Build something awesome'},
      ]
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')
