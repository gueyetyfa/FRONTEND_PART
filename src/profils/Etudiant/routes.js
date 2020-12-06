import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Inscription = React.lazy(() => import('./views/inscription'));

const routes = [
    { path: '/etudiant', exact: true, name: 'Etudiant'},
    { path: '/etudiant/dashboard', name: 'Dashboard', component: Dashboard},
    { path: '/etudiant/inscription', name: 'Inscription', component: Inscription},

]    

export default routes;