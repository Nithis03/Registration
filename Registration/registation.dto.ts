import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
export class Registrationdto {
    @ApiProperty({
        description : "Please enter username"
    })
    @IsNotEmpty()
   private Firstname : string

   @ApiProperty({
    description : "Enter Middlename (it's optional) "
   })
   private Middlenumber : string
   
   @ApiProperty({
    description : "Enter your Lastname or Initial is accepted"
   })
   @IsNotEmpty()
   private Lastname : string

   @ApiProperty({
    description : "Please Enter your contactnumber"
   })
   @IsNotEmpty()
   private Contactnumber : number

   @ApiProperty({
    description : "Enter date of birth"
   })
   @IsNotEmpty()
    private Dateofbirth : number

    @ApiProperty({
        description : "Select your gender"
    })
    @IsNotEmpty()
    private Gender : string 

    @ApiProperty({
        description : "Enter 10th standard final mark" 
    })
    @IsNotEmpty()
    ClassTenthPercentage : Number

    @ApiProperty({
        description : "Enter 12th standard final mark" 
    })
    @IsNotEmpty()
    ClassTwelthPercentage : Number

    @ApiProperty({
        description : "Enter your Educationaltype" 
    })
    @IsNotEmpty()
    EducationalType : string

    @ApiProperty({
        description : "Enter your degree" 
    })
    @IsNotEmpty()
    Degree : string

    @ApiProperty({
        description : "Enter your Regno" 
    })
    @IsNotEmpty()
    Regno : number

    @ApiProperty({
        description : "Enter the branch you are studing" 
    })
    @IsNotEmpty()
    Branch : string

    @ApiProperty({
        description : "Enter whether you are having blacklog or not" 
    })
    @IsNotEmpty()
    Backlogs : Boolean

   
}