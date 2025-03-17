### Notes

### Used Commands
    + npx create-next-app@latest => To create our next app
    + npm run dev => To run our next app
    + npx shadcn@latest init => Set up our projfect for shadcn
    + npx shadcn@latest add => To install shad components 


### Rendering
    + Server Side Rendering (SSR) => When your code is rendered on the servier and the server sends back a rendered static web page
        - SSR cannot render anything that requires user interaction or the browser such as buttons with onClicks or inputs with onChanges or hooks

        - By default all components are server components.

    + Client Side Rendering (CSR) => When your code is sent and rendered on your client's system
        - To mark a component as a client component, put 'use client' at the top 

        - Children of client components will always render on the client. Since client components are not rendering until they reach their client, when you import and hardcode a child component, they are not rendered until the client as well.

### Routing 
    + Next.js will create to our page.tsx files based on our file structure. 

    1. Redirect - next/navigation (Server)
        + Happens before the page is sent to the browser, so the user never sees the original page

    2. userRouter Push (Client)
        + Allows dynamic navigation based on user actions

    3. Link (Client)
        + Preloads pages in the background, making transitions faster

### Context 
    + Context acts a wrapper that stores data and makes it accessable to any component within its scope

    + Context is a wrapper we can use to pass data to client components within its scope

    + You can use context if you have data that a lot of components need access to or if you want to avoid prop drilling, which is when you have data that you have to pass down more than a few differnet components before it reaches where it is actually needed.