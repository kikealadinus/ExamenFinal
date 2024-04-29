import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'auto',
        loadComponent: () => import('./auto/auto.component').then(m => m.AutoComponent),
        data: {
          title: 'Modulo Auto'
        }
      },
      {
        path: 'autoconsultas',
        loadComponent: () => import('./autoconsultas/autoconsultas.component').then(m => m.AutoconsultasComponent),
        data: {
          title: 'Consultas Avanzadas'
        }
      },
      {
        path: 'automarca',
        loadComponent: () => import('./automarca/automarca.component').then(m => m.AutomarcaComponent),
        data: {
          title: 'Auto Por Marca'
        }
      },
      {
        path: 'autodisponibilidad',
        loadComponent: () => import('./autodisponibilidad/autodisponibilidad.component').then(m => m.AutodisponibilidadComponent),
        data: {
          title: 'Consultar Por Disponiblidad'
        }
      },
      {
        path: 'autoeliminar',
        loadComponent: () => import('./autoeliminar/autoeliminar.component').then(m => m.AutoeliminarComponent),
        data: {
          title: 'Eliminar Por Disponiblidad'
        }
      },
      {
        path: 'autoprecioventa',
        loadComponent: () => import('./autoprecioventa/autoprecioventa.component').then(m => m.AutoprecioventaComponent),
        data: {
          title: 'Carousel'
        }
      },
      {
        path: 'collapse',
        loadComponent: () => import('./collapses/collapses.component').then(m => m.CollapsesComponent),
        data: {
          title: 'Collapse'
        }
      },
      {
        path: 'list-group',
        loadComponent: () => import('./list-groups/list-groups.component').then(m => m.ListGroupsComponent),
        data: {
          title: 'List Group'
        }
      },
      {
        path: 'navs',
        loadComponent: () => import('./navs/navs.component').then(m => m.NavsComponent),
        data: {
          title: 'Navs & Tabs'
        }
      },
      {
        path: 'pagination',
        loadComponent: () => import('./paginations/paginations.component').then(m => m.PaginationsComponent),
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'placeholder',
        loadComponent: () => import('./placeholders/placeholders.component').then(m => m.PlaceholdersComponent),
        data: {
          title: 'Placeholder'
        }
      },
      {
        path: 'popovers',
        loadComponent: () => import('./popovers/popovers.component').then(m => m.PopoversComponent),
        data: {
          title: 'Popovers'
        }
      },
      {
        path: 'progress',
        loadComponent: () => import('./progress/progress.component').then(m => m.ProgressComponent),
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'spinners',
        loadComponent: () => import('./spinners/spinners.component').then(m => m.SpinnersComponent),
        data: {
          title: 'Spinners'
        }
      },
      {
        path: 'tables',
        loadComponent: () => import('./tables/tables.component').then(m => m.TablesComponent),
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        loadComponent: () => import('./tabs/tabs.component').then(m => m.TabsComponent),
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'tooltips',
        loadComponent: () => import('./tooltips/tooltips.component').then(m => m.TooltipsComponent),
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];