import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Tag, TagCreationAttrs } from "./tag.model";
import { UpdateTagDto } from "./tdo/update-tag.dto";
import { CreateTagDto } from "./tdo/create-tag.dto";

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag) private tagRepository: typeof Tag ) {
  }

  async getTags(): Promise<TagCreationAttrs[]> {
    return await this.tagRepository.findAll()
  }

  async createTag(dto: CreateTagDto): Promise<TagCreationAttrs> {
    return await this.tagRepository.create(dto)
  }

  async deleteTag(id: number) {
    return await this.tagRepository.destroy({ where: { id } })
  }

  async updateTag(updateDto: UpdateTagDto) {
    return await this.tagRepository.update(updateDto, {
      where: {id: updateDto.id}
    })
  }
}