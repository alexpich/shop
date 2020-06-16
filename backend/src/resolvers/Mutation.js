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
  updateItem(parent, args, ctx, info) {
    const updates = { ...args };

    delete updates.id;

    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // find the item
    const item = await ctx.db.query.item({ where }, `{id title}`);

    // TODO: check if they own that item or have the permissions

    // delete the item
    return ctx.db.mutation.deleteItem({ where }, info);
  },
};

module.exports = Mutations;
