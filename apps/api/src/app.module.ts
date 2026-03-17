import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { IntegrationModule } from './integration/integration.module';
import { ConnectionModule } from './connection/connection.module';
import { OrganisationModule } from './organisation/organisation.module';
import { DataPipelineModule } from './data-pipeline/data-pipeline.module';
import { AirbyteModule } from './airbyte/airbyte.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [UserModule, WorkspaceModule, IntegrationModule, ConnectionModule, OrganisationModule, DataPipelineModule, AirbyteModule, AnalyticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
