import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokerService {
  data: any = [
    { id: 0, name: 'IFCU-00', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 1, name: 'IFCU-01', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 2, name: 'IFCU-02', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 3, name: 'IFCU-03', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 4, name: 'IFCU-04', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 5, name: 'IFCU-05', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { id: 6, name: 'IFCU-06', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
  ];

  getHello(): string {
    return 'iFCU Web OK';
  }

  getAll() {
    return this.data;
  }

  setHR(id: number, pos: number, value: any) {
    this.data[id].HR[pos] = value;
    console.log(this.data);
  }

  getHR(id: number) {
    return this.data[id].HR;
  }

  setIR(id: number, pos: number, value: any) {
    this.data[id].IR[pos] = value;
  }
}
