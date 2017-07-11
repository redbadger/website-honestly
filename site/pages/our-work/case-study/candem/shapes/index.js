/* eslint max-len: 0 */
/* @flow */
import React, { Component } from 'react';
import {
  World,
  Bodies,
  Body,
  Svg,
  Vertices,
  Render,
  Engine,
  MouseConstraint,
  Events,
} from 'matter-js';
import styles from './index.css';

if (global.document) {
  // eslint-disable-next-line global-require
  require('pathseg');
  // eslint-disable-next-line global-require
  global.decomp = require('poly-decomp/build/decomp.js');
}

type Props = {
  content: Object,
  container: Object,
};

export default class Shapes extends Component {
  props: Props;

  engageMusic(element) {
    const height = element.getBoundingClientRect().height;
    const engine = Engine.create({
      render: {
        element,
        options: {
          background: 'transparent',
          wireframes: false,
          width: window.innerWidth,
          height,
        },
      },
    });

    const nrand = function() {
      let x1;
      let x2;
      let rad;
      do {
        x1 = 2 * Math.random() - 1;
        x2 = 2 * Math.random() - 1;
        rad = x1 * x1 + x2 * x2;
      } while (rad >= 1 || rad === 0);
      const c = Math.sqrt(-2 * Math.log(rad) / rad);
      return x1 * c * 3;
    };

    const loadSvgs = () => {
      const opts = {
        render: {
          fillStyle: '#212121',
          strokeStyle: '#212121',
          lineWidth: 0,
        },
      };

      const bodies = [];
      const paths = this.svg.childNodes;
      [...paths].forEach(path => {
        const points = Svg.pathToVertices(path, 30);
        const xPos = nrand() + window.innerWidth / 2;
        bodies.push(Bodies.fromVertices(xPos, height - 50, Vertices.scale(points, 1.5, 1.5), opts));
      });
      return bodies;
    };

    const whiteOpts = {
      fillStyle: 'white',
      strokeStyle: 'white',
      lineWidth: 0,
    };
    const ground = Bodies.rectangle(window.innerWidth / 2, height, window.innerWidth, 10, {
      isStatic: true,
      render: whiteOpts,
    });
    const leftSide = Bodies.rectangle(-10, height / 2, 10, height + 10, {
      isStatic: true,
      render: whiteOpts,
    });
    const rightSide = Bodies.rectangle(window.innerWidth + 10, height / 2, 10, height + 10, {
      isStatic: true,
      render: whiteOpts,
    });

    window.onresize = function() {
      engine.render.canvas.width = window.innerWidth;
      Body.set(rightSide, 'position', { x: window.innerWidth, y: height });
      Body.set(ground, 'position', { x: window.innerWidth / 2, y: height + 10 });
      Body.set(ground, 'width', window.innerWidth);
    };

    World.add(engine.world, [ground, leftSide, rightSide, ...loadSvgs(), ...loadSvgs()]);

    const mouseConstraint = MouseConstraint.create(engine, {
      constraint: {
        render: { visible: false },
      },
    });

    Events.on(mouseConstraint, 'mousedown', () => {
      engine.render.element.style.zIndex = '1000';
    });

    Events.on(mouseConstraint, 'mouseup', () => {
      engine.render.element.style.zIndex = '10';
    });

    mouseConstraint.mouse.element.removeEventListener(
      'mousewheel',
      mouseConstraint.mouse.mousewheel,
    );
    mouseConstraint.mouse.element.removeEventListener(
      'DOMMouseScroll',
      mouseConstraint.mouse.mousewheel,
    );
    World.add(engine.world, mouseConstraint);

    Shapes.throwShapes(engine);
  }

  componentDidMount() {
    this.engageMusic(this.shapes);
  }

  static throwShapes(engine) {
    Engine.run(engine);
    Render.run(engine.render);
  }

  render() {
    return (
      <div
        className={styles.shapes}
        id="shapes"
        ref={element => {
          this.shapes = element;
        }}
      >
        <svg
          style={{ display: 'none' }}
          ref={element => {
            this.svg = element;
          }}
        >
          <path d="M93.2950758,44.8647044 L88.0981694,30.398616 C79.7350283,7.12492754 53.8528828,-4.89684261 30.5443695,3.4538033 C7.23585628,11.7982532 -5.08779294,37.5100639 3.27534817,60.7837524 L8.4707033,75.2498407 L93.2950758,44.8647044 Z" />
          <path d="M35.5485165,46.0501227L17.9240227 -0.0511429893 0.310388135 46.0501227z" />
          <path d="M48.5460952,134.303571L136.884197 81.3294028 55.6728379 75.2139604 88.1217013 0.674648259 -0.0302426783 53.5388374z" />
          <path d="M13.212706,66.5636954L0.713758153 19.4091113 11.0610316 0.0900136328 77.251004 49.6377989z" />
          <path d="M0.233399836,99.7200364L52.0985262 0.447880071 140.500232 31.0405821z" />
          <path d="M121.454186,14.5005973 L90.9723904,27.2178674 C83.2003005,11.4196412 68.4876256,2.03271589 52.9558562,0.410915434 C26.7836148,-2.3106733 3.01591219,16.9325235 0.262327427,43.2933642 C-2.46333366,69.4203062 16.7962465,93.163341 42.9746932,95.8911257 C59.8343885,97.6507869 75.6035092,90.5517311 85.9088971,77.7539131 L112.906438,96.2334542 L121.454186,14.5005973 Z" />
          <path d="M99.3274647,0.103574856L0.387673708 70.77504 103.844895 63.4157526z" />
          <path d="M85.2417436,34.8546334L72.0772814 0.561376179 13.6407831 0.561376179 0.480974957 34.8546334z" />
          <path d="M66.3854382,0.0538714937L0.352148587 0.0538714937 0.352148587 29.0139301 43.180863 29.0139301 43.180863 61.9750494 0.352148587 61.9750494 0.352148587 90.0382384 66.3854382 90.0382384z" />
          <path d="M35.3060027,46.4682232L17.6815089 0.366957525 0.0678743452 46.4682232z" />
          <path d="M50.3070525,52.6642135L19.9695293 0.326683588 0.564125461 0.326683588 0.564125461 52.6642135z" />
          <path d="M23.9,2.4c-11.4,0-20.7,9.1-20.7,20.5l0,31.7l40.8,0.1l0-32.1C43.9,12.2,35.9,2.4,23.9,2.4z" />
          <path d="M0.221439898,0.204796939L0.221439898 123.144087 44.6107776 123.144087z" />
          <path d="M90.6894977,62.9270438L45.6268891 0.11983933 0.576691115 62.9270438z" />
          <path d="M30.0426853,0.209114672L53.7048985 82.0968712 0.279148829 50.6816515z" />
        </svg>
      </div>
    );
  }
}
