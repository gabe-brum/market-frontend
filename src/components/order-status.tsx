export type OrderStatusType =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatusType;
}

const orderStatusMap: Record<OrderStatusType, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  delivered: "Entregue",
  delivering: "Em entrega",
  processing: "Em preparo",
};

export function OrderStatus({ status }: OrderStatusProps) {
  function renderStatusDot(status: OrderStatusType) {
    switch (status) {
      case "pending":
        return (
          <span
            data-testid="badge"
            className="h-2 w-2 rounded-full bg-slate-400"
          ></span>
        );
      case "canceled":
        return (
          <span
            data-testid="badge"
            className="h-2 w-2 rounded-full bg-rose-500"
          ></span>
        );
      case "delivered":
        return (
          <span
            data-testid="badge"
            className="h-2 w-2 rounded-full bg-emerald-500"
          ></span>
        );
      case "processing":
        return (
          <span
            data-testid="badge"
            className="h-2 w-2 rounded-full bg-amber-500"
          ></span>
        );
      case "delivering":
        return (
          <span
            data-testid="badge"
            className="h-2 w-2 rounded-full bg-amber-500"
          ></span>
        );
      default:
        return (
          <span
            data-testid="badge"
            className="h-2 w-2 rounded-full bg-slate-400"
          ></span>
        );
    }
  }

  return (
    <div className="flex items-center gap-2">
      {renderStatusDot(status)}
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
