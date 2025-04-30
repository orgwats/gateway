import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { RemoteConfigModule } from '../../remote-config/remote-config.module';
import { RemoteConfigService } from '../../remote-config/remote-config.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'ANALYZER_PACKAGE',
        imports: [RemoteConfigModule],
        inject: [RemoteConfigService],
        useFactory: async (remoteConfigService: RemoteConfigService) => {
          const config = await remoteConfigService.getConfig();

          return {
            transport: Transport.GRPC,
            options: {
              url: `${config.service.analyzer.host}:${config.service.analyzer.port}`,
              package: 'analyzer',
              protoPath: join(
                __dirname,
                '../../../node_modules/@orgwats/idl/protos/analyzer/service_analyzer.proto',
              ),
            },
          };
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class AnalyzerGrpcClientModule {}
