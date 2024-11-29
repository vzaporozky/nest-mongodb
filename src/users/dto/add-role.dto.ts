import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Must be string' })
  @ApiProperty({ example: 'admin', description: 'User role' })
  readonly value: string;

  @IsNumber({}, { message: 'Must be number' })
  @ApiProperty({ example: 1, description: 'User ID' })
  readonly userId: number;
}
