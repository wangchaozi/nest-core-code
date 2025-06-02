import { Injectable } from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';

@Injectable()
export class BbbService {
  constructor(private readonly aaaService: AaaService) {}
  create(createBbbDto: CreateBbbDto) {
    return 'This action adds a new bbb';
  }

  findAll() {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/unbound-method
    return `This action returns all bbb` + this.aaaService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id: number, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }
}
