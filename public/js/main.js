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
}

app();

      
// const formEl = document.forms.testForm;
// formEl.addEventListener('submit', async (ev) => {
//    ev.preventDefault();
//    const formdata = new FormData(ev.target);
//    formdata.append("name", name);
//    const { data } = await axios.post('/upload1', formdata);
// });
const formEl = document.forms.testForm;
console.log(formEl);
formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formdata = new FormData(ev.target);
   console.log(ev.target);
   formdata.append("name", name);
   const { data } = await axios.post('/upload1', formdata);
});