import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { AnalyzerModule } from '../grpc-clients/analyzer/analyzer.module';
import { RemoteConfigModule } from '../remote-config/remote-config.module';

@Module({
  imports: [AnalyzerModule, RemoteConfigModule],
  controllers: [GatewayController],
})
export class GatewayModule {}
