import { z } from "zod";
import { initGateway } from "@packages/ws-typed/lib";

const SendMessageSchema = z.object({
  username: z.string(),
  message: z.string()
})
const DeleteMessageSchema = z.object({
  messageId: z.string(),
})

export const messages = initGateway({
  namespace: 'messages',
  events: {
    send: {
      name: "send",
      data: SendMessageSchema,
      withResponse: true
    },
    delete: {
      name: "delete",
      data: DeleteMessageSchema
    },
  }
})