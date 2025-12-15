import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bonjour = require('bonjour')();
bonjour.publish({
  name: 'iFCU Control',
  type: 'http',
  port: 80,
  host: 'ifcu-web.local',
});
bonjour.find({ type: 'http' }, function (service) {
  console.log('Found an HTTP server:', service)
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
