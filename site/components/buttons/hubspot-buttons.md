Hubspot buttons are [Hubspot CTA's](https://app.hubspot.com/ctas-beta/4210858) wrapped in a react component. Hubspot exports images as an image, so we need to some extra CSS for them to look nice. Which one displays is controlled with the `hubspotName` prop. To add a new button, just modify the `hubspot-buttons.js` file. So the buttons display sharply, it's recommended to upload double size images into Hubspot and then resize, like this:

```
.webinarBtnWrapper img {
  height: 53px;
  width: 302px;
}
```

An additional class should be added to add a hover state. This is achieved with a pseudo-element pre-defined on the button wrapper:

```
.meetupBtnWrapper:hover a:after {
  background-image: url(./hubspot-btns-images/meetup.png);
  height: 53px;
  width: 302px;
}
```

Don't forget to actually add the greyscaled image into the folder.