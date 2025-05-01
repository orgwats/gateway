import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IConfig } from './remote-config.type';

@Injectable()
export class RemoteConfigService {
  private config: IConfig;

  constructor(private readonly httpService: HttpService) {}

  async getConfig() {
    if (!this.config) {
      await this.fetchConfig();
    }

    return this.config;
  }

  async fetchConfig() {
    // TODO: 환경변수로 이동
    const response = await firstValueFrom(this.httpService.get(``));

    this.config = response.data;
  }
}
