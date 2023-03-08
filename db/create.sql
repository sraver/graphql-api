create database mydb;
grant all privileges on *.* TO 'user'@'%' IDENTIFIED BY 'pass';
grant SUPER on *.* to 'user'@'%' IDENTIFIED BY 'pass';
FLUSH PRIVILEGES;