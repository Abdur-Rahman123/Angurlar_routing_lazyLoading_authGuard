import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private test:TestServiceService) { }
   contactList:any;
  ngOnInit(): void {
    this.contactList=this.test.getContact();
  }

}
