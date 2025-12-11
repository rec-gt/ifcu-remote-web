import { Injectable } from '@nestjs/common';
import { isEqual } from 'lodash-es';

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
          browser: null,
          server: [0, 2500, 0, 0],
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
          browser: null,
          server: [0, 2500, 0, 0],
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
  }

  async setHRByDevice(id: number, data: string) {

  }

  async getHR(id: number) {
    // if changed, then allow device to update its own HRs
    const s = this.database[id].data.hr.server
    const b = this.database[id].data.hr.browser

    console.log(s)
    console.log(b)

    if (!isEqual(s, b) && b != null) {
      return b
    }

    return null
  }



  setIR(id: number, pos: number, value: any) { }
}
