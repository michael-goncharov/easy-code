// выводить буквы с задержкой 200мс
const text = 'test mesaage';
let i = 0;
const timer = setInterval(function () {
  if (i < text.length) {
    console.log(text[i]);
    i++;
  } else {
    clearInterval(timer);
  }
}, 200);

// функция принимает строку и время в секундах, выводит текст с задержкой
function string(text, timeout) {
  function inner() {
    console.log(text);
  }
  const timer2 = setTimeout(inner, timeout);
  return timer2;
}
string('text', 500);

// ООП на закуску
function Element(content) {
  this.content = content;
  this.elementType = 'html';
  this.getContent = function () {
    return this.content;
  };
  this.setContent = function (value) {
    this.content = value;
  };
}
const element = new Element('MyContent')
console.log(element);

function TextElement(content) {
  Element.call(this);
  this.content = content;
  this.length = this.content.length;
  this.setContent = function (value) {
   this.length = value.length;
   this.content = value;
   };
}
const textField = new TextElement('test');
console.log(textField);
textField.length;
textField.setContent('test message');
textField.length;
