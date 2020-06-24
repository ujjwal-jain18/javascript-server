import * as express from 'express';
import Iconfig from './config/Iconfig';
import * as bodyParser from 'body-parser';
import notFound from './libs/Routes/notFoundRoute';
import ErrorHandler from './libs/Routes/ErrorHandler';
import router from './Router';
import Database from './libs/Database';
import configuration from './config/configuration';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';

const {MongoUri} = configuration;
class Server {
  app: express.Application;
  constructor(private config: Iconfig) {
    this.app = express();
  }
  bootstrap(): Server  {
    this.BodyParser();
    this.setupRoutes();
    return this;
  }
  initSwagger = () => {
    const options = {
      definition: {
        info : {
          title: 'Javascript-Server API',
          version: '1.0.0',
        },
        securityDefinitions: {
          Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'headers'
          }
        }
      },
      basepath: '/api',
      swagger: '^2.0',
      apis: ['./dist/src/controllers/**/Routes.js'],
    };
    const swaggerSpec = swaggerJsDoc(options);
    return swaggerSpec;
  }
   BodyParser(): void {
   // parse application/x-www-form-urlencoded
   this.app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
   this.app.use(bodyParser.json());
  }

  setupRoutes(): any {
    this.app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
    this.app.get('/health-check', (req: express.Request, res: express.Response) => {
      res.send('I am OK');
    }
  );
    this.app.use('/api', router);
    this.app.use(notFound);
    this.app.use(ErrorHandler);
  }
  run(): Server {
    Database.open ( MongoUri )
    .then((msg) => {
      console.log(msg);
      this.app.listen(this.config.port, (err: any) => {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log(`server is running on ${this.config.port}`);
      });
    }).catch((err)  => {
        console.log(err);
      });
  return this;
    }
}
export default Server;
