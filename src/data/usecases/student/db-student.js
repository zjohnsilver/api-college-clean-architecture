export class DbStudent {
  constructor (
    studentRepository
  ) {
    this.studentRepository = studentRepository
  }

  async get (studentId) {
    const getStudent = await this.studentRepository.get(studentId)

    return getStudent
  }

  async getAll () {
    const students = await this.studentRepository.getAll()

    return students
  }
}
