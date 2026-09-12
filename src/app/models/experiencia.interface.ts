export interface Experiencia {
  id: number;
  periodo: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  tipo: 'formacao' | 'trabalho' | 'hackathon' | 'projeto';
  icon: string;
}
