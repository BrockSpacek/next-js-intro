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