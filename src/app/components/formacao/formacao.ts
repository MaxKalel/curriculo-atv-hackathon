import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Experiencia as ExperienciaModel } from '../../models/experiencia.interface';

@Component({
  selector: 'app-formacao',
  standalone: true,
  imports: [],
  templateUrl: './formacao.html',
  styleUrl: './formacao.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formacao {
  // Academico \o/
  trajetoria = signal<ExperienciaModel[]>([
    {
      id: 1,
      periodo: '2023 — 2025',
      titulo: 'Curso Técnico em Mecânica',
      subtitulo: 'IFCE Campus Maracanaú',
      descricao: 'AUTOCAD, Eletricidade, Torno Mecânico, Instrumentação e Controle, Leitura e Interpretação de desenhos mecânicos, Análise de Dados, Excel',
      tipo: 'formacao',
      icon: '⚙'
    },
    {
      id: 2,
      periodo: '2026 — Atual',
      titulo: 'Graduação em Engenharia de Software',
      subtitulo: 'Centro Universitário UniAteneu',
      descricao: 'Formação em engenharia de requisitos, arquitetura de sistemas, metodologias ágeis, modelagem de dados e desenvolvimento de software moderno.',
      tipo: 'formacao',
      icon: '🎓'
    }]
  );
}
