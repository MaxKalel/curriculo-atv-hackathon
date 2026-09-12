import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contato {
  email = signal('kalelmaxferreirasantos@gmail.com');
  linkedin = signal('https://www.linkedin.com/in/kalelmax/');
  github = signal('https://github.com/MaxKalel');

  // Estado para feedback de cópia
  copiado = signal(false);

  // Copia o e-mail para a área de transferência
  copiarEmail(): void {
    navigator.clipboard.writeText(this.email()).then(() => {
      this.copiado.set(true);
      setTimeout(() => this.copiado.set(false), 2000);
    });
  }

  // Estado para alternância de tema
  isDarkMode = signal(true);

  // Alterna o tema no <html> manipulando data-theme
  toggleTema(): void {
    const novoEstado = !this.isDarkMode();
    this.isDarkMode.set(novoEstado);

    if (novoEstado) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
