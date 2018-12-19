import anthonyNolanPhoto from './images/anthonynolan_photo.jpg';
import dodgeballPhoto from './images/dodgeball_photo.jpg';
import janPhoto from './images/jan_photo.jpg';
import miloPhoto from './images/milo_photo.jpg';
import pridePhoto from './images/pride_photo.jpg';
import scientistPhoto from './images/scientist_photo.jpg';
import sketchSessionPhoto from './images/sketch_session_photo.jpg';

import dodgeballIllustration from './images/dodgeball_illustrated.jpg';
import janIllustration from './images/jan_illustrated.jpg';
import miloIllustration from './images/milo_illustrated.jpg';
import prideIllustration from './images/pride_illustrated.jpg';
import scientistIllustration from './images/scientist_illustrated.jpg';
import sketchSessionIllustration from './images/sketch_session_illustrated.jpg';
import anthonyNolanIllustrated from './images/anthonynolan_illustrated.jpg';

import anthonyNolanFrame from './images/anthonynolan_frame.png';
import dodgeballFrame from './images/dodgeball_frame.png';
import janFrame from './images/jan_frame.png';
import miloFrame from './images/milo_frame.png';
import prideFrame from './images/pride_frame.png';
import scientistFrame from './images/scientist_frame.png';
import sketchSessionFrame from './images/sketch_session_frame.png';

const photos = [
  {
    image: dodgeballPhoto,
    illustration: dodgeballIllustration,
    frame: dodgeballFrame,
    isWide: true,
    name: 'dodgeball',
    altText: 'Our Red Badger Dodgeball team ready for the next game.',
  },
  {
    image: scientistPhoto,
    illustration: scientistIllustration,
    frame: scientistFrame,
    isWide: false,
    name: 'scientist',
    altText:
      'Stuart Harris, Red Badger co-founder and chief scientist in a lab coat reading a report.',
  },
  {
    image: anthonyNolanPhoto,
    illustration: anthonyNolanIllustrated,
    frame: anthonyNolanFrame,
    isWide: false,
    name: 'anthonyNolan',
    altText: 'People testing a prototype of a new tool.',
  },
  {
    image: pridePhoto,
    frame: prideFrame,
    illustration: prideIllustration,
    isWide: true,
    name: 'pride',
    altText: 'A group of people brainstorming new ideas in a workshop.',
  },
  {
    image: sketchSessionPhoto,
    frame: sketchSessionFrame,
    illustration: sketchSessionIllustration,
    isWide: true,
    name: 'sketchSession',
    altText: 'A team sitting at a meeting room table.',
  },
  {
    image: janPhoto,
    frame: janFrame,
    illustration: janIllustration,
    isWide: false,
    name: 'jan',
    altText:
      'People celebrating at the Pride parade./ A young man holding up a big promotional poster at the Pride Parade.',
  },
  {
    image: miloPhoto,
    frame: miloFrame,
    illustration: miloIllustration,
    isWide: true,
    name: 'milo',
    altText: 'Our office dog and a Test Lead working on a laptop.',
  },
];

export default photos;
