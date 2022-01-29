# SHAREME

A Image pin type social media application.

[DEMO](https://tender-jackson-eb56e7.netlify.app/)

![SHAREME](https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1643492444/coffmanjrp.io/shareme_abf0f2d028.png)

## How to start

1. Clone this repository.

```
git clone git@github.com:coffmanjrp/react-shareme.git
```

Or download the zip file.

2. Run following command to install the dependencies.

```
cd frontend

npm install
# or
yarn

# and

cd backend

npm install
# or
yarn
```

3. Set your Google auth and Sanity.io api key to the environment variable.

example:

```
# frontend/.env.local file

REACT_APP_GOOGLE_API_TOKEN=YOUR_GOOGLE_API_CLIENT_ID
REACT_APP_SANITY_PROJECT_ID=YOUR_SANITY_PROJECT_ID
REACT_APP_SANITY_TOKEN=YOUR_SANITY_API_TOKENS
```

4. And you can start localhost by

```
cd backend

sanity start

# and

cd frontend

npm start
# or
yarn start
```

Enjoy!

## Stack

### Front-end

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Google Login](https://github.com/anthonyjgrove/react-google-login)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Spinners and Loaders](https://mhnpd.github.io/react-loader-spinner/)
- [React Masonry CSS](https://paulcollett.github.io/react-masonry-css/demo/)
- [uuid](https://github.com/uuidjs/uuid)

### back-end

- [Sanity.io](https://www.sanity.io/)
