import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
  tooltip?: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '2 days', color: 'bg-slate-700', tooltip: 'average time on this stage' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

const FunnelStatsCard: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-5xl font-bold text-foreground">600</p>
          <p className="text-muted-foreground">active leads</p>
        </div>

        <div className="w-full h-2 flex rounded-full overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={stage.color}
              style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
            />
          ))}
        </div>
        
        <TooltipProvider>
          <ul className="space-y-3 text-sm text-gray-700">
            {funnelData.map((stage) => (
              <li key={stage.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-4">
                <div className={`w-3 h-3 rounded-sm ${stage.color}`}></div>
                <p className="justify-self-start font-medium">{stage.name}</p>
                <p className="text-muted-foreground font-medium">{stage.count}</p>
                <p className="text-muted-foreground font-medium">$ {stage.value}</p>
                {stage.tooltip ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-muted-foreground font-medium text-right cursor-help">{stage.duration}</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{stage.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <p className="text-muted-foreground font-medium text-right">{stage.duration}</p>
                )}
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default FunnelStatsCard;
