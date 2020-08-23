import { StudentRepository } from '@/infra/database/postgresql/student/student-repository'
import { DbGetStudent } from '@/data/usecases/student/db-get-student'

export const makeDbGetStudent = () => {
  const studentRepository = new StudentRepository()
  return new DbGetStudent(studentRepository)
}
