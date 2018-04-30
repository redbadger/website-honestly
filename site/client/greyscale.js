/* This script adds the functionality required for accessability day to give
 * the website user an option to toggle greyscale.  
It partners with PR #742
(https://github.com/redbadger/website-honestly/pull/742), which holds the UI
  changes and should be merged on Accessability day.  Also note that there is
  the same functionality on the squarespace blog, with the UI changes available
  within PR #98
  (https://github.com/redbadger/blog-squarespace-template/pull/98)
*/

const colourOnButtonText = 'Make my day accessible';
const colourOffButtonText = 'Switch back to colour';

function getCookieValue(a) {
  const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

function getA11yButton() {
  return document.getElementById('accessibilityDayButton');
}

function browserUnsupportedCheck() {
  if (!!window.MSInputMethodContext && !!document.documentMode) {
    const description = document.getElementById('accessibilityDayDescription');
    const message = description.textContent;
    description.innerHTML = message.concat(
      " (We're sorry, but this feature is not supported in your browser)",
    );
  }
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
  if (button.innerHTML === colourOffButtonText) {
    button.innerHTML = colourOnButtonText;
  } else {
    button.innerHTML = colourOffButtonText;
  }
}

export function toggleGreyscale() {
  toggleCssClass();
  toggleCookie();
  const button = document.getElementById('accessibilityDayButton');
  if (button) {
    toggleButtonText();
  }
}

export function bootstrapGreyscaleMode() {
  const cookieVal = getCookieValue('a11yDay');

  if (cookieVal === 'on') {
    document.body.classList.add('accessibilityDay');
  }
}

export function initialiseGreyscaleModeBar() {
  const button = getA11yButton();
  button.style.display = 'block';
  browserUnsupportedCheck();

  if (getCookieValue('a11yDay') === 'off') {
    document.body.classList.remove('accessibilityDay');
    button.innerHTML = colourOnButtonText;
  } else {
    document.body.classList.add('accessibilityDay');
    button.innerHTML = colourOffButtonText;
  }
}
