import { IsString, IsEmail, IsNotEmpty, MinLength, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    email: string;
    
    @IsString()
    @IsPhoneNumber("BR")
    @IsNotEmpty()
    phone: string;

    @IsString()
    @MinLength(6)
    password: string;
}
