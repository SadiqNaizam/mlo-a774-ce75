import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface ReasonStatProps {
  percentage: number;
  description: string;
}

const ReasonStat: React.FC<ReasonStatProps> = ({ percentage, description }) => (
  <div>
    <p className="text-4xl font-bold text-foreground">{percentage}%</p>
    <p className="text-muted-foreground mt-1">{description}</p>
  </div>
);

interface OtherDataStatProps {
    value: string;
    label: string;
    tooltip?: string;
}

const OtherDataStat: React.FC<OtherDataStatProps> = ({ value, label, tooltip }) => (
    <div>
        <p className="text-4xl font-bold text-foreground">{value}</p>
        <div className="flex items-center gap-1 mt-1">
            <p className="text-muted-foreground">{label}</p>
            {tooltip && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{tooltip}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
    </div>
);

const ReasonsStatsGrid: React.FC = () => {
  const reasons = [
    { percentage: 40, description: 'The proposal is unclear' },
    { percentage: 20, description: 'However venture pursuit' },
    { percentage: 10, description: 'Other' },
    { percentage: 30, description: 'The proposal is unclear' },
  ];

  const otherData = [
      { value: '900', label: 'total leads count' },
      { value: '12', label: 'days in average to convert lead' },
      { value: '30', label: 'inactive leads', tooltip: 'Leads that have not been updated in 30 days.' },
  ]

  return (
    <Card className="col-span-2">
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Reasons of leads lost</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {reasons.map((reason, index) => (
              <ReasonStat key={index} {...reason} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Other data</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8">
            {otherData.map((data, index) => (
                <OtherDataStat key={index} {...data} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReasonsStatsGrid;
