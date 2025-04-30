import { Body, Controller, Post } from '@nestjs/common';
import { AnalyzerService } from '../grpc-clients/analyzer/analyzer.service';
import {
  StartAnalyzerRequest,
  StartAnalyzerResponse,
} from '@orgwats/idl/gen/ts/analyzer';
import { Observable } from 'rxjs';

@Controller()
export class GatewayController {
  constructor(private readonly analyzerService: AnalyzerService) {}

  @Post('/start')
  start(@Body() req: StartAnalyzerRequest): Observable<StartAnalyzerResponse> {
    return this.analyzerService.start(req);
  }
}
