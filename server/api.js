import Analytics from 'analytics-node'
import route from 'koa-route'
import jsonBody from 'koa-json-body'

const segment = (writeKey) => Analytics(writeKey, { flushAt: 1 })
const throwJson = (ctx, err, status = 400) => {
  ctx.throw(JSON.stringify({_error: err.message || 'Unknown Error'}, null, 4), status)
}

export default function (app) {
  app.use(jsonBody())
  app.use(route.post('/api/identify/:writeKey', (ctx, writeKey) => {
    console.log('Node identify', writeKey, ctx.request.body)
    try {
      segment(writeKey).identify(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
  app.use(route.post('/api/track/:writeKey', (ctx, writeKey) => {
    try {
      segment(writeKey).track(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
  app.use(route.post('/api/page/:writeKey', (ctx, writeKey) => {
    try {
      segment(writeKey).page(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
  app.use(route.post('/api/alias/:writeKey', (ctx, writeKey) => {
    try {
      segment(writeKey).alias(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
  app.use(route.post('/api/group/:writeKey', (ctx, writeKey) => {
    try {
      segment(writeKey).group(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
}