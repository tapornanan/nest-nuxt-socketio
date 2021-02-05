import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { NuxtController } from "./nuxt.controller";
import { AppService } from "./app.service";
import { AppGateway } from "./app.gateway";
import { GatewayService } from './gateway.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    NuxtController, //Put this at the last, so that Nest will check for all other controller first before going to Nuxt
  ],
  providers: [AppService, AppGateway, GatewayService],
})
export class AppModule {}
