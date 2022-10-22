import { Transform, Type } from 'class-transformer'
import {
  IsString,
  IsEmail,
  IsUrl,
  IsDate,
  IsNumber,
  Length,
  Matches,
  IsOptional,
  IsPhoneNumber,
  Contains,
  IsObject,
  ValidateNested,
  IsDefined,
  IsNotEmptyObject,
  MinLength,
  MaxLength
} from 'class-validator'
import { CreateScholarshipDto } from '../../scholarship/dto/create-scholarship.dto'

const REGEX_TAX_ID = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

export class CreateStudentDTO {
  constructor(
    tax_id: string,
    enrollment_number: string,
    name: string,
    email: string,
    course: string,
    link_lattes: string,
    advisor_id: number,
    enrollment_date_pgcomp: Date,
    phone_number: string,
    password: string,
    role: string,
    scholarship: CreateScholarshipDto
  ) {
    this.tax_id = tax_id
    this.enrollment_number = enrollment_number
    this.name = name
    this.email = email
    this.course = course
    this.link_lattes = link_lattes
    this.advisor_id = advisor_id
    this.enrollment_date_pgcomp = enrollment_date_pgcomp
    this.phone_number = phone_number
    this.password = password
    this.role = role
    this.scholarship = scholarship
  }

  @IsString()
  @Length(14, 14)
  @Matches(REGEX_TAX_ID, {
    message: 'Tax ID must be in the format 000.000.000-00'
  })
  readonly tax_id: string

  @IsString()
  @Length(9, 9)
  readonly enrollment_number: string

  @IsString()
  readonly name: string

  @IsEmail()
  readonly email: string

  @IsString()
  @MinLength(8, {
    message: 'Course only is Doutorado or Mestrado'
  })
  @MaxLength(9, {
    message: 'Course only is Doutorado or Mestrado'
  })
  readonly course: string

  @IsUrl()
  readonly link_lattes: string

  @IsNumber()
  readonly advisor_id: number

  @Type(() => Date)
  @IsDate()
  readonly enrollment_date_pgcomp: Date

  @IsString()
  @IsPhoneNumber('BR')
  readonly phone_number: string

  @IsString()
  readonly password: string

  @IsString()
  @Transform(({ value }) => value.toUpperCase())
  @Contains('STUDENT')
  readonly role: string

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  readonly defense_prediction: Date

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  @Type(() => CreateScholarshipDto)
  readonly scholarship: CreateScholarshipDto
}