import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.log('Running on port 3000...');
  });
};

bootstrap();
