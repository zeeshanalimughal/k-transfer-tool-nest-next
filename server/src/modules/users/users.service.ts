import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { LogClass } from 'src/common/decorators/log-class.decorator';

@Injectable()
@LogClass()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  /* Email Match */
  async userEmailMatch(email: string) {
    const contact = await this.usersRepository.findByEmail(email);
    return contact;
  }

  /* Receiver Data Get */
  async getUserInfo(id: string) {
    const userInfo = await this.usersRepository.findById(id);
    return userInfo;
  }

  /* Profile Upload */
  async profileUpdate(id: string, image: string) {
    const messageUpdate = await this.usersRepository.updateOne(
      { id },
      { image },
    );
    return messageUpdate;
  }
}
