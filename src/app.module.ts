import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { checkCredsLogin, checkCredsSignup } from './auth/validations';

@Module({
  imports: [
    AuthModule, 
    TypeOrmModule.forRoot({
    type :"sqlite",
    database: "AuthDB",
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(checkCredsLogin).forRoutes('/auth/login')
      .apply(checkCredsSignup).forRoutes('/auth/signup');
  }
}
console.log([__dirname + "/**/*.entity{.ts,.js}"])
