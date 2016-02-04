var Data = {
  about: {
    backgroundImage: 'img/hero_background.jpg',
    hello: 'Persistence wears down resistance.',
    image: 'img/default.jpg',
    name: 'Steven Lam',
    subtitle: 'Full-Stack Web Developer / Entrepreneur'},

  contact: {
    items: []
  },
  images: {
    empty: 'img/empty.png'
  },
  layout: {
    footer: {
      copyright: 'Quantum Ventures'
    },
    title: 'Steven'
  },
  portfolio: {
    items: []
  }
};

module.exports = Data;

Data.contact.items['facebook'] = {
  href:     'https://www.facebook.com/slam1',
  imageUrl: 'img/facebook.png',
  name:     'Facebook'
}
Data.contact.items['twitter'] = {
  href:     'https://twitter.com',
  imageUrl: 'img/twitter.png',
  name:     'Twitter'
}
Data.contact.items['linkedin'] = {
  href:     'https://www.linkedin.com/in/slam11',
  imageUrl: 'img/linkedin.png',
  name:     'LinkedIn'
}
Data.contact.items['github'] = {
  href:     'https://github.com/slsteven',
  imageUrl: 'img/github.png',
  name:     'GitHub'
}
Data.contact.items['angellist'] = {
  href:     'https://angel.co/slam1',
  imageUrl: 'img/angellist.png',
  name:     'AngelList'
}
Data.contact.items['email'] = {
  href:     'mailto:slstevenlam@gmail.com',
  imageUrl: 'img/email.png',
  name:     'Email'
}
Data.portfolio.items['Tabbs'] = {
  appStoreUrl: null,
  description: 'Tabbs is a platform that provides real time messaging for businesses and their consumers. The messaging system utilizes Twilios API for sms, and web sockets for client and server communication. In addition, we built a dashboard to allow businesses to schedule events, conduct internal messaging, edit accounts, and analytics based on message response times.',
  count:    0,
  id:       'Tabbs',
  imageUrl: 'img/tabbs.png',
  name:     'Tabbs',
  style: {
    backgroundColor: 'rgb(214, 249, 255)'
  },
  subtitle: 'MEAN Stack',
  subtitle2: 'Mongodb, Javascript, Express.JS, AngularJS, Node.JS, HTML, CSS, Socket.io, Twillio API, Yelp API',
  tech: '*Still in development.*',
  websiteUrl: '',
};


Data.portfolio.items['VentureScore'] = {
  appStoreUrl: null,
  description: 'Application that takes a users destination and personal interests (bars, museums, shopping, transit, etc.) to compute a score on how fit that location might be.',
  count:    0,
  id:       'VentureScore',
  imageUrl: 'img/dunzo.png',
  name:     'VentureScore',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'Ruby on Rails',
  subtitle2: 'Postgres, HTML, CSS, JQuery UI, Materialize,  Google Maps API, Google Distance Matrix API,  Google Places API, XOLA API, Twitter Passport API, Highcharts',
  tech: '',
  websiteUrl: '',
};

Data.portfolio.items['AlgoApp'] = {
  appStoreUrl: null,
  description: 'Platform for sharing coding algorithms along with solutions posted by a community. Similar to Stack Overflow, users can post algos to get help, browse different solutions, leave comments, and upvote or downvote.',
  count:    0,
  id:       'AlgoApp',
  imageUrl: 'img/algoapp.png',
  name:     'AlgoApp',
  style: {
    backgroundColor: 'rgb(224, 137, 137)'
  },
  subtitle: 'MEAN Stack',
  subtitle2: 'MongoDB, Javascript, Express, Angularjs, Node.js, HTML, CSS, Heroku, Mongolabs, Ckeditor, Bootstrap, Facebook O-auth',
  tech: '',
  websiteUrl: '',
};

Data.portfolio.items['Borrow'] = {
  appStoreUrl: null,
  description: 'A structured system to borrow money from friends and family. List your terms, and give your lender the ability to send back a counteroffer.',
  count:    0,
  id:       'Borrow',
  imageUrl: 'img/borrow_final.png',
  name:     'Borrow',
  style: {
    backgroundColor: 'rgb(41, 184, 229)'
  },
  subtitle: 'Python',
  subtitle2: 'Python, Flask, Twillio API, Stripe API',
  websiteUrl: '',
};
Data.portfolio.items['ClassR'] = {
  appStoreUrl: null,
  description: 'A website for teachers to share curriculum with each other. Teachers can pick and pull content to create and improve their own master plan. 3 person project, created for 2015 HackingEdu hackathon.',
  count:    0,
  id:       'ClassR',
  imageUrl: 'img/classr.png',
  name:     'ClassR',
  style: {
    backgroundColor: 'rgb(0, 142, 146)'
  },
  subtitle: 'Ruby on Rails',
  subtitle2: 'APIs: chegg, target, facebook login.',
  tech: '',
  websiteUrl: '',
};

Data.portfolio.items['RideSnap'] = {
  appStoreUrl: null,
  description: 'Buy and sell cars without the hassle of going to a dealership or doing it yourself.',
  count:    0,
  id:       'RideSnap',
  imageUrl: 'img/black_logo.png',
  name:     'RideSnap',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'Ruby on Rails',
  subtitle2: "APIs: Edmunds and Carvoyant",
  tech: '',
};



//add info for portfolio
// Who you are

//  What kind of work you do

//  How you do that work

//  Where you want to go next

//  And who YOU really want to work with.
