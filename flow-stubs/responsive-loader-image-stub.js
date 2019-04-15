// @flow

// A stub for the objects produced by the responsive-loader for webpack: https://github.com/herrstucki/responsive-loader

declare module.exports: {|
  src: string,
  srcSet: string,
  toString(): string,
  height: number,
  width: number,
  placeholder: ?string,
|};
