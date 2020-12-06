export default [
    {
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/etudiant/dashboard/',
      icon: 'cil-speedometer',
      badge: {
        color: 'info',
        text: 'NEW',
      }
    },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['Theme']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Colors',
      to: '/theme/colors',
      icon: 'cil-drop',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Typography',
      to: '/theme/typography',
      icon: 'cil-pencil',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Inscription',
      to: '/etudiant/inscription',
      icon: 'cil-speedometer',
    }
]


  