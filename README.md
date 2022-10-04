> Starter Templpate for Mongooose with Typescript

> Installation and Usage

- Clone the [repo](https://github.com/Treposting/mongoose-starter.git)

- Add `.env` file to the root of the project
  - Add `MONGO_URI` to the `.env` file
- Run `npm install`
- Run `npm run dev` to start the server
- Run `npm run build` to build the project
- Run `npm run start` to start the project

> Features
> Just install the dependencies and you are good to go.

- Make a Schema
- Make a Model
- Make a Controller
- Make a Route
- Make a Service
- Make a Middleware

Then add the route to the `routes/test.ts` file & define the controller in the `controllers/test.ts` file.

Import the route in the `app.ts` file. Like,

`import testRoute from "./routes/v1/test"`

Then Call the route in the `app.ts` file. Like,

`app.use("/api/v1/test", testRoute) `
