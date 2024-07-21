let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carvouselDom = document.querySelectorAll('.carvousel');
let listDom = document.querySelectorAll('.carvousel .list');
let thumbnailDom = document.querySelectorAll('.carvousel .thumbnail');


let timeRunning = 3000;
let runTimeOut;

nextDom.onclick = function() {
  showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carvousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carvousel .thumbnail .item');

  if (type === 'next') {
    let firstItem = itemSlider[0];
    let firstThumbnail = itemThumbnail[0];
    listDom.forEach(list => list.appendChild(firstItem));
    thumbnailDom.forEach(thumbnail => thumbnail.appendChild(firstThumbnail));
    carvouselDom.forEach(carvousel => carvousel.classList.add('next'));
  }
  else {
    let positionLastItem = itemSlider.length - 1;
    let lastItem = itemSlider[positionLastItem];
    let lastThumbnail = itemThumbnail[positionLastItem];
    listDom.forEach(list => list.prepend(lastItem));
    thumbnailDom.forEach(thumbnail => thumbnail.prepend(lastThumbnail));
    carvouselDom.forEach(carvousel => carvousel.classList.add('prev'));
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carvouselDom.classList.remove('next');
    carvouselDom.classList.remove('prev');

  }, timeRunning)
}