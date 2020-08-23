import { Pool } from 'pg'

import { DatabaseError } from '@/presentation/errors'

var singletonConnection = {}

export class PostgreqlHelper {
  constructor (connectionInfo) {
    this.connInfo = connectionInfo
    this.pool = this.connect(this.connInfo)
  }

  connect (connectionInfo) {
    const connection = singletonConnection[connectionInfo]

    if (connection) {
      return connection
    } else {
      try {
        const pool = new Pool(connectionInfo)
        singletonConnection[connectionInfo] = pool
        return pool
      } catch (e) {
        return new DatabaseError(e.stack)
      }
    }
  }

  getPool () {
    return this.pool
  }
}
