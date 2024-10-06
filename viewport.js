const x = document.querySelectorAll('main');

const y = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
});

x.forEach(main => {
    y.observe(main);
});



//New viewport
const a = document.querySelectorAll('aside');

const b = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view-now');
        }
    });
});

a.forEach(aside => {
    b.observe(aside);
});



//New viewport vice-versa
const d = document.querySelectorAll('.reverse');

const e = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view-reverse');
        }
    });
});

d.forEach(f => {
    e.observe(f);
});



 //New viewport
 const v = document.querySelectorAll('.image');

 const u = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('in-view-img');
         }
     });
 });

 v.forEach(c => {
     u.observe(c);
 });

 //New viewport
 const g = document.querySelectorAll('.image-reverse');

 const h = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('in-view-img-reverse');
         }
     });
 });

 g.forEach(i => {
     h.observe(i);
 });