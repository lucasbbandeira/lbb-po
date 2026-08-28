const WHATSAPP_NUMBER = '5541996437459';

const projects = [
  {
    title: 'Freelancer House',
    category: 'servicos',
    tag: 'Portfólio',
    desc: 'Site pessoal para apresentação de serviços, experiências e contato.',
    url: 'https://freelancerhouse.vercel.app/',
    techs: ['Portfólio', 'Responsivo', 'WhatsApp']
  },
  {
    title: 'Lavanderia Clean',
    category: 'servicos',
    tag: 'Lavanderia',
    desc: 'Site claro para divulgação de lavanderia e serviços de limpeza.',
    url: 'https://lavanderiaclean.vercel.app/',
    techs: ['Institucional', 'Serviços', 'Contato']
  },
  {
    title: 'Nexa Studio',
    category: 'saude',
    tag: 'Odontologia',
    desc: 'Site profissional para consultório odontológico com contato rápido.',
    url: 'https://lucasdentario.vercel.app/',
    techs: ['Saúde', 'Agendamento', 'Responsivo']
  },
  {
    title: 'Maria & Cia',
    category: 'beleza',
    tag: 'Moda',
    desc: 'Projeto para loja, com vitrine digital e comunicação visual elegante.',
    url: 'https://mariacia.vercel.app/',
    techs: ['Moda', 'Vitrine', 'WhatsApp']
  },
  {
    title: 'Ney Manutenção',
    category: 'servicos',
    tag: 'Manutenção',
    desc: 'Site para serviços de manutenção com apresentação objetiva.',
    url: 'https://neyteceletrica.vercel.app/',
    techs: ['Serviços', 'Orçamento', 'Contato']
  },
  {
    title: 'Master Frio',
    category: 'servicos',
    tag: 'Refrigeração',
    desc: 'Site profissional para assistência técnica em refrigeração, climatização e manutenção de equipamentos.',
    url: 'https://mastrefrio.vercel.app/',
    techs: ['Refrigeração', 'Assistência', 'WhatsApp']
  },
  {
    title: 'LavaTech Capão Raso',
    category: 'servicos',
    tag: 'Assistência técnica',
    desc: 'Site institucional para assistência especializada em máquinas de lavar e lava e seca.',
    url: 'https://lavatech.vercel.app/',
    techs: ['Institucional', 'Assistência', 'Orçamento']
  },
  {
    title: 'Dudu Impressão',
    category: 'servicos',
    tag: 'Impressão',
    desc: 'Site profissional para serviços de impressão e comunicação visual, com orçamento pelo WhatsApp.',
    url: 'https://eemimpressoes3d.vercel.app/',
    techs: ['Impressão', 'Catálogo', 'WhatsApp']
  },
  {
    title: 'Oficina Prime',
    category: 'automotivo',
    tag: 'Oficina',
    desc: 'Site para oficina mecânica com serviços, localização e orçamento.',
    url: 'https://oficinaprime.vercel.app/',
    techs: ['Automotivo', 'Serviços', 'Localização']
  },
  {
    title: 'Garage NV',
    category: 'automotivo',
    tag: 'Oficina',
    desc: 'Site profissional para oficina automotiva, com apresentação de serviços, identidade moderna e contato rápido pelo WhatsApp.',
    url: 'https://garagenv.vercel.app/',
    techs: ['Automotivo', 'Oficina', 'WhatsApp']
  },
  {
    title: 'Pet Shop Feliz',
    category: 'servicos',
    tag: 'Pet shop',
    desc: 'Site moderno para pet shop com destaque para atendimento e serviços.',
    url: 'https://petshopfeliz.vercel.app/',
    techs: ['Pet shop', 'Serviços', 'Contato']
  },
  {
    title: 'Pizzaria',
    category: 'alimentacao',
    tag: 'Pizzaria',
    desc: 'Site para pizzaria com visual chamativo e chamada para pedido.',
    url: 'https://pizzaria-cyan.vercel.app/',
    techs: ['Cardápio', 'Pedidos', 'WhatsApp']
  },
  {
    title: 'Lanchonete Modelo',
    category: 'alimentacao',
    tag: 'Lanchonete',
    desc: 'Site moderno para lanchonete, com apresentação de produtos, cardápio e pedidos pelo WhatsApp.',
    url: 'https://lanchonetemodelo.vercel.app/',
    techs: ['Cardápio', 'Lanchonete', 'WhatsApp']
  },
  {
    title: 'Cafeteria Maison Coffee',
    category: 'alimentacao',
    tag: 'Cafeteria',
    desc: 'Site acolhedor para cafeteria, produtos e contato.',
    url: 'https://cafeteriamaisoncoffe.vercel.app/',
    techs: ['Cafeteria', 'Produtos', 'Contato']
  },
  {
    title: 'Eloi Coffee',
    category: 'alimentacao',
    tag: 'Café',
    desc: 'Site escuro e elegante para cafeteria com identidade premium.',
    url: 'https://eloicoffe.vercel.app/',
    techs: ['Café', 'Premium', 'Produtos']
  },
  {
    title: 'Salão de Beleza',
    category: 'beleza',
    tag: 'Salão',
    desc: 'Site elegante para salão, serviços, imagem profissional e contato.',
    url: 'https://salaodebeleza-gray.vercel.app/',
    techs: ['Beleza', 'Serviços', 'Agendamento']
  },
  {
    title: 'Salão de Beleza Modelo',
    category: 'beleza',
    tag: 'Salão de beleza',
    desc: 'Site premium para salão de beleza, com apresentação de serviços, identidade elegante e agendamento pelo WhatsApp.',
    url: 'https://salaodebelezamodelo.vercel.app/',
    techs: ['Beleza', 'Agendamento', 'WhatsApp']
  },
  {
    title: 'Barber Luxo',
    category: 'beleza',
    tag: 'Barbearia',
    desc: 'Site premium para barbearia com identidade forte e moderna.',
    url: 'https://barberluxo.vercel.app/',
    techs: ['Barbearia', 'Premium', 'Agendamento']
  },
  {
    title: 'Barbearia & Modelo',
    category: 'beleza',
    tag: 'Barbearia',
    desc: 'Site premium para barbearia, com visual masculino, apresentação de serviços e foco em agendamento pelo WhatsApp.',
    url: 'https://barbeariaandmodelo.vercel.app/',
    techs: ['Barbearia', 'Premium', 'Agendamento']
  },
  {
    title: 'Tatuagem Silk',
    category: 'beleza',
    tag: 'Tatuagem',
    desc: 'Site artístico para estúdio de tatuagem com visual impactante.',
    url: 'https://tatuagemsilk.vercel.app/',
    techs: ['Tattoo', 'Portfólio', 'Agendamento']
  },
  {
    title: 'Eternal Tattoo',
    category: 'beleza',
    tag: 'Tatuagem',
    desc: 'Site premium para estúdio de tatuagem com galeria de trabalhos e agendamento.',
    url: 'https://eternaltatto.vercel.app/',
    techs: ['Tattoo', 'Galeria', 'WhatsApp']
  },
  {
    title: 'Asgard Tattoo',
    category: 'beleza',
    tag: 'Tatuagem',
    desc: 'Landing page premium para estúdio de tatuagem com identidade visual nórdica.',
    url: 'https://asgard-tattoo.vercel.app/',
    techs: ['Tattoo', 'Landing page', 'Premium']
  },
  {
    title: 'Chris Tattoo',
    category: 'beleza',
    tag: 'Tatuagem',
    desc: 'Site profissional para tatuador com foco em portfólio, atendimento e agendamento.',
    url: 'https://chrispa-tattoo.vercel.app/',
    techs: ['Tattoo', 'Portfólio', 'Contato']
  },
  {
    title: 'Clínica de Estética Face',
    category: 'beleza',
    tag: 'Estética',
    desc: 'Site para clínica de estética com visual limpo e sofisticado.',
    url: 'https://clinicadeesteticaface.vercel.app/',
    techs: ['Estética', 'Procedimentos', 'Agendamento']
  },
  {
    title: 'Chaveiro Fanese',
    category: 'servicos',
    tag: 'Chaveiro',
    desc: 'Site profissional para chaveiro 24 horas com atendimento rápido e serviços especializados.',
    url: 'https://chaveiro-fanese.vercel.app/',
    techs: ['24 horas', 'Serviços', 'WhatsApp']
  },
  {
    title: 'Chaveiro Aberto',
    category: 'servicos',
    tag: 'Chaveiro',
    desc: 'Site para chaveiro 24 horas com serviços residenciais, automotivos e comerciais.',
    url: 'https://chaveiroaberto.vercel.app/',
    techs: ['Chaveiro', 'Emergência', 'Contato']
  },
  {
    title: 'Assistência de Celular',
    category: 'servicos',
    tag: 'Tecnologia',
    desc: 'Site para assistência técnica de celulares com foco em orçamento rápido.',
    url: 'https://assistenciadecelular.vercel.app/',
    techs: ['Tecnologia', 'Assistência', 'Orçamento']
  },
  {
    title: 'Consultório Lumina',
    category: 'saude',
    tag: 'Odontologia',
    desc: 'Site para consultório odontológico com visual profissional.',
    url: 'https://consultoriolumina.vercel.app/',
    techs: ['Odontologia', 'Institucional', 'Contato']
  },
  {
    title: 'Estética Automotiva Shine',
    category: 'automotivo',
    tag: 'Estética automotiva',
    desc: 'Site para estética automotiva com chamada para serviços.',
    url: 'https://esteticaautomotivashine.vercel.app/',
    techs: ['Automotivo', 'Serviços', 'Orçamento']
  },
  {
    title: 'Forza Detail',
    category: 'automotivo',
    tag: 'Detail',
    desc: 'Site premium de detalhamento, vitrificação e proteção veicular.',
    url: 'https://forzadetail.vercel.app/',
    techs: ['Detail', 'Vitrificação', 'Premium']
  },
  {
    title: 'AEGIS PPF',
    category: 'automotivo',
    tag: 'PPF & proteção',
    desc: 'Site profissional para empresa especializada em PPF, envelopamento e proteção de pintura.',
    url: 'https://aegisppf.vercel.app/',
    techs: ['PPF', 'Proteção', 'Automotivo']
  },
  {
    title: 'Duda Viagens',
    category: 'servicos',
    tag: 'Viagens & Turismo',
    desc: 'Portfólio profissional voltado a viagens e turismo, com apresentação visual de destinos, experiências e conteúdo.',
    url: 'https://dudaviagens.vercel.app/',
    techs: ['Viagens', 'Turismo', 'Portfólio', 'Responsivo'],
    featured: true
  }
].map((project, index) => ({ ...project, id: index + 1 }));

const categoryLabels = {
  todos: 'Todos',
  servicos: 'Serviços',
  beleza: 'Beleza',
  saude: 'Saúde',
  alimentacao: 'Alimentação',
  automotivo: 'Automotivo'
};

const state = {
  filter: 'todos',
  search: '',
  sort: 'recentes',
  visible: 9
};

const els = {
  grid: document.getElementById('projectsGrid'),
  filters: document.getElementById('filters'),
  search: document.getElementById('projectSearch'),
  sort: document.getElementById('projectSort'),
  visibleCount: document.getElementById('visibleProjectCount'),
  loadMore: document.getElementById('loadMoreBtn'),
  clearFilters: document.getElementById('clearFilters'),
  emptyClearButton: document.getElementById('emptyClearButton'),
  emptyState: document.getElementById('emptyState'),
  template: document.getElementById('projectCardTemplate'),
  modal: document.getElementById('projectModal'),
  menuBtn: document.getElementById('menuBtn'),
  nav: document.getElementById('nav'),
  header: document.getElementById('header'),
  backToTop: document.getElementById('backToTop'),
  progress: document.getElementById('scrollProgress'),
  cursorGlow: document.getElementById('cursorGlow'),
  loader: document.getElementById('pageLoader'),
  form: document.getElementById('contactForm'),
  featuredButton: document.getElementById('openFeaturedProject')
};

function normalizeText(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getFeaturedProject() {
  return projects.find((project) => project.featured) || projects[projects.length - 1];
}

function getFilteredProjects() {
  const query = normalizeText(state.search);

  const result = projects.filter((project) => {
    const matchesCategory =
      state.filter === 'todos' || project.category === state.filter;

    const searchable = normalizeText([
      project.title,
      project.tag,
      project.desc,
      categoryLabels[project.category] || project.category,
      ...(project.techs || [])
    ].join(' '));

    const matchesSearch = !query || searchable.includes(query);

    return matchesCategory && matchesSearch;
  });

  return [...result].sort((a, b) => {
    if (state.sort === 'az') return a.title.localeCompare(b.title, 'pt-BR');
    if (state.sort === 'za') return b.title.localeCompare(a.title, 'pt-BR');
    return b.id - a.id;
  });
}

function createFilters() {
  if (!els.filters) return;

  els.filters.innerHTML = Object.keys(categoryLabels)
    .filter((category) =>
      category === 'todos' || projects.some((project) => project.category === category)
    )
    .map((category) => {
      const count = category === 'todos'
        ? projects.length
        : projects.filter((project) => project.category === category).length;

      return `
        <button
          type="button"
          data-filter="${category}"
          class="${state.filter === category ? 'active' : ''}"
          aria-pressed="${state.filter === category}"
        >
          ${categoryLabels[category]}
          <span>${count}</span>
        </button>
      `;
    })
    .join('');
}

function prepareLazyFrame(iframe, url) {
  if (!iframe) return;
  iframe.dataset.src = url;

  iframe.addEventListener('load', () => {
    const shell = iframe.closest('.iframe-shell');
    if (shell) shell.classList.add('is-loaded');
  }, { once: true });
}

function loadFrame(iframe) {
  if (!iframe || iframe.src || !iframe.dataset.src) return;
  iframe.src = iframe.dataset.src;
}

let frameObserver;

function observeLazyFrames() {
  const frames = document.querySelectorAll('iframe.lazy-project-frame[data-src]');

  if (!('IntersectionObserver' in window)) {
    frames.forEach(loadFrame);
    return;
  }

  if (!frameObserver) {
    frameObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadFrame(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '350px 0px' });
  }

  frames.forEach((frame) => {
    if (!frame.src) frameObserver.observe(frame);
  });
}

function createProjectCard(project, index) {
  const fragment = els.template.content.cloneNode(true);
  const card = fragment.querySelector('.project-card');
  const iframe = fragment.querySelector('iframe');
  const previewOpen = fragment.querySelector('.preview-open');
  const detailsButton = fragment.querySelector('.details-button');
  const visitButton = fragment.querySelector('.visit-button');

  card.dataset.projectId = project.id;

  fragment.querySelector('.project-index').textContent =
    String(index + 1).padStart(2, '0');

  fragment.querySelector('.tag').textContent = project.tag;
  fragment.querySelector('.project-category').textContent =
    categoryLabels[project.category] || project.category;

  fragment.querySelector('h3').textContent = project.title;
  fragment.querySelector('.project-info > p').textContent = project.desc;

  fragment.querySelector('.project-techs').innerHTML =
    project.techs.map((tech) => `<span>${tech}</span>`).join('');

  iframe.title = `Prévia do site ${project.title}`;
  prepareLazyFrame(iframe, project.url);

  visitButton.href = project.url;
  visitButton.setAttribute('aria-label', `Abrir o projeto ${project.title}`);

  const openDetails = () => openProjectModal(project);
  previewOpen.addEventListener('click', openDetails);
  detailsButton.addEventListener('click', openDetails);

  return fragment;
}

function renderProjects() {
  if (!els.grid || !els.template) return;

  const filtered = getFilteredProjects();
  const visibleProjects = filtered.slice(0, state.visible);

  els.grid.innerHTML = '';

  visibleProjects.forEach((project, index) => {
    els.grid.appendChild(createProjectCard(project, index));
  });

  if (els.visibleCount) els.visibleCount.textContent = filtered.length;
  if (els.emptyState) els.emptyState.hidden = filtered.length > 0;

  if (els.loadMore) {
    els.loadMore.hidden =
      filtered.length <= state.visible || filtered.length === 0;
  }

  if (els.clearFilters) {
    els.clearFilters.hidden =
      state.filter === 'todos' &&
      state.search === '' &&
      state.sort === 'recentes';
  }

  observeLazyFrames();
  observeRevealElements();
}

function resetProjectView() {
  state.visible = 9;
  renderProjects();
}

function clearProjectFilters() {
  state.filter = 'todos';
  state.search = '';
  state.sort = 'recentes';

  if (els.search) els.search.value = '';
  if (els.sort) els.sort.value = 'recentes';

  createFilters();
  resetProjectView();
}

function openProjectModal(project) {
  if (!els.modal || !project) return;

  const modalPreview = document.getElementById('modalPreview');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalCategory = document.getElementById('modalCategory');
  const modalTechs = document.getElementById('modalTechs');
  const modalVisit = document.getElementById('modalVisit');
  const modalQuote = document.getElementById('modalQuote');

  let hostname = project.url;

  try {
    hostname = new URL(project.url).hostname;
  } catch (error) {
    hostname = project.url;
  }

  if (modalPreview) {
    modalPreview.innerHTML = `
      <div class="modal-browser-bar">
        <span></span><span></span><span></span>
        <small>${hostname}</small>
      </div>
      <iframe
        src="${project.url}"
        title="Prévia ampliada do site ${project.title}"
        loading="lazy"
      ></iframe>
    `;
  }

  if (modalTag) modalTag.textContent = project.tag;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDescription) modalDescription.textContent = project.desc;

  if (modalCategory) {
    modalCategory.textContent =
      categoryLabels[project.category] || project.category;
  }

  if (modalTechs) {
    modalTechs.innerHTML =
      project.techs.map((tech) => `<span>${tech}</span>`).join('');
  }

  if (modalVisit) modalVisit.href = project.url;

  if (modalQuote) {
    modalQuote.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(
        `Olá, Lucas! Gostei do projeto ${project.title} e quero um orçamento para um site semelhante.`
      );
  }

  els.modal.classList.add('open');
  els.modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const closeButton = els.modal.querySelector('.modal-close');
  if (closeButton) closeButton.focus();
}

function closeProjectModal() {
  if (!els.modal) return;

  els.modal.classList.remove('open');
  els.modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  const modalPreview = document.getElementById('modalPreview');
  if (modalPreview) modalPreview.innerHTML = '';
}

function setupProjectControls() {
  if (els.filters) {
    els.filters.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-filter]');
      if (!button) return;

      state.filter = button.dataset.filter;
      createFilters();
      resetProjectView();
    });
  }

  if (els.search) {
    els.search.addEventListener('input', (event) => {
      state.search = event.target.value;
      resetProjectView();
    });
  }

  if (els.sort) {
    els.sort.addEventListener('change', (event) => {
      state.sort = event.target.value;
      resetProjectView();
    });
  }

  if (els.loadMore) {
    els.loadMore.addEventListener('click', () => {
      state.visible += 6;
      renderProjects();
    });
  }

  if (els.clearFilters) {
    els.clearFilters.addEventListener('click', clearProjectFilters);
  }

  if (els.emptyClearButton) {
    els.emptyClearButton.addEventListener('click', clearProjectFilters);
  }

  if (els.modal) {
    els.modal.addEventListener('click', (event) => {
      if (event.target.closest('[data-close-modal]')) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      els.modal &&
      els.modal.classList.contains('open')
    ) {
      closeProjectModal();
    }
  });

  if (els.featuredButton) {
    els.featuredButton.addEventListener('click', () => {
      openProjectModal(getFeaturedProject());
    });
  }
}

function setupNavigation() {
  if (!els.menuBtn || !els.nav) return;

  els.menuBtn.addEventListener('click', () => {
    const open = els.nav.classList.toggle('open');

    els.menuBtn.classList.toggle('open', open);
    els.menuBtn.setAttribute('aria-expanded', String(open));
    els.menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  els.nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      els.nav.classList.remove('open');
      els.menuBtn.classList.remove('open');
      els.menuBtn.setAttribute('aria-expanded', 'false');
      els.menuBtn.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

function setupScrollUI() {
  const update = () => {
    const scrollTop = window.scrollY;
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

    if (els.progress) {
      els.progress.style.width = `${Math.min(progress, 100)}%`;
    }

    if (els.header) {
      els.header.classList.toggle('scrolled', scrollTop > 20);
    }

    if (els.backToTop) {
      els.backToTop.classList.toggle('visible', scrollTop > 650);
    }
  };

  window.addEventListener('scroll', update, { passive: true });
  update();

  if (els.backToTop) {
    els.backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

let revealObserver;

function observeRevealElements() {
  const items = document.querySelectorAll('.reveal:not(.visible)');

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -45px'
    });
  }

  items.forEach((item) => revealObserver.observe(item));
}

function animateNumber(element, target, suffix = '') {
  const duration = 1150;
  const start = performance.now();

  const tick = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    element.textContent =
      `${Math.round(target * eased)}${suffix}`;

    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function setupCounters() {
  const categories =
    new Set(projects.map((project) => project.category)).size;

  const counters =
    document.querySelectorAll('[data-stat], [data-stat-number]');

  const run = (element) => {
    if (element.dataset.animated === 'true') return;

    element.dataset.animated = 'true';

    let target = 0;

    if (element.dataset.stat === 'projects') {
      target = projects.length;
    } else if (element.dataset.stat === 'categories') {
      target = categories;
    } else {
      target = Number(element.dataset.statNumber || 0);
    }

    animateNumber(
      element,
      target,
      element.dataset.statSuffix || ''
    );
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(run);
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      run(entry.target);
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

function setupFaq() {
  document.querySelectorAll('.faq-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;

      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        openItem.classList.remove('open');

        const openButton = openItem.querySelector('button');
        if (openButton) {
          openButton.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function setupContactForm() {
  if (!els.form) return;

  els.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(els.form);

    const name = String(data.get('name') || '').trim();
    const business = String(data.get('business') || '').trim();
    const service = String(data.get('service') || '').trim();
    const budget =
      String(data.get('budget') || 'Não informado').trim();

    const message =
      String(data.get('message') || '').trim() ||
      'Ainda vou detalhar a ideia.';

    const whatsappMessage = [
      `Olá, Lucas! Meu nome é ${name}.`,
      `Empresa/segmento: ${business}.`,
      `Projeto desejado: ${service}.`,
      `Faixa de investimento: ${budget}.`,
      `Sobre a ideia: ${message}`
    ].join('\n\n');

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(url, '_blank', 'noopener');
  });
}

function setupCursorGlow() {
  if (
    !els.cursorGlow ||
    !window.matchMedia('(pointer: fine)').matches
  ) {
    return;
  }

  window.addEventListener('pointermove', (event) => {
    els.cursorGlow.style.transform =
      `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  }, { passive: true });
}

function finishLoading() {
  if (!els.loader) return;
  els.loader.classList.add('is-hidden');
}

function initialize() {
  try {
    createFilters();
    renderProjects();
    setupProjectControls();
    setupNavigation();
    setupScrollUI();
    setupCounters();
    setupFaq();
    setupContactForm();
    setupCursorGlow();
    observeRevealElements();
    observeLazyFrames();

    const year = document.getElementById('currentYear');
    if (year) year.textContent = new Date().getFullYear();

    window.setTimeout(finishLoading, 550);
  } catch (error) {
    console.error('Erro ao iniciar o portfólio:', error);
    finishLoading();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize, { once: true });
} else {
  initialize();
}
