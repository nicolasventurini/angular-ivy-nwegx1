import { Component } from '@angular/core';
import { IPianeta } from '../pianeta/Pianeta';

@Component({
  selector: 'app-pianeti',
  templateUrl: './pianeta.component.html',
  styleUrls: ['./pianeta.component.css'],
})
export class PianetiComponent {
  pianeti: IPianeta[] = [
    {
      nome: 'Terra',
      descrizione: 'Descrizione pianeta Terra',
      immagine:
        'https://www.inabottle.it/sites/default/files/article/terra-pianeta-oceano.jpeg',
    },
    {
      nome: 'Saturno',
      descrizione: 'Descrizione pianeta Saturno',
      immagine:
        'https://www.simbolisulweb.it/wp-content/uploads/2017/05/Significato-del-pianeta-Saturno.jpg',
    },
    {
      nome: 'Urano',
      descrizione: 'Descrizione Urano',
      immagine:
        'https://media-manager.starsinsider.com/1920/na_5a57989766d03.jpg',
    },
  ];

  pianetaSelezionato: IPianeta;

  mostraPianeta(pianeta: IPianeta): void {
    this.pianetaSelezionato = pianeta;
  }

  nascondiPianeta(): void {
    this.pianetaSelezionato = null;
  }
}
