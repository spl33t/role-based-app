import {
  MessageBody,
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,

} from '@nestjs/websockets';
import { assignMetadata } from '@nestjs/common/decorators/http/route-params.decorator';
import * as constants from "@nestjs/websockets/constants"
import { WsParamtype } from "@nestjs/websockets/enums/ws-paramtype.enum"
import { WsEvent } from "@packages/ws-typed/lib/index";
import {
  applyDecorators,
  SetMetadata,
} from '@nestjs/common';
import { TypedWsEventMetadataKey } from "@packages/ws-typed/lib/constants";

import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import type { Request } from 'express-serve-static-core';
import { Endpoint } from "@packages/rest-typed/lib";
import { SafeParseError } from "zod/lib/types";
import { TsRestAppRouteMetadataKey } from "@packages/rest-typed/nest/constants";

export const TypedWsEvent = (event: WsEvent): MethodDecorator => {
  const decorators = [];

  decorators.push(
    ...[
      SetMetadata(TypedWsEventMetadataKey, event),
      SubscribeMessage(event.name),
    ]
  );

  return applyDecorators(...decorators);
};

