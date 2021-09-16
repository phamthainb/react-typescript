This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Deploy 
- With Docker && Nginx server
```
docker build -t phamthainb/{name}:v1 .
docker run --rm -it -p 8080:80 phamthainb/{name}:v1
```

- With PM2
```
git clone
cd /folder
npm install && npm run build
pm2 start --name="react-app" server.js

```
