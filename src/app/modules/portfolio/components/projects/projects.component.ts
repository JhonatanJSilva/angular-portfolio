import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
      {
        src: 'assets/img/projects/login-front-end.png',
        alt: 'Projeto Login Front-End',
        title: 'Login Front-end',
        width: '100px',
        height: '100px',
        description: '<p>Este projeto front-end, desenvolvido em Angular, faz parte de um estudo sobre aplicações full stack.</p>',
        links: [
          {
            name: 'Conheça o projeto',
            href: 'https://github.com/JhonatanJSilva/front-end-login',
          },
        ],
      },
      {
        src: 'assets/img/projects/login-back-end.png',
        alt: 'Projeto Login Front-End',
        title: 'Login Front-end',
        width: '100px',
        height: '100px',
        description: '<p>Este projeto back-end, desenvolvido em Java utilizando o framework Spring Boot com o auxílio de tecnologias como Lombok, JPA Repositories, Spring Security e o banco de dados H2 em memória, a aplicação proporciona funcionalidades completas de login, registro e autenticação via token. O projeto foi construído com o IntelliJ IDEA e faz parte de uma aplicação full stack. </p>',
        links: [
          {
            name: 'Conheça o projeto',
            href: 'https://github.com/JhonatanJSilva/login-auth-api',
          },
        ],
      },
  ]);
}
