// 在页面渲染之前被调用


const http = require('http')
//定义一个爬虫，去爬取远端api
function spider (callback,postData) {
	var post_data = JSON.stringify(postData)
	const option = {
		hostname:'127.0.0.1',
		port:4000,
		path:'/login',
		headers:{
			"Content-Type":'application/json',
		},
		method:'POST'
	}

	var req = http.request(option,(res)=>{
        callback(res.headers['set-cookie'])
	})

	req.write(post_data)
	req.end()
}

export default function (context) {
	// todo 在write等路由下重复执行了
    if(process.server){
        let params = {
            username:'小明',
            password:111111
        }
        spider((data)=>{
            data.map((item)=>{
				let index = item.lastIndexOf(';');
				let tem = item.slice(0,index+1);
                context.res.cookie(tem)
			})
        },params)
    }
}