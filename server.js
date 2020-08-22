const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();
const PORT = 3000;

router.get('/', (ctx) => {
  ctx.body = 'Ead platform';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => console.log(`Listen port: ${PORT}`));
