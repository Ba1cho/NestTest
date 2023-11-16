import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from './db/typeorm.module';
import { UserModule } from '@entities/user/user.module';
@Module({
  imports: [
    UserModule,
    ConfigModule,
    TypeOrmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
