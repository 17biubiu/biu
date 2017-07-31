;
(function() {
  let root = this;
  // Create a safe reference to the Biu object for use below.
  let biu = function(obj) {
    // 以下均针对 OOP 形式的调用
    // 如果是非 OOP 形式的调用，不会进入该函数内部

    // 如果 obj 已经是 `biu` 函数的实例，则直接返回 obj
    if (obj instanceof biu) return obj;
    // 如果不是 `biu` 函数的实例
    // 则调用 new 运算符，返回实例化的对象
    if (!(this instanceof biu)) return new biu(obj);
    this._wrapped = obj;
  };
  // 将上面定义的 `biu` 局部变量赋值给全局对象中的 `biu` 属性
  // 即客户端中 window.biu = biu
  // 服务端(node)中 exports.biu = biu
  // 同时在服务端向后兼容老的 require() API
  // 这样暴露给全局后便可以在全局环境中使用 `biu` 变量(方法)
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) { 
      exports = module.exports = biu;
    }
    exports.biu = biu;
  } else if (typeof define === 'function' && define.amd) { // 兼容 AMD 规范
    define('biu', [], function() {  
      return biu;
    });
  } else {
    root.biu = biu;
  }

  biu.VERSION = '0.0.4';

  biu.isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
}).call(this);
