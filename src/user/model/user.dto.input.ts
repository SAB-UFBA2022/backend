import { IsNumber, IsString } from 'class-validator'
import { Role } from '../../roles/enum/role.enum'
import { User } from '../interface/user.interface'

export class CreateUserDTO {
  constructor(user: User) {
    this.id = user.id
    this.tax_id = user.tax_id
    this.name = user.name
    this.role = Role[user.role]
    this.password = user.password
  }

  @IsString()
  readonly tax_id: string

  @IsString()
  readonly password: string

  @IsString()
  readonly name: string

  @IsNumber()
  readonly id: number

  @IsString()
  readonly role: Role
}
