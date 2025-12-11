import { Controller, Get, Param, Query } from '@nestjs/common';
import { BrokerService } from './broker.service';

@Controller('broker')
export class BrokerController {
  constructor(private readonly brokerService: BrokerService) { }

  @Get('get-all') // API for browser
  async getAll() {
    return await this.brokerService.getDisplayData();
  }

  @Get('set-hr-browser') // API for browser
  async setHRByBrowser(
    @Query('id') id: number,
    @Query('power') power: number,
    @Query('setTempIncrease') setTempIncrease: number,
    @Query('setTempDecrease') setTempDecrease: number,
    @Query('mode') mode: number,
    @Query('speed') speed: number,
  ) {
    await this.brokerService.setHRByBrowser(id, power, setTempIncrease, setTempDecrease, mode, speed);
  }


  @Get('set-hr-device') // API for browser
  async setHRByDevice(
    @Query('id') id: number,
    @Query('data') data: string,
  ) {
    await this.brokerService.setHRByDevice(id, data);
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
