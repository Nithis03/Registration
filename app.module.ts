import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegistrationController } from './Registration/registration.controller';
import { AppService } from './app.service';
import { RegistrationService } from './Registration/registration.service';

@Module({
  imports: [],
  controllers: [AppController,RegistrationController],
  providers: [AppService,RegistrationService],
})
export class AppModule {}
