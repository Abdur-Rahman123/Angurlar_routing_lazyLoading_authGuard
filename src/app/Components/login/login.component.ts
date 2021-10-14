import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router) { }
faLock = faLock;
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
  ngOnInit(): void {
   if(this.auth.isLoggedIn()){
    this.router.navigate(['admin']);
   }
  }
  onSubmit(): void {
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(result => {
      this.router.navigate(['admin'])
      },(err:Error)=>{
        alert(err.message);
      })
    }
    
  }

}
