import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  image = '';

  constructor(private http:Http){}

  upload(list: any) {
    if (list.length <= 0) { return; }
    let f = list[0];
    let data = new FormData();
    console.log("**************** start");
    console.log(f);
    console.log("**************** end");
    data.append('upfile', f, f.name);
 //   this.http.post('http://localhost:7071/api/HttpTriggerJS', data)
      this.http.post('https://carreviewver2.azurewebsites.net/api/HttpTriggerMulti', data)
      .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
