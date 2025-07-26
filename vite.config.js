// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc'; // Using swc for faster refresh
// import path from 'path'; // Import the 'path' module for alias resolution

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//   ],
//   // 'resolve' should be a top-level property, outside of 'plugins'
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"), // This maps @ to your src directory
//     },
//   },
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import tailwindcss from '@tailwindcss/vite';
// import path from 'path';

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(), // Add this
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Keep this
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Remove any CSS/PostCSS config from here
});