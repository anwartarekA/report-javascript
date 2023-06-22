// accessing the children in js

/*
 1- Children  -->  access all elements in the parent
 2- childNode --> access all thing in the parent 
 3- firstchild --> access the first child
 4- lastchild --> access the last child
 5- firstelementchild --> access the first element child
 6- lastelementchild --> access the last element child
*/
// example:-
// let div =document.querySelector("div");
// console.log(div.children); 
// console.log(div.childNodes); 
// console.log(div.firstChild); // text
// console.log(div.lastChild);  // text
// console.log(div.firstElementChild);  // span
// console.log(div.lastElementChild);  // p
// console.log("=".repeat(60));
////////////////////////////////////////////////////////

// Events in js 
/*
1- Onclick
2- Oncontextmenu
3- Onmouseover
4- Onmouseleave
5- Onfocus
6- Onblur
7- Onsubmit
8- OnScroll
9- Onresize
note :- events can be used in html page and js page as you like.
note :- there are many events in js .
*/
// example for event Onclick
// let btn = document.querySelector(".btn");
// btn.onclick=show;
// function show (){
//     console.log(`my name is : anwar tarek `);
// }


// btn.oncontextmenu = ()=>{
//     console.log(`my age is : 20 years`);
// };

// btn.onmouseover = function(){
//     console.log(`iam form egypt`);
// }

// btn.onmouseleave = function(){
//     console.log(`my name is anwar and my age is 20 iam from egypt`);
// }

// let form1= document.querySelector(".input1");
// let form2 = document.querySelector(".input2");


// form1.onfocus= function()
// {
//     console.log("iam focused");
// }

// form2.onblur = ()=>{
//     console.log("blured");
// }

// let sending = document.querySelector('input[type="submit"]');
// sending.onsubmit = function(){
//     console.log("submited data");
// }

// preventDefault() --> prevent event to occur

// validation

// let input1 = document.querySelector('.input1');
// let input2 = document.querySelector('.input2');

// document.forms[0].onsubmit=function(e){
//     let username= false;
//     let age=false;
// //   console.log(input1.value);
// //   console.log(input1.value.length);
//     if(input1.value.length <= 10 && input1.value !== ""){
//         username=true;
//     }
//     if(input2.value !== ""){
//         age=true;
//     }
//     if(username === false || age === false){
//         e.preventDefault();
//     }
// }

// DOM [ClassList] --> classlist - length - contain - item - add - remove - toggle - typeof classlist == object
// let element = document.querySelector('.input1');
// console.log(element.classList)  // return all classess
// console.log(element.classList.length);  // the number of classes 
// console.log(element.classList.contains("anwar")); // boolean value
// console.log(element.classList.item(2));  // return the name of class by its index
// element.classList.add("myname","myage","mycountry") // dding the new classess
// console.log(element.classList);
// element.classList.remove("mycountry","myage","myname");  // removing the classess
// console.log(element.classList); 
// let btn =document.querySelector("button");
// btn.onclick=()=>{
//     element.classList.toggle("ana")   // onclick add in one time and another click remove it
// }
// console.log(typeof element.classList);  // object

// DOM[css styling];
// let btn = document.querySelector(".btn"); 
// btn.style.backgroundColor="red";
// btn.style.color="blue";  
// // btn.style.cssText="color : red ; background-color : black ; cursor: pointer ; "   // if i want to type all props in one line use cssText
// btn.style.removeProperty("background-color") // removeproperty
// btn.style.setProperty('background-color','yellow',"important")  // to add new property

// if i want to style element in the external page (css page).
// document.styleSheets[0].rules[0].style.cssText="background-color: black; border-color : red";
// document.styleSheets[0].rules[0].style.setProperty("color","white",'important');
// document.styleSheets[0].rules[0].style.removeProperty("border-color");



// DOM [adding or removing at eveywere]

// let div = document.querySelector(".one");
// div.before("hello anwar")     // add before the element
// div.after("my name is anwar"); // add after the element
// let comment = document.createComment("my name is : anwar - my age is 20 years");
// let p =document.createElement("p");
// let span =document.createElement("span");
// div.prepend("welcome");   // add enter the element but the above 
// div.append(p)             // add enter the element but the below
// div.append(comment);
// div.appendChild(span);
// div.remove()                // remove element


// DOM [traversing]
// let two = document.querySelector("#two");
// console.log(two.nextSibling)        // return the next thing 
// console.log(two.previousSibling)        // return the previous thing
// console.log(two.nextElementSibling)     // return the next element
// console.log(two.previousElementSibling)     // return the previous element
// console.log(two.parentElement);                  // return the parent of the element



// DOM [cloning elements]

// let element = document.createElement("span");
// let text = document.createTextNode("Hello guys my name is anwar tarek");
// element.appendChild(text);
// document.body.appendChild(element);
// element.setAttribute("class","awnar kareem belal");

// let cloneElement1 = element.cloneNode(false);   // deep = false take the attributes only not inner things 
// console.log(cloneElement1);
// let cloneElement2 = element.cloneNode(true); 
// cloneElement2.setAttribute('class','go');
// document.body.appendChild(cloneElement2)























