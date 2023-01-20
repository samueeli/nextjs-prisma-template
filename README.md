# Getting started

## Prerequisites

In order to use this template, you need to have [PostgreSQL](https://www.postgresql.org/) installed and database (and schema) created.

## Getting started

1. Run `npm install`
2. Create .env file and add DATABASE_URL="your_database_url"
3. If you want to add your own models at this point, do it so in the prisma/schema.prisma file (there is a dummy "User" model).
4. Run `npx prisma db push`. This will connect your db and prisma schema.
5. (Optional) You can open prisma studio by running `npx prisma studio` and add dummy data there.
6. Run `npx prisma generate`. This will generate your Prisma Client based on your data models. You will need to run this every time your schema is updated.
7. Run `npm run dev` to start the app on localhost.

That's it. You are now ready to start building your project.
