import { Module } from '@nestjs/common';
import { ShareLibraryService } from './share-library.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  providers: [ShareLibraryService],
  exports: [ShareLibraryService],
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.env']
    })
  ],
})


export class ShareLibraryModule {}
