#!/bin/bash
sudo rm -rf /var/www/html/*
sudo cp -r /tmp/reactbuild/* /var/www/html/
sudo chown -R nginx:nginx /var/www/html
sudo systemctl restart nginx
