import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { RemoteConfigModule } from './remote-config/remote-config.module';

@Module({
  imports: [GatewayModule, RemoteConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
