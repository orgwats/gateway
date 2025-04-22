import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AnalyzerClient,
  StartAnalyzerRequest,
  StartAnalyzerResponse,
} from '@orgwats/idl/gen/ts/analyzer';
import { Observable } from 'rxjs';

@Injectable()
export class AnalyzerService implements OnModuleInit {
  private grpcService: AnalyzerClient;

  constructor(
    @Inject('ANALYZER_PACKAGE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.grpcService = this.client.getService<AnalyzerClient>('Analyzer');
  }

  start(req: StartAnalyzerRequest): Observable<StartAnalyzerResponse> {
    return this.grpcService.start(req);
  }
}
