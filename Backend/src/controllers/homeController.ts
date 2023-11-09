import { Request, Response } from 'express';
import serviceHome from '../services/serviceHome';
const Login = async (req: Request, res: Response): Promise<Response> => {
    let email: string = req.body.email;
    let password: string = req.body.password;
    let data: any = await serviceHome.LoginService(email, password);
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        })
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        })
    }
};


const GetCourse = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.getCourseService();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        })
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        })
    }
};

const GetLessonList = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.getLessonListService();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        })
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        })
    }
};


const GetContentLession = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.GetContentLessionServices();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        })
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        })
    }
}


const GetAllUserInpormation = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.GetAllUserInpormation();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        })
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        })
    }
}


const PostUpdateUserInpormation = async (req: Request, res: Response): Promise<Response> => {

    let id: number = req.body.id;
    let firstName: string = req.body.firstName;
    let lastName: string = req.body.lastName;
    let email: string = req.body.email;
    let password: string = req.body.password;
    let phoneNumber: string = req.body.phoneNumber;
    let img: string = req.body.img;
    let data: any = await serviceHome.PostUpdateUserInpormationServices(id, firstName, lastName, email, password, phoneNumber, img);
    try {
        return res.status(200).json({
            message: "call api success",
            data: data,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            img: img
        });
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        });
    }
}


const GetTableParagraph = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.GetTableParagraphServices();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        });
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        });
    }
}

const PostUpdatePointOfUser = async (req: Request, res: Response): Promise<Response> => {
    let id: number = req.body.id
    let point: string = req.body.point
    let data: any = await serviceHome.PostUpdatePointOfUserServices(id, point);
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        });
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        });
    }
}


const getAllUser = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.getAllUserServices();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        });
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        });
    }
}


const GetTableParagraphHearFrom = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.GetTableParagraphHearFromServices();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        });
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        });
    }
}


const GetTableLessonListElocution = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.GetTableLessonListElocutionServices();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        });
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        });
    }
}


const GetTableContentLessionElocution = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.GetTableContentLessionElocutionServices();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        });
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        });
    }
}
const GetTableContentLessionElocutionArrangeStructures = async (req: Request, res: Response): Promise<Response> => {
    let data: any = await serviceHome.GetTableContentLessionElocutionArrangeStructuresServices();
    try {
        return res.status(200).json({
            message: "call api success",
            data: data
        });
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        });
    }
}

const PostRegisterNewUser = async (req: Request, res: Response): Promise<Response> => {
    let firstName: string = req.body.firstName;
    let lastName: string = req.body.lastName;
    let email: string = req.body.email;
    let password: string = req.body.password;
    let phoneNumber: string = req.body.phoneNumber;
    let img: string = req.body.img;
    let data: any = await serviceHome.PostRegisterNewUserServices(firstName, lastName, email, password, phoneNumber, img);
    try {
        return res.status(200).json({
            message: "call api success",
            data: data,
        });
    } catch (e) {
        return res.status(200).json({
            message: "error",
            error: e
        });
    }
}

export = {
    Login,
    GetCourse,
    GetLessonList,
    GetContentLession,
    GetAllUserInpormation,
    PostUpdateUserInpormation,
    GetTableParagraph,
    PostUpdatePointOfUser,
    getAllUser,
    GetTableParagraphHearFrom,
    GetTableLessonListElocution,
    GetTableContentLessionElocution,
    GetTableContentLessionElocutionArrangeStructures,
    PostRegisterNewUser
};