export class DatabaseError extends Error {
  constructor (stack) {
    super('Database Error')
    this.name = 'DatabaseError'
    this.stack = stack
  }
}
