import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokerService {
  data: any = [
    { ID: 0, name: '', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { ID: 1, name: '', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { ID: 2, name: '', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { ID: 3, name: '', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { ID: 4, name: '', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { ID: 5, name: '', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
    { ID: 6, name: '', HR: [0, 0, 0, 0], IR: [0, 0, 0, 0, 0] },
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
