import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'BlazorAngularApp';

  ngOnInit(): void {
    // const head = document.getElementsByTagName('head')[0];
    // const wasm = document.createElement('script');

    // wasm.src = '/_framework/blazor.webassembly.js';

    // wasm.onerror = () => {
    //   alert(`Could not load form: 500 Internal Server Error`);
    // }

    // head.appendChild(wasm);
  }
}
