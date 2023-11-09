import express, { Router, Express } from 'express';
import HomeController from '../controllers/homeController';

const Routers: Router = express.Router();

const InitWeb = (app: Express) => {

    // method Get
    Routers.get('/getAllUser', HomeController.getAllUser);
    Routers.get('/getCourse', HomeController.GetCourse);
    Routers.get('/GetLessonList', HomeController.GetLessonList);
    Routers.get('/GetContentLession', HomeController.GetContentLession);
    Routers.get('/GetAllUserInpormation', HomeController.GetAllUserInpormation);
    Routers.get('/GetTableParagraph', HomeController.GetTableParagraph);
    Routers.get('/GetTableParagraphHearFrom', HomeController.GetTableParagraphHearFrom);
    Routers.get('/GetTableLessonListElocution', HomeController.GetTableLessonListElocution);
    Routers.get('/GetTableContentLessionElocution', HomeController.GetTableContentLessionElocution);
    Routers.get('/GetTableContentLessionElocutionArrangeStructures', HomeController.GetTableContentLessionElocutionArrangeStructures);


    // method Post
    Routers.post('/login', HomeController.Login);
    Routers.post('/PostUpdateUserInpormation', HomeController.PostUpdateUserInpormation);
    Routers.post('/PostUpdatePointOfUser', HomeController.PostUpdatePointOfUser);
    Routers.post('/PostRegisterNewUser', HomeController.PostRegisterNewUser);


    //__________________________
    return app.use('/api', Routers);
}

export default InitWeb;