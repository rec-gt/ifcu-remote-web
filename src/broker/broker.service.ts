import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokerService {
  database: any = [
    {
      id: 0,
      name: 'IFCU-00',
      data: {
        ir: {
          device: [2200, 0, 0, 0, 0],
        },
        hr: {
          device: [0, 2500, 0, 0],
          browser: [0, 2500, 0, 0],
          server: [0, 2500, 0, 0],
          isConsumpted: false,
        },
      },
    },
    {
      id: 1,
      name: 'IFCU-01',
      data: {
        ir: {
          device: [2200, 0, 0, 0, 0],
        },
        hr: {
          device: [0, 2500, 0, 0],
          browser: [0, 2500, 0, 0],
          server: [0, 2500, 0, 0],
          isConsumpted: false,
        },
      },
    },
  ];

  async getDisplayData() {
    return this.database;
  }

  async setHRByBrowser(id: string, power: string, setTempIncrease: string, setTempDecrease: string, mode: string, speed: string) {
    if (!this.database[id].data.hr.browser) {
      this.database[id].data.hr.browser = [...this.database[id].data.hr.server]
    }

    if (power) {
      this.database[id].data.hr.browser[0] = parseInt(power)
    }

    if (setTempIncrease) {
      this.database[id].data.hr.browser[1] += 50;
    }

    if (setTempDecrease) {
      this.database[id].data.hr.browser[1] -= 50;
    }

    if (mode) {
      this.database[id].data.hr.browser[2] = parseInt(mode);
    }

    if (speed) {
      this.database[id].data.hr.browser[3] = parseInt(speed);
    }

    this.database[id].data.hr.isConsumpted = false
  }

  async setHRByDevice(id: number, data: string) {

  }

  async getHR(id: number) {
    if (!this.database[id].data.hr.isConsumpted) {
      this.database[id].data.hr.isConsumpted = true
      return this.database[id].data.hr.browser
    }

    return null
  }



  setIR(id: number, pos: number, value: any) { }
}
