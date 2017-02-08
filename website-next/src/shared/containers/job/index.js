/* eslint-disable max-len */
import React, { Component } from 'react';
import HtmlParser from '../../components/html-parser';
import { Grid, Cell } from '../../components/grid';
import Container from '../../components/container';
import Section from '../../components/section';
import Note from '../../components/note';
import Hr from '../../components/hr';
import styles from './style.css';
import typography from '../../components/typography/style.css';
import Link from '../../../../../site/components/link';
import classnames from 'classnames';

export default class Job extends Component {
  static propTypes = {
    job: React.PropTypes.shape({
      title: React.PropTypes.string,
      fullDescription: React.PropTypes.string,
      applicationUrl: React.PropTypes.string,
    }),
  };

  render() {
    return (
      <div className={styles.background}>
        <Section>
          <Container>
            <Grid>
              <Cell size={8}>
                <h2 className={typography.h2}>{this.props.job.title}</h2>
                <HtmlParser>{this.props.job.fullDescription}</HtmlParser>
                <Hr color="grey" />
                <Link className={styles.linkBack} to="joinUs">&lt; See all vacancies</Link>
              </Cell>
              <Cell size={4}>
                <Note>
                  <h2 className={styles.noteTitle}>How to Apply</h2>
                  <p className={typography.p}>
                    {"If you'd like to know more or you want to apply please get in touch with your CV, Stackoverflow profile, Github, code, portfolio and anything else you think we might be interested in."}
                  </p>
                  <p className={typography.p}>
                    <a className={styles.sidebarApplyLink} href={this.props.job.applicationUrl} target="_blank" rel="noopener">Apply here</a>
                  </p>
                </Note>
              </Cell>
            </Grid>
          </Container>
        </Section>
      </div>
    );
  }
}
