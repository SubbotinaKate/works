let input_but = document.querySelector("input[type=file]");
let image_window = document.querySelector(".show_img>img");
let file_name = document.querySelector(".File_name");
let progressbar = document.querySelector('.in_progress');

        function ProgresBar(value, max){
            let oneProcent = (value/max)*100;
            progressbar.style.width = oneProcent + "%";
            if(progressbar.style.width === "100%"){
                progressbar.style.width = "0%";
            }
        }
        function renameSize(file){
            return (file.size / 1024 / 1024).toFixed(2);
        }
        function showResult(event, text, img, file){
            text.style.color = "#005F17";
            text.innerText = file.name + " [" + renameSize(file) + "Мб]"
            img.src = event.target.result;
        }

        
        let xhr = new XMLHttpRequest();

        input_but.addEventListener("change", function(){
            var file_read = new FileReader();


            xhr.open('POST', 'https://isidea.ru/rgups_file.php', true);
        
            xhr.upload.onprogress = function(e) {
                ProgresBar(e.loaded, input_but.files[0].size);
            }

            xhr.upload.onload = function() {
                file_read.onload = function(event){
                    showResult(event, file_name, image_window, input_but.files[0]);
                };
                file_read.readAsDataURL(input_but.files[0]);
            }
            xhr.send(input_but.files[0]);
        });
