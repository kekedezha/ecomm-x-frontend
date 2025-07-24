import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-md object-cover h-75 w-full"
        />
        <CardTitle className="text-lg">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">${product.price}</p>
        <Button size="sm">Add to Cart</Button>
      </CardContent>
    </Card>
  );
}