import { Injectable } from '@nestjs/common';
import { OtherService } from './other/other.service';

@Injectable()
export class AppService {
  constructor(private readonly otherService: OtherService) {}
  getHello(): string {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/unbound-method
    return 'Hello World!' + this.otherService.xxx();
  }
}
