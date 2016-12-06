/* eslint-disable max-len,no-irregular-whitespace */
/* rules disabled as this is essentially a template - makes no sense to move the long lines elsewhere */

import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import Diagram from './server-worker-diagram.svg';
import Smiley from './smiley-crying.svg';

export default function OfflinePage() {
  return (
    <div>
      <div className={styles.notification}>
        <h3 className={styles.notifyHeader}>No internet connection <InlineSVG src={Smiley} className={styles.smiley} /></h3>
        <p className={styles.notifyBody}>
          This page isn’t available offline. But here’s something to read in the meantime – it happens to be about offline technology.
        </p>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Stepping into the offline world</h1>
        <p className={styles.highlightParagraph}>
          Here’s the question that gets asked by so many that it’s become annoying – what’s the next big thing in web development? React? Angular 2? CycleJS? WebSockets? HTTP2?
          Instead of looking into the future for a bit, let’s take a few steps back.
          The web has developed into an incredible thing since it began – from static, funky looking pages into a net of apps connecting millions of people in realtime – Facebook.
        </p>
        <h2 className={styles.subtitle}>Into the future</h2>
        <p className={styles.paragraph}>
          As Dion Almaer pointed out in his talk at Progressive Web Apps conference, at some point desktop applications were hugely popular and web was trying to seem exactly like them.
          With smart phones and the popularity of native apps, we can only expect a similar shift in web applications to catch up with these.
          There are a few glaring differences between web and native apps that heavily benefit the latter:
        </p>
        <ul className={styles.list}>
          <li>You can use them offline or while on a bad internet connection</li>
          <li>They can send you notifications so as to remind you to use them (which doesn’t have to be as annoying as it sounds)</li>
          <li>It’s easy to access them from your home page without having to open a browser and type in a URL</li>
          <li>They are much more performant</li>
        </ul>
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
        <p className={styles.paragraph}>
          <InlineSVG src={Diagram} className={styles.diagram} />
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
          <div className={styles.clear} />
        </p>
        <h2 className={styles.subtitle}>Dark side</h2>
        <p className={styles.paragraph}>
          There are the glaring issues of pages running out of date but that’s something we have to deal with whenever we’re using caching and there are quite a few well known cache busts that we can implement if we need to.
        </p>
        <p className={styles.paragraph}>
          What I see as the biggest potential danger however isn’t really related to synchronisation of data. Imagine that every page you visit decides to save incredible amount of data into your phone. Next time you’re doing your iOS update or try to download some music, you might find out that there’s no space left because all images from imgur are forever saved in your Service Worker cache.
        </p>
        <p className={styles.paragraph}>
          Right now, the system relies on programmers to be reasonable about the demands they make on their users; this can be unintentionally messed up though and easily exploited. I’m quite curious to know how browsers will decide to address these drawbacks as this tech gets widespread.
        </p>
        <h2 className={styles.subtitle}>Progressive enhancement</h2>
        <p className={styles.paragraph}>
          One of the famous recent uses of Service Workers was done by The Guardian. It’s a simple but really clever idea - imagine going on the train to work like every morning, reading news… when suddenly you’re on very bad or no internet connection. Infuriating, right? Well now you can play an offline crossword instead of hitting reload every three seconds hoping it’ll come back… at some point… maybe.
        </p>
        <p className={styles.paragraph}>
          This doesn’t solve the issue of actually accessing the content I want to see in the first place but it’s a great first step to take. As this feature is an “extra”, it’s okay that it’s not supported by some browsers. One day, we’ll be able to use it everywhere – and we can walk towards the bright future by using it now without introducing any regression to our apps.
        </p>
        <h2 className={styles.subtitle}>What’s coming</h2>
        <p className={styles.paragraph}>
          As if this wasn’t enough, what’s even more exciting is the news of Background Sync coming to the party later on this year. This feature is currently being implemented in Chrome and should allow you to – well, sync data on background.
        </p>
        <p className={styles.paragraph}>
          Background sync should allow developers to finally access all important features for creating truly offline-first web apps.
        </p>
        <p className={styles.paragraph}>
          2016 is definitely bringing a lot of exciting new features to web development and we’ll get our toolkit buffed up quite a lot – by streams, Houdini, HTTP2, and many more technologies. It’s definitely bad news to those who already find JavaScript development too complex – but it’s really exciting for us who love to learn and explore new possibilities.
        </p>
        <p className={styles.author}>
          Written by Anna Doubkova
        </p>
      </div>
    </div>
  );
}
