import route from 'koa-route'

export default function (app) {
  console.log('Initializing api routes')
  app.use(route.get('/hello', function *(){
    this.body = 'hello world'
    // var names = Object.keys(db);
    // this.body = 'pets: ' + names.join(', ');
  }))
}