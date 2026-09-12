export interface Skill {
  nome: string;
  categoria: 'Gestão & P.O' | 'Desenvolvimento' | 'Soft Skills';
  nivel: number; // 0 a 100
  descricao?: string;
}
