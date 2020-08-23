import { ok } from '@/presentation/helpers/http/http-helper/http-helper'

export class GetAllStudentsController {
  constructor (repository) {
    this.repository = repository
  }

  async handle () {
    const students = await this.repository.getAll()
    return ok(students)
  }
}
