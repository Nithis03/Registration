import { Controller, Get, Post,Body, UseInterceptors,Query, UploadedFile, Version, Bind, Param, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Registrationdto } from './registation.dto';
import { Modeldto } from './registration.modeldto';
import { RegistrationService } from './registration.service';
import { StatusCodes } from './registration.statuscode.dto';


@Controller()
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  


  

  // @ApiHeader ({ name : 'Version-header',enum:['1','2'], description : 'Please select a version', required : true })
  // // @Version('2')
  // @Get('job')
  // getPreference2 () : string {
  //   return "frontend "
  // }

  // @Get('/jobprofile/:role')
  // getInput2(@Param() param :Modeldto): string {
  //  return this.registrationService.getInput2(param);
  // }
   
  @Get('job')
  getInput(@Query() query :{role: string}): string {
    return this.registrationService.getInput(query);
   }

@Post('jobprofile')
createUser(@Body() registrationdto : Registrationdto) : string {
  console.log(registrationdto);


  return this.registrationService.createUser();
}
@Post('upload')
  @UseInterceptors(
    FileInterceptor('resume',{
      dest:"./uploads",
    })
  )
  uploadFile(@UploadedFile() resume) {
    console.log('file',resume);
    return `File Name: ${resume.filename}`;
  }

  @Get('help')
  getAllErrorStatusCode(): Object {
  
    return [
      {
        'OK': HttpStatus.OK
      },
      {
        'Created': HttpStatus.CREATED
      },
      {
        'Bad Request': HttpStatus.BAD_REQUEST
      },
      {
        'Unauthorized': HttpStatus.UNAUTHORIZED
      },
      {
        'Payment Required': HttpStatus.PAYMENT_REQUIRED
      },
      {
        'Forbidden': HttpStatus.FORBIDDEN
      },
      {
        'Not Found': HttpStatus.NOT_FOUND
      },
      {
        'Internal Server Error': HttpStatus.INTERNAL_SERVER_ERROR
      },
    ]
  }
}