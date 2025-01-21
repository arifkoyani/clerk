import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();
  const user = await currentUser();
  //   console.log("User:",user.username);
  console.log("User:", user);

  console.log("user name:", user.username);
  console.log("User f name:", user.firstName);
  console.log("User L name:", user.lastName);
  console.log("User EMAIL:", user.emailAddresses[0].emailAddress);
  console.log("User ID:", user.emailAddresses[0].id);
  console.log("ImageUrl:", user.imageUrl);
  console.log("createAt:", user.createdAt);
  console.log("UpdateAt:", user.updatedAt);

  if (user) {
    return NextResponse.json(
      {
        message: "Authenticated",
        data: { userId: userId, username: user?.username },
      },
      { status: 200 }
    );
  }

  return NextResponse.json({ message: "Not Authenticated" }, { status: 400 });
}
