import { ConfigService } from './config.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  showConfig: boolean = false;
  foo?: Observable<boolean>;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.configService.changeEmitted$.subscribe(obs => {
      this.showConfig = obs;
    })
  }

  close(): void {
    this.configService.onEmitChange();
  }
}
