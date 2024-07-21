import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PostDetailComponent } from '../../components/post-detail/post-detail.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [HeaderComponent,PostDetailComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
