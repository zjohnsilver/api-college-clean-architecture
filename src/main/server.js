import 'module-alias/register'

(async () => {
  const app = (await import('./config/app')).default
  app.listen(3000, () => console.log('Server running'))
})()
