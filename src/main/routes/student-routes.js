import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeGetStudentController } from '@/main/factories/controllers/student/get-student-controller-factory'
import { makeGetAllStudentsController } from '@/main/factories/controllers/student/get-all-students-controller-factory'

export default (router) => {
  router.get('/students/:id', adaptRoute(makeGetStudentController()))
  router.get('/students', adaptRoute(makeGetAllStudentsController()))
}
