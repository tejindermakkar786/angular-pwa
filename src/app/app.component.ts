import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa-demo';
  dataSource:any;
  displayedColumns: string[];
  constructor(private swUpdate: SwUpdate, private dataService: DataService) {

  }
  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      debugger
      this.swUpdate.available.subscribe(() => {

        if (confirm("New version available, Load new version ?")) {
          window.location.reload();
        }
      });
    }
    this.dataService.getUsers().subscribe(result => { console.log(result);
    this.dataSource=new MatTableDataSource();
    this.dataSource.data=result;
    this.displayedColumns=["id","name","username","email","website"];
    });
  }
}
