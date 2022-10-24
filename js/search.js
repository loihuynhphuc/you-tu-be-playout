const inputForm = document.querySelector('input[class="search-box__input"]');
const btnSearchBoxFist = document.querySelector('.btn-search-icon-first') ;
const iconKeyBoard = document.querySelector('.icon-keyboard');
const iconKeyClose = document.querySelector('.icon-Close');


function handleVisibleSearchInBox (){
  btnSearchBoxFist.style.display = "block";
}
function handleHiddenSearchInBox (){
  btnSearchBoxFist.style.display = "none";
}
inputForm.addEventListener('focus', (event) => {
    handleVisibleSearchInBox ();
  });

inputForm.addEventListener('focusout', (event) => {
    handleHiddenSearchInBox ();
  });
inputForm.addEventListener('input', (event) => {
    changeVisibleCloseSearchBox();
  });

// function changeVisibleCloseSearchBox(){
//     iconKeyBoard.classList.remove('focus-hidden');
//     iconKeyClose.classList.add
// }
