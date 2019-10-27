var path = require("path")
module.exports ={
    entry:'./src/index.js',
    mode:'development',
    output:{
        filename:'[name]2.js',
        path:path.resolve(__dirname,"dist")
    },
    resolveLoader:{
        modules:["node_modules","./loader"]
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:[
                {
                    loader:"repaceAsynLoader",
                    options:{
                        name:"beauty girls"
                    }
                }, 
                {
                loader:"repaceLoader",
                },
        ]
        }]
    }
}