import { Component, signal } from '@angular/core';
import { IKnowledge } from '../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de JAVA'
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Ícone de conhecimento de Spring Boot'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de Java Script'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de NodeJS'
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      alt: 'Ícone de conhecimento de Postgresql'
    },
    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'Ícone de conhecimento de Git Hub'
    },

  ])
}
