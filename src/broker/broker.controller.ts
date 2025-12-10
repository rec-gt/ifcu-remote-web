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
    @Query('power') power: number,
    @Query('setTempIncrease') setTempIncrease: number,
    @Query('setTempDecrease') setTempDecrease: number,
    @Query('mode') mode: number,
    @Query('speed') speed: number,
    @Query('value') value: number,
  ) {
    if (power) {
      this.brokerService.data[id].HR[0] =
        this.brokerService.data[id].HR[0] == 0 ? 1 : 0;
    }

    if (setTempIncrease) {
      this.brokerService.data[id].HR[1] += 50;
    }

    if (setTempDecrease) {
      this.brokerService.data[id].HR[1] -= 50;
    }
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
