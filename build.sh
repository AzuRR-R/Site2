#!/bin/bash
set -ex

# Remove and recreate public directory
rm -rf public
mkdir -p public

# List all files to copy
echo "Files to copy:"
ls *.html *.css *.js

# Copy files
cp *.html *.css *.js public/

# Verify copied files
echo "Files in public directory:"
ls -la public/
