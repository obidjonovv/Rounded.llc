import { BaseDto } from './../base.dto';
import { DtoGroup } from './../../constant/dto.group';
import { IsPhoneNumber, IsString } from "class-validator";

export class MessageDto extends BaseDto{
    @IsString({ groups: [DtoGroup.CREATE] })
    fullName: string

    @IsPhoneNumber(null, { groups: [DtoGroup.CREATE] })
    phoneNumber: string

    @IsString({ groups: [DtoGroup.CREATE] })
    message: string
}
