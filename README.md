# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

###'MOCKOON'
1. Нужно скачать и поставить мок сервер- https://mockoon.com/

2. Чтобы не было ошибки CORS (т.к. js файл на диска, а не на дев сервере, нажимаем на надпись add CORS headers to environment headers below, должно выставится:

	Content-Type - application/json
	Access-Control-Allow-Origin - *
	Access-Control-Allow-Methods - GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS 
	Access-Control-Allow-Headers - Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With

3. Импортируем из папки 'моки' json файл
4. В урлах для получения изображений указываем расположение файла у себя на диске.