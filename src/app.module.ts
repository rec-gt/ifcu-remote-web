import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontendModule } from './frontend/frontend.module';
import { BrokerModule } from './broker/broker.module';

@Module({
  imports: [FrontendModule, BrokerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
