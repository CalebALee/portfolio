import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../layouts/app-shell/app-shell').then(m => m.AppShell),
    children: [
        {
            path: '',
            loadChildren: () =>
            import('../features/home/home.routes').then(m => m.HOME_ROUTES),
        }
    ],
  },
];
