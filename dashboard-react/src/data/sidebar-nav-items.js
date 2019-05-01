export default function() {
  return [
    {
      title: 'Dashboard',
      to: '/main',
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: '',
    },
    {
      title: 'Record',
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: '/history',
    },
    {
      title: 'Ranking',
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: '/ranking',
    },
    {
      title: 'My Account',
      htmlBefore: '<i class="material-icons">person</i>',
      to: '/user-profile',
    },
  ];
}
