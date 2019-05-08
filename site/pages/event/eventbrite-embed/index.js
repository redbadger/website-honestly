// @no-flow
import React from 'react';
import styles from './style.css';

/* The modal popup will only work on pages served over HTTPS
   the fallback behaviour will take users to the
   eventbrite ticket page */

/* The modal popup will only work on pages served over HTTPS
   the fallback behaviour will take users to the
   eventbrite ticket page */

export default class EventbriteEmbed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowLoaded: false,
    };
  }

  componentDidMount() {
    // The widget scripts will only work when the window has loaded
    window.addEventListener('load', () => {
      this.setState({ windowLoaded: true });
    });

    const { eventbriteId } = this.props;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.eventbrite.co.uk/static/widgets/eb_widgets.js';
    script.async = true;

    const widgetScript = document.createElement('script');
    widgetScript.type = 'text/javascript';
    widgetScript.innerHTML = `window.onload = function() {
      window.EBWidgets.createWidget({
            widgetType: 'checkout',
            eventId: '${eventbriteId}',
            modal: true,
            modalTriggerElementId: 'eventbrite-modal-${eventbriteId}',
            onOrderComplete: () => {
              console.log('Order complete!');
            },
          })
      }`;
    widgetScript.async = false;

    document.body.appendChild(script);
    document.body.appendChild(widgetScript);
  }

  render() {
    const { eventbriteId, url } = this.props;
    const { windowLoaded } = this.state;
    return (
      <div className="testyTestTest">
        {windowLoaded && (
          <div>
            <noscript>
              <a href={url} rel="noopener noreferrer" target="_blank">
                Buy Tickets on Eventbrite
              </a>
            </noscript>
            <button id={`eventbrite-modal-${eventbriteId}`} type="button">
              Buy Tickets
            </button>
          </div>
        )}
      </div>
    );
  }
}
