const randomDivs = document.querySelectorAll('.random-div');
let currentSelectedDiv = null;
let timeoutId = null;

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function selectRandomDiv() {
  const visibleDivs = Array.from(randomDivs).filter(isElementInViewport);

  if (currentSelectedDiv) {
    currentSelectedDiv.classList.remove('selected');
  }

  if (visibleDivs.length > 0) {
    const randomIndex = Math.floor(Math.random() * visibleDivs.length);
    currentSelectedDiv = visibleDivs[randomIndex];

    currentSelectedDiv.classList.add('selected');
  }

  timeoutId = setTimeout(selectRandomDiv, 3000); // 3sec
}

selectRandomDiv();
