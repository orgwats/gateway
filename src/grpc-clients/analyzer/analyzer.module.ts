import { Module } from '@nestjs/common';
import { AnalyzerGrpcClientModule } from './analyzer.grpc-client.module';
import { AnalyzerService } from './analyzer.service';

@Module({
  imports: [AnalyzerGrpcClientModule],
  providers: [AnalyzerService],
  exports: [AnalyzerService],
})
export class AnalyzerModule {}
