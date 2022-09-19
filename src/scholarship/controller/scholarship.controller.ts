import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { ScholarshipService } from '../service/scholarship.service'
import { CreateScholarshipDto } from '../dto/create-scholarship.dto'

@Controller('v1/scholarship')
export class ScholarshipController {
  constructor(private readonly scholarshipService: ScholarshipService) {}

  @Post()
  @ApiOperation({ tags: ['Bolsa'], summary: 'Cria bolsa' })
  create(@Body() createScholarshipDto: CreateScholarshipDto) {
    return this.scholarshipService.create(createScholarshipDto)
  }

  @Get()
  @ApiOperation({ tags: ['Bolsa'], summary: 'Lista todas as bolsas' })
  findAll() {
    return this.scholarshipService.findAll()
  }

  @Get(':id')
  @ApiOperation({ tags: ['Bolsa'], summary: 'Encontra bolsa por id' })
  findOne(@Param('id') id: string) {
    return this.scholarshipService.findOneById(+id)
  }
}
