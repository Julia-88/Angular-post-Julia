import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PostFormComponent } from '../../components/post-form/post-form.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [HeaderComponent,PostFormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

}
