import { ApiProperty } from '@nestjs/swagger';
import { isString, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Must be string' })
  @ApiProperty({ example: 'admin', description: 'User role' })
  readonly value: string;

  @IsString({ message: 'Must be string' })
  @ApiProperty({ example: 1, description: 'User ID' })
  readonly userId: string;
}
