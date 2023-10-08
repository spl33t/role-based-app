import { z, ZodAny, ZodAnyDef, ZodObject, ZodSchema, ZodType, ZodTypeAny, ZodFirstPartySchemaTypes } from "zod";
import {
  Sequelize,
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Model,
  addAttributeOptions,
  addAttribute,
} from "sequelize-typescript"
import { ModelAttributeColumnOptions } from "sequelize";
import { ZodFirstPartyTypeKind } from "zod/lib/types";


const ZodTypeToSequelizeDataType: Record<keyof typeof ZodFirstPartyTypeKind, keyof typeof DataType> = {
  ZodString: "TEXT",
  ZodNumber: "INTEGER",
  ZodBigInt: "BIGINT",
  ZodBoolean: "BOOLEAN",
  ZodDate: "DATE",
  ZodArray: "ARRAY",
  ZodObject: "JSON",
  ZodEnum: "ENUM",

  ZodNever: "STRING",
  ZodVoid: "STRING",
  ZodUnion: "STRING",
  ZodDiscriminatedUnion: "STRING",
  ZodIntersection: "STRING",
  ZodTuple: "STRING",
  ZodAny: "STRING",
  ZodUnknown: "STRING",
  ZodRecord: "STRING",
  ZodMap: "STRING",
  ZodSet: "STRING",
  ZodLazy: "STRING",
  ZodFunction: "STRING",
  ZodLiteral: "STRING",
  ZodNativeEnum: "ENUM",
  ZodEffects: "STRING",
  ZodOptional: "STRING",
  ZodNullable: "STRING",
  ZodDefault: "STRING",
  ZodCatch: "STRING",
  ZodPromise: "STRING",
  ZodBranded: "STRING",
  ZodPipeline: "STRING",
  ZodReadonly: "STRING",
  ZodNaN: "STRING",
  ZodSymbol: "STRING",
  ZodUndefined: "STRING",
  ZodNull: "STRING",
}

function getDataType(schema: ZodTypeAny) {
  const zodTypeName: keyof typeof ZodFirstPartyTypeKind = schema._def.typeName
  const sequelizeDataType = ZodTypeToSequelizeDataType[zodTypeName]

  return DataType[sequelizeDataType]
}

type Config<T extends ZodObject<any>> = {
  schema: T,
  primaryKey: keyof T["shape"],
  unique?: Array<keyof T["shape"]>
}


export function DefineModelWithZodSchema<T extends ZodObject<any>>(config: Config<T>)
  : typeof Model<z.infer<typeof config["schema"]>, Omit<z.infer<typeof config["schema"]>, "id">> {
  const { schema, primaryKey, unique } = config
  const fields = schema.shape

  //console.log(fields)

  class ModelWithZodSchema extends Model {

  }

  for (const fieldsKey in fields) {
    const field = fields[fieldsKey]
    addAttribute(
      ModelWithZodSchema.prototype,
      fieldsKey,
      {
        ...(fieldsKey === primaryKey && { primaryKey: true, autoIncrement: true, allowNull: true }),
        type: getDataType(field),
      } as ModelAttributeColumnOptions
    )
  }

  return ModelWithZodSchema
}
