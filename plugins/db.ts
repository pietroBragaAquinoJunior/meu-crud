import { Client } from 'pg'

export default defineNuxtPlugin({
  name: 'user-repository-plugin',
  enforce: 'pre',
  async setup(nuxtApp) {
    const client = new Client({
      user: 'myuser',
      host: 'localhost',
      database: 'mydatabase',
      password: 'mypassword',
      port: 5432,
    })

    try {
      await client.connect()
      console.log('PostgreSQL connected')
    } catch (error) {
      // Asserindo que error é do tipo Error
      if (error instanceof Error) {
        console.error('Connection error', error.message)
      } else {
        console.error('Unknown error', error)
      }
    }

    // Você pode adicionar o cliente ao nuxtApp para uso em outros lugares
    nuxtApp.provide('db', client)
  },
  hooks: {
    'app:created'() {
      const nuxtApp = useNuxtApp()
      // Aqui você pode fazer algo com o app ao ser criado
    }
  },
  env: {
    islands: true
  }
})
