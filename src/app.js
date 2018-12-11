export const routes = {
  '/': { label: 'Home', url: '/', selector: 'home-page', el: '' },
  '/about': { label: 'About', url: '/about', selector: 'about-page', el: '' }
};

export const navigate = async (path) => {
  const page = path === '/' ? '/' : path.slice(1);
  await load(page);
};

export const load = async (route) => {
  switch (route) {
    case '/':
      await import('./pages/home');
      break;
    case 'about':
      await import('./pages/about');
      break;
    default:
      await import('./pages/not-found');
      break;
  }
}

export const generateHeroTransitionAnimation = (toNode, fromNode, toPage, fromPage) => {
  const fromRect = fromNode.getBoundingClientRect();
  const toRect = toNode.getBoundingClientRect();
  const deltaLeft = fromRect.left - toRect.left;
  const deltaTop = fromRect.top - toRect.top;
  const deltaWidth = fromRect.width / toRect.width;
  const deltaHeight = fromRect.height / toRect.height;

  const duration = 250;
  const animationTimingConfig = {
    fill: 'forwards',
    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    duration: duration
  };
  const frames = [
    { 'transform': 'translate(' + deltaLeft + 'px,' + deltaTop + 'px) scale(' + deltaWidth + ',' + deltaHeight + ')'},
    { 'transform': 'none'}
  ];
  
  toNode.style['transformOrigin'] = '0 0';
  toPage.style.zIndex = 10000;
  toPage.style.visibility = 'visible';
  fromPage.style.visibility = 'hidden';

  // fromPage.animate([
  //   { 'opacity': 1 },
  //   { 'opacity': 0 }
  // ], animationTimingConfig);
  toNode.animate(frames, animationTimingConfig);
}

export const generatePageTransitionAnimation = (node, direction = 'forwards') => {
  const duration = 250;
  const baseFrame = { 'transform': 'none', 'opacity': 1 };
  const modFrame = { 'transform': 'translate(0px,-50px)', 'opacity': 0 };
  const animationTimingConfig = {
    fill: 'forwards',
    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    duration: duration
  };
  let frames;

  if (direction === 'forwards') {
    frames = [modFrame, baseFrame];
  } else {
    frames = [baseFrame, modFrame]
  }

  node.animate(frames, animationTimingConfig);
}

export const generateBaseLoadAnimation = (node, direction = 'forwards') => {
  const duration = 250;
  const baseFrame = { 'opacity': 1 };
  const modFrame = { 'opacity': 0 };
  const animationTimingConfig = {
    fill: 'forwards',
    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    duration: duration
  };
  let frames;

  if (direction === 'forwards') {
    frames = [modFrame, baseFrame];
  } else {
    frames = [baseFrame, modFrame]
  }

  node.animate(frames, animationTimingConfig);
}