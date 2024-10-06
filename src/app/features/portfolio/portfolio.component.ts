import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../shared/components/image-modal/image-modal.component'; 
import anime from 'animejs/lib/anime.es.js';
import * as AOS from 'aos';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
 
})

export class PortfolioComponent {

  isvisible = true;  
  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    AOS.init({
      duration: 1200, // Duração da animação em milissegundos
      once: false, // Permite que a animação seja repetida
      mirror: true // Repete a animação ao rolar para cima e para baixo
    });
    window.addEventListener('load', () => {
      AOS.refresh();
    });
  }

  softwareskills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML' },
    { name: 'JAVASCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JAVASCRIPT' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS' },
    { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', alt: 'SCSS' },
    { name: 'ANGULAR', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', alt: 'ANGULAR' },
    { name: 'TYPESCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TYPESCRIPT' },
    { name: 'JAVA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'JAVA' },
    { name: 'MYSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MYSQL' },
    { name: 'GITHUB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GITHUB' },
    { name: 'KANBAN', icon: '/4727480-removebg-preview.png', alt: 'KANBAN' },
    { name: 'GITLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', alt: 'GITLAB' },
    { name: 'SCRUM', icon: '/4727480-removebg-preview.png', alt: 'SCRUM' },
   
  ];

  contact = [
    { 
      name: 'E-mail', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', 
      alt: 'E-mail', 
      url: 'mailto:geniltonsilva4002@gmail.com' 
    },
    { 
      name: 'LinkedIn', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg', 
      alt: 'LinkedIn', 
      url: 'https://www.linkedin.com/jobs/view/3919366782/' 
    },
    { 
      name: 'Whatsapp', 
      icon: '/10000486-removebg-preview.png', 
      alt: 'Whatsapp', 
      url: 'https://wa.me/5585989990129' 
    }
  ];
  list = [
    {
      title: 'Projeto Avisos',
      description: 'O projeto de avisos para o campus IFCE foi desenvolvido para exibir avisos em tempo real nos monitores do campus. A ideia era permitir a atualização em tempo real dos avisos, garantindo que as informações fossem sempre atuais e relevantes para os alunos e funcionários. Atuei no desenvolvimento do frontend usando Angular, assegurando a interatividade e a atualização dinâmica dos avisos.',
      image: '/avisos.PNG',
      icon: '/globo.svg',
      url: 'https://avisos-h.maracanau.ifce.edu.br/login?returnUrl=%2F'
    },
  
    {
      title: 'Senium Logevidade',
      description: 'O projeto Senium Longevidade foi desenvolvido para conectar profissionais 50+ com empresas que valorizam a experiência. A ideia era criar uma plataforma de emprego estilo LinkedIn para pessoas mais velhas. Atuei no desenvolvimento do frontend usando Angular, onde fui tech leader, assegurando a interatividade e a atualização dinâmica da plataforma. O projeto visava facilitar a inserção de profissionais experientes no mercado de trabalho.',
      image: '/seniumm.png',
      icon: '/globo.svg',
      url: 'https://senium-h.maracanau.ifce.edu.br/'
    },
    {
      title: 'Projeto Chaves',
      description: 'O Projeto Chaves foi desenvolvido para o gerenciamento de chaves de armário no IFCE, ajudando no controle dos armários do campus. Nesse projeto, atuei no front end como um "ajudante", criando a estrutura do projeto, corrigindo erros em pipeline, tirando dúvidas e desenvolvendo com Angular. A ideia era garantir que as informações fossem sempre atuais e relevantes para os alunos e funcionários, melhorando a eficiência do controle de armários.',
      image: '/chavesPNG.PNG',
      icon: '/globo.svg',
      url: 'https://chaves-h.maracanau.ifce.edu.br/login'
    },
    {
      title: 'Intranet IFCE',
      description: 'Participei do desenvolvimento do sistema ERP da intranet do IFCE Campus Maracanaú, atendendo a mais de 2000 alunos e servidores. Nosso objetivo era garantir uma experiência integrada para a comunidade acadêmica, facilitando o acesso e a gestão de dados essenciais para as operações diárias da instituição. Atuei no frontend usando React, assegurando a interatividade e a atualização dinâmica dos dados.',
      image: '/intranet-BwslL2mt.png',
      icon: '/globo.svg',
      url: 'https://intranet.maracanau.ifce.edu.br/login'
    },
    {
      title: 'Sysra IFCE',
      description: 'Participei do desenvolvimento front-end do SysRa, uma aplicação de gerenciamento alimentar projetada para atender às necessidades do IFCE Campus Maracanaú e, posteriormente, outros campi da comunidade acadêmica. Usando React, assegurei a interatividade e a atualização dinâmica dos dados. O projeto visava melhorar a eficiência e a gestão alimentar no campus, proporcionando uma melhor experiência para os usuários.',
      image: '/sysra-lseskkPR.png',
      icon: '/globo.svg',
      url: 'https://sysra.maracanau.ifce.edu.br/'
    },
    {
      title: 'Intranet 2 IFCE',
      description: 'Participei do desenvolvimento da Intranet 2 IFCE, uma evolução do sistema ERP da intranet do IFCE Campus Maracanaú, com melhorias significativas e a ideia de distribuir para todos os outros campi. Nosso objetivo era garantir uma experiência integrada para a comunidade acadêmica, facilitando o acesso e a gestão de dados essenciais. Atuei no frontend usando Angular, assegurando a interatividade e a atualização dinâmica dos dados.',
      image: '/intranet2.png',
      icon: '/globo.svg',
      url: 'https://sysra.maracanau.ifce.edu.br/'
    }
  ];

  skills = [
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', color: '#33A9DC' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
  { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg', color: '#CC6699' },
  { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg', color: '#CC6699' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#336791' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#4479A1' },
  { name: 'RxJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg', color: '#B7178C' }
  
  ];

  devops = [
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg', color: '#FC6D26' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', color: '#181717' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#F05032' },

  
  ];

  teste =[
    { name: 'Karma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/karma/karma-original.svg', color: '#3DDC84' }
  ]


  openImageModal(image: string): void {
    this.dialog.open(ImageModalComponent, {
      data: { image },
      panelClass: 'custom-dialog-container'
    });
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }

  toggleVisibility(): void {
    this.isvisible = !this.isvisible;
  }





  
}
