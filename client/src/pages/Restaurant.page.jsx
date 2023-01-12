import React from 'react';
import { Outlet } from 'react-router-dom';
import RestaurantLayout from '../layouts/Restaurant.layout';

const Restaurant = () => {
  return <>
  <h4>this is reataurant page</h4>
    <Outlet />
  </>
};

export default RestaurantLayout(Restaurant);