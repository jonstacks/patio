#!/bin/bash

set -e

while ! /bin/nc -z -v -w 30 127.0.0.1 3306
do
  sleep 1
done

# Create secondary databases for running tests
mysql -h 127.0.0.1 -e 'CREATE DATABASE IF NOT EXISTS sandbox2;'
psql -h 127.0.0.1 -c 'DROP DATABASE IF EXISTS sandbox2;' -U postgres
psql -h 127.0.0.1 -c 'CREATE DATABASE sandbox2;' -U postgres

exec "$@"
