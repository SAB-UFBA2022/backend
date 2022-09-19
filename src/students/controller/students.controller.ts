import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { CreateStudentDTO } from '../model/student.dto.input'
import { ResponseStudentDTO } from '../model/student.response.dto'
import { StudentsService } from '../service/students.service'

@Controller('v1/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('/list/all')
  @ApiOperation({ tags: ['Estudantes'], summary: 'Lista todos os estudantes' })
  async findAllStudents() {
    return await this.studentsService.findAllStudents()
  }

  @Get('find/byid/:id')
  @ApiOperation({ tags: ['Estudantes'], summary: 'Encontra estudante por id' })
  async findById(@Param('id') id: number) {
    return await this.studentsService.findById(id)
  }

  @Get('find/bycourse')
  @ApiOperation({
    tags: ['Estudantes'],
    summary: 'Encontra estudante por curso'
  })
  async findByCourse(
    @Query('course') course: string
  ): Promise<ResponseStudentDTO[]> {
    return await this.studentsService.findByCourse(course)
  }

  @Get('find/byemail')
  @ApiOperation({
    tags: ['Estudantes'],
    summary: 'Encontra estudante por email'
  })
  async findByEmail(@Query('email') email: string) {
    return await this.studentsService.findByEmail(email)
  }

  @Get('/find/byadvisorid/:advisor_id')
  @ApiOperation({
    tags: ['Estudantes'],
    summary: 'Encontra estudante por advisor_id'
  })
  async findByAdvisorId(@Param('advisor_id') advisor_id: number) {
    return await this.studentsService.findByAdvisorId(advisor_id)
  }

  @Post()
  @ApiOperation({ tags: ['Estudantes'], summary: 'Cria estudante' })
  async createStudent(@Body() student: CreateStudentDTO) {
    return this.studentsService.createStudent(student)
  }

  @Patch()
  @ApiOperation({
    tags: ['Estudantes'],
    summary: 'Atualiza campos de estudante'
  })
  async updateStudent(@Body() student: CreateStudentDTO) {
    return this.studentsService.updateStudent(student) // TODO : update student
  }
}
