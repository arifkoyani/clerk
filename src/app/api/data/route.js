import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { fetchMutation } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";

export async function GET() {
  const user = await currentUser();

  if (user) {
    const userData = {
      username: user.username ?? "",
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      email: user.emailAddresses[0]?.emailAddress ?? "",
      userId: user.id,
      imageUrl: user.imageUrl ?? "",
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  


    try {
      const newUserId = await fetchMutation(api.todos.createClerkUsers, userData);

      return NextResponse.json(
        {
          message: "Authenticated and user data stored in Convex",
          data: {
            convexUserId: newUserId,
            clerkUserId: user,
            username: user.username,
          },
        },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error storing user data in Convex:", error);
      return NextResponse.json(
        { message: "Error storing user data" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ message: "Not Authenticated" }, { status: 400 });
}
