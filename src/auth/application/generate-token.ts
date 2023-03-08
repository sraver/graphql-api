import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import auth from '../../config/auth';
import { UserId } from '../../nft/domain/nft';

@Injectable()
export class GenerateToken {
  constructor(private readonly jwtService: JwtService) {}

  execute(id: UserId): string {
    const payload = { sub: id };
    return this.jwtService.sign(payload, { secret: auth().jwt_secret });
  }
}
