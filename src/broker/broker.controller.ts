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
    @Query('id') id: string,
    @Query('power') power: string,
    @Query('setTempIncrease') setTempIncrease: string,
    @Query('setTempDecrease') setTempDecrease: string,
    @Query('mode') mode: string,
    @Query('speed') speed: string,
  ) {
    await this.brokerService.setHRByBrowser(id, power, setTempIncrease, setTempDecrease, mode, speed);
  }


  @Get('set-hr-device') // API for browser
  async setHRByDevice(
    @Query('id') id: string,
    @Query('power') power: string,
    @Query('roomTemp') roomTemp: string,
    @Query('setTemp') setTemp: string,
    @Query('mode') mode: string,
    @Query('speed') speed: string,
  ) {
    await this.brokerService.setHRByDevice(id, power, roomTemp, setTemp, mode, speed);
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
