import { IsEmail, IsString, IsISO8601, IsNotEmpty, IsEnum, MinLength } from 'class-validator'

export class UpdateUserDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(1)
  nameFirst: string

  @IsString()
  @MinLength(1)
  nameLast: string

  @IsISO8601()
  birthDate: Date

  @IsString()
  @MinLength(1)
  role: string
  
}