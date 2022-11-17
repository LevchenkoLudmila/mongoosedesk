//filter card
// function app() {
//    const buttons = document.querySelectorAll('.button');
//    const cards = document.querySelectorAll('.card');

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

const zagruzka = async () =>{
const formEl = document.forms.objavaForm;
   // console.log(formEl);

formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target);
   
   const { data } = await axios.post('/uploads', formData);
   console.log('data objavaForm front:', data);
})
//const elContent = document.querySelector('.');
};


const articles = async () => {
   const { data } = await axios.post('/articless'); //все статьи
   console.log('data articlesfront:', data);
   return data;
};

articles();
// const articles = async () => {
//    const { data } = await axios.post('/formadd/uploads'); //все статьи
//    console.log('data', data);
//    return data;
// };

// articles();
// // сброс значений формы
// const btnFormReset = document.getElementsByName("reset");
// console.log(btnFormReset);
// btnFormReset.addEventListener('click',(ev) => {
//    ev.preventDefault();
//    reset();
// }); 

//счетчик лайков
// const dislike = document.querySelector();
// const like = document.querySelector();
// dislike.addEventListener('click', (event) => {
//    if (event.target.dataset.counter != undefined) { // если есть атрибут...
//      event.target.value++;
//    }
//  });
// like.addEventListener('click', (event) => {
//    if (event.target.dataset.counter != undefined) { // если есть атрибут...
//      event.target.value++;
//    }
//  });