import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import FunnelStatsCard from '@/components/Dashboard/FunnelStatsCard';
import LineChartCard from '@/components/Dashboard/LineChartCard';
import PieChartCard from '@/components/Dashboard/PieChartCard';
import ReasonsStatsGrid from '@/components/Dashboard/ReasonsStatsGrid';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        <Tabs defaultValue="leads" className="w-full">
          <TabsList className="bg-transparent p-0 border-b rounded-none h-auto w-fit">
            <TabsTrigger 
              value="sales" 
              className="px-4 py-2 text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none font-medium"
            >
              Sales
            </TabsTrigger>
            <TabsTrigger 
              value="leads" 
              className="px-4 py-2 text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none font-medium"
            >
              Leads
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="mt-6">
            <div className="flex items-center justify-center h-96 bg-card rounded-lg border">
              <p className="text-muted-foreground">Sales data will be displayed here.</p>
            </div>
          </TabsContent>
          <TabsContent value="leads" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FunnelStatsCard />
              <PieChartCard />
              {/* These components have col-span-2 defined internally, so they will span the grid correctly on large screens */}
              <LineChartCard />
              <ReasonsStatsGrid />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
