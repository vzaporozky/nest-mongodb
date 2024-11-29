import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesModule } from 'src/files/files.module';
import { Posts, PostSchema } from './posts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostSchema }]),
    FilesModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
