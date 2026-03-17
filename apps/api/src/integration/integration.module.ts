import { Module } from '@nestjs/common';
import { XeroModule } from './xero/xero.module';
import { QuickbooksModule } from './quickbooks/quickbooks.module';
import { D365Module } from './d365/d365.module';
import { WorkdayModule } from './workday/workday.module';

@Module({
  imports: [XeroModule, QuickbooksModule, D365Module, WorkdayModule]
})
export class IntegrationModule {}
