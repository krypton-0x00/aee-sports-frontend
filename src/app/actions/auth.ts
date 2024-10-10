import { SERVER_URI } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

export async function checkAuth() {
  try {
    // Retrieve cookies from the headers
    const cookieStore = cookies();
    const authToken = cookieStore.get("jwt");
    console.log(authToken); //remvoe me

    // Check if the cookie exists
    if (!authToken) {
      return null;
    }

    // Call the backend to verify the user (Node.js server)
    const response = await axios.get(`${SERVER_URI}auth/user`, {
      headers: {
        cookie: `jwt=${authToken.value}`,
      },
      withCredentials: true,
    });

    return response.data.message; // Return user data if authenticated
  } catch (error) {
    return null; // Return null if not authenticated
  }
}
