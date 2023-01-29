import { defineEventHandler } from 'h3';

const index_get = defineEventHandler((event) => {
  return {
    user: {
      name: "Alex",
      surname: "Dmitrienko"
    }
  };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
