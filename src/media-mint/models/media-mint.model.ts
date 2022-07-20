/* eslint-disable prettier/prettier */
import { Prop } from '@nestjs/mongoose';
import { IsDateString, IsEmail, IsNumber, IsString } from 'class-validator';
export const userSchema = ({
  id: Number,
  name: String,
  email: String,
  gender: String,
  status: String,
  created_at: {type : Date, default: new Date()},
  updated_at: {type : Date, default: new Date()},
});
export class MediaMintModel {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  gender: string;

  @IsString()
  status: string;

  @IsDateString()
  @Prop({
    default: new Date(),
  })
  created_at: Date ;

  @IsDateString()
  @Prop({
    default: new Date(),
  })
  updated_at: Date ;
}
