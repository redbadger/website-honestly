// @no-flow
import React from 'react';
import styles from './style.css';

/* The modal popup will only work on pages served over HTTPS
   the fallback behaviour will take users to the
   eventbrite ticket page */

export default class EventbriteEmbed extends React.Component {
  componentDidMount() {
    this.addEventbriteScript();
  }

  loadWidgets() {
    const { eventbriteId } = this.props;
    const widgetScript = document.createElement('script');
    widgetScript.type = 'text/javascript';
    widgetScript.innerHTML = `
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '${eventbriteId}',
        modal: true,
        modalTriggerElementId: 'eventbrite-modal-${eventbriteId}',
        onOrderComplete: () => {
          console.log('Order complete!');
        },
      })`;
    widgetScript.async = false;
    document.body.appendChild(widgetScript);
  }

  addEventbriteScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.eventbrite.co.uk/static/widgets/eb_widgets.js';
    script.async = true;
    /* widgets will only work once the eventbrite
       scripts are loaded into the window object. */
    script.onload = this.loadWidgets.bind(this);
    document.body.appendChild(script);
  }

  render() {
    const { eventbriteId, url } = this.props;
    return (
      <div className="eventbrite-modal">
        <div>
          <noscript>
            <a href={url} rel="noopener noreferrer" target="_blank">
              Get tickets on Eventbrite
            </a>
          </noscript>
          <button
            className={styles.getTickets__button}
            id={`eventbrite-modal-${eventbriteId}`}
            type="button"
          >
            Get tickets
          </button>
        </div>
      </div>
    );
  }
}
