import { PageMetaDto } from "./swagger-codegen/api.gen";

export interface DataWithPaginationDto<T> {
  data: { [K in keyof T]: T[K] }[];
  meta: PageMetaDto;
}

export type QueryParamsWithPagination<T = {}> = {
  limit?: number;
  page?: number;
} & { [K in keyof T]?: T[K] };