## Django React Dashboard

A Dashboard application using React, Django, Django Rest Framework and Ant Design

## Frontend( React )

#### To install dependency

```
yarn install
```

#### To start the server

```
yarn start
```

#### For Production Build

```
yarn build
```
## Backend( Django )

#### Installing

#### Requirements

First create a virtual environment and activate it.

```
pip install -r requirements.txt
```

Input database connection string inside .env file

To migrate the database
```
python manage.py makemigrations
python manage.py migrate
```

To Create a SuperUser
```
python manage.py createsuperuser
```

To run the program in local server use the following command

```
python manage.py runserver
```

Server will be available at `http://127.0.0.1:8000` in your browser

Api documentation will be available at `http://127.0.0.1:8000/docs`
Admin login will be available at `http://127.0.0.1:8000/admin`
