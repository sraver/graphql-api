import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserId } from '../../nft/domain/nft';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  async validate(username: string, password: string): Promise<{ id: UserId }> {
    // We don't want to implement a complete user management system for this example,
    // so we use a hardcoded user id.
    // Normally here we would check a user service to get real data
    return {
      id: '1',
    };
  }
}
