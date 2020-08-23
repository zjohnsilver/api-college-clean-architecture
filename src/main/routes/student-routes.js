import { adaptRoute } from '../adapters/express-route-adapter'
import { makeGetStudentController } from '../factories/controllers/student/get-student-controller-factory'

export default (router) => {
  router.get('/student/:id', adaptRoute(makeGetStudentController()))
}
