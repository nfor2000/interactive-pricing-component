const initApp = () => {
     const billings = [
          { plan: 'month', pageviews: '10k', price: 8 },
          { plan: 'month', pageviews: '50k', price: 12 },
          { plan: 'month', pageviews: '100k', price: 16 },
          { plan: 'month', pageviews: '500k', price: 24 },
          { plan: 'month', pageviews: '1m', price: 36 }]

     let newBillings = [...billings]
     let index = 0;

     const billingToggler = document.getElementById('toggler')
     const plan = document.getElementById('plan')
     const planMobile = document.getElementById('plan-mobile')
     const pageviews = document.getElementById('pageviews')
     const billing = document.getElementById('billing')
     const billingMobile = document.getElementById('billing-mobile')
     const progressBar = document.getElementById('progress-bar');

     const renderPricing = (index) => {
          billing.innerHTML = `$${newBillings[index].price}`
          plan.innerHTML = `/${newBillings[index].plan}`
          billingMobile.innerHTML = `$${newBillings[index].price}`
          planMobile.innerHTML = `/${newBillings[index].plan}`
          pageviews.innerHTML = `${newBillings[index].pageviews} Views`
     }

     const setProgress = () => {
          let width = index/(billings.length - 1) * 100;
          progressBar.style.width = `${width}%`;
     }

     renderPricing(index);
     setProgress()

     billingToggler.addEventListener('change', function () {
          if (this.checked) {
               newBillings = billings.map(billing => {
                    billing = { ...billing, plan: 'year', price: (billing.price / 100) * 25 * 12 };

                    return billing
               })

          } else {
               newBillings = [...billings]
          }

          renderPricing(index)
     })

     const slider = document.getElementById('slider')
     const entries = document.querySelectorAll('.empty')
     const sliderMobile = document.getElementById('slider-mobile')

     const dragStart = (e) => {
          e.currentTarget.classList.add('dragged');
     }

     const dragEnd = (e) => {
          e.currentTarget.classList.remove('dragged');
     }

     const dragOver = (e) => {
          e.preventDefault();
     }

     const dragEnter = (e) => {
          e.preventDefault();
          e.currentTarget.classList.add('opac');
     }

     const dragLeave = (e) => {
          e.currentTarget.classList.remove('opac');
     }

     const dragDrop = (e) => {
          const target = e.currentTarget;
          index = +target.dataset.index;
          target.classList.remove('opac');
          target.appendChild(slider);
          renderPricing(index);
          setProgress();
     }

     slider.addEventListener('dragstart', dragStart)
     slider.addEventListener('dragend', dragEnd)

     for(const entry of entries) {
          entry.addEventListener('dragover', dragOver);
          entry.addEventListener('dragenter', dragEnter);
          entry.addEventListener('drop', dragDrop);
          entry.addEventListener('dragleave', dragLeave);
     }
}

document.addEventListener('DOMContentLoaded', initApp)