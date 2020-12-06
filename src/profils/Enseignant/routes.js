import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));

const routes = [
    { path: 'enseignant', exact: true, name: 'Enseignant'},
    { path: '/enseignant/dashboard', name: 'Dashboard', component: Dashboard },
]    

export default routes;