const text = "Sou Técnico Informático e Desenvolvedor Web com perfil estratégico e mentalidade empreendedora, especializado na criação de portfólios digitais e menus online profissionais. Possuo experiência no desenvolvimento de plataformas de vendas e soluções digitais orientadas a resultados, ajudando empresas a fortalecerem sua presença online e aumentarem suas oportunidades de negócio. Destaco-me pela proatividade, capacidade de liderança, visão de crescimento contínuo e compromisso com a excelência técnica e inovação.";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();


