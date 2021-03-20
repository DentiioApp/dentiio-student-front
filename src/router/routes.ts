import listRoutes from './listRoutes'
const routes = [
  {
    path: '/',
    name: listRoutes.HOME,
    component: () => import('../views/Pages/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/connexion',
    name: listRoutes.LOGIN,
    component: () => import('../views/Auth/Connexion.vue')
  },
  {
    path: '/authentification',
    name: listRoutes.AUTH,
    component: () => import('../views/Auth/Authentification.vue')
  },
  {
    path: '/profil',
    name: listRoutes.PROFIL,
    component: () => import('../views/Pages/Profil.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/project/:id',
    name: listRoutes.PROJECT,
    component: () => import('../views/Pages/Project.vue'),
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/examples',
    name: listRoutes.EXAMPLES,
    component: () => import('../views/Pages/ExampleHome.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/library',
    name: listRoutes.LIBRARY,
    component: () =>
      import('../components/Template/Library/LibraryUse/Library.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/superAdmin',
    name: listRoutes.SUPER_ADMIN,
    component: () => import('../components/VuexORM/Exemple.vue'),
    meta: {
      requiresAuth: true,
      superAdmin: true
    }
  }
]

export default routes
