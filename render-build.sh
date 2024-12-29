#!/usr/bin/env bash
# Renderデプロイ時に自動で実行されるスクリプト

echo "Running bundle install..."
bundle install

echo "Running db:migrate..."
bundle exec rails db:migrate

echo "Running db:seed..."
bundle exec rails db:seed