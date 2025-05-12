import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import type { MetaXhoraData } from "@/types/Metas";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function ChartVentaHora({ data }: { data: MetaXhoraData[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">Gráfico de Barras<TrendingUp /></CardTitle>
        <CardDescription>{new Date().toLocaleDateString()}</CardDescription>
      </CardHeader>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="HORA"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="VTA_HORA" fill="var(--chart-7)" radius={2} />
          <Bar dataKey="META_HORA" fill="var(--chart-8)" radius={2} />
        </BarChart>
      </ChartContainer>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            Componentes Gráficos de <span className="font-semibold text-gray-800">Shadcn UI</span>, la cual usá en su core la librería Recharts - Licencia MIT
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
