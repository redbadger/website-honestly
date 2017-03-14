import React from 'react';
import styles from './style.css';

const CaseStudyRetailer = () => (
  <div className={styles.caseStudyContainer}>
    <div className={styles.headerContainer}>
      <div className={styles.leftOutcome}>
        <span className={styles.percentage}>
          +54%
        </span>
        <h3 className={styles.outcomeDescription}>
          Increased orders
        </h3>
      </div>
      <div className={styles.rightOutcome}>
        <span className={styles.percentage}>
          +29%
        </span>
        <h3 className={styles.outcomeDescription}>
          Uplifts in visits
        </h3>
      </div>
    </div>
    <div className={styles.contentContainer}>
      <h1 className={styles.mainTitle}>
        Next generation platform for retail giant cleared five-year backlog in just eight months
      </h1>
      <h2 className={styles.title}>
        <span className={styles.redTitle}>
          {"Let's make things better."}
        </span>
        Solving high drop-out rates
      </h2>
      <p className={styles.paragraph}>
        Our client, one of the largest retailers in the UK was experiencing lost revenue in the
        millions, due to higher than expected drop-out rates on its online platform.
      </p>
      <p className={styles.paragraph}>
        This was because the online experience and functionality were inconsistent.  The business
        was spending huge sums on a piece of software that scraped its website, and then created
        mobile optimised versions on the fly. This meant that some orders were easier to place
        than others - depending on what device was being used - and amendments to orders were
        down as they were incredibly complicated to change once booked.
      </p>
      <p className={styles.paragraph}>
        As a retailer dedicated to providing value to customers and seeing its online business
        growing substantially - including a 100% year-on-year mobile traffic increase - there was
        an urgent need for the site to work seamlessly.  The business needed to build a modern
        technology platform using cutting-edge, web-based tech to ensure all experiences for
        customers were intuitive and easy to use, regardless of device.  This would  also have to
        factor in processing a catalogue of hundreds-of-thousands of products, delving into complex
        user journeys, and building a well executed international shipping function.
      </p>
      <p className={styles.paragraph}>
        As a business that championed innovation this retailer decided that Red Badger was the
        right partner to help it make things better.
      </p>
      <h2 className={styles.title}>
        <span className={styles.redTitle}>Do the right thing. Do the thing right.</span>
        Streamlining teams and implementing cutting-edge tech
      </h2>
      <h3 className={styles.secondaryTitle}>
        Embracing organisational change
      </h3>
      <p className={styles.paragraph}>
        Although change is happening, big companies are still watching the speed at which today’s
        start-ups move in awe and envy. What start-ups do right is work in a way that puts the
        customer at the very heart of projects, from technology choices to design and content.
        They then work in a collaborative and Lean way to get new products out at speeds that
        seem staggering to large organisations.
      </p>
      <p className={styles.paragraph}>
        Red Badger enabled this large retail client to work with the agility of a start-up: re
        -engineering and revolutionising its workflow with Lean practices and helping it break
        down department silos by keeping design, development and testing in one place. The
        benefits of this included:
      </p>
      <ul className={styles.list}>
        <li>A shorter feedback loop</li>
        <li>Team-wide responsibility for each decision</li>
        <li>Elimination of waste</li>
        <li>Driven determination and focus in order to deliver value to customers, faster</li>
        <li>A sped-up delivery, over four years early</li>
      </ul>
      <div>
        *** TODO: image ***
      </div>
      <h3>
        Finding the right tech for the job
      </h3>
      <p className={styles.paragraph}>
        Now working in a collaborative and Lean way with Red Badger, it was time to find the
        right tech for the job.
      </p>
      <p className={styles.paragraph}>
        Red Badger worked very closely with the retailer’s engineering team to recommend and
        introduce an incredibly progressive selection of cutting-edge technology. The new mobile
        site had to replace the existing screen-scraping solution and improve the customer
        experience, making the new site adaptable, flexible and able to scale up to the ever
        -growing demand that the business was seeing.
      </p>
      <div>
        *** TODO: Contant component ***
      </div>
      <p className={styles.paragraph}>
        By using a combination of Node.js and React.js, the team were able to develop an app that
        delivers a  consistent experience across all devices.  It also means that the application
        is fast and responsive, delivering far better usability for customers.
      </p>
      <p className={styles.paragraph}>
        On top of this, by moving into the Cloud, using advanced technology such as Docker
        Containers, AWS ECS and Terraform, the ecommerce store was able to incorporate auto cloud
        scaling which expands and contracts resource allocation to match customer demand. This is
        vital in helping to cope with the huge growth in revenue and transaction volumes
        experienced by the retailer, especially around times of peak demand such as Christmas and
        Black Friday.
      </p>
      <p className={styles.paragraph}>
        Finally, on the tech front, by building Automated Test and Continuous Deployment Pipeline
        s, new features are enabled to be constantly trickled into production, continually
        delivering new value to  customers and substantially reducing risk. Previously, the
        retail giant released quarterly but can now release multiple times a day with deployments
        taking minutes, rather than days.
      </p>
      <h2 className={styles.title}>
        <span className={styles.redTitle}>Creating lasting change.</span>
        Improving conversion rates by 83%
      </h2>
      <p className={styles.paragraph}>
        Successfully using the technologies above has solved long-standing issues and
        fundamentally influenced the retailer’s next generation platform. Where legacy systems
        previously ruled, cutting-edge innovation allows its online business to grow unencumbered
        by technical limitations. The new platform now provides this retailer with the means to
        scale for years to come.
      </p>
      <p className={styles.paragraph}>
        And, by first focusing on delivering the application for mobile only, Red Badger has
        delivered a completed application across seven countries in just eight months, the
        results of which are staggering:
      </p>
      <div>
        *** TODO: What we did component ***
      </div>
      <div>
        *** TODO: Results component ***
      </div>
    </div>
  </div>
);

export default CaseStudyRetailer;
