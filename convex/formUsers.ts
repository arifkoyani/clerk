import { mutation } from "./_generated/server";
import { v } from "convex/values";
export const formData = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    age: v.string(),
    gender: v.string(),
    terms: v.boolean(),
    options: v.string(),
    range: v.float64(),
    date: v.string(),
    time: v.string(),
    password: v.string(),
    email: v.string(),
    number: v.string(),
    tel: v.string(),
    url: v.string(),
    search: v.string(),
    text: v.string(),
    dateLocal: v.string(),
    month: v.string(),
    week: v.string(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("formUsers", {
      firstName: args.firstName,
      lastName: args.lastName,
      age: args.age,
      gender: args.gender,
      terms: args.terms,
      options: args.options,
      range: args.range,
      date: args.date,
      time: args.time,
      password: args.password,
      email: args.email,
      number: args.number,
      tel: args.tel,
      url: args.url,
      search: args.search,
      text: args.text,
      dateLocal: args.dateLocal,
      month: args.month,
      week: args.week,
    });
  },
});
