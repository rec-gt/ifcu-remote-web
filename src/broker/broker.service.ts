import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokerService {
  database: any = [
    {
      id: 0,
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
          counter: 5
        },
      },
    },
    {
      id: 1,
      name: 'IFCU-02',
      data: {
        ir: {
          device: [2200, 0, 0, 0, 0],
        },
        hr: {
          device: [0, 2500, 0, 0],
          browser: [0, 2500, 0, 0],
          server: [0, 2500, 0, 0],
          isConsumpted: false,
          counter: 8
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
    this.database[id].data.hr.counter = 8;
  }

  async setHRByDevice(id: string, power: string, setTemp: string, mode: string, speed: string) {
    if (power) {
      this.database[id].data.hr.device[0] = parseInt(power)
    }

    if (setTemp) {
      this.database[id].data.hr.device[1] = parseInt(setTemp);
    }

    if (mode) {
      this.database[id].data.hr.device[2] = parseInt(mode);
    }

    if (speed) {
      this.database[id].data.hr.device[3] = parseInt(speed);
    }

    console.log(this.database[id].data.hr.isConsumpted);

    if (this.database[id].data.hr.isConsumpted) {
      this.database[id].data.hr.server = [...this.database[id].data.hr.device]
      this.database[id].data.hr.browser = [...this.database[id].data.hr.device]
    }


  }

  async getHR(id: number) {
    if (!this.database[id].data.hr.isConsumpted) {

      if (this.database[id].data.hr.counter <= 0) {
        this.database[id].data.hr.counter = 8;
        this.database[id].data.hr.isConsumpted = true
      } else {
        this.database[id].data.hr.counter -= 1;
      }

      return [1, ...this.database[id].data.hr.browser]
    }

    return null
  }



  setIR(id: number, pos: number, value: any) { }
}
