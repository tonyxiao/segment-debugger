import Analytics from 'analytics-node'
import route from 'koa-route'
import jsonBody from 'koa-json-body'

const segment = (writeKey) => Analytics(writeKey, { flushAt: 1 })
const throwJson = (ctx, err, status = 400) => {
  ctx.throw(JSON.stringify({_error: err.message || 'Unknown Error'}, null, 4), status)
}

export default function (app) {
  app.use(jsonBody())
  app.use(route.post('/api/identify', (ctx) => {
    console.log('Node identify', ctx.request.query, ctx.request.body)
    try {
      segment(ctx.request.query.writeKey).identify(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
  app.use(route.post('/api/track', (ctx) => {
    try {
      segment(ctx.request.query.writeKey).track(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
  app.use(route.post('/api/page', (ctx) => {
    try {
      segment(ctx.request.query.writeKey).page(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
  app.use(route.post('/api/alias', (ctx) => {
    try {
      segment(ctx.request.query.writeKey).alias(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
  app.use(route.post('/api/group', (ctx) => {
    try {
      segment(ctx.request.query.writeKey).group(ctx.request.body)
    } catch (err) { throwJson(ctx, err) }
    ctx.body = {status: 'success'}
  }))
}