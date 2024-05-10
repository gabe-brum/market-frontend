import { getOrderDetails } from "@/api/get-order-details";
import { OrderStatus } from "@/components/order-status";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { OrderDetailsSkeleton } from "./order-details-skeleton";

interface OrderDetailsProps {
  orderId: string;
  isDetailsOpen: boolean;
}

export function OrderDetails({ orderId, isDetailsOpen }: OrderDetailsProps) {
  const { data: orderDetail, isLoading } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: isDetailsOpen,
  });

  function renderOrderProductItems() {
    if (orderDetail?.orderItems.length === 0) return null;

    return orderDetail?.orderItems.map((item) => {
      const { priceInCents, product, quantity, id } = item;

      return (
        <TableRow key={id}>
          <TableCell>{product.name}</TableCell>
          <TableCell className="text-right">{quantity}</TableCell>
          <TableCell className="text-right">
            {(priceInCents / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </TableCell>
          <TableCell className="text-right">
            {((priceInCents * quantity) / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </TableCell>
        </TableRow>
      );
    });
  }

  function renderOrderContent() {
    if (isLoading) return <OrderDetailsSkeleton />;

    if (!orderDetail) return null;

    return (
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <OrderStatus status={orderDetail.status} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                {orderDetail.customer.name}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                {orderDetail.customer.phone ?? "Não informado"}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                {orderDetail.customer.email}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                {formatDistanceToNow(orderDetail.createdAt, {
                  locale: ptBR,
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{renderOrderProductItems()}</TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                {(orderDetail.totalInCents / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: {orderId}</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      {renderOrderContent()}
    </DialogContent>
  );
}
