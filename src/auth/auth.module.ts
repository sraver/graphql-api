import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import auth from '../config/auth';
import { LoginController } from './infrastructure/controllers/login-controller';
import { LocalStrategy } from './domain/local-strategy';
import { JwtStrategy } from './domain/jwt-strategy';
import { GenerateToken } from './application/generate-token';

@Module({
  imports: [
    JwtModule.register({
      secret: auth().jwt_secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [GenerateToken, LocalStrategy, JwtStrategy, JwtService],
  controllers: [LoginController],
})
export class AuthModule {}
