import { Component, signal } from '@angular/core';
import { IExperiences } from '../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Back-end Junior",
        p: "Ibratan Ilimitada | 08/2021 - 09/2024"
      },
      text: "Atuei no desenvolvimento de novos projetos e na manutenção de sistemas já existentes voltados à política de crédito, aplicando regras de negócio definidas por analistas. Também fui responsável pela revisão e validação das atividades de outros desenvolvedores. Trabalhei com as tecnologias Java, Groovy, JUnit, JSON, Postman, e ferramentas de controle de versão como GitLab, GitHub e Bitbucket, além de utilizar Jira para o gerenciamento ágil de projetos. As atividades foram conduzidas em IDEs como Eclipse e IntelliJ."
    }
  ])
}
