import { en } from 'vuetify/src/locale'

export default {
  ...en,
  params: {
    chooseLang: 'Language choice',
    themeSombre: 'Dark theme',
    themeClair: 'Light theme'
  },
  init: {
    welcome: 'Welcome in your application',
    wait: 'Data initialisation, please wait few moments...'
  },
  application: {
    nom: 'iD3i - Front Template',
    copyrightFooter: '© Template iD3i - 2020'
  },
  menu: {
    librairie: 'Component library',
    exemples: 'VuexORM examples'
  },
  global: {
    form: {
      valider: 'Validate',
      save: 'Save',
      cancel: 'Cancel',
      fieldsRequired: '* indicates a required field',
      thisFieldRequired: 'Required field',
      max: 'Max',
      caracteres: 'characters'
    },
    recherche: 'Search',
    loadingDatatable: 'Loading... Please wait'
  },
  messages: {
    alert: {
      error: 'Error',
      success: 'Success',
      warning: 'Warning'
    },
    confirm: {
      titreSuppression: 'Are you sure ?',
      texteSuppression: 'The deletion is final!',
      confirmSuppression: 'Yes, delete item',
      cancelSuppression: 'No, cancel'
    },
    toast: {
      success: 'Successful operation !',
      error: 'Operation failure'
    },
    ok: 'OK',
    erreurServeur: 'Server error',
    codeErreur: 'Error Code',
    erreurConnexion: 'Connection failure'
  },
  user: {
    bonjour: 'Welcome',
    accesProfil: 'Profile',
    deconnexion: 'Logout',
    mdp: {
      mdp: 'Password',
      confirmMdp: 'Confirmation',
      mdpsDifferents: 'The two passwords do not match',
      mdpSize: 'The password must be more than'
    },
    connexion: {
      titre: 'Login',
      sousTitre: 'Make sure your email is valid for registration',
      email: 'Email',
      mdpOublie: 'Forgot password',
      go: 'Log in',
      otherConnect: 'Log in with',
      rightTitle: 'My application',
      rightSubtitle: 'Log in to get full access.',
      goRegister: 'Register'
    },
    creation: {
      titre: 'Account creation form',
      username: 'Username',
      email: 'E-mail',
      telephone: 'Phone',
      mailInvalide: 'Invalid mail',
      alreadyCompte: 'I already have an account'
    },
    resetMdp: {
      title: 'Réinitialisation du mot de passe'
    }
  },
  profil: {
    titre: 'My profile',
    construction: 'Building...'
  },
  exemple: {
    livreTitre: 'Books',
    reload: 'Reload component to reload data',
    headerTitre: 'Book title',
    headerDate: 'Release date',
    form: {
      nom: 'Book title',
      date: 'Release date',
      biblio: 'Library',
      nomRequis: 'Book title required',
      nomSize: 'Title must be less than'
    }
  }
}
