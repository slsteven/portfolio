var Data = {
  about: {
    backgroundImage: 'img/hero_background.png',
    hello: 'Persistence wears down resistance.',
    image: 'img/default.jpg',
    name: 'Steven Lam',
    subtitle: 'Full-Stack Web Developer / Entrepreneur',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni totam ratione id harum consectetur veritatis! Ipsum assumenda, iure totam facilis odit minus, fuga voluptatum vel soluta, culpa itaque praesentium nobis.',
    text2: 'www.InkLaundry.com - Small business that designs and creates custom apparel'
  },
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
  tech: 'APIs: Twilio and Stripe Payment',
  websiteUrl: 'Borrow',
};
Data.portfolio.items['VentureScore'] = {
  appStoreUrl: null,
  description: 'An alogorithm that determines how fit a person is for a location based on their interests.',
  count:    0,
  id:       'VentureScore',
  imageUrl: 'img/dunzo.png',
  name:     'VentureScore',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'Ruby on Rails',
  subtitle2: 'Emirates Travel hackathon.',
  tech: 'APIs: Google(maps, distance matrix, POI), Twitter passport, and Xola',
  websiteUrl: 'www.emirateshackathon.com',
};
Data.portfolio.items['ClassR'] = {
  appStoreUrl: null,
  description: 'A website for teachers to share curriculum with each other. Teachers can pick and pull content to create and improve their own master plan.',
  count:    0,
  id:       'ClassR',
  imageUrl: '',
  name:     'ClassR',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'Ruby on Rails',
  subtitle2: '2015 HackingEdu hackathon.',
  tech: 'APIs: chegg, target, facebook login.',
  websiteUrl: 'http://hackingedu.co',
};
Data.portfolio.items['AlgoApp'] = {
  appStoreUrl: null,
  description: 'A database of algorithms with various solutions posted by a community.',
  count:    0,
  id:       'AlgoApp',
  imageUrl: 'img/algo_app.png',
  name:     'AlgoApp',
  style: {
    backgroundColor: 'rgb(207, 4, 4)'
  },
  subtitle: 'MongoDB / Express / AngularJS / Node',
  tech: 'APIs: Facebook O-auth and ckeditor',
  websiteUrl: '#',
};
Data.portfolio.items['RideSnap'] = {
  appStoreUrl: 'null',
  description: 'Buy and sell cars without the hassle of going to a dealership or doing it yourself.',
  count:    0,
  id:       'RideSnap',
  imageUrl: 'img/black_logo.png',
  name:     'RideSnap',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'Ruby on Rails',
  subtitle2: "Hackamotive'15 hackathon",
  tech: 'APIs: Edmunds and Carvoyant',
  websiteUrl: 'http://www.hackomotive.com',
};
Data.portfolio.items['Tabbs'] = {
  appStoreUrl: null,
  description: 'Text message between you and any local business. Make dinner reservations, book hair appointments, get prices, and check in-store availability all without ever placing a phone call.',
  count:    0,
  id:       'Tabbs',
  imageUrl: 'img/flashingdeals.png',
  name:     'Tabbs',
  style: {
    backgroundColor: 'rgb(214, 249, 255)'
  },
  subtitle: 'Ruby on Rails',
  websiteUrl: '#',
};


//add info for portfolio
// Who you are

//  What kind of work you do

//  How you do that work

//  Where you want to go next

//  And who YOU really want to work with.
