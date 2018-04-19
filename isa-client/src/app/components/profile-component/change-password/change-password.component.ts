import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from '../../../services/profile-service';


@Component({
  selector: 'change-password-component',
  templateUrl: './change-password.component.html',
  styleUrls : [`change-password.component.css`]
 
})

export class ChangePasswordComponent implements OnInit {

   

    //@Input() selectedSeats : any[];
    @Output() onPasswordChanged =  new EventEmitter<any>();
    

 
    constructor(private profileService: ProfileService) {

    }

    ngOnInit() {

    }

    changePassword(password:any, passwordRepeat:any) {


        console.log(password + " " + passwordRepeat);

        if(password===passwordRepeat)
        {
            this.profileService.changePassword(password, passwordRepeat).subscribe();

            this.onPasswordChanged.emit(true);
            alert("Successfully changed password!")
        }
        else
        {
            alert("Passwords don't match!");
        }


    }

}
