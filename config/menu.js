const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'live' },
  { type: 'config', color: '#EF7C37', id: 'tickets' },
  { type: 'config', id: 'tournaments' },
  // { type: 'config', id: 'info' },
  {
    type: 'nolink',
    title: 'Infos',
    children: [
      { type: 'config', id: 'info' },
      { type: 'page', title: 'Comment s\'inscrire à la GA', id: 199268, link: '/inscriptions' }
    ] },
  { type: 'config', id: 'partners' }
]

module.exports = menu
