import { Component, OnInit } from '@angular/core';
import { BanqueService } from '../services/banque.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listebanque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listebanque.component.html',
  styleUrl: './listebanque.component.css'
})
export class ListebanqueComponent implements OnInit  {
 
  banques: any = [];

  constructor(private banqueService: BanqueService) {
    console.log("Constructeur");
  }

  ngOnInit(): void {
    
   this.banqueService.getBanques().subscribe(
      response => this.banques = response,
      error => console.log(error+"Probleme dans l'api")
    );
  }
}
