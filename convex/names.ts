import { mutation } from "./_generated/server";
import { v } from "convex/values";
export const myNames = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("names", {
      name: args.name,
    });
  },
});
