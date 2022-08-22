import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { Modeldto } from './registration.modeldto';

@Module({
  imports: [],
  controllers: [RegistrationController],
  providers: [RegistrationService,Modeldto],
})
export class RegistrationModule {}
