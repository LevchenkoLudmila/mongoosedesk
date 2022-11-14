//filter card
function app() {
   const buttons = document.querySelectorAll('.button');
   const cards = document.querySelectorAll('.card');

   function filter (category, items) {
      items.forEach((item) => {
         const isItemFiltered = !item.classList.contains(category);
         const isShowAll = category.toLowerCase() === 'all'
         if(isItemFiltered && !isShowAll) {
            item.classList.add('hide');
         } else {
            item.classList.remove('hide');
         }
      });
   }

   buttons.forEach((button) => {
      button.addEventListener('click', () => {
         const currentCategory = button.dataset.filter;
         filter(currentCategory, cards);
   });
 });
};

app();

const zagruzkaform = () =>{
const formEl = document.forms.objavaForm;
   console.log(formEl);

formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target);
   console.log(ev.target);
//    formdata.append("name", name);
   const { data } = await axios.post('/uploads', formData);
})
const elContent = document.querySelector('.');
}
// // сброс значений формы
// const btnFormReset = document.getElementsByName("reset");
// console.log(btnFormReset);
// btnFormReset.addEventListener('click',(ev) => {
//    ev.preventDefault();
//    reset();
// }); 