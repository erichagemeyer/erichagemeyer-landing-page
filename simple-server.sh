#!/bin/bash

PORT=${1-3000}

pushd dist
    python -m SimpleHTTPServer $PORT
popd
