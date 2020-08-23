import { ok } from '../../helpers/http/http-helper/http-helper'

export class GetStudentController {
  async handle (httpRequest) {
    console.log(httpRequest)
    return ok('Hello World')
  }
}
