import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { LoggerService } from './services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor(private api: ApiService) {
    LoggerService.log('kikou');
    api.testInterceptor();
  }

}
