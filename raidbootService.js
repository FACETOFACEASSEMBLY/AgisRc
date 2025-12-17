const plans = [
      { 
        raiders: 5,
        price: 50,
        link: 'https://t.me/+q8kjChOhn7o2MWQ0'
       },
      {
         raiders: 6, 
         price: 60,
         link: 'https://t.me/+BeHBSEn_xP4wMmY0'
        },
      { 
        raiders: 7, 
        price: 70,
        link: 'https://t.me/+reuKzK1zyqMzMGJk'
      },
      { 
        raiders: 8, 
        price: 80,
        link: 'https://t.me/+dolxP3Erna5hM2E0'
      },
      { 
        raiders: 9,
        price: 90,
        link: 'https://t.me/+Xg1vK5pMaoAxMTNk'
      },
      { 
        raiders: 10, 
        price: 100,
        link: 'https://t.me/+yZUBQzhSIVZkZGZk'
      },
      { 
        raiders: 12, 
        price: 120,
        link: 'https://t.me/+VFPE8fcpcoVhYTY8'
      },
      { 
        raiders: 15, 
        price: 150,
        link: 'https://t.me/+Wamvc_HfXjY2ZmRk'
      },
      { 
        raiders: 18, 
        price: 180,
        link: 'https://t.me/+3H2gu7PSb2s1ZDQ0'
      },
      { 
        raiders: 20, 
        price: 200,
        link: 'https://t.me/+f1WUWpqU4D5hNTc8'
      }
    ];





    const grid = document.querySelector('.plans-grid');

    plans.forEach(plan => {
      const card = document.createElement('div');
      card.className = 'plan-card';

      card.innerHTML = `
        <h3>${plan.raiders} Raiders</h3>
        <p>Professional raid boost service</p>
        <p class="price">${plan.price.toLocaleString('en-US', {
          style: "currency",
          currency: "USD"
        })}/wk</p>
        <button onclick="window.location.href='${plan.link}'">Join Telegram</button>
      `;

      grid.appendChild(card);
    });

    const cards = document.querySelectorAll('.plan-card');
    const revealOnScroll = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) card.classList.add('visible');
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
