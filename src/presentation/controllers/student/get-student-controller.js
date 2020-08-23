import { ok } from '@/presentation/helpers/http/http-helper/http-helper'

export class GetStudentController {
  constructor (repository) {
    this.repository = repository
  }

  async handle (httpRequest) {
    const id = httpRequest.params.id
    const student = await this.repository.get(id)
    return ok(student)
  }
}
