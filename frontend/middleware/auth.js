import { navigateTo } from "#app";
import cookies from "vue-cookies";

export default function () {
  if (process.client) {
    const authCookie = cookies.get("auth");
    if (!authCookie) {
      return navigateTo("/login");
    }
  }
}
