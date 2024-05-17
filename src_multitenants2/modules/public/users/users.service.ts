import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // async findOne(id: number): Promise<User> {
  //   return await this.userRepository.findOne(id);
  // }

  // async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  //   const user = await this.userRepository.findOne(id);
  //   if (!user) {
  //     throw new Error('User not found');
  //   }
  //   this.userRepository.merge(user, updateUserDto);
  //   return await this.userRepository.save(user);
  // }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }


  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
