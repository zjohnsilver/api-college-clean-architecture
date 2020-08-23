export class DbGetStudent {
  constructor (
    getStudentRepository
  ) {
    this.getStudentRepository = getStudentRepository
  }

  async get (studentId) {
    const getStudent = await this.getStudentRepository.get(studentId)

    return getStudent
  }
}
