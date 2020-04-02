/* eslint-disable indent */
const config = {
  title: 'Gamers Assembly Respawn Edition',
  logo: '/static/img/logo.png',
  description: 'Retrouvez la Gamers Assembly Respawn Edition du 12 au 13 septembre 2020 !',
  metaImagePath: '/static/img/logo.png',
  gaTrackingId: 'UA-128777022-11',
  mainPartner: {
    logo: '/static/img/logo_gp.png',
    url: 'https://www.grandpoitiers.fr/'
  },
  home: {
    banner: '/static/img/banner.png',
    // hero: {
    //   background: '/static/img/bg-grey-area.jpg',
    //   title: 'Gamers Assembly',
    //   subtitle: 'Edition 2020'
    // },
    twitterAccount: 'GamersAssembly',
    partners: {
      active: false,
      delay: 10,
      count: 4
    }
  },
  news: {
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly Respawn Edition',
    link: '/news'
  },
  partners: {
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires',
    link: '/partenaires'
  },
  tournaments: {
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly Respawn Edition',
    link: '/tournois'
  },
  info: {
    title: 'Informations pratiques',
    description: 'Toutes les informations sur la Gamers Assembly Respawn Edition',
    link: '/infos'
  },
  schedule: {
    title: 'Programme',
    description: 'Le programme heure par heure',
    link: '/schedule'
  },
  live: {
    title: 'Live',
    description: 'Tous les streams et résultats en direct',
    link: '/live'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour la Gamers Assembly Respawn Edition',
    link: '/billetterie',
    notification: '<strong>ATTENTION !</strong><br />Jusqu\'au 11 mars, profitez d\'une réduction de 10 € par place joueur avec le code de réduction <strong>#GA2020</strong><br />  (NE PAS OUBLIER dès le début de l\'inscription, à l\'étape 1)',
    pass: {
      title: 'Pass "Manager/Accompagnateur"',
      text: 'Pour obtenir des pass "Manager/Accompagnateur", les équipes inscrites aux tournois peuvent réaliser une demande via le lien ci-dessous.',
      button: 'Obtenir un pass'
    },
    minor: {
      title: 'Informations pour les mineurs',
      text: 'Vous devez télécharger l\'autorisation parentale, l\'imprimer, la remplir et l\'apporter le jour de votre venue avec votre billet.',
      button: 'Télécharger l\'autorisation parentale (format pdf)'
    },
    rules: {
      title: 'Règlement intérieur',
      text: 'L\'acquisition d\'un ticket entraîne l\'adhésion au règlement intérieur disponible ci-dessous.',
      button: 'Télécharger le règlement intérieur (format pdf)'
    }
  },
  exhibitors: {
    title: 'Exposants',
    description: 'Les exposants que vous pourrez retrouver à la Gamers Assembly',
    link: '/exposants'
  },
  family: {
    title: 'Espace Familles',
    description: 'Les activités à faire en famille durant la Gamers Assembly',
    link: '/espace-familles'
  },
  influencers: {
    title: 'VIPs',
    description: 'Les personnalités qui seront présentes pour la Gamers Assembly',
    link: '/vips'
  },
  contact: {
    active: true,
    pageId: 6
  },
  press: {
    active: false,
    pageId: 199518
  },
  legals: {
    active: true,
    pageId: 8
  },
  recruit: {
    active: false,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la Gamers Assembly, c\'est par ici !!!',
    formUrl: 'https://forms.gle/uLwpakkR65Njajjv9'
  },
  social: {
    twitter: 'https://twitter.com/GamersAssembly',
    facebook: 'https://www.facebook.com/GamersAssembly',
    twitch: 'https://twitch.tv/gamers_assembly',
    youtube: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    flickr: 'https://www.flickr.com/photos/futurolan',
    discord: 'https://discordapp.com/invite/gamersassembly',
    instagram: 'https://www.instagram.com/gamers_assembly/'
  }
}

module.exports = config
