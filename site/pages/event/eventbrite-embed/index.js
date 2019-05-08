// @no-flow
import React from 'react';

export default class EventbriteEmbed extends React.Component {
  componentDidMount() {
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
            modalTriggerElementId: 'eventbrite-widget-modal-trigger-${eventbriteId}',
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
    return (
      <div className="testyTestTest">
        <noscript>
          <a href={url} rel="noopener noreferrer" target="_blank">
            Buy Tickets on Eventbrite
          </a>
        </noscript>
        <button id={`eventbrite-widget-modal-trigger-${eventbriteId}`} type="button">
          Buy Tickets
        </button>
      </div>
    );
  }
}
