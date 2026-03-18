import { Body, Injectable } from '@nestjs/common';
import { prisma } from '@repo/db';

@Injectable()
export class AuthService {
  async signup(input: any) {
    const result = prisma.user.create({
      data: {
        email: input.email,
        name: input.name,
        passwordHash: input.password,
      },
    });
    return result;
  }
}
