const form =document.querySelector("form");
const name1 =document.querySelector("#name");
const phone1 =document.querySelector("#phone");
const email1 =document.querySelector("#email");
const registration_no1 =document.querySelector("#registration_no");
const course1 =document.querySelector("#course");



// const displayButton = document.querySelector(".Display");
// const enolop = document.querySelector(".envelope");
// displayButton.addEventListener('click' , () => {
//     enolop.classList.add('.envelope.show')
// });

// somethig went wrong

const emailh1 =document.querySelector("h1 span")
// const nameh1 =document.querySelector("h1 span")


form.addEventListener("submit",function(e){
    e.preventDefault()

    let emailValue =email1.value;
    emailh1.innerHtml=emailValue;
    document.querySelector(".envelope").style.zIndex = "2"


})





// ----------------
// <script>
// const displayButton = document.getElementById('display-button');
// const redPage = document.querySelector('.red-page');

// displayButton.addEventListener('click', () => {
//     redPage.classList.add('show');
// });
// </script>