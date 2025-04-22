import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ANALYZER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'ec2-43-201-18-241.ap-northeast-2.compute.amazonaws.com:50052',
          package: 'analyzer',
          protoPath: join(
            __dirname,
            '../../../node_modules/@orgwats/idl/protos/analyzer/service_analyzer.proto',
          ),
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class AnalyzerGrpcClientModule {}
