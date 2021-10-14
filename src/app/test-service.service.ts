import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }
  getContact(){
   const a=[
    {
    'name':'rahman',
    'email':'rahman@gmail.com'
  },
{
  'name':'karim',
'email':'karim@gmail.com'
}
]
return a;
  }
}
