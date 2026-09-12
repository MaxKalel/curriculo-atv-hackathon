import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Experiencia as ExperienciaModel } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experiencia {
  // Trajetória real do Kalel
  trajetoria = signal<ExperienciaModel[]>([
    {
      id: 1,
      periodo: '2026 — Presente',
      titulo: 'Product Owner (P.O) — Squad Proenergia',
      subtitulo: 'Hackathon Proenergia Summit 2026',
      descricao: 'Liderança de produto e alinhamento estratégico da squad. Responsável pela visão do produto, priorização do backlog, mapeamento de requisitos e garantia da entrega da solução.',
      tipo: 'hackathon',
      icon: '⚡'
    },
    {
      id: 2,
      periodo: 'ABR 2026 - AGO 2026',
      titulo: 'Auxiliar Administrativo',
      subtitulo: 'CIE Durametal (Cia. Industrial de Fundição)',
      descricao: 'Gestão de processos administrativos, controle e análise de fluxos institucionais, organização de dados e apoio à tomada de decisão.',
      tipo: 'trabalho',
      icon: '💼'
    }
  ]);
}
