import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Customers',
    url: '/customers',
    iconComponent: { name: 'cil-contact' },
    children: [
      {
        name: 'Users',
        url: '/customers/users'
      },
      {
        name: 'Trainers',
        url: '/customers/trainers'
      },
      {
        name: 'Nutritionists',
        url: '/customers/nutritionists'
      },
    ]
  },
];
