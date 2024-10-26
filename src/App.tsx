// import  { StrictMode } from 'react'
// import ReactDOM from 'react-dom/client'
// import {
//   Outlet,
//   RouterProvider,
//   createRouter,
//   createRoute,
//   createRootRoute,
// } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
// import { ThemeProvider } from "@/components/ThemeProvider"

// const rootRoute = createRootRoute({
//   component: () => (
//     <>
//       <Outlet />
//       <TanStackRouterDevtools />
//     </>
//   ),
// })

// const indexRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: '/',
//   component: function Index() {
//     return (
//       <div className="p-2">
//         <h3>Welcome Home!</h3>
//       </div>
//     )
//   },
// })

// const aboutRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: '/about',
//   component: function About() {
//     return <div className="p-2">Hello from About!</div>
//   },
// })

// const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// const router = createRouter({ routeTree })

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }

// const rootElement = document.getElementById('app')!
// if (!rootElement.innerHTML) {
//   const root = ReactDOM.createRoot(rootElement)
//   root.render(          
//   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//     <StrictMode>
//       <RouterProvider router={router}  />
//     </StrictMode>
//     </ThemeProvider>

//   )
// }