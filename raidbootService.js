const plans = [
      { 
        raiders: 5,
        price: 50
       },
      {
         raiders: 6, 
         price: 60
        },
      { 
        raiders: 7, 
        price: 70
      },
      { 
        raiders: 8, 
        price: 80
      },
      { 
        raiders: 9,
        price: 90
      },
      { 
        raiders: 10, 
        price: 100
      },
      { 
        raiders: 12, 
        price: 120
      },
      { 
        raiders: 15, 
        price: 150
      },
      { 
        raiders: 18, 
        price: 180
      },
      { 
        raiders: 20, 
        price: 200
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
        <button onclick="window.location.href='https://t.me/+YourGroupLink'">Join Telegram</button>
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