import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";


const fetchData = async () => {
  const token = await getServerSession(authOption);
  // console.log("Token is: ", token?.tasks?.token)

  try {
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks?workspaceId=168`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getAllHome = async () => {
  return await fetchData();
};
