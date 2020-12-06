export default [
    {
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/admin/dashboard',
      icon: 'cil-speedometer',
      badge: {
        color: 'info',
        text: 'NEW',
      }
    },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['Users']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'All Users',
      to: '/admin/users',
      icon: 'cil-people',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Users inactifs',
      to: '/admin/inactifs',
      icon: 'cil-user-unfollow',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Ajouter un user',
      to: '/theme/typography',
      icon: 'cil-user-follow',
    },
]


  