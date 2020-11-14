(function() {
  'use strict';

  // Components

  var likeComponent = Vue.extend({
    // ボタンの中の文字をそれぞれ変更する
    // props: ['message'],
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function() { // componentのdataは関数で返さないといけないルール
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    // likeを押した数を表示
    methods: {
      countUp: function() {
        // それぞれのコンポーネントに値を持たせて、それを増やす処理
        this.count++;
        this.$emit('increment');
      }
    }
    // template: '<button>Like</button><button>Like</button>'
    // template: '<div><button>Like</button><button>Like</button></div>'
  });

  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    },
    data: {
      total: 0
    }, //totalを数える
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });

})();