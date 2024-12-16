import { defineConfig } from "vite"
import wasm from "vite-plugin-wasm"
import react from "@vitejs/plugin-react"

export default defineConfig(() => {
  return {
    plugins: [react(), wasm()]
  }
})
