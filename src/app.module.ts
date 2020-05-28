import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishModule } from './dish/dish.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'rm-uf6zw5ahqz2i4539f1o.mysql.rds.aliyuncs.com',
          port: 3306,
          username: 'feijc',
          password: 'zzkz57216',
          database: 'dish',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      DishModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
