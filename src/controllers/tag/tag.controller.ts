import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from "@nestjs/common";
import { TagService } from "./tag.service";
import { CreateTagDto } from "./tdo/create-tag.dto";
import { UpdateTagDto } from "./tdo/update-tag.dto";

@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {
  }

  @Get('')
  getAllTag() {
    return this.tagService.getTags()
  }

  @Post('')
  createTag(@Body() tagDto: CreateTagDto) {
    return this.tagService.createTag(tagDto)
  }


  @Delete(':id')
  deleteTag(@Param('id') id: number) {
    return this.tagService.deleteTag(id)
  }

  @Patch('')
  updateTag(@Body() updateDto: UpdateTagDto) {
    return this.tagService.updateTag(updateDto)
  }


}