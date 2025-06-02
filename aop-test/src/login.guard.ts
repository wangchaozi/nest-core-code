import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(AppService)
  private readonly appService: AppService;

  canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('Login Check', this.appService.getHello());
    return false;
  }
}
