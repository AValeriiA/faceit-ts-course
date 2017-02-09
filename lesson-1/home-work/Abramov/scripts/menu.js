var menuList = [
    {
        title: 'Животные', items: [
            {
                title: 'Млекопитающие', items: [
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры' }
                ]
            },
            {
                title: 'Другие', items: [
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    {
                        title: 'Другие', items: [
                            { title: 'Змеи' },
                            { title: 'Птицы' },
                            { title: 'Ящерицы' },
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
                    { title: 'Гуппи' },
                    { title: 'Скалярии' }
                ]
            },
            {
                title: 'Форель', items: [
                    { title: 'Морская форель' }
                ]
            },
        ]
    }
];
function generateMenu(list) {
    var str = "<ul>";
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var menu = list_1[_i];
        str += "<li><a class=\"title\">" + menu.title + "</a>";
        if (menu.items) {
            str += generateMenu(menu.items);
        }
        console.log(menu.items);
        str += "</li>";
    }
    str += "</ul>";
    return str;
}
var navMenuList = document.querySelector('.menu');
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = function (e) {
    var el = e.target;
    var classList = el.classList;
    if (classList.contains('title')) {
        var parentLi = el.parentNode;
        parentLi.classList.toggle('menu-open');
    }
};
//# sourceMappingURL=menu.js.map