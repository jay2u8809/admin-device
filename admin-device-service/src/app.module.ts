import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthtController } from './autht/autht.controller';
import { UserModule } from './user/user.module';
import { DeviceManagementModule } from './device-management/device-management.module';

@Module({
  imports: [AuthModule, UserModule, DeviceManagementModule],
  controllers: [AppController, AuthtController],
  providers: [AppService],
})
export class AppModule {}
