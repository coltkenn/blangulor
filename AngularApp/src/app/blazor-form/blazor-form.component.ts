import { Component, OnInit } from '@angular/core';

interface BlazorData {
  message?: string;
}

@Component({
  selector: 'app-blazor-form',
  templateUrl: './blazor-form.component.html',
  styleUrl: './blazor-form.component.scss'
})
export class BlazorFormComponent implements OnInit {
  ngOnInit(): void {
    (window as any).sayHello = this.sayHello.bind(this);
  }

  sayHello(data: BlazorData): void {
    alert(data.message);
    this.invokeBlazorFunction();
  }

  invokeBlazorFunction() {
    (window as any).DotNet.invokeMethodAsync('BlazorWebAssembly', 'BlazorFunction', 'Hi Blazor!');
  }
}
