//配置模块
require.config({
	baseUrl:"/",
	paths:{
		"jquery": "libs/jquery-1.12.4",
		"carousel": "module/carousel",
		"sidebar":"module/sidebar",
		"shownav":"module/shownav",
		"reg":"module/reg",
		"url": "module/url",
		"header": "module/header",
		"validator":"module/validator",
		"cookie":"module/cookie",
		"tab":"module/tab",
	},
	shim:{ //垫片,模块依赖于其他模块
		carousel:{
			deps:["jquery"]
		},
		login:{
			deps:["jquery"]
		},
		sidebar:{
			deps:["jquery"]
		},
		shownav:{
			deps:["jquery"]
		},
		header:{
			deps:["jquery"]
		},
		tab:{
			deps:["jquery"]
		}
	}

})