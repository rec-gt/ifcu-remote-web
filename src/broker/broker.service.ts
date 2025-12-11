import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokerService {
  database = [
    {
      id: 0,
      name: 'IFCU-00',
      data: {
        ir: {
          device: [0, 0, 0, 0, 0],
        },
        hr: {
          device: [0, 2500, 0, 0],
          browser: [0, 2500, 0, 0],
          server: [0, 2500, 0, 0],
        },
      },
    },
    {
      id: 1,
      name: 'IFCU-01',
      data: {
        ir: {
          device: [0, 0, 0, 0, 0],
        },
        hr: {
          device: [0, 2500, 0, 0],
          browser: [0, 2500, 0, 0],
          server: [0, 2500, 0, 0],
        },
      },
    },
  ];

  data: any = [
    { id: 0, name: 'IFCU-00', HR: [0, 2500, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 1, name: 'IFCU-01', HR: [0, 2500, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 2, name: 'IFCU-02', HR: [0, 2500, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 3, name: 'IFCU-03', HR: [0, 2500, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 4, name: 'IFCU-04', HR: [0, 2500, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 5, name: 'IFCU-05', HR: [0, 2500, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 6, name: 'IFCU-06', HR: [0, 2500, 0, 0], IR: [0, 0, 0, 0, 0] },
  ];

  getHello(): string {
    return 'iFCU Web OK';
  }

  getAll() {
    return this.data;
  }

  setHR(id: number, pos: number, value: any) {
    this.database[id].data.hr.browser[pos] = value;
  }

  getHR(id: number) {
    return this.data[id].HR;
  }

  setIR(id: number, pos: number, value: any) {
    this.data[id].IR[pos] = value;
  }
}
