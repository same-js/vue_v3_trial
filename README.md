## 概要

このリポジトリは、 same-js が [Vue.jsの公式ハンズオン](https://v3.ja.vuejs.org/guide/introduction.html) を学習する用途で作成したものです。


## 環境構築（ゼロベースからの構築）
本リポジトリをCloneして進める場合は、この項は実施しなくて良い。  
（Vueプロジェクトをゼロベースから作成する場合にのみ必要）

### Vue CLIのインストール

`vue/cli` は、Vueプロジェクトの雛形を簡単に生成するためのCLIツール。  
どのパスでもプロジェクトを生成できるようにするためには、ローカルでなくグローバルにインストールする必要がある。

 `@next` を付与することで、`Vue 3` 向けの最新安定版である `Vue CLI v5` を利用可能となる。  
 （公式には `@next` 付与で利用できるのは `Vue CLI v4.5` と記載されているが、2020-01-02 現在は `v5.0` が自動でインストールされる）

```sh
$ npm install -g @vue/cli@next # グローバルにインストールされるため、どのパスで実行しても問題ない
```

バージョン確認
```sh
$ vue --version
# @vue/cli 5.0.0-alpha.0
```

古いバージョンの `vue/cli` がマシン本体に入っている場合、下記手順でバージョンアップ可能と思われる。（要検証）
```sh
$ npm install -g @vue/cli@next
```

### Vueプロジェクトの作成
下記コマンドを実行すると、 `path/to/` 配下に `introduction` ディレクトリが自動生成され、  
その中にVueプロジェクトに必要なファイルが作成される。
```sh
$ path/to/
$ vue create introduction # introduction は任意のアプリケーション名
```

利用するVueのバージョンを質問される。  
今回はv3のハンズオンが目的なため、 `Default (Vue 3 Preview) ([Vue 3] babel, eslint)` を選択する。

```
Vue CLI v5.0.0-alpha.0
? Please pick a preset:
  Default ([Vue 2] babel, eslint)
❯ Default (Vue 3 Preview) ([Vue 3] babel, eslint)
  Manually select features
```

しばらく時間がかかる・・・と思いきや、30秒も立たないうちに完了する。

## 開発サーバの起動
本リポジトリをCloneして進める場合は、この項から実施すること。

```sh
$ cd /path/to/introduction
$ npm install
$ npm run serve
```
