
function start() {
  var carousel = document.querySelector('#carousel');
  var next_btn = document.querySelector('#next');
  var prev_btn = document.querySelector('#prev');
  var items = carousel.querySelectorAll('.item');
  var curr_index = 0;
  var n = items.length;
  var step = (360 / (n));
  var item_width = items[0].offsetWidth;
  var radius = (item_width / 1.9) / Math.tan(Math.PI / n);
  carousel.style.transform = 'translateZ(-'+radius+'px)';
  items[0].classList.add('selected');
  // prepare items
  for(var i = 0; i < n; i++) {
    items[i].dataset.index = i;
    items[i].style.transform = 'rotateY('+(i*step) + 'deg) translateZ('+radius+'px)';
  }

  function set_selected(index) {
    while (index < 0) {
      index += n;
    }
    items.forEach(function(v, i) {
      if (parseInt(v.dataset.index, 10) === index % n) {
        v.classList.add('selected');
      } else {
        v.classList.remove('selected');
      }
    });
  }

  function next() {
    update(++curr_index);
  }

  function prev() {
    update(--curr_index);
  }

  function update(curr_index) {
    set_selected(curr_index);
    var angle = -curr_index * step;
    carousel.style.transform = 'translateZ('+(-radius)+'px) rotateY('+angle+'deg)';
  }

  // switch to next every 5 seconds
  // setInterval(next, 5000);

  next_btn.addEventListener('click', next);
  prev_btn.addEventListener('click', prev);
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 39) { // right arrow
      e.preventDefault();
      next();
    }
    if (e.keyCode === 37) { // left arrow
      e.preventDefault();
      prev();
    }
  });
}

window.onload = start;
