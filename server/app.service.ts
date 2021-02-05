import { Injectable, OnModuleInit } from "@nestjs/common";
import { GatewayService } from "./gateway.service";

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private gatewayService: GatewayService) {}

  onModuleInit() {
    setInterval(() => {
      this.gatewayService.$onPushFeeds();
      this.gatewayService.$onPushSecretMessage();
    }, 1000);
  }
}
