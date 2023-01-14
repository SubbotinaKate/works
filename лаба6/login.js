
let but_log = document.querySelector('#enter');
let but_close = document.querySelector('.closed');
let to_enter = document.querySelector('.Log_in');
let modal_window = document.querySelector('.Form');
let modal_header = document.querySelector('.text_header');

/*but_log.onclick = function() {
    modal_window.style.display = 'block';
}

but_close.onclick = function() {
    modal_window.style.display = 'none';
}*/

but_log.addEventListener("click", function() {
    to_enter.style.display = "block";
  });

but_close.addEventListener("click", function() {
    to_enter.style.display = "none";
  });


/*
  Скрипт почему-то криво работает...

    modal_header.onmousedown = function(event){
    let shiftX = event.clientX - modal_window.getBoundingClientRect().left;
    let shiftY = event.clientX - modal_window.getBoundingClientRect().top;


    modal_window.style.display = 'block';
  

    moveAt(event.pageX, event.pageY);

    // переносит мяч на координаты (pageX, pageY),
  // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX, pageY){
    modal_window.style.left = pageX - shiftX + 'px';
    modal_window.style.top = pageY - shiftY + 'px';
}

    function onMouseMove(event){
    moveAt(event.pageX, event.pageY);
}
    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove);
    
    // отпустить мяч, удалить ненужные обработчики
    modal_window.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    modal_window.onmouseup = null;
}
}

    modal_window.ondragstart = function() {
    return false;
  }
*/

