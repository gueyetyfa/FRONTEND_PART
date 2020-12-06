import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users'));
const Inactifs = React.lazy(() => import('./views/Inactifs'));

const routes = [
    { path: '/admin', exact: true, name: 'Admin'},
    { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard},
    { path: '/admin/users', name:"Users", component: Users},
    { path: '/admin/inactifs', name:"Inactifs", component: Inactifs}
]    

export default routes;