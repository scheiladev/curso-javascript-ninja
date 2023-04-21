(function (doc) {
  'use strict';
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback, false);
    })
  }

  DOM.prototype.off = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback, false);
    })
  }

  DOM.prototype.get = function get(){
    return this.element;
  }

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  }

  DOM.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  }

  DOM.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  }

  DOM.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  }

  DOM.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  }

  DOM.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  }

  DOM.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  }

  DOM.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]';
  }
  
  var $a = new DOM('[data-js="link"]');
  console.log($a);
  
  console.log('=== forEach ===');
  $a.forEach(function(item) {
    console.log(item.firstChild.nodeValue);
  });

  console.log('=== map ===');
  var dataJs = $a.map(function(item) {
    return item.getAttribute('data-js');
  });
  console.log(dataJs);

  // console.log('=== filter ===');
  // var filterJs = $a.filter(function(acc, item, index) {
  //   return acc + item.getAttribute('data-js') + index;
  // });
  // console.log(filterJs);
  
  console.log('=== reduce ===');
  var reduceJs = $a.reduce(function(acc, item, index) {
    return acc + ' ' + item.getAttribute('data-js') + ' ' + index;
  }, 0);
  console.log(reduceJs);

  console.log('=== reduceRight ===');
  var reduceRightJs = $a.reduceRight(function(acc, item, index) {
    return acc + ' ' + item.getAttribute('data-js') + ' ' + index;
  }, 0);
  console.log(reduceRightJs);

  // console.log('=== every ===');
  // $a.every(function(item) {
  //   console.log(item);
  // });

  // console.log('=== some ===');
  // $a.some(function(item) {
  //   console.log(item);
  // });

  console.log('=== isArray ===');
  console.log(DOM.isArray([1, 2, 3]));

  console.log('=== isObject ===');
  console.log(DOM.isObject({prop1: 1, pro2: 2}));

  console.log('=== isFunction ===');
  console.log(DOM.isFunction(function() {}));

  console.log('=== isNumber ===');
  console.log(DOM.isNumber(78));

  console.log('=== isString ===');
  console.log(DOM.isString('Scheila'));

  console.log('=== isBoolean ===');
  console.log(DOM.isBoolean(false));

  console.log('=== isNull ===');
  console.log(DOM.isNull(null));

})(document);
