export default function() {
  return [
    {
      title: '대시보드',
      to: '/main',
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: '',
    },
    {
      title: '주행기록',
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: '/history',
    },
    {
      title: '랭킹',
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: '/ranking',
    },
    {
      title: '내 정보',
      htmlBefore: '<i class="material-icons">person</i>',
      to: '/user-profile',
    },
  ];
}
