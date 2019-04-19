export default function() {
  return [
    {
      title: '대시보드',
      to: '/',
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: '',
    },
    {
      title: 'Blog Posts',
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: '/blog-posts',
    },
    {
      title: '주행기록',
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: '/history',
    },
    {
      title: 'Forms & Components',
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: '/components-overview',
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
