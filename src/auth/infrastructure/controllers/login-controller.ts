import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../domain/local-auth-guard';
import { GenerateToken } from '../../application/generate-token';

@Controller()
export class LoginController {
  constructor(private readonly tokenGenerator: GenerateToken) {}

  @Post('/auth/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    const token = this.tokenGenerator.execute(req.user.id);
    return {
      token: token,
    };
  }
}
