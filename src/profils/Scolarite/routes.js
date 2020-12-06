import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));

const routes = [
    { path: '/scolarite', exact: true, name:"Scolarite"},
    { path: '/scolarite/dashboard', name: 'Dashboard', component: Dashboard},
]    

export default routes;