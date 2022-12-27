import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "@components/button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {}
