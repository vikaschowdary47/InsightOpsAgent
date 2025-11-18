#!/bin/bash

echo "📥 Installing Monitoring Agent..."

git clone https://yourrepo.com/monitoring-agent.git
cd monitoring-agent

pip install -r requirements.txt

echo "➡️  Edit config.py and add your API_KEY"
echo "➡️  Then run: python3 agent.py"

echo "✅ Installation completedg."
