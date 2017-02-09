type menuList = {title: string, items?: menuList }[];
let menuList: menuList = [
  {
    title: 'Животные', items: [
    {
      title: 'Млекопитающие', items: [
      {title: 'Коровы'},
      {title: 'Ослы'},
      {title: 'Собаки'},
      {title: 'Тигры'}
    ]
    },
    {
      title: 'Другие', items: [
      {title: 'Змеи'},
      {title: 'Птицы'},
      {
        title: 'Другие', items: [
        {title: 'Змеи'},
        {title: 'Птицы'},
        {title: 'Ящерицы'},
      ],
      },
    ],
    },
  ]
  },
  {
    title: 'Рыбы', items: [
    {
      title: 'Аквариумные', items: [
      {title: 'Гуппи'},
      {title: 'Скалярии'}
    ]
    },
    {
      title: 'Форель', items: [
      {title: 'Морская форель'}
    ]
    },
  ]
  }
];

function generateMenu(list: menuList):string {

  let str: string = `<ul>`;

  for(let menu of list) {
    str += `<li><a class="title">${menu.title}</a>`;

    if(menu.items) {
      str += generateMenu(menu.items);
    }
    console.log(menu.items);
    str += `</li>`;
  }
  str += `</ul>`;

  return str;
}

let navMenuList: HTMLElement = document.querySelector('.menu') as HTMLElement;

navMenuList.innerHTML = generateMenu(menuList);

navMenuList.onclick = (e: MouseEvent) => {
  let el = e.target as HTMLElement;
  let classList = el.classList;
  if(classList.contains('title')) {
    let parentLi = el.parentNode as HTMLElement;
    parentLi.classList.toggle('menu-open');
  }
};