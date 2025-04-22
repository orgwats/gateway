import { Body, Controller, Post } from '@nestjs/common';
import { AnalyzerService } from './analyzer.service';
import { StartAnalyzerRequest } from '@orgwats/idl/gen/ts/analyzer';

@Controller('analyzer')
export class AnalyzerController {
  constructor(private readonly analyzerService: AnalyzerService) {}

  @Post('/start')
  analyze(@Body() req: StartAnalyzerRequest) {
    return this.analyzerService.start(req);
  }
}
