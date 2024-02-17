import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import { Home } from '../Components/Home'



const router = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path="" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    </Route>
))
export const RouterApp = () => {
  return (
  <RouterProvider router={router}/>
  )
}
