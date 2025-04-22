import { Module } from '@nestjs/common';
import { AnalyzerModule } from './analyzer/analyzer.module';

@Module({
  imports: [AnalyzerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
