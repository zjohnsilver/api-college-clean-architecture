import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeGetStudentController } from '@/main/factories/controllers/student/get-student-controller-factory'

export default (router) => {
  router.get('/student/:id', adaptRoute(makeGetStudentController()))
}
