import { Component } from "@angular/core";
import { AuthService } from '../../../users/services/auth.service';


@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})

export class HeaderComponent {
    constructor(
        public authService: AuthService
    ) {}
    
    title : string = "Meli's Blog"
    
}