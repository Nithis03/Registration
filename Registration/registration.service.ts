import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistrationService {
  getPreference(): string{
    return "Backend";
    
  }
  
createUser() : string {
  return 'student created'
}
getInput(param):string {

  return `Role: ${param.role}`;
}

// getInput2(param):string {

//   return `Role: ${param.role}`;
// }

}


