## CreativeR VueLaravel starter theme

VueLaravel is a starter admin template.

Feel free to clone the repository, any suggestions are welcome.

Installation
------------
Installing CreativeR VueLaravel is easy.

#### Download:

Download from Github

#### Using The Command Line (cloning in the current directory):

```
git clone https://github.com/ConstantinStan/VueLaravel.git .
```

#### Build Setup
All commands should be set on the root directory where you're installing the app

``` bash
# create .env file
cp .env.example .env

# Set proper file permissions
sudo chgrp -R www-data storage bootstrap/cache
sudo chmod -R ug+rwx storage bootstrap/cache

# Generate encryption key
php artisan key:generate

# Install dependencies
composer update
sudo npm install

# Install passport
composer require laravel/passport

# Generate encryption keys
php artisan key:generate

# Create mysql tables
php artisan migrate

php artisan passport:install
php artisan passport:keys
php artisan passport:client --personal

# generate api key
php artisan key:generate

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


```

Contribution
------------
Contribution are always **welcome and recommended**! Here is how:

- Fork the repository ([here is the guide](https://help.github.com/articles/fork-a-repo/)).
- Clone the repo to your machine
- Make your changes
- Create a pull request

License
-------
Creativer LaravelVue is an open source project by [Constantin Stan] that is licensed under [MIT](http://opensource.org/licenses/MIT).
