const cake = document.querySelector('.cake');
const candles = document.querySelectorAll('.candle');
const addCandleButton = document.querySelector('.add-candle');
const relightCandlesButton = document.querySelector('.relight-candles');
const birthdaySong = document.getElementById('birthday-song');

let isCandleLit = false;

cake.addEventListener('click', (event) => {
  // Check if clicked element is the cake itself
  if (event.target === cake) {
    const newCandle = document.createElement('div');
    newCandle.classList.add('candle');
    newCandle.innerHTML = '<div class="flame"></div>';

    // Calculate click position relative to the cake (considering borders)
    const cakeRect = cake.getBoundingClientRect();
    const clickX = event.clientX - cakeRect.left;
    const clickY = event.clientY - cakeRect.top;

    // Adjust candle position to avoid overlapping existing candles
    let isOverlapping = false;
    for (const existingCandle of candles) {
      const existingCandleRect = existingCandle.getBoundingClientRect();
      const existingCandleX = existingCandleRect.left;
      const existingCandleY = existingCandleRect.top;
      const existingCandleWidth = existingCandleRect.width;
      const existingCandleHeight = existingCandleRect.height;

      if (Math.abs(clickX - existingCandleX) < existingCandleWidth / 2 &&
          Math.abs(clickY - existingCandleY) < existingCandleHeight / 2) {
        isOverlapping = true;
        break;
      }
    }

    // Place candle only if there's no overlap with existing ones
    if (!isOverlapping) {
      newCandle.style.left = `${clickX - 8}px`; // Adjust offset as needed
      newCandle.style.top = `${clickY - 50}px`; // Adjust offset as needed
      cake.appendChild(newCandle);
    }
  }
});
// ... rest of your JavaScript code ...

function extinguishCandles() {
    candles.forEach((candle) => {
        candle.querySelector('.flame').style.opacity = 0;
    });
    isCandleLit = false;

    // Show confetti and image popup
    confettiContainer.style.display = 'block';
    imagePopup.style.display = 'flex';
    birthdaySong.play();
}

// ... rest of your event listeners and code ...
// ... rest of the code for adding candles using the button, relighting, etc. (unchanged)