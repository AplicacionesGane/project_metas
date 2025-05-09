import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useTheme } from "@/hooks/useTheme";

const chartConfig = {
  ventas: {
    label: "Ventas",
  },
  meta: {
    label: "Meta",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig


export function PieChartComponent({ porcentaje }: { porcentaje: number }) {
  const { theme } = useTheme()

  const getColorClass = () => {
    if (porcentaje <= 40) return "var(--chart-1)";
    if (porcentaje <= 80) return "var(--chart-4)";
    if (porcentaje <= 99) return "var(--chart-3)";
    if (porcentaje <= 100) return "var(--chart-2)";
    return "var(--chart-5)"; // Verde
  };

  const calcularAngulo = () => {
    return porcentaje * 3.6;
  }

  const chartData = [
    { ventas: "Ventas", visitors: porcentaje, fill: getColorClass() },
  ]

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Porcentaje Meta Realizada</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={calcularAngulo()}
            innerRadius={82}
            outerRadius={130}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className={`first:fill-muted last:fill-background`}
              polarRadius={[90, 74]}
            />
            <RadialBar dataKey="visitors" cornerRadius={20} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={24}
                        fontWeight="bold"
                        fill={theme === "dark" ? "white" : "black"}
                      >
                        {porcentaje}%
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
