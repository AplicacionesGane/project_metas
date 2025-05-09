import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import type { MetaXhoraData } from "@/app/meta-hora";
import { Card } from "@/components/ui/card";

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

export default function CharVentaHora2({ data }: { data: MetaXhoraData[] }) {
  return (
    <Card>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="HORA"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Area
            dataKey="VTAH"
            type="natural"
            fill="var(--chart-8)"
            fillOpacity={0.4}
            stroke="var(--chart-8)"
            stackId="a"
          />
          <Area
            dataKey="METAH"
            type="natural"
            fill="var(--chart-7)"
            fillOpacity={0.4}
            stroke="var(--chart-7)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  )
}
