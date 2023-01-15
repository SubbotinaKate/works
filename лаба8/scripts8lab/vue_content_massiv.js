let data_info = [
	{
		"title" : "Работа с Git в Visual Studio Code",
		"intro" : "Один из способов работать с Гитом.",
		"labels" : ["Git", "Консоль"],
		"image" : "/content/post-1.png",
        "creator" : "@BigFloppa"
	},
	{
		"title" : "Adobe покупают Фигму. Всё пропало?",
		"intro" : "Не факт, но есть разные мнения.",
		"labels" : ["Figma"],
		"image" : "/content/post-2.png",
        "creator" : "@MiniFloppa"
	},
	{
		"title" : "Все научились программировать. А дальше-то что?",
		"intro" : "Ученье — свет.",
		"labels" : ["Обучение", "Карьера"],
		"image" : "/content/post-3.png",
        "creator" : "@BigFloppa"
	},
	{
		"title" : "Мне тяжело учиться, кто поможет?",
		"intro" : "Попали в патовую ситуацию? Тогда кликайте на статью.",
		"labels" : ["Обучение"],
		"image" : "/content/post-4.png",
        "creator" : "@BigFloppa"
	},
	{
		"title" : "Ключевые навыки фронтендеров в 2022",
		"intro" : "Ежегодное исследование рынка от HTML Academy.",
		"labels" : ["Обучение", "Карьера"],
		"image" : "/content/post-5.png",
        "creator" : "@MiniFloppa"
	},
	{
		"title" : "Фронтенд-новости",
		"intro" : "WAI-ARIA, новинки HTML-форм и 12 ошибок любого джаваскриптера.",
		"labels" : ["Новости"],
		"image" : "/content/post-6.png",
        "creator" : "@MiniFloppa"
	},
]
let creators_info = [
    {
        'name': 'Флоппа Большой Кот',
        'login': '@BigFloppa',
        'subscribers': '10',
        'signed': '8',
        'post_count': '47'
    },
    {
        'name': 'Флоппа Маленький Котенок',
        'login': '@MiniFloppa',
        'subscribers': '8',
        'signed': '20',
        'post_count': '5'
    }

];

for(let i = 0; i<creators_info.length; i++){
	let opt = document.createElement("option")
	opt.innerHTML = creators_info[i].name;
	opt.value = creators_info[i].login;

	document.querySelector("#Select_Avtor").appendChild(opt);
}

