import * as express from 'express';
import Iconfig from './config/Iconfig';
import * as bodyParser from 'body-parser';
import notFound from './libs/Routes/notFoundRoute';
import ErrorHandler from './libs/Routes/ErrorHandler';
class Server {
  app: express.Application;
  constructor(private config: Iconfig) {
    this.app = express();
  }
  bootstrap(): Server  {
    this.setupRoutes();
    this.BodyParser();
    return this;
  }
   BodyParser(): void {
   // parse application/x-www-form-urlencoded
   this.app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
   this.app.use(bodyParser.json());
  }

  setupRoutes(): void {
    this.app.get('/health-check', (req: express.Request, res: express.Response) => {
      res.send('I am OK');
    }
  );
    this.app.use(notFound);
    this.app.use(ErrorHandler);
  }
  run(): Server {
    this.app.listen(this.config.port, (err: any) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(`server is running on ${this.config.port}`);
    });
    return this;
  }
}
export default Server;
