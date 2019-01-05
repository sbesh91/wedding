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

const generateBaseHero = (toNode, fromNode, duration) => {
  const fromRect = fromNode.getBoundingClientRect();
  const toRect = toNode.getBoundingClientRect();
  const deltaLeft = fromRect.left - toRect.left;
  const deltaTop = fromRect.top - toRect.top;
  const deltaWidth = fromRect.width / toRect.width;
  const deltaHeight = fromRect.height / toRect.height;

  const animationTimingConfig = {
    fill: 'forwards',
    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    duration: duration,
    delay: 150
  };

  const clipStart = 'inset(10% 5% 10% 5%)';
  const clipEnd = 'inset(-6px -6px -6px -6px)';

  const frames = [
    { 
      'transform': 'translate(' + deltaLeft + 'px,' + deltaTop + 'px) scale(' + deltaWidth + ',' + deltaHeight + ')',
      'opacity': .75,
      'clipPath': clipStart,
      '-webkitClipPath': clipStart
    },
    { 
      'transform': 'none',
      'opacity': 1,
      'clipPath': clipEnd,
      '-webkitClipPath': clipEnd
    }
  ];
  
  return { frames, animationTimingConfig };
}

export const generateHeroTransitionAnimation = (toNode, fromNode, toPage, fromPage) => {
  const config = generateBaseHero(toNode, fromNode, 250);
  
  toNode.style['transformOrigin'] = '0 0';
  toPage.style.zIndex = 10000;
  toPage.style.visibility = 'visible';
  fromPage.style.visibility = 'hidden';

  toNode.animate(config.frames, config.animationTimingConfig);
}

export const generateHeroOverlayAnimation = (toNode, fromNode, parentNode) => {
  const config = generateBaseHero(toNode, fromNode, 350);
  
  toNode.style['transformOrigin'] = '0 0';
  toNode.style.zIndex = 10000;
  toNode.style.pointerEvents = 'auto';
  parentNode.style.filter = 'blur(5px)';
  parentNode.style.opacity = .8;
  

  toNode.animate(config.frames, config.animationTimingConfig);
}

export const generatePageTransitionAnimation = (node, direction = 'forwards') => {
  const duration = 350;
  const baseFrame = { 'transform': 'none', 'opacity': 1 };
  const modFrame = { 'transform': 'translate(0px,-50px)', 'opacity': 0 };
  const animationTimingConfig = {
    fill: 'both',
    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    duration: duration
  };
  let frames;

  if (direction === 'forwards') {
    frames = [modFrame, baseFrame];
  } else {
    frames = [baseFrame, modFrame]
    node.style.pointerEvents = 'none';
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