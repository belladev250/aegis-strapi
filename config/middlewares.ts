module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      // origin: ['https://aegiswb.netlify.app',''], 
      origin: ['http://localhost:3000', 'https://aegiswb.netlify.app'], 

      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: '*',
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
