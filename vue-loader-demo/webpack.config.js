const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
	entry:'./main.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'build.js'
	},
	plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Development',
        filename:'index.html',		//filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的。
        template:'./index.html'		//template指定的文件目录也是相对于webpackConfig.output.path路径而言的，另外需要在rules里添加与文件类型相对应的loader
      })
    ],
    devServer: {				//这个配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。或者直接将package.json里的启动脚本改为webpack-dev-server --inline --hot --content-base ./dist
     	contentBase: './dist'
    },
    resolve:{
    	alias:{
    		'vue$':'./node_modules/vue/dist/vue.js'		//指定import vue时导入的是vue.js
    	}
    },
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/
			},
			{
				test:/\.html$/,
				loader:'html-loader'
			}
		]
	},
	mode:'development'	
};