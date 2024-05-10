import { getMonthRevenue } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricsCardSkeleton } from "./metrics-card-skeleton";

export function MonthRevenueCard() {
  const { data: monthRevenue, isFetching: isLoading } = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ["metrics", "month-revenue"],
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
    if (!monthRevenue || isLoading) return <MetricsCardSkeleton />;

    return (
      <>
        <span className="text-2xl font-bold tracking-tight">
          {(monthRevenue.receipt / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <p className="text-xs text-muted-foreground">
          {renderDiffFromLastMonth(monthRevenue.diffFromLastMonth)} em relação
          ao mês passado
        </p>
      </>
    );
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">{renderOrdersAmount()}</CardContent>
    </Card>
  );
}
