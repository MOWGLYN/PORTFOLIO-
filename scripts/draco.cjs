const fs = require('fs');
const path = require('path');

const src = 'node_modules/three/examples/jsm/libs/draco/gltf';
const output = 'public/draco';

// Ensure the directory exists
if (!fs.existsSync(output)) {
  fs.mkdirSync(output, { recursive: true });
}

// Synchronously copy draco decoder from three.js into the public directory
try {
  fs.copyFileSync(path.join(src, 'draco_decoder.wasm'), path.join(output, 'draco_decoder.wasm'));
  fs.copyFileSync(path.join(src, 'draco_wasm_wrapper.js'), path.join(output, 'draco_wasm_wrapper.js'));
} catch (err) {
  console.error('Failed to copy Draco decoders:', err);
  process.exit(1);
}
