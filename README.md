# Server side render example

Example React js project with isomorphic rendering (server and client side). Also uses React Router v4 for routing and React Helmet for meta tags.

##Getting Started

```
yarn install
yarn express
```

If you make updates to the client side, ie. anything in the client directory, you will have to run

```
yarn build
```

This will output bundle.[hash].js and main.[hash].css to the app folder at the projects top level. For the time being, you have to copy these two files to the server/assets folder and remove the hashes from the file names. This is what the server side uses for the initial render. Ill come up with a less manual way to do this in the future.

After that step, just run

```
yarn express
```

again to run the updated project.

If you navigate between pages and view the page source (ctrl-u in Chrome) you will see the meta tags change for each page.


##Development

Just run

```
yarn start
```

to run webpack dev server for development.
