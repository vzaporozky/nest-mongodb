import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'title', description: 'title of post' })
  readonly title: string;

  @ApiProperty({ example: 'content', description: 'text of post' })
  readonly content: string;

  @ApiProperty({ example: '1', description: 'author id' })
  readonly userId: number;
}
