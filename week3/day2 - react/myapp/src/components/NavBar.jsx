import { useContext } from "react";
import { theme } from "../context/theme";

export default function NavBar() {
  // step3: useContext/ conssole value through contextAPI
  const data = useContext(theme);
  console.log(data);
  console.log(data); // {}

  return <h1 style={{ color: data.clr }}>Hello from NavBar</h1>;
}
