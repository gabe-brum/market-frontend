import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricsCardSkeleton } from "./metrics-card-skeleton";

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount, isFetching: isLoading } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics", "month-orders-amount"],
  });

  function renderDiffFromLastMonth(diffFromLastMonth: number) {
    if (diffFromLastMonth >= 0) {
      return (
        <span className="text-emerald-500 dark:text-emerald-400">
          +{diffFromLastMonth}%
        </span>
      );
    }

    return (
      <span className="text-rose-500 dark:text-rose-400">
        {diffFromLastMonth}%
      </span>
    );
  }

  function renderOrdersAmount() {
    if (!monthOrdersAmount || isLoading) return <MetricsCardSkeleton />;

    return (
      <>
        <span className="text-2xl font-bold tracking-tight">
          {monthOrdersAmount.amount.toLocaleString("pt-BR")}
        </span>
        <p className="text-xs text-muted-foreground">
          {renderDiffFromLastMonth(monthOrdersAmount.diffFromLastMonth)} em
          relação ao mês passado
        </p>
      </>
    );
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">{renderOrdersAmount()}</CardContent>
    </Card>
  );
}
