import { GetStudentController } from '@/presentation/controllers/student/get-student-controller'
import { makeDbGetStudent } from '@/main/factories/usecases/student/db-get-student'

export const makeGetStudentController = () => {
  const controller = new GetStudentController(makeDbGetStudent())
  return controller
}
