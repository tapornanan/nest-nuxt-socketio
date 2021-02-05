import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { GatewayService } from "./gateway.service";

@WebSocketGateway()
export class AppGateway {
  constructor(private gatewayService: GatewayService) {}

  afterInit(server: Server): void {
    this.gatewayService.socket = server as any;
  }
  /**
   * Push game rooms to user when they connected to ws.
   * @param {Client} client
   */
  async handleConnection(client: Socket): Promise<void> {
    console.log(`User #${client.id} connected`);
  }

  @SubscribeMessage("joinRoom")
  handleMessage(
    @MessageBody() roomName: string,
    @ConnectedSocket() socket: Socket
  ): void {
    console.log("user join room", roomName);
    socket.join(roomName);
    this.gatewayService.rooms.push(roomName);
  }
}
