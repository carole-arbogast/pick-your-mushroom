# Pick Your Mushroom

## Description and Context

This is application is a personal project about mushroom picking. The idea is to store information about mushroom species, recipes and picking spots.
My main goal is to test some new tools that I haven't used before, such as Prisma and GraqphQL. It is a fullstack application, but I am more focused on the server side.

A demo can be found here: https://pick-your-mushroom.vercel.app/

This is still a work in progress.

## Getting Started

Requirements:

- NodeJS 12+
- PostgreSQL

Steps to start the app locally:

1. First, you'll need to create an empty Postgres database. If you're unfamiliar with PostgreSQL, here is their documentation: https://www.postgresql.org/
2. Create a file named .env with the following line:

`DATABASE_URL="postgresql://test:test@localhost:5432/test" `

Replace the value by your database's connection link.

3. Install the dependencies:

`yarn`

or

`npm install`

4. Seed your database:

`yarn seed`

or

`npm run seed`

This will automatically create some fake data.

5. Start the application

`yarn dev`

or

`npm run dev`

6. Open http://localhost:3000 in your browser to see the result.

## Tools Used in this Project

Main application:

- NextJS for the view and the server (written with NextJS' API routes)
- Prisma
- GraphQL for the API
- PostgreSQL for the database

Testing:

- Storybook for the React components
- Jest for integration tests of the GraphQL queries

React, Storybook, Jest and NextJS are tools I use regularly. However, the other ones are new to me, so the code may be a bit more experimental. My usual stack for the server is NodeJS + MongoDB, so this project was an excuse to try new things on that side.

## Next Steps

As mentioned earlier, this is still a work in progress. Here as some things I intend to add and/or improve:

Features:

- Option to create your own mushrooms. This is almost ready, I just need to style the form and call the right query.
- Recipes page. The plan is to link mushrooms and recipes to easily find what you can cook based on what you've just picked.
- Authentication. There is User object ready in the database schema, but for now it's not linked to anything. I will use Vercel's authentication tool for this.
- Mushroom spots page with a map of your best picking spots. This can only be done after the authentication, since this is super sensitive, top secret data.
- Advanced search with filters by taste, poison level, season, location, corresponding recipes, etc. This will work best when the rest of the data is ready.

Testing:

- Adding Cypress to test the most critical features.
- Adding snapshots for Storybook. The stories are alredy there, so that's almost ready.

Improvements:

- Adding a theme with styled-components. All the colors are hard-coded at the moment, which will soon get out of hand.
- Better error messages
- Proper loading animations. At the moment it just says "loading".
- Find a better way to map the mushrooms' edible information to the correct icons (see component MushroomLogos). The current code works, but is a bit difficult to read and has some unnecessary duplication.
- Improve the UI/UX.
