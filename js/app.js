darkMode=document.querySelector(".dark")
whitemode=document.querySelector(".white")
body=document.querySelector("body")

if(window.localStorage.getItem("background")==="black"){
    darkMode.classList.remove("active")
    whitemode.classList.add("active")
    body.style.color=`${window.localStorage.getItem("color")}`
body.style.backgroundColor=`${window.localStorage.getItem("background")}`
}else{
    whitemode.classList.remove("active")
    darkMode.classList.add("active")
    body.style.color=`${window.localStorage.getItem("color")}`
body.style.backgroundColor=`${window.localStorage.getItem("background")}`
}

darkMode.addEventListener("click",function(){
    darkMode.classList.remove("active")
    whitemode.classList.add("active")
    window.localStorage.setItem("color","white")
    window.localStorage.setItem("background","black")
    body.style.color=`${window.localStorage.getItem("color")}`
body.style.backgroundColor=`${window.localStorage.getItem("background")}`
body.style.transitionDuration="1s"
})
whitemode.addEventListener("click",function(){
    whitemode.classList.remove("active")
    darkMode.classList.add("active")
    window.localStorage.setItem("color","black")
    window.localStorage.setItem("background","white")
    body.style.color=`${window.localStorage.getItem("color")}`
body.style.backgroundColor=`${window.localStorage.getItem("background")}`
body.style.transitionDuration="1s"
})
let moves=0;
let move=document.querySelector(".moves span")
let newgame=document.querySelector(".newgame")
newgame.onclick=function(){
    window.location.reload(true);
}
let photos=document.querySelectorAll(".game ul li")
photos.forEach(photo => {
    photo.addEventListener("click",function(){
        moves++;
        move.innerHTML=moves;
    })
    let number=Math.floor(Math.random()*13)
    photo.style.order=`${number}`
});

let name=prompt("ENTER Your NAME")
let username=document.querySelector(".username")
let user=document.createTextNode(`${name}`)
let unknowm=document.createTextNode("unknown")
if(name==null||name==""){
    username.appendChild(unknowm)
}else
username.appendChild(user)

let counter=0;
let images=document.querySelectorAll(".game ul li")
let per=0;
let cur=0;
let correctMoves=0;
images.forEach(image => {

    image.onclick=function(){
        cur=image.firstElementChild.id;
        if(counter<2){
            counter++;
            image.firstElementChild.classList.add("flip")
        }
        else{
            images.forEach(element => {
                element.firstElementChild.classList.remove("flip")
                counter=0;
                cur=0;
                per=0;
            });
        }
        if(cur===per &&cur!=0){
            let target=  image.firstElementChild.id
            let correct=document.getElementById(`${target}`)
            correct.classList.add("correct")
           correct.parentElement.nextElementSibling.firstElementChild.classList.add("correct")
           if(image.className!="lose"){
        }else{
            correctMoves++;
        }
           correct.parentElement.classList.remove("lose")
           correct.parentElement.nextElementSibling.classList.remove("lose")
           counter=0;
                cur=0;
                per=0;
                
        }if(counter==2&&cur!=0){
            setTimeout(() => {
                images.forEach(element => {
                    element.firstElementChild.classList.remove("flip")
                    counter=0;
                    cur=0;
                    per=0;
                });
            }, 500);
        }

        if(correctMoves===12){
            alert(`Congratulations ${user.nodeValue} You Win`)
            window.location.reload(true);
        }
        per=cur;
    }
});



