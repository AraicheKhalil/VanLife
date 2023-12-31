import {  redirect } from "react-router-dom"

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    return redirect("/login?message=You must log in first.")
}
   
  // if (!isLoggedIn) {
  //     return <Navigate to="/login" state={{message: "You must log in first"}} />
  // }
  return null
}
































// // Imports
// // React imports
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from 'react-router-dom';

// // Page imports
// // Van pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Login, { action as loginAction } from './pages/Login';
// import Vans, { loader as vansLoader } from './pages/Vans/Vans';
// import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail';
// //Host pages
// import Dashboard, { loader as dashboardLoader } from './pages/Host/Dashboard';
// import Income from './pages/Host/Income';
// import Reviews from './pages/Host/Reviews';
// import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans';
// import HostVanDetail, {
//   loader as hostVansDetailLoader,
// } from './pages/Host/HostVanDetail';
// import HostVanInfo from './pages/Host/HostVanInfo';
// import HostVanPhotos from './pages/Host/HostVanPhotos';
// import HostVanPricing from './pages/Host/HostVanPricing';
// import NotFound from './pages/NotFound';

// // Component imports
// import Layout from './components/Layout';
// import HostLayout from './components/HostLayout';
// import AuthRequired from './components/AuthRequired';
// import Error from './Pages/Error';

// // Stylesheet imports
// import './index.css';

// // Data imports
// import './server';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       {/* Home page */}
//       <Route index element={<Home />} />
//       {/* About page */}
//       <Route path="about" element={<About />} />
//       <Route path="login" element={<Login />} action={loginAction} />
//       {/* Vans page */}
//       <Route
//         path="vans"
//         element={<Vans />}
//         errorElement={<Error />}
//         loader={vansLoader}
//       />
//       <Route
//         path="vans/:id/:name"
//         element={<VanDetail />}
//         errorElement={<Error />}
//         loader={vanDetailLoader}
//       />

//       <Route element={<AuthRequired />}>
//         {/* Host Page Navigation */}
//         <Route path="host" element={<HostLayout />}>
//           <Route
//             index
//             element={<Dashboard />}
//             errorElement={<Error />}
//             loader={dashboardLoader}
//           />
//           <Route path="income" element={<Income />} />
//           <Route path="reviews" element={<Reviews />} />
//           <Route
//             path="vans"
//             element={<HostVans />}
//             errorElement={<Error />}
//             loader={hostVansLoader}
//           />
//           <Route
//             path="vans/:id"
//             element={<HostVanDetail />}
//             errorElement={<Error />}
//             loader={hostVansDetailLoader}
//           >
//             <Route index element={<HostVanInfo />} />
//             <Route path="pricing" element={<HostVanPricing />} />
//             <Route path="photos" element={<HostVanPhotos />} />
//           </Route>
//         </Route>
//       </Route>
//       <Route path="*" element={<NotFound />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );