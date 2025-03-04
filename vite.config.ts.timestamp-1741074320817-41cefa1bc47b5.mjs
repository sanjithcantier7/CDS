// vite.config.ts
import { defineConfig } from "file:///D:/Cds_ui/CDS/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Cds_ui/CDS/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///D:/Cds_ui/CDS/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
import svgr from "file:///D:/Cds_ui/CDS/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "D:\\Cds_ui\\CDS";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "index.ts"),
      name: "CDS",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          assetFileNames: "[name].[hash][extname]"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  assetsInclude: ["**/*.svg"],
  plugins: [
    react(),
    dts(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: true,
        titleProp: true
      },
      include: "**/*.svg"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDZHNfdWlcXFxcQ0RTXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDZHNfdWlcXFxcQ0RTXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9DZHNfdWkvQ0RTL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVXNlckNvbmZpZ0V4cG9ydCwgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJpbmRleC50c1wiKSxcclxuICAgICAgbmFtZTogXCJDRFNcIixcclxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxyXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcInVtZFwiLCBcImNqc1wiXSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcclxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcclxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcIltuYW1lXS5baGFzaF1bZXh0bmFtZV1cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gIH0sXHJcbiAgYXNzZXRzSW5jbHVkZTogW1wiKiovKi5zdmdcIl0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGR0cygpLFxyXG4gICAgc3Zncih7XHJcbiAgICAgIC8vIHN2Z3Igb3B0aW9uczogaHR0cHM6Ly9yZWFjdC1zdmdyLmNvbS9kb2NzL29wdGlvbnMvXHJcbiAgICAgIHN2Z3JPcHRpb25zOiB7XHJcbiAgICAgICAgZXhwb3J0VHlwZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgcmVmOiB0cnVlLFxyXG4gICAgICAgIHN2Z286IHRydWUsXHJcbiAgICAgICAgdGl0bGVQcm9wOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiBcIioqLyouc3ZnXCIsXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErTixTQUEyQixvQkFBb0I7QUFDOVEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxVQUFVO0FBSmpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxNQUN6QyxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxNQUNyQyxTQUFTLENBQUMsTUFBTSxPQUFPLEtBQUs7QUFBQSxJQUM5QjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxlQUFlLENBQUMsVUFBVTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLEtBQUs7QUFBQTtBQUFBLE1BRUgsYUFBYTtBQUFBLFFBQ1gsWUFBWTtBQUFBLFFBQ1osS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
