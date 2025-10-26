#!/bin/bash

# Ensure the script fails on any error
set -e

echo "Checking Docker system disk usage BEFORE..."
docker system df

echo "Removing unused Docker containers..."
docker container prune -f

echo "Removing unused Docker networks..."
docker network prune -f

echo "Removing unused Docker images..."
docker image prune -a -f

echo "Removing unused Docker volumes..."
docker volume prune -f

echo "Checking Docker system disk usage AFTER..."
docker system df

# Function to extract the size in GB from docker buildx du output
extract_cache_size() {
  docker buildx du --builder default | grep 'Total:' | awk '{print $2}' | sed 's/GB//'
}

# Convert the size from bytes to GB
CURRENT_CACHE_SIZE=$(extract_cache_size)

if [ -z "$CURRENT_CACHE_SIZE" ]; then
  echo "Could not determine the current build cache size."
  exit 1
fi

CURRENT_CACHE_SIZE_GB=${CURRENT_CACHE_SIZE%.*}
MAX_CACHE_SIZE=20  # Maximum cache size in GB

echo "Current build cache size: $CURRENT_CACHE_SIZE_GB GB"
echo "Maximum allowed cache size: $MAX_CACHE_SIZE GB"

if [ "$CURRENT_CACHE_SIZE_GB" -gt "$MAX_CACHE_SIZE" ]; then
  echo "Pruning build cache because it's larger than ${MAX_CACHE_SIZE}GB"
  docker builder prune -af
else
  echo "Build cache is not pruned as it is below the ${MAX_CACHE_SIZE}GB threshold"
fi