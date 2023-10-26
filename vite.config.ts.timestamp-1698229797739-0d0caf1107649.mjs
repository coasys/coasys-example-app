// vite.config.ts
import { defineConfig } from "file:///C:/Users/fayee/dev/calendar-example-app/node_modules/vite/dist/node/index.js";
import preact from "file:///C:/Users/fayee/dev/calendar-example-app/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import babel from "file:///C:/Users/fayee/dev/calendar-example-app/node_modules/vite-plugin-babel-compiler/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    babel({
      babel: {
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            { decoratorsBeforeExport: true }
          ]
        ]
      }
    }),
    preact()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxmYXllZVxcXFxkZXZcXFxcY2FsZW5kYXItZXhhbXBsZS1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGZheWVlXFxcXGRldlxcXFxjYWxlbmRhci1leGFtcGxlLWFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZmF5ZWUvZGV2L2NhbGVuZGFyLWV4YW1wbGUtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcHJlYWN0IGZyb20gJ0BwcmVhY3QvcHJlc2V0LXZpdGUnO1xuaW1wb3J0IGJhYmVsIGZyb20gXCJ2aXRlLXBsdWdpbi1iYWJlbC1jb21waWxlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdGJhYmVsKHtcblx0XHRcdGJhYmVsOiB7XG5cdFx0XHRwbHVnaW5zOiBbXG5cdFx0XHRcdFtcblx0XHRcdFx0XCJAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWRlY29yYXRvcnNcIixcblx0XHRcdFx0eyBkZWNvcmF0b3JzQmVmb3JlRXhwb3J0OiB0cnVlIH0sXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdFx0fSxcblx0XHR9KSxcblx0ICBcdHByZWFjdCgpXG5cdF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVQsU0FBUyxvQkFBb0I7QUFDOVUsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixNQUFNO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBLEVBQUUsd0JBQXdCLEtBQUs7QUFBQSxVQUMvQjtBQUFBLFFBQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRCxDQUFDO0FBQUEsSUFDQyxPQUFPO0FBQUEsRUFDVjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
