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

  async setHR(id, power, setTempIncrease, setTempDecrease, mode, speed) {
    if (!this.database[id].data.hr.browser) {
      this.database[id].data.hr.browser = this.database[id].data.hr.server
    }

    if (power) {
      this.database[id].data.hr.browser[0] = power
    }

    if (setTempIncrease) {
      this.database[id].data.hr.browser[1] += 50;
    }

    if (setTempDecrease) {
      this.database[id].data.hr.browser[1] -= 50;
    }

    if (mode) {
      this.database[id].data.hr.browser[2] = mode;
    }

    if (speed) {
      this.database[id].data.hr.browser[3] = speed;
    }
  }

  getHR(id: number) {
    this.database[id].data.hr.browser = null;

  }

  setIR(id: number, pos: number, value: any) { }
}
