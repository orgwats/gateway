import { Module } from '@nestjs/common';
import { AnalyzerGrpcClientModule } from '../../../microservices/analyzer/analyzer.grpc-client.module';
import { AnalyzerController } from './analyzer.controller';
import { AnalyzerService } from './analyzer.service';

@Module({
  imports: [AnalyzerGrpcClientModule],
  controllers: [AnalyzerController],
  providers: [AnalyzerService],
})
export class AnalyzerModule {}
