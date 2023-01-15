var item = document.querySelectorAll('.item');
var side_tag = document.querySelectorAll('.extra_tag');

for (let i = 0; i < side_tag; i++) {
    (function(index) {
        side_tag[index].addEventListener("click", function() {
            for (let i = 0; i < item.length; i++) {
                if (!item[i].side_tag.includes(this.dataset.tag)) {
                    item[i].style.display = 'none';
                }
                else {
                    item[i].style.display = 'initial';
                }
            }
        })
    })(i);
}