import { CartPageProps } from "./types";
import { Button } from "components";

export function CartPage(props: CartPageProps) {
  return (
    <div {...props}>
      <h1>Cart</h1>
      <Button>{"Botão de teste"}</Button>
    </div>
  );
}
