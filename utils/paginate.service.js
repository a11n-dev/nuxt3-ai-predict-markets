/**
 * Paginates mongo collection,
 *
 * @param {mongoose.Query} query
 * @param {Number} page
 * @param {Number} limit
 * @return {mongoose.Query}
 */
const paginate = async (model, query, page, perPage) => {
  const postCount = await model.countDocuments(query).exec();

  const limit = perPage || postCount;

  return {
    list: await query.skip((page - 1) * limit).limit(limit),
    postCount: postCount,
    pageCount: Math.ceil(postCount / limit),
  };
};

module.exports = paginate;
