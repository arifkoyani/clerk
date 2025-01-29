import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const yesOrNo = mutation({
  args: {
    check: v.boolean(),
  },
  handler: async (ctx, args) => {
    const existingEntry = await ctx.db.query("toggle").first();

    if (existingEntry) {
      await ctx.db.patch(existingEntry._id, {
        check: args.check,
      });
    } else {
      await ctx.db.insert("toggle", {
        check: args.check,
      });
    }
  },
});

export const getchecks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("toggle").collect();
  },
});
