        let input = document.querySelector("input");
        let btn = document.querySelector(".add");
        let list = document.querySelector(".list");
        let ul = document.createElement("ul");

        btn.addEventListener("click", add);

        function add(){
            let li = document.createElement("li");
            ul.appendChild(li);
            list.appendChild(ul);
            li.innerHTML = input.value + "<button class='abc'>del</button>";
            input.value=" ";

        }

        ul.addEventListener("click",function(e){
            if(e.target.tagName == "BUTTON"){
                e.target.parentElement.remove();
            }
        })


