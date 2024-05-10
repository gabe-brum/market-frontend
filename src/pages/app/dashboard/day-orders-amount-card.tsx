import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricsCardSkeleton } from "./metrics-card-skeleton";

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount, isFetching: isLoading } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ["metrics", "day-orders-amount"],
  });

  function renderDiffFromYesterday(diffFromYesterday: number) {
    if (diffFromYesterday >= 0) {
      return (
        <span className="text-emerald-500 dark:text-emerald-400">
          +{diffFromYesterday}%
        </span>
      );
    }

    return (
      <span className="text-rose-500 dark:text-rose-400">
        {diffFromYesterday}%
      </span>
    );
  }

  function renderOrdersAmount() {
    if (!dayOrdersAmount || isLoading) return <MetricsCardSkeleton />;

    return (
      <>
        <span className="text-2xl font-bold tracking-tight">
          {dayOrdersAmount.amount.toLocaleString("pt-BR")}
        </span>
        <p className="text-xs text-muted-foreground">
          {renderDiffFromYesterday(dayOrdersAmount.diffFromYesterday)} em
          relação a ontem
        </p>
      </>
    );
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">{renderOrdersAmount()}</CardContent>
    </Card>
  );
}
