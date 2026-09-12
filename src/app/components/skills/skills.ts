import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  // Lista de habilidades curadas do Kalel
  skills = signal<Skill[]>([
    // Gestão & P.O
    { nome: 'Visão Estratégica & de Produto', categoria: 'Gestão & P.O', nivel: 90 },
    { nome: 'Apresentações de Impacto & Pitch', categoria: 'Gestão & P.O', nivel: 85 },
    { nome: 'Soluções Inovadoras & Ideação', categoria: 'Gestão & P.O', nivel: 88 },
    
    // Desenvolvimento
    { nome: 'Angular 22 (SPA & Signals)', categoria: 'Desenvolvimento', nivel: 75 },
    { nome: 'JavaScript / TypeScript', categoria: 'Desenvolvimento', nivel: 80 },
    { nome: 'HTML5 & SCSS Moderno', categoria: 'Desenvolvimento', nivel: 85 },
    { nome: 'Git & GitHub', categoria: 'Desenvolvimento', nivel: 82 },
    { nome: 'SQL & Banco de Dados', categoria: 'Desenvolvimento', nivel: 70 },

    // Soft Skills
    { nome: 'Comunicação Estratégica', categoria: 'Soft Skills', nivel: 92 },
    { nome: 'Liderança de Squad & Projetos', categoria: 'Soft Skills', nivel: 88 },
    { nome: 'Resolução de Problemas Complexos', categoria: 'Soft Skills', nivel: 90 },
    { nome: 'Trabalho em Equipe & Colaboração', categoria: 'Soft Skills', nivel: 95 },
    { nome: 'Proatividade & Execução', categoria: 'Soft Skills', nivel: 94 },
  ]);

  // Filtro selecionado atualmente (padrão: 'Todos')
  filtroAtivo = signal<string>('Todos');

  // Categorias disponíveis extraídas dinamicamente + 'Todos'
  categorias = computed(() => {
    const cats = [...new Set(this.skills().map(s => s.categoria))];
    return ['Todos', ...cats];
  });

  // Lista filtrada reativamente
  skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') {
      return this.skills();
    }
    return this.skills().filter(s => s.categoria === filtro);
  });

  // Função chamada no clique do botão de filtro
  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}
