import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import type { MetaXhoraData } from "@/types/Metas";

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

export default function BarChar({ data }: { data: MetaXhoraData[] }) {
  return (
    <Card className="p-1 xl:p-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">Gráfico de Lineas <TrendingUp /></CardTitle>
        <CardDescription>{new Date().toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
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
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="VTA_HORA"
              type="monotone"
              stroke="var(--chart-7)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="ASP_HORA"
              type="monotone"
              stroke="var(--chart-8)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="hidden sm:flex">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            Componentes gráficos de 
            <span className="font-semibold text-gray-800">Shadcn UI,</span> los cuales utilizan en su núcleo la biblioteca Recharts, licenciada bajo 
            <span className="font-semibold text-gray-800">MIT.</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
