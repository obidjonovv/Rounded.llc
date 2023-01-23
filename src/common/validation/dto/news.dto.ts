import { DtoGroup } from './../../constant/dto.group';
import {IsOptional, IsString } from "class-validator";
import { BaseDto } from "../base.dto";

export class NewsDto extends BaseDto {
    // @IsString({ groups: [DtoGroup.UPDATE, DtoGroup.CREATE] })
    // userId: string;

    @IsOptional({ groups: [DtoGroup.UPDATE] })
    @IsString({ groups: [DtoGroup.CREATE, DtoGroup.UPDATE] })
    desc: string

    // @IsOptional({groups: [DtoGroup.UPDATE]})
    // @IsArray({ groups: [DtoGroup.UPDATE] })
    // @IsMongoId({ groups: [DtoGroup.UPDATE], each: true })
    // likes: string

    @IsString({ groups: [DtoGroup.CREATE] })
    image: string
}

