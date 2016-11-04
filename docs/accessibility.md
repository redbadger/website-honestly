## Listen to the site on screenreaders

#### What we are looking for
When using `VO-U`, `VO-I` the content should be logical

#### How to navigate
* use [fangs screen reader emulator](https://addons.mozilla.org/en-gb/firefox/addon/fangs-screen-reader-emulator/) plugin to get transcripts of a screenreader output
* press `cmd F5` to activate voiceover. A pop up should appear, with buttons to start the screen reader and to do a tutorial.
* `VO-` means `ctrl alt` (the voice over command shortcut)

#### Possible fixes for problems
* use `role` attribute as per [ARIA Techniques guidelines](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) to describe different items on the page
* use semantic HTML5. Refer to [MDN's HTML5 element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element)
* use the `title` attribute, particularly on `a` links
* use [the `hidden` attribute](https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/hidden)
* use [the `aria-hidden` attribute](https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden)

## Navigate the site using the keyboard only

#### What we are looking for
Using only the keyboard you should be able to use all the interactive elements of the site

#### How to navigate
* `tab` (forwards)
* `shift tab`(backwards)
* use `enter` key
* `space bar` to submit forms

#### Possible fixes for problems
* use [the `tabindex` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
