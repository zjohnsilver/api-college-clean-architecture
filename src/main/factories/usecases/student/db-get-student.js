import { StudentRepository } from '@/infra/database/postgresql/student/student-repository'
import { DbStudent } from '@/data/usecases/student/db-student'

export const makeDbGetStudent = () => {
  const studentRepository = new StudentRepository()
  return new DbStudent(studentRepository)
}
