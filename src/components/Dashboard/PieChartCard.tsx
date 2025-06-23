import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 40, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#0D9488' }, // teal-600
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#60A5FA' }, // blue-400
];

const PieChartCard: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-y-4">
            {data.map((entry) => (
              <div key={entry.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3 text-sm">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: entry.color }}></div>
                <span className="font-medium text-gray-700">{entry.name}</span>
                <span className="font-medium text-muted-foreground">$ {entry.value}</span>
                <span className="font-medium text-muted-foreground text-right">{entry.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
          <Badge variant="secondary" className="cursor-pointer hover:bg-gray-300">from leads total</Badge>
      </CardFooter>
    </Card>
  );
};

export default PieChartCard;
