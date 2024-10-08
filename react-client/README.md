# React client

A boilerplate for client only projects written in TypeScript and React.

## Install project

Run `yarn` at the root of the project.

## Run project

Run `yarn dev` at the root of the project.

## Packages

-   [React](https://reactjs.org/)
-   [React router](https://reactrouter.com/en/main)
-   [Axios](https://axios-http.com/docs/intro)
-   [Styled components](https://styled-components.com/)
-   [@julseb-lib/react](): basic React components <!-- TODO: Add url -->

## Plop functions

-   `yarn plop:c`: generates a React component
-   `yarn plop:sc`: generates a React single file component
-   `yarn plop:p`: generates a React page
-   `yarn plop:ty`: generates a new type

## API

For backend calls, use the folder `src/api`, and follow the same pattern as `src/api/example.service.ts`.

### Add pages

Create your pages in `src/pages`. Then, go to `src/routes/routes.js` and add them in the array `const routes`.

### Styling

Most of components come from `@julseb-lib/react` package. If you need new components, you can add them in `src/components`.
