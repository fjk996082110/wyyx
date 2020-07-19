let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


//分类数据
let Data = require('./datas/cateNavDatas.json');
router.get('/getCateNavDatas', (ctx, next) => {
  ctx.body = Data
});

//列表数据
let cateData = require('./datas/indexCateModule.json')
router.get('/getCateList', (ctx, next) => {
  // 1. 获取路由参数： query对象
  
  // 2. 返回路由数据
  ctx.body = cateData
});

let indexCateModuleData = require('./datas/indexCateModule.json')
router.get('/getIndexCateModule', (ctx, next) => {
  // 1. 获取路由参数： query对象
  
  // 2. 返回路由数据
  ctx.body = indexCateModuleData
});
let indexData = require('./datas/index.json')
router.get('/getIndexData', (ctx, next) => {
  // 1. 获取路由参数： query对象
  
  // 2. 返回路由数据
  ctx.body = indexData
});
let cateListsData = require('./datas/cateLists.json')
router.get('/getCateLists',(ctx,next)=>{
  ctx.body = cateListsData
})




router.post('/test2', (ctx, next) => {
  // 1. 请求参数： body
  ctx.body = 'post请求的测试数据'
})


app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
