export class StudentRepository {
  async get (id) {
    return {
      id: id,
      name: 'John'
    }
  }
}
