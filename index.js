
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");
 
menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})

let query = document.querySelector('.query');
    let searchbtn = document.querySelector('.searchbtn')
    searchbtn.onclick = function(){
        let url ='https://uan-ai.github.io/Home/index.html#'+query.value;
        window.open(url,'_self');
    }

    let query2 = document.querySelector('#query2');
    let search2 = document.querySelector('#search2')
    search2.onclick = function(){
        let url ='https://uan-ai.github.io/Home/index.html#'+query2.value;
        window.open(url,'_self');
    }
