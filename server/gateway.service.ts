import { Injectable } from "@nestjs/common";
import { Server } from "socket.io";

@Injectable()
export class GatewayService {
  public socket: Server = null;
  public rooms = [];

  $onPushFeeds() {
    this.socket.emit("FEEDS", new Date().toISOString());
  }

  $onPushSecretMessage() {
    console.log("current rooms", this.rooms);
    this.rooms.forEach((room) => {
      this.socket
        .in(room)
        .emit("SECRET_MESSAGE", `!! ${new Date().toISOString()}`);
    });
  }
}
