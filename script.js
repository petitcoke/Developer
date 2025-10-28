document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Functionality
    const mobileMenuHandler = () => {
      const menuToggle = document.querySelector('.menu-toggle');
      const mainNav = document.querySelector('.main-nav');
      
      if (!menuToggle || !mainNav) return;
  
      // Toggle Menu
      const toggleMenu = (e) => {
        e.stopPropagation();
        mainNav.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', 
          mainNav.classList.contains('active'));
      };
  
      // Close Menu on Click Outside
      const closeMenu = (e) => {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
          mainNav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      };
  
      // Event Listeners
      menuToggle.addEventListener('click', toggleMenu);
      document.addEventListener('click', closeMenu);
      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') closeMenu(e);
      });
  
      // Handle Window Resize
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
          mainNav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    };
  
    // Initialize Mobile Menu
    mobileMenuHandler();
  
    // Initialize Lucide Icons
    lucide.createIcons();
  
    // Scroll-Spy Functionality
    const scrollSpyHandler = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
  
      const onScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        sections.forEach(sec => {
          const id = sec.id;
          const isActive = scrollPosition >= sec.offsetTop && 
                          scrollPosition < sec.offsetTop + sec.offsetHeight;
  
          navLinks.forEach(link => {
            link.classList.toggle('active', 
              link.getAttribute('href') === `#${id}` && isActive
            );
          });
        });
      };
  
      window.addEventListener('scroll', onScroll);
      onScroll(); // Initial check
    };
  
    scrollSpyHandler();
  
    // Filter Button Functionality
    const filterButtonsHandler = () => {
      const filterButtons = document.querySelectorAll('.filter-buttons button');
      const workItems = document.querySelectorAll('.work-item');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to the clicked button
          button.classList.add('active');
  
          const filter = button.textContent.toLowerCase(); // Get filter category
  
          workItems.forEach(item => {
            const category = item.getAttribute('data-category');
            // Show item if filter matches or "All" is selected
            if (filter === 'all' || category === filter) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    };
  
    filterButtonsHandler();
  
    // Skill Bar Animations
    const animateSkillBars = () => {
      document.querySelectorAll('.skill-progress').forEach(el => {
        const pct = Math.max(0, Math.min(100, parseInt(el.dataset.percentage)));
        el.style.width = `${pct}%`;
      });
    };
  
    animateSkillBars();
});
