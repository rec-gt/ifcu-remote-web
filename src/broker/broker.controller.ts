import { Controller, Get, Param, Query } from '@nestjs/common';
import { BrokerService } from './broker.service';

@Controller('broker')
export class BrokerController {
  constructor(private readonly brokerService: BrokerService) {}

  @Get('get-all') // API for browser
  async getAll() {
    return this.brokerService.getAll();
  }

  @Get('set-hr') // API for browser
  async setHR(
    @Query('id') id: number,
    @Query('power') power: number,
    @Query('setTempIncrease') setTempIncrease: number,
    @Query('setTempDecrease') setTempDecrease: number,
    @Query('mode') mode: number,
    @Query('speed') speed: number,
  ) {
    if (power) {
      this.brokerService.setHR(id, 0, power);
    }

    if (setTempIncrease) {
      this.brokerService.data[id].HR[1] += 50;
    }

    if (setTempDecrease) {
      this.brokerService.data[id].HR[1] -= 50;
    }

    if (mode) {
      this.brokerService.data[id].HR[2] = mode;
    }

    if (speed) {
      this.brokerService.data[id].HR[3] = speed;
    }
  }

  @Get('get-hr/:id')
  async getHR(@Param('id') id: number) {
    return await this.brokerService.getHR(id);
  }

  @Get('set-ir') // API for ESP32 to upload their IR to server
  async setIR() {
    this.brokerService.setIR(0, 0, 1);
  }
}
