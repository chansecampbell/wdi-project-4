module.exports = {
  'port': process.env.PORT || 3000,
  'secret': process.env.JWT_SECRET || "Acjhw338tw0@E*¢®^€∆sw2",
  'database': process.env.MONGODB_URI || 'mongodb://localhost:27017/hello-world-p4',
  'appUrl': 'http://localhost:3000',
  'oauth': {
    'facebook': {
      'accessTokenUrl': 'https://graph.facebook.com/v2.5/oauth/access_token',
      'profileUrl': 'https://graph.facebook.com/v2.5/me?fields=id,email,first_name,last_name,birthday,location,picture.width(300)'
      // 'profileUrl': 'https://graph.facebook.com/v2.5/me?fields=id,email,name,picture.width(300)'
    }
  }
};
