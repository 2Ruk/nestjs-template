import {ApiProperty} from "@nestjs/swagger";

export class CreateConnectDto {
  @ApiProperty()
  test?: string;
}
