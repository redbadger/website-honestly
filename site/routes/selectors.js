const getBadgersByCategory = (badgers, category) => {
  if (category === 'everyone') return badgers;
  return badgers.filter(badger =>
    badger.categories.filter(cat => cat.slug === category).length > 0);
};

const createPages = (category, count) => (
  Array.from(Array(Math.ceil(count / 20)).keys()).map(page => ({ category, page: page + 1 }))
);

export const genBadgersParams = state => (
  state.categories.reduce((params, category) => {
    const count = getBadgersByCategory(state.badgers, category.slug).length;
    return params.concat(createPages(category.slug, count));
  }, createPages('everyone', state.badgers.length + 1))
);

export const stateToBadgerProps = ({ badgers, categories }, { category, page } = {}) => {
  return { badgers: getBadgersByCategory(badgers, category), categories, category, page };
};
