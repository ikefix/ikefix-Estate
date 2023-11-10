import React from 'react'
import { Outlet, Navigate } from 'react-router';

export default function privateRoute() {
  const loggedIn = false;
  return loggedIn ? <Outlet/> : <Navigate 
  to="/Sign-In"/>;
}