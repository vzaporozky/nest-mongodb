import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from './posts.schema';
import { Model } from 'mongoose';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private postModel: Model<Posts>,
    private fileService: FilesService,
  ) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const post = await this.postModel.create({ ...dto, image: fileName });
    return post;
  }
}
