import { ApiProperty } from '@nestjs/swagger';

export class catDto {
  @ApiProperty({ example: 'Murzik', description: 'Cat name' })
  readonly name: string;

  @ApiProperty({ example: '12345', description: 'password' })
  readonly age: string;
}
