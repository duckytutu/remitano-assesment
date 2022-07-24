import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/constants/repositories';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { CrudService } from 'nestjs-crud-sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService extends CrudService<User> {
  constructor(
    // @Inject(USERS_REPOSITORY)
    // private userRepository: typeof User,

    @InjectModel(User)
    model: typeof User,
  ) {
    super(model);
  }

  // async create(user: any): Promise<User> {
  //   return await this.userRepository.create<User>(user);
  // }

  // findAll() {
  //   return this.userRepository.findAll<User>();
  // }

  // findOne(id: number) {
  //   return this.userRepository.findByPk(id);
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
