// ユーザー入力の制御 -　フォーム入力とアプリケーション状態の双方向バインディング
const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')
