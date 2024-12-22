import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import LayOut from './Components/Layouts/Layout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Details from './Pages/Details';

const App = () => {

    const route = createBrowserRouter(createRoutesFromElements(

        <Route path='/' element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/details' element={<Details />} />
        </Route>

    ));

    return (
        <RouterProvider router={route} />
    )
}

export default App
