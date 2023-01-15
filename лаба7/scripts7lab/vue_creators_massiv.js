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