import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  nome = signal('Kalel Max');
  papel = signal('Product Owner (P.O)');
  bio = signal('Estudante de Engenharia de Software');
  avatarUrl = signal('avatar.png');
}

