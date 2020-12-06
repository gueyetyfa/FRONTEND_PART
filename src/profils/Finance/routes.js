import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));

const routes = [
    { path: '/finance', exact: true, name:"Finance"},
    { path: '/finance/dashboard', name: 'Dashboard', component: Dashboard},
]    

export default routes;