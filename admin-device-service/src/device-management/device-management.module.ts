import { Module } from '@nestjs/common';
import { DeviceManagementController } from './device-management.controller';
import { DeviceManagementService } from './device-management.service';

@Module({
  controllers: [DeviceManagementController],
  providers: [DeviceManagementService]
})
export class DeviceManagementModule {}
