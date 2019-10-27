// loader 是一个函数，必须返回处理后的代码,而且还不能是 箭头函数应为，因为需要用到this ，箭头函数会影响this的指向
module.exports = function (souce){
  return souce.replace("kk","ldn")
}