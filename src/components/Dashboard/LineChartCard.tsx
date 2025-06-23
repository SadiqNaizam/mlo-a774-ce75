import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';

const data = [
  { name: 'March', closedWon: 65, closedLost: 62 },
  { name: 'April', closedWon: 25, closedLost: 45 },
  { name: 'May', closedWon: 62, closedLost: 98 },
  { name: 'June', closedWon: 85, closedLost: 7 },
  { name: 'July', closedWon: 92, closedLost: 41 },
  { name: 'August', closedWon: 30, closedLost: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm">
        <p className="label font-bold">{`${label}`}</p>
        <p className="intro text-teal-600">{`Closed Won : ${payload[0].value}`}</p>
        <p className="intro text-red-500">{`Closed Lost : ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const LineChartCard: React.FC = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">Leads tracking</CardTitle>
            <div className="flex items-baseline gap-4 mt-2">
                <p><span className="text-3xl font-bold text-foreground">680</span> <span className="text-muted-foreground">total closed</span></p>
                <p><span className="text-3xl font-bold text-foreground">70</span> <span className="text-muted-foreground">total lost</span></p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Tabs defaultValue="converted">
              <TabsList>
                <TabsTrigger value="came">Leads came</TabsTrigger>
                <TabsTrigger value="converted">Leads Converted</TabsTrigger>
                <TabsTrigger value="size">Total deals size</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" className="bg-white text-gray-600">
              <CalendarDays className="mr-2 h-4 w-4" />
              last 6 months
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0D9488" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#0D9488" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="closedWon" stroke="#0D9488" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 6, fill: '#0D9488', stroke: 'white', strokeWidth: 2 }} activeDot={{ r: 8 }} />
              <Area type="monotone" dataKey="closedLost" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 6, fill: '#EF4444', stroke: 'white', strokeWidth: 2 }} activeDot={{ r: 8 }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-600 rounded-sm"></div>
                <span className="text-sm text-muted-foreground">Closed won</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span className="text-sm text-muted-foreground">Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
