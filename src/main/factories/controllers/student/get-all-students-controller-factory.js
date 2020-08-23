import { GetAllStudentsController } from '@/presentation/controllers/student/get-all-students-controller'
import { makeDbGetStudent } from '@/main/factories/usecases/student/db-get-student'

export const makeGetAllStudentsController = () => {
  const controller = new GetAllStudentsController(makeDbGetStudent())
  return controller
}
