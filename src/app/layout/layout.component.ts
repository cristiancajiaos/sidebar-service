import { ConfigService } from './../config/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
  }

  emit(): void {
    this.configService.onEmitChange();
  }
}
