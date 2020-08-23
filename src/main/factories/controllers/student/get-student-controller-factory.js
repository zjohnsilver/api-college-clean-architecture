import { GetStudentController } from '../../../../presentation/controllers/student/get-student-controller'

export const makeGetStudentController = () => {
  const controller = new GetStudentController()
  return controller
}
