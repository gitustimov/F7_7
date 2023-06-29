new Vue({
  el: '#app',
  data: {
    msg: '',
    title: 'Шифр Цезаря',
  },
  methods: {
    greet: function () {
      const offset = 3;
      let str = this.msg;
      let out = '';
      for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);
      }
      return 'Зашифрованный текст: ' + out;
    },
  },
});
