var loaderUtils = require("loader-utils")
// loader 是一个函数，必须返回处理后的代码,而且还不能是 箭头函数应为，因为需要用到this ，箭头函数会影响this的指向

module.exports = function (souce){
    // 必须放进函数中，不然不起效果
options = loaderUtils.getOptions(this);
    console.log(options)
    // this.query 也可以获取options里面的值，应为有时候放进去的options 可能是字符串或者数组，对象等 ，我们可以借助loader-utils帮助我们分析，
    //console.log(this.query)
    // 使用了this.callback 就不用使用return souce
    // this.callback(
    //     err: Error | null, 错误信息
    //     content: string | Buffer, 返回的souce
    //     sourceMap?: SourceMap,   sourcemap信息
    //     meta?: any //携带的额外信息
    //   );
    // this.callback(null,souce.replace("ldn",options.name))
    // 在做异步返回的时候必须包一层
    let callback = this.async()
    setTimeout(()=>{
        callback(null,souce.replace("ldn",options.name))
    },1000)
  }