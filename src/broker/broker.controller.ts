import { Controller, Get, Param, Query } from '@nestjs/common';
import { BrokerService } from './broker.service';

@Controller('broker')
export class BrokerController {
  constructor(private readonly brokerService: BrokerService) { }

  @Get('get-all') // API for browser
  async getAll() {
    return await this.brokerService.getDisplayData();
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
    await this.brokerService.setHR(id, power, setTempIncrease, setTempDecrease, mode, speed);

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
