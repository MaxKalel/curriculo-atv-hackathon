import { Component, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Experiencia } from './components/experiencia/experiencia';
import { Contato } from './components/contato/contato';
import { Formacao } from './components/formacao/formacao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Skills, Experiencia, Contato, Formacao],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('curriculo-kalel');
}




