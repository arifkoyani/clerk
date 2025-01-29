import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";



export const createTodo = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      text: args.text,
    });
  },
});
export const createClerkUsers = mutation({
  args: {
        createdAt: v.optional(v.float64()),
        email: v.string(),
        firstName: v.string(),
        imageUrl: v.string(),
        lastName: v.string(),
        updatedAt: v.float64(),
        userId: v.string(),
        username: v.string(),

      
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      UserName: args.username,
      FirstName: args.firstName,
      LastName: args.lastName,
      Email: args.email,
      UserId: args.userId,
      ImageUrl: args.imageUrl,
      CreateAt: args.createdAt,
      UpdateAt: args.updatedAt,
    });
  },
});

export const getTodos = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("todos").collect();
  },
});
