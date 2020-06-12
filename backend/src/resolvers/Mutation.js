const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // title: args.title,
          // description: args.desc,
          ...args,
        },
      },
      info
    );
    return item;
  },
};

module.exports = Mutations;
