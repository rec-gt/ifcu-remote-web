import { Controller, Get, Query } from '@nestjs/common';
import { BrokerService } from './broker.service';

@Controller('broker')
export class BrokerController {
  constructor(private readonly brokerService: BrokerService) {}

  @Get('get-all') // API for browser
  getAll() {
    return this.brokerService.getAll();
  }

  @Get('set-hr') // API for browser
  setHR(
    @Query('id') id: number,
    @Query('pos') pos: number,
    @Query('setTempIncrease') setTempIncrease: number,
    @Query('setTempDecrease') setTempDecrease: number,
    @Query('mode') mode: number,
    @Query('speed') speed: number,
    @Query('value') value: number,
  ) {
    if (setTempIncrease) {
      console.log(setTempIncrease);
      this.brokerService.setHR(id, pos, value);
    }

    if (setTempDecrease) {
      console.log(setTempDecrease);
      this.brokerService.setHR(id, pos, value);
    }

    console.log(mode);
    console.log(speed);

    return this.brokerService.setHR(id, pos, value);
  }

  @Get('get-hr') // API for ESP32 to update it's own HR
  getHR() {
    return this.brokerService.getHR(0);
  }

  @Get('set-ir') // API for ESP32 to upload their IR to server
  setIR() {
    return this.brokerService.setIR(0, 0, 1);
  }
}
