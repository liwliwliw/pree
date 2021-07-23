const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports=function(app){
    app.use([`${process.env.REACT_APP_BASE_API}`],createProxyMiddleware({
        target:"http://www.web-jshtml.cn/api/react",
        changeOrigin:true,
        pathRewrite: {
            "^/devApi": ""
        },
    }))
    
}
