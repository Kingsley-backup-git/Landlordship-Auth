import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export  async function checkAuth():Promise<boolean> {
  try {
    const token = await Cookies.get("token")

    if (!token || token === undefined) return false;
    const decoded: { exp: number } = jwtDecode(token);
    return Date.now() < decoded.exp * 1000;
    
    
  } catch (error) {
     console.error("Invalid token:", error);
    return false;
  }

}

