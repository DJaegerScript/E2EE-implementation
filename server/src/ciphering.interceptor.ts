import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { enc, AES } from 'crypto-js';

@Injectable()
export class CipheringInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    req.body = JSON.parse(this.cipherBody(req.body.content));

    return next
      .handle()
      .pipe(map((data) => this.cipherBody(data.message, true)));
  }

  cipherBody(data: string, isEncrypting?: boolean): string {
    const key = enc.Base64.parse('6Le0DgMTAAAAANokdEEial');
    const iv = enc.Base64.parse('mHGFxENnZLbienLyANoi');

    return isEncrypting
      ? AES.encrypt(JSON.stringify(data), key, { iv }).toString()
      : JSON.parse(AES.decrypt(data, key, { iv }).toString(enc.Utf8));
  }
}
