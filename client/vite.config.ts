import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig, loadEnv, UserConfig } from "vite";
import mkcert from "vite-plugin-mkcert"


const appFolderName = path.resolve(process.cwd()).split("\\").slice(-1);

// https://vitejs.dev/config/
export default ({ mode }: UserConfig) => {
  if (mode) process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log(path.resolve(process.cwd(), "../shared"))
  return defineConfig(
    {
      plugins: [react(), mkcert()],
      resolve: {
        alias: {
          "@": path.resolve(process.cwd(), "./src"),
          "@packages": path.resolve(process.cwd(), "../packages"),
        },
      },
      server: {
        port: Number(process.env.VITE_APP_DEV_PORT),
        host: "127.0.0.1",
        https: true,
      },
    }
  )
}
