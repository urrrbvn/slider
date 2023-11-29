// Получаю элементы
const slider = document.getElementById('myRange');
const sliderValue = document.getElementById('sliderValue');

let isDragging = false;

// Обновляю отображаемое значение при перемещении бегунка с помощью мыши
slider.addEventListener('mousedown', function() {
  isDragging = true;
});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    let newValue = Math.round((event.clientX - slider.offsetLeft) * 100 / slider.offsetWidth);
    if (newValue >= 0 && newValue <= 100) {
      slider.value = newValue;
      sliderValue.textContent = newValue;
    }
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});