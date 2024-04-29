let btn1 = document.getElementById("btn1")
let one=document.getElementById("one")
let one1=document.querySelector("#one")
let two1=document.querySelector("#two")
let two=document.getElementById("two")
let three=document.getElementById("three")
let four=document.getElementById("four")
let five=document.getElementById("five")
let btn2 =document.getElementById("btn2")
let btn3= document.getElementById("btn3")
let btn4= document.getElementById("btn4")
btn1.addEventListener("click",function(){
      if(one1.classList.contains("active")){
            one1.classList.remove("active")
            one1.classList.add("passive")
            two1.classList.remove("passive")
            two1.classList.add("active")
      }
      else{
            console.log("no class found")
      }
})
btn2.addEventListener("click",function(){
      if(two1.classList.contains("active")){
            two1.classList.remove("active")
            two1.classList.add("passive")
            three.classList.remove("passive")
            three.classList.add("active")
      }
      else{
            console.log("no class found")
      }
})
btn3.addEventListener("click",function(){
      if(three.classList.contains("active")){
            three.classList.remove("active")
            three.classList.add("passive")
            four.classList.remove("passive")
            four.classList.add("active")
      }
      else{
            console.log("no class found")
      }
})
btn4.addEventListener("click",function(){
      if(four.classList.contains("active")){
            four.classList.remove("active")
            four.classList.add("passive")
            five.classList.remove("passive")
            five.classList.add("active")
      }
      else{
            console.log("no class found")
      }
})
/*
btn1.addEventListener("click",function(){
      one.classList.remove("active")
      one.classList.add("passive")
      two.classList.add('active')

})
btn2.addEventListener("click",function(){
      two.classList.remove("active")
      two.classList.add("passive")
      one.classList.add('active')

})
btn1.addEventListener("click",function(){
      three.classList.remove("active")
      three.classList.add("passive")
      four.classList.add('active')

})
btn1.addEventListener("click",function(){
      four.classList.remove("active")
      four.classList.add("passive")
      five.classList.add('active')

})
*/
