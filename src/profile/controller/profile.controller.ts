import { Controller, Request, Get, UseGuards } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'

@Controller()
export class ProfileController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ tags: ['Perfil'], summary: 'Encontra perfil' })
  getProfile(@Request() req) {
    return req.user
  }
}
