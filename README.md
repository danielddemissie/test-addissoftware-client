# Test App for Addissoftware

#### Redux saga CRUD

## Acknowledgements

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Styled system](https://github.com/rebassjs/rebass)
- [React emotion](https://emotion.sh/docs/introduction)
- [Redux saga](https://redux-saga.js.org/)

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Screenshots

![App Screenshot](https://i.ibb.co/8jFMqhm/image-2022-05-14-181803830.png)

## API Reference

## Backend url

```http
  https://test-addissoftware-api.herokuapp.com
```

#### Get all users

```http
  GET /api/user/all
```

#### Edit user

```http
  PUT /api/user/edit/${_id}
```

#### Delete user

```http
  DELETE /api/user/delete/${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Add user

```http
  POST /api/user/add/
```
