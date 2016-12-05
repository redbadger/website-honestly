import React from 'react';
import styles from './style.css';
import image from './svg/offline-architecture.svg';
import content from './content';

renderers = {
  title: (props) => (
    <h1 className={styles.title}>{props.text}</h1>
  ),

  paragraph: (props) => (
    <p className={(props.highlight ? styles.highlightParagraph : styles.paragraph)}>{props.text}</p>;
  ),

  list: (props) => (
    <p className={styles.paragraph}>
      <ul className={styles.list}>
        {props.map((item) => <li>{item}</li>)}
      </ul>
    </p>
  ),

  subtitle: (props) => (
    <h2 className={styles.subtitle}>{props.map}</h2>
  );
}

function renderArticle(content) {
  return content.map((c) => {
    if (c.type && renderers[c.type]) {
      renderers[c.type](c.props);
    }
  })
}

export default function OfflinePage() {
  return (
    <div>
      <div className={styles.notification}>
        <h3 className={styles.notifyHeader}>{content.offlineTitle}</h3>
        <p className={styles.notifyBody}>{content.offlineBody}</p>
      </div>
      {renderArticle(content.article)}
      <p className={styles.highlightParagraph}>
        {```Here’s the question that gets asked by so many that it’s become annoying – what’s the next big thing in web development? React? Angular 2? CycleJS? WebSockets? HTTP2?
        Instead of looking into the future for a bit, let’s take a few steps back.
        The web has developed into an incredible thing since it began – from static, funky looking pages into a net of apps connecting millions of people in realtime – Facebook.```}
      </p>
      <h2 className={styles.subtitle}>Into the future</h2>
      <p className={styles.paragraph}>
        As Dion Almaer pointed out in his talk at Progressive Web Apps conference, at some point desktop applications were hugely popular and web was trying to seem exactly like them.
        With smart phonesand the popularity of native apps, we can only expect a similar shift in web applications to catch up with these.
        There are a few glaring differences between web and native apps that heavily benefit the latter:
      </p>
      <p className={styles.paragraph}>
        <ul className={styles.list}>
          <li>You can use them offline or while on a bad internet connection</li>
          <li>They can send you notifications so as to remind you to use them (which doesn’t have to be as annoying as it sounds)</li>
          <li>It’s easy to access them from your home page without having to open a browser and type in a URL</li>
          <li>They are much more performant</li>
        </ul>
      </p>
      <p className={styles.paragraph}>
        All these points are pretty important given how we’re all lazy as users of any application, and how much we’ve learnt to expect from mobile experience.
        While checking things out on our phones, we’re quite often in places with horrible mobile internet,
        abroad on roaming, or we’re juggling morning coffee, opening the office door and chatting on WhatsApp all at the same time.
        So at the end of the day, it’s not just a matter of comfort for smart phone users – it’s a necessity due to phones’ flexibility.
      </p>
      <h2 className={styles.subtitle}>Service Workers</h2>
      <p className={styles.paragraph}>
        Although making web apps seem like native apps seems a little bit like a sci-fi,
        a lot of great features are coming to browsers in the form of Service Workers.
        These guys can create a layer between the browser and server that lives on the client and can be persistent.
        That gives us huge power – and also great responsibility.
        We can push notifications, store our whole websites and databases locally for the user to access them at any point in time,
        and much much more; doesn’t that sound at least a little bit exciting?
      </p>
      <h2 className={styles.subtitle}>Total recall – or the new caching</h2>
      <img src={image} className={styles.image} />
      <p className={styles.paragraph}>
        Let me focus on the point that will make the biggest difference - using web applications offline.
        As much as every point in the list above is important, using our apps whenever and wherever means a huge difference in the way we perceive the web.
      </p>
      <p className={styles.paragraph}>
        As I mentioned above, Service Workers create a layer between a rendered page and server that can handle a lot of things for us and that we can manipulate using javascript.
        When a user goes to our website for the first time, it creates a service worker, checks if we have this page cached, and then goes onto the server to fetch it.
        On its way back, the data gets saved in cache and from this time on, our website can be rendered from cache.
        In the case that we lose internet connection, the user can still access this page.
      </p>
      <p className={styles.paragraph}>
        Or we can just always render the same page from service worker to decrease the load on our servers.
      </p>
    </div>
  );
}
