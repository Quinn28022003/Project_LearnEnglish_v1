
import connectDB from '../config/connectDB';

interface container {
    message: string,
    messageError: number,
    isLogin: boolean,
    data: any
}

const LoginService = (email: string, password: string) => {
    return new Promise(async (resolve, reject) => {
        try {

            let container: container = {
                message: "",
                messageError: 0,
                isLogin: false,
                data: {
                    id: 0,
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    image: "",
                    point: ""
                },

            };
            const connection = await connectDB();
            const [rowsEmail, fields] = await connection.execute('SELECT * FROM `USERS` WHERE email= ? ', [email]);
            if (rowsEmail.length > 0) {
                const [rowsPassword, fields] = await connection.execute('SELECT * FROM `USERS` WHERE password= ? ', [password]);

                if (rowsPassword.length > 0) {
                    for (let i: number = 0; i < rowsPassword.length; i++) {

                        if (rowsPassword[i].email === rowsEmail[0].email) {
                            container.message = "login success!";
                            container.messageError = 0;
                            container.isLogin = true;
                            container.data.id = rowsEmail[0].id;
                            container.data.firstName = rowsEmail[0].firstName;
                            container.data.lastName = rowsEmail[0].lastName;
                            container.data.email = rowsEmail[0].email;
                            container.data.phoneNumber = rowsEmail[0].phoneNumber;
                            container.data.image = rowsEmail[0].img;
                            container.data.point = rowsEmail[0].point;

                            resolve(container);
                        };
                    };
                } else {
                    container.message = "email and password already exist";
                    container.messageError = 1;
                    container.isLogin = false;
                    container.data = {};
                    resolve(container);
                };
            } else {
                container.message = "email and password already exist";
                container.messageError = 1;
                container.isLogin = false;
                container.data = {};
                resolve(container);
            };
        } catch (e) {
            reject(e);
        };
    });
};


const getCourseService = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT * FROM `COURSE`');
            resolve(rows);
        } catch (e) {
            reject(e);
        };
    });
};


const getLessonListService = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT * FROM `LESSON_LIST`');
            resolve(rows);
        } catch (e) {
            reject(e);
        };
    });
};

const GetContentLessionServices = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT * FROM `content_lession`');
            resolve(rows)
        } catch (e) {
            reject(e);
        };
    });
};


const GetAllUserInpormation = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT * FROM `USERS`');
            resolve(rows);
        } catch (e) {
            reject(e);
        };
    });
};


const PostUpdateUserInpormationServices = (id: number, firstName: string, lastName: string, email: string, password: string, phoneNumber: string, img: string): any => {
    return new Promise(async (resolve, reject) => {
        try {
            let data: data = {
                message: "",
                messageError: 0,
                isLogin: false,
            };
            if (email.trim().slice(-10) === '@gmail.com') {
                const connection = await connectDB();
                const [rows, fields] = await connection.execute('SELECT * FROM `USERS`');
                let isCheckEmail: boolean = false;
                for (let i: number = 0; i < rows.length; i++) {
                    if (rows[i].email !== email) {
                        isCheckEmail = false;
                    } else {
                        isCheckEmail = true;
                        break;
                    };
                }

                if (isCheckEmail === true) {
                    data.message = "email đã tồn tại!";
                    data.messageError = 1;
                    data.isLogin = false;
                    resolve(data);
                } else {
                    if (phoneNumber.trim().length === 10 || phoneNumber.trim().length === 11) {
                        const connection = await connectDB();
                        const [rows, fields] = await connection.execute('SELECT * FROM `USERS`');
                        let isCheckSoDienThoai: boolean = false;
                        for (let i: number = 0; i < rows.length; i++) {
                            if (rows[i].phoneNumber !== phoneNumber) {
                                isCheckSoDienThoai = false;
                            } else {
                                isCheckSoDienThoai = true;
                                break;
                            };
                        }

                        if (isCheckSoDienThoai === true) {
                            data.message = "số điện thoại đã tồn tại!";
                            data.messageError = 2;
                            data.isLogin = false;
                            resolve(data);
                        } else {
                            const connection = await connectDB();
                            const [rows, fields] = await connection.execute('UPDATE USERS SET firstName = ?, lastName= ?, email= ?, password= ?, phoneNumber= ?,img= ? WHERE id = ?', [firstName, lastName, email, password, phoneNumber, img, id]);

                            if (rows) {
                                data.message = "bạn đã tạo tài khoản thành công!";
                                data.messageError = 0;
                                data.isLogin = true;
                                resolve(data);
                            };
                        }
                    } else {
                        resolve('Vui lòng nhập đúng số điện thoại!');
                    };

                };
            } else {
                resolve('Vui lòng nhập đúng Gmail!');
            };
        } catch (e) {
            reject(e);
        };
    });
};


const GetTableParagraphServices = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT * FROM `CONTENT_PARAGRAPH`');
            resolve(rows);
        } catch (e) {
            reject(e);
        };
    });
};

const PostUpdatePointOfUserServices = (id: number, point: string): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute("UPDATE USERS SET point = ? WHERE id = ?", [point, id]);
            resolve(rows);
        } catch (e) {
            reject(e);
        };
    });
};

const getAllUserServices = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT id, firstName, lastName, img, point FROM `USERS`');

            resolve(rows);
        } catch (e) {
            reject(e);
        };
    });
};

const GetTableParagraphHearFromServices = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT * FROM `CONTENT_PARAGRAPH_HEARFROM`');
            resolve(rows);
        } catch (e) {
            reject(e)
        };
    });
};


const GetTableLessonListElocutionServices = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT * FROM `lesson_list_elocution`');
            resolve(rows);
        } catch (e) {
            reject(e)
        };
    });
};

const GetTableContentLessionElocutionServices = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT * FROM `content_lession_elocution`');
            resolve(rows);
        } catch (e) {
            reject(e)
        };
    });
};

const GetTableContentLessionElocutionArrangeStructuresServices = (): any => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connectDB();
            const [rows, fields] = await connection.execute('SELECT * FROM `content_lession_elocution_arrange_structures`');
            resolve(rows);
        } catch (e) {
            reject(e)
        };
    });
};
interface data {
    message: string,
    messageError: number,
    isLogin: boolean,
}
const PostRegisterNewUserServices = (firstName: string | null, lastName: string | null, email: string | null, password: string | null, phoneNumber: string | null, image: string | null): any => {
    return new Promise(async (resolve, reject) => {
        try {
            let data: data = {
                message: "",
                messageError: 0,
                isLogin: false,
            };
            if (firstName && lastName && email && password && phoneNumber && image) {
                if (email.trim().slice(-10) === "@gmail.com") {
                    const connection = await connectDB();
                    const [rows, fields] = await connection.execute('SELECT * FROM `USERS`');
                    let isCheckEmail: boolean = false;
                    for (let i: number = 0; i < rows.length; i++) {
                        if (rows[i].email !== email) {
                            isCheckEmail = false;
                        } else {
                            isCheckEmail = true;
                            break;
                        };
                    }

                    if (isCheckEmail === true) {
                        data.message = "email bị trùng lặp!";
                        data.messageError = 2;
                        data.isLogin = false;
                        resolve(data);
                    } else {

                        if (phoneNumber.trim().length === 10 || phoneNumber.trim().length === 11) {
                            const connection = await connectDB();
                            const [rows, fields] = await connection.execute('SELECT * FROM `USERS`');
                            let isCheckPhoneNumber: boolean = false;

                            for (let i: number = 0; i < rows.length; i++) {
                                if (rows[i].phoneNumber !== phoneNumber) {
                                    isCheckPhoneNumber = false;
                                } else {
                                    isCheckPhoneNumber = true;
                                    break;
                                };
                            }

                            if (isCheckPhoneNumber === true) {
                                data.message = "Phone number bị trùng lặp!";
                                data.messageError = 2;
                                data.isLogin = false;
                                resolve(data);
                            } else {
                                const connection = await connectDB();
                                const [rows, fields] = await connection.execute('INSERT INTO USERS (firstName, lastName, email, password, phoneNumber, img) VALUES (?, ?, ?, ?, ?, ?)',
                                    [firstName, lastName, email, password, phoneNumber, image]);
                                data.message = "Đã đăng ký tài khoản thành công!";
                                data.messageError = 0;
                                data.isLogin = true;
                                resolve(data);
                            }
                        } else {
                            data.message = "Vui lòng nhập số điện thoại đúng!";
                            data.messageError = 1;
                            data.isLogin = false;
                            resolve(data);
                        };
                    }
                } else {
                    data.message = "Vui lòng nhập Gmail đúng!";
                    data.messageError = 1;
                    data.isLogin = false;
                    resolve(data);
                };
            };

        } catch (e) {
            reject(e)
        };
    });
}


export = {
    LoginService,
    getCourseService,
    getLessonListService,
    GetContentLessionServices,
    GetAllUserInpormation,
    PostUpdateUserInpormationServices,
    GetTableParagraphServices,
    PostUpdatePointOfUserServices,
    getAllUserServices,
    GetTableParagraphHearFromServices,
    GetTableLessonListElocutionServices,
    GetTableContentLessionElocutionServices,
    GetTableContentLessionElocutionArrangeStructuresServices,
    PostRegisterNewUserServices
};