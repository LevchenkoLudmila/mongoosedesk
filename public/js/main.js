//filter card
// function app() {
//    const buttons = document.querySelectorAll('.button');
//    const cards = document.querySelectorAll('.card');

// const { name } = require("ejs");

//    function filter (category, items) {
//       items.forEach((item) => {
//          const isItemFiltered = !item.classList.contains(category);
//          const isShowAll = category.toLowerCase() === 'all'
//          if(isItemFiltered && !isShowAll) {
//             item.classList.add('hide');
//          } else {
//             item.classList.remove('hide');
//          }
//       });
//    }

//    buttons.forEach((button) => {
//       button.addEventListener('click', () => {
//          const currentCategory = button.dataset.filter;
//          filter(currentCategory, cards);
//    });
//  });
// };

// app();

//-------загрузка формы objavaForm

// const zagruzka = async () =>{
///


// if(!localStorage.getItem('.')){
//    localStorage.setItem('', JSON.stringify([]))
// }
//const btnAdd = document.querySelector('button.add-new');
// btnAdd.addEventListener('clic', (el) => {
//    const name = document.querySelector('.gn').value;
//    const price = document.querySelector('.gp').value;
//    const count = document.querySelector('.gc').value;
// });
// if (name && price && count){
//    const name = document.querySelector('.gn').value = '';
//    const price = document.querySelector('.gp').value = '';
//    const count = document.querySelector('.gc').value = '';
//    let goods = JSON.parse(localStorage.getItem(goods));
// }
//
const formEl = document.forms.objavaForm;
const findform = document.querySelector('.form');

formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target);
   
   const { data } = await axios.post('/uploads', formData);
   findform.classList.add('hidden');
   elContent.classList.remove('hidden');
   // const html =`<div>
   //                <p>${data[0].zagolovok}</p>
   //                <p> ${data[0].keywords}</p> 
   //                <p>${data[0].article}</p> 
   //                <p>${data[0].price}</p>
   //             </div>`
   // elContent.innerHTML = html;
});

const elContent = document.querySelector('.out-article');
// };

// console.log(data);
// data forEach(item => {
//    const card = document.createElement('div');
//    card.classList.add('card');

//    card.innerHTML = `
//       <img src="${item.photo}" alt="">
//       <div class="sex">
//          <img src="${icons/MediaStream.png}" alt="male">
//       </div>
//       <div class="age">${item.age}</div>
//       `;
//       document.querySelector(.).appendChild(card);
// });
// else{}

// const statiya = document.querySelector('.statiya');
// const articles = async () => {
//    const { data } = await axios.post('/article'); //все статьи из бд
//    //console.log('data articlesfront:', data);
//    return data;
// };

// const cardout = async() =>{
//    const allstatii = await articles();
//    console.log('allstatii:', allstatii);
//    const statiyacard = allstatii.reduce((acc, item) => {
//       console.log('item:', item);
   //    acc += `<div class="sttatya">
   //                <h3>${item.zagolovok}</h3>
   //                <h4>${item.keywords}</h4>
   //                <p>${item.article}</p>
   //                <p>${item.price}</p>
   //             </div>`
   //    return acc;
   // }, '' );
   // statiya.innerHTML = statiyacard;
// };
// cardout();


// const articles = async () => {
//    const { data } = await axios.post('/formadd/uploads'); //все статьи
//    console.log('data', data);
//    return data;
// };

// articles();

// // сброс значений формы
const btnFormReset = document.getElementsByName("btnreset_objavaForm");
btnFormReset.addEventListener ('click', (ev) => {
   ev.preventDefault();
   btnFormReset.reset();
}); 

//счетчик лайков
const dislike = document.querySelector('.dislike');
const like = document.querySelector('.like');
dislike.addEventListener ('click', (event) => {
   if (event.target.dataset.counter != undefined) { // если есть атрибут...
     event.target.value++;
   }
 });
like.addEventListener('click', (event) => {
   if (event.target.dataset.counter != undefined) { // если есть атрибут...
     event.target.value++;
   }
 });