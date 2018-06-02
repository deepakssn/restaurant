import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreateMessage = "Server has not been created"
  serverName = 'wow'
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = !this.allowNewServer
    },2000)
   }

  ngOnInit() {
  }

  createServer() {
    console.log("TEST")
    this.serverCreateMessage = this.serverName + " Server created"
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
