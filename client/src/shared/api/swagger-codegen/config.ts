import * as path from "path";
import swaggerTsGenApi from "swagger-typescript-api";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
swaggerTsGenApi.generateApi({
  name: `api.gen.ts`,
  output: path.resolve(__dirname, "./"),
  url: `http://127.0.0.1:8000/api-documentation/v1-json`,
  extractRequestParams: true,
  generateClient: false,
  hooks: {
    onParseSchema: (originalSchema, parsedSchema) => {
      // Convert type string to Date when needed
      if (originalSchema?.type === "string" && ["date-time", "date"].indexOf(originalSchema.format) > -1) {
        if (parsedSchema.content.includes("null")) {
          parsedSchema.content = "Date | null";
          return parsedSchema;
        }
        parsedSchema.content = "Date";
        return parsedSchema;
      }
    },
  },
});