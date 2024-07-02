Используется nodejs v20.14.0

Сгенерируйте [gitlab access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) с досупами к API

### Установка

1. Создайте в корне .env файл с переменными 
  ```
  REACT_APP_GITLAB_HOST=you_gitlab_host
  REACT_APP_GITLAB_TOKEN=you_gitlab_access_token
  ```
2. `npm install`
3. `npm build`
4. `npm start`

Приложение будет доступно по адресу [localhost:3000](http://localhost:3000)