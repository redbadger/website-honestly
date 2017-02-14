import { eventImagePath } from './events';

describe.only('eventImagePath', () => {
  it('returns correct image URL when only filename is provided', () => {
    expect(eventImagePath('hello.jpg')).to.equal('//res.cloudinary.com/red-badger-assets/image/upload/events/hello.jpg');
  });

  it('returns correct image URL when full URL is provided', () => {
    expect(eventImagePath('https://hello.jpg')).to.equal('https://hello.jpg');
  });

  it('converts http to https', () => {
    expect(eventImagePath('http://hello.jpg')).to.equal('https://hello.jpg');
  });
});
