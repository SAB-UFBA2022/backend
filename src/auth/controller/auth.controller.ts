import { Controller, Request, Post, UseGuards } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { AuthService } from '../service/auth.service'
import { LocalAuthGuard } from '../guards/local-auth.guard'
import { AuthRequest } from '../request/auth.request'

@Controller('/login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  @ApiOperation({ tags: ['Autenticação'], summary: 'Login' })
  async login(@Request() request: AuthRequest) {
    return this.authService.login(request.user)
  }
}
