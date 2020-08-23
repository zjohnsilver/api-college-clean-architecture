import { PostgreqlHelper } from './postgresql-helper'
import env from '@/main/config/env'

const postgresConnection = new PostgreqlHelper(env.db)

export const pool = postgresConnection.getPool()
