import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
})

export function imageURL(url: string | null) {
  return url
    ? url
    : require("../assets/semfoto.png")
}