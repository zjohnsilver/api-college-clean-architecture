import { pool } from '@/infra/database/postgresql/helpers/get-pool'

export class StudentRepository {
  async get (id) {
    return await pool.query('SELECT * FROM manage.student WHERE matriculation=$1', [id])
      .then(({ rows }) => {
        console.log(rows[0])
        return rows[0]
      })
      .catch(e => {
        console.log(e)
      })
  }

  async getAll () {
    return await pool.query('SELECT * FROM manage.student')
      .then(({ rows }) => {
        return rows
      })
      .catch(e => {
        console.log(e)
      })
  }
}
