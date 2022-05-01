
const tabsBtn = document.querySelectorAll('.tabs__btn');
const contentBox = document.querySelectorAll('.content__box');

tabsBtn.forEach((tab, i) => {
   tab.addEventListener('click', e => {
      tabsBtn.forEach(tabAct => tabAct.classList.remove('active'));
      tab.classList.add('active');

      let tabsLine = document.querySelector('.tabs__line');
      tabsLine.style.width = e.target.offsetWidth + 'px';
      tabsLine.style.left = e.target.offsetLeft + 'px';

      contentBox.forEach(contentAct => contentAct.classList.remove('active'));
      contentBox[i].classList.add('active');
   })
})








