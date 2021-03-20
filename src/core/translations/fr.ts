import { fr } from 'vuetify/src/locale'

export default {
  ...fr,
  params: {
    chooseLang: 'Choix de la langue',
    themeSombre: 'Thème sombre',
    themeClair: 'Thème clair'
  },
  init: {
    welcome: 'Bienvenue dans votre application',
    wait: 'Initialisation des données, veuillez patienter quelques instants...'
  },
  application: {
    nom: 'iD3i - Template Front',
    copyrightFooter: '© Template iD3i - 2020'
  },
  menu: {
    librairie: 'Librairie de composants',
    exemples: 'Exemples VuexORM'
  },
  global: {
    form: {
      valider: 'Valider',
      save: 'Sauvegarder',
      cancel: 'Annuler',
      fieldsRequired: '* indique un champ obligatoire',
      thisFieldRequired: 'Ce champ est requis',
      max: 'Max',
      caracteres: 'caractères'
    },
    recherche: 'Rechercher',
    loadingDatatable: 'Chargement... Merci de patienter'
  },
  messages: {
    alert: {
      error: 'Erreur',
      success: 'Succès',
      warning: 'Attention'
    },
    confirm: {
      titreSuppression: 'Êtes-vous sûr ?',
      texteSuppression: 'La suppression est définitive !',
      confirmSuppression: "Oui, supprimer l'élément",
      cancelSuppression: 'Non, annuler'
    },
    toast: {
      success: 'Opération réussie !',
      error: "Échec de l'opération"
    },
    ok: 'OK',
    erreurServeur: 'Erreur du serveur',
    codeErreur: 'Code erreur',
    erreurConnexion: 'Échec de la connexion'
  },
  user: {
    bonjour: 'Bonjour',
    accesProfil: 'Profil',
    deconnexion: 'Déconnexion',
    mdp: {
      mdp: 'Mot de passe',
      confirmMdp: 'Confirmation',
      mdpsDifferents: 'Les deux mots de passe ne correspondent pas',
      mdpSize: 'Le mot de passe doit faire plus de'
    },
    connexion: {
      titre: 'Je me connecte',
      sousTitre:
        "Assurez vous que votre mail soit valide pour l'enregistrement",
      email: 'E-mail',
      mdpOublie: 'Mot de passe oublié',
      go: 'Connexion',
      otherConnect: 'Se connecter avec',
      rightTitle: 'Mon application',
      rightSubtitle:
        "Entrez vos informations pour avoir accès à l'intégralité du contenu.",
      goRegister: "S'enregistrer"
    },
    creation: {
      titre: 'Formulaire de création de compte',
      username: "Nom de l'utilisateur",
      email: 'E-mail',
      telephone: 'Téléphone',
      mailInvalide: 'Mail invalide',
      alreadyCompte: "J'ai déjà un compte"
    },
    reinitMdp: {
      title: 'Reset password'
    }
  },
  profil: {
    titre: 'Mon profil',
    construction: 'En construction...'
  },
  exemple: {
    livreTitre: 'Livres',
    reload: 'Recharger le composant pour recharger les données',
    headerTitre: 'Nom du livre',
    headerDate: 'Date de publication',
    form: {
      nom: 'Nom du livre',
      date: 'Date de publication',
      biblio: 'Bibliothèque',
      nomRequis: 'Le nom du livre est requis',
      nomSize: 'Le nom doit comporter moins de'
    }
  }
}
