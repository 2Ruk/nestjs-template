import { Module } from '@nestjs/common';
import {ShareLibraryModule} from "@app/share-library";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import { ConnectModule } from './connect/connect.module';

@Module({
  imports: [ShareLibraryModule, ConnectModule],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
