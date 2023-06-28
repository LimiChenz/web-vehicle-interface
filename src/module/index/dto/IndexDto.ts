import {
  IsNotEmpty,
  IsString,
  ValidateIf,
  IsOptional,
  IsNotIn,
} from 'class-validator';

export class CreateIndexDto {
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  @IsNotIn(['true', 'false'], {
    message: 'name should not be "true" or "false"',
  })
  content: string;
}

export class GetIndexDto {
  @IsNotEmpty()
  id: string;
}
