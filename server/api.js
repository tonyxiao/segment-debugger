import Analytics from 'analytics-node'
import route from 'koa-route'
import jsonBody from 'koa-json-body'

const segment = (writeKey) => Analytics(writeKey, { flushAt: 1 })

export default function (app) {
  app.use(jsonBody())
  app.use(route.post('/api/identify/:writeKey', (ctx, writeKey) => {
    segment(writeKey).identify(ctx.request.body)
    ctx.body = {
      status: 'success'
    }
  }))
}