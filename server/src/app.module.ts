import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { MongoDatabaseProviderModule } from './providers/mongo/provider.module';

@Module({
  imports: [AppConfigModule, MongoDatabaseProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
