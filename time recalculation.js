const StatusInvalidInput = 400
const Success = "Success"
const BadRequest = "Bad Request"

Meteor.methods({
    'accounts.getAccountDetail': function(address) {
        this.unblock(); 
        let url = sanitizeUrl(API + '/auth/accounts/' + address);
        
        try {
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/\\.next/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {}


            let available = HTTP.get(url);
            if (available.statusCode == 200) {
                balance.available = JSON.parse(available.content).balances;

            }
        } catch (e) {
            console.log(url);
            console.log(e)
        }}}
