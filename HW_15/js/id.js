//Генерация id
const Id = (function () {

      let string = 'abcde12345';

      const generate = function () {
          let id = '';
          for (var i = 0; i < 6; i++) {
            id += string[Math.floor(Math.random()*10)];
          }
          return id;
      }

      return {
          generate
      }
}())
