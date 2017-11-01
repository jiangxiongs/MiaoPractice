//node中的path模块
const path = require('path');

module.exports = {
	entry:'./src/app.js',//入口，让它找那个文件
	output:{//出口文件
		filename:'bba.js',
        path:path.resolve(__dirname,'dist')
	},
	module:{//模块
		rules:[
			{
				test: /.js$/,
				use:['babel-loader'],
				exclude:[
					path.resolve(__dirname,'node_modules')
				]
			}
		]
	}
	
}
