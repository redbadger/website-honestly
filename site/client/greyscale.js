/*
 * Script to show and enable "greyscale" mode on the site for global a11y day.
 * See https://github.com/redbadger/website-honestly/pull/750 for screenshots.
 */

const colourOnButtonText = 'Make my day accessible';
const colourOffButtonText = 'Switch back to colour';

function getCookieValue(a) {
  const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

function getA11yButton() {
  return document.querySelector('.accessibilityDayButton');
}

function browserUnsupportedCheck() {
  return document.body.style.filter === undefined || !!document.documentMode;
}

function toggleCookie() {
  const cookieVal = getCookieValue('a11yDay');

  if (cookieVal === '' || cookieVal === 'off') {
    document.cookie = 'a11yDay=on; path=/';
  } else {
    document.cookie = 'a11yDay=off; path=/';
  }
}

function toggleCssClass() {
  document.body.classList.toggle('accessibilityDay');
}

function toggleButtonText() {
  const button = getA11yButton();
  if (button.textContent === colourOffButtonText) {
    button.textContent = colourOnButtonText;
  } else {
    button.textContent = colourOffButtonText;
  }
}

export function toggleGreyscale() {
  toggleCssClass();
  toggleCookie();

  if (getA11yButton()) {
    toggleButtonText();
  }
}

function renderGreyscaleModeBar(enabled) {
  const bar = document.createElement('div');
  bar.classList.add('accessibilityBar');

  const button = document.createElement('button');
  button.classList.add('accessibilityDayButton');
  button.textContent = enabled ? colourOffButtonText : colourOnButtonText;
  button.addEventListener('click', toggleGreyscale);

  const description = document.createElement('p');
  description.classList.add('accessibilityDayDescription');
  description.textContent =
    'What’s black and white and ‘read’ all over? Us! We’re greyscale to promote Global Accessibility Awareness Day.';

  bar.appendChild(button);
  bar.appendChild(description);

  const app = document.querySelector('.js-app');
  document.body.insertBefore(bar, app);
}

export function initGreyscaleModeBar() {
  if (browserUnsupportedCheck()) {
    return;
  }

  const enabled = getCookieValue('a11yDay') === 'on';

  if (enabled) {
    document.body.classList.add('accessibilityDay');
  }

  renderGreyscaleModeBar(enabled);
}
