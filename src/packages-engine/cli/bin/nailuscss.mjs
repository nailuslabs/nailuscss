#!/usr/bin/env node

import('../dist/cli/index.js').catch((err) => {
  console.error('Failed to load nailuscss CLI:', err);
  process.exit(1);
});