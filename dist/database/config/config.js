"use strict";

require('dotenv').config();
module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres"
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwidXJsIiwicHJvY2VzcyIsImVudiIsIkRFVl9EQVRBQkFTRV9VUkwiLCJkaWFsZWN0IiwidGVzdCIsIlRFU1RfREFUQUJBU0VfVVJMIiwiZGlhbGVjdE9wdGlvbnMiLCJzc2wiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJwcm9kdWN0aW9uIiwiREFUQUJBU0VfVVJMIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RhdGFiYXNlL2NvbmZpZy9jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRldmVsb3BtZW50OiB7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5ERVZfREFUQUJBU0VfVVJMLFxuICAgIGRpYWxlY3Q6IFwicG9zdGdyZXNcIixcbiAgfSxcbiAgdGVzdDoge1xuICAgIHVybDogcHJvY2Vzcy5lbnYuVEVTVF9EQVRBQkFTRV9VUkwsXG4gICAgZGlhbGVjdDogXCJwb3N0Z3Jlc1wiLFxuICAgIGRpYWxlY3RPcHRpb25zOiB7XG4gICAgICBzc2w6IHtcbiAgICAgICAgcmVxdWlyZTogdHJ1ZSxcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcHJvZHVjdGlvbjoge1xuICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICAgIGRpYWxlY3Q6IFwicG9zdGdyZXNcIixcbiAgICBkaWFsZWN0T3B0aW9uczoge1xuICAgICAgc3NsOiB7XG4gICAgICAgIHJlcXVpcmU6IHRydWUsXG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59OyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7QUFFMUJDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2ZDLFdBQVcsRUFBRTtJQUNYQyxHQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7SUFDakNDLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsSUFBSSxFQUFFO0lBQ0pMLEdBQUcsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNJLGlCQUFpQjtJQUNsQ0YsT0FBTyxFQUFFLFVBQVU7SUFDbkJHLGNBQWMsRUFBRTtNQUNkQyxHQUFHLEVBQUU7UUFDSGIsT0FBTyxFQUFFLElBQUk7UUFDYmMsa0JBQWtCLEVBQUU7TUFDdEI7SUFDRjtFQUNGLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZWLEdBQUcsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNTLFlBQVk7SUFDN0JQLE9BQU8sRUFBRSxVQUFVO0lBQ25CRyxjQUFjLEVBQUU7TUFDZEMsR0FBRyxFQUFFO1FBQ0hiLE9BQU8sRUFBRSxJQUFJO1FBQ2JjLGtCQUFrQixFQUFFO01BQ3RCO0lBQ0Y7RUFDRjtBQUNGLENBQUMifQ==