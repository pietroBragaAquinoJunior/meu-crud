import client from '~/plugins/db.ts'

async function getUsers() {
    const result = await client.query('SELECT * FROM user')
    return result.rows
}