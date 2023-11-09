let isLogin: boolean = false;

// method để onclick vào khóa học
let nameOne: string = "";
const handleOnclickLearnCourseEnglish = async (name: string): Promise<void> => {

    nameOne = name;
    if (isLogin === true) {
        const containerIdGird8LessonsId: HTMLElement | null = document.getElementById('gird-8-lessons_id');
        const classNameGird8: HTMLElement | null = document.getElementById('gird-8_id');

        classNameGird8?.setAttribute('class', 'gird-8 displayNone');
        containerIdGird8LessonsId?.setAttribute('class', 'gird-8-lessons');
        const containerIdlessonsListId: HTMLElement | null = document.getElementById('container_lessons_list_id');
        if (containerIdlessonsListId) {
            let htmlContent = '';
            if (name === "elocution") {
                const data = await GetTableLessonListElocution();
                for (let i: number = 0; i < data.data.length; i++) {
                    htmlContent += `
                <div id="lessons_list_id" onclick="handleOnlickShowStartLearn('${data.data[i].parameters}')" class="lessons_list">
                    <img class="lessons_list_img" src="${data.data[i].img}" alt="#">
                    <div class="lesson_list_content">   
                        <div>${data.data[i].title}: ${data.data[i].name}</div>
                         <p>${data.data[i].content}</p>
                     </div>
                </div>
            `;
                };
                containerIdlessonsListId.innerHTML = htmlContent;
            } else if (name === "vocabulary") {
                const data = await getLessonList();
                for (let i: number = 0; i < data.data.length; i++) {
                    htmlContent += `
                <div id="lessons_list_id" onclick="handleOnlickShowStartLearn('${data.data[i].parameters}')" class="lessons_list">
                    <img class="lessons_list_img" src="${data.data[i].img}" alt="#">
                    <div class="lesson_list_content">   
                        <div>${data.data[i].title}: ${data.data[i].name}</div>
                         <p>${data.data[i].content}</p>
                     </div>
                </div>
            `;
                };
                containerIdlessonsListId.innerHTML = htmlContent;
            } else if (name === "pronounce") {

            } else if (name === "communicate") {

            };
        };

    } else {
        alert("Bạn hãy đăng nhập trước thì mới có thể sử dụng khóa học này!");
    };

};


const getLessonList = async () => {
    try {

        const response = await fetch("http://localhost:2802/api/getLessonList");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
// elocution
const GetTableContentLessionElocution = async () => {
    try {

        const response = await fetch("http://localhost:2802/api/GetTableContentLessionElocution");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// elocution
const GetTableContentLessionElocutionArrangeStructures = async () => {
    try {

        const response = await fetch("http://localhost:2802/api/GetTableContentLessionElocutionArrangeStructures");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};



const GetTableLessonListElocution = async () => {
    try {

        const response = await fetch("http://localhost:2802/api/GetTableLessonListElocution");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};



const getAllUser = async () => {
    try {

        const response = await fetch("http://localhost:2802/api/getAllUser");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};



const GetTableParagraphHearFrom = async () => {
    try {

        const response = await fetch("http://localhost:2802/api/GetTableParagraphHearFrom");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


const PostUpdatePointOfUser = async (id: number, point: string) => {
    try {
        const userData = {
            id: id,
            point: point
        };
        const response = await fetch("http://localhost:2802/api/PostUpdatePointOfUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};




let dataUserInpormation: any;
let emailPublic: string = '';
let passwordPublic: string = '';
const fetchDataLogin = async (email: string, password: string) => {
    try {
        emailPublic = email;
        passwordPublic = password;
        const userData = {
            email: email,
            password: password
        };
        const response = await fetch("http://localhost:2802/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        dataUserInpormation = data.data.data

        const containerUserInpromationId: HTMLElement | null = document.getElementById('User_inpromation_id');

        if (containerUserInpromationId) {
            containerUserInpromationId.innerHTML = `
            <div class="User_inpromation_container">
            <div class="User_inpromation_container_header">
                <span class="User_inpromation_container_header_title">Thông tin của bạn</span>
            </div>
            <div class="User_inpromation_container_content">
                <div class="User_inpromation_container_content_image">
                    <img id="User_inpromation_container_content_image_img_id" class="User_inpromation_container_content_image_img" src="${dataUserInpormation.image}" alt="">
                    <br>
                    <button class="User_inpromation_container_content_changeImage displayNone">
                        <i class="fa-solid fa-file"></i>
                        open folder
                    </button>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-user User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input class="User_inpromation_container_content_name_8_input" type="text"
                            placeholder="${dataUserInpormation.lastName + " " + dataUserInpormation.firstName}" disabled>
                    </div>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-id-card User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input class="User_inpromation_container_content_name_8_input" type="text"
                            placeholder="${dataUserInpormation.email}" disabled>
                    </div>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-lock User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input class="User_inpromation_container_content_name_8_input" type="password"
                            placeholder="*******" disabled>
                    </div>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-phone User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input class="User_inpromation_container_content_name_8_input" type="text"
                            placeholder="${dataUserInpormation.phoneNumber}" disabled>
                    </div>
                </div>
                <button id="User_inpromation_container_content_btn_id" onclick="handleEditUserInpormation()"
                    class="User_inpromation_container_content_btn">
                    Edit
                </button>
            </div>
        </div>
            `
        }
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};



interface UserData {
    data: string;
    email: string;
    firstName: string;
    lastName: string;
    message: string;
    phoneNumber: string;
    img: string | null | undefined;
}
const fetchDataUpdateUserInpormation = async (id: number, firstName: string, lastName: string, email: string, password: string, phoneNumber: string, img: string | null | undefined): Promise<UserData> => {
    try {
        const userData = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            img: img
        };
        const response = await fetch("http://localhost:2802/api/PostUpdateUserInpormation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();


        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

interface UserDataNew {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    img: string;
}

const PostRegisterNewUser = async (firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string,
    img: string) => {
    try {
        const UserDataNew = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            img: img
        };
        const response = await fetch("http://localhost:2802/api/PostRegisterNewUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UserDataNew),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();


        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


const GetContentLession = async () => {
    try {
        const response = await fetch("http://localhost:2802/api/GetContentLession");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


const GetTableParagraph = async (): Promise<any> => {
    try {
        const response = await fetch("http://localhost:2802/api/GetTableParagraph");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}








// sử lý về thao tác hiển thị nút buttom back

const handleOnclickShowBtnBack = () => {

    if (nameOne === "elocution") {
        containerDataLearnLenght = [];
        dataParagraphLenght = [];
        dataParagraphLenghtHearFrom = [];
        dataElocutionArrangeStructures = [];
        containerElocutionLength = [];
        containerElocutionLengthArrangeStructures = [];
        containerNumber = 0;
        count = 1;
        const className: HTMLElement | null = document.getElementById('start_learn_id');
        let containerIdgird8LessonsId: HTMLElement | null = document.getElementById('gird-8-lessons_id');

        const classNameGird2: HTMLElement | null = document.getElementById('gird-2_id');

        containerIdgird8LessonsId?.setAttribute('class', 'gird-8-lessons');
        classNameGird2?.setAttribute('class', 'gird-2 ');
        className?.setAttribute('class', 'start_learn displayNone');
        const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
        const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');


        const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

        containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
        containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


        containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone');
        const containerNotification: HTMLElement | null = document.getElementById('notification');
        const content: HTMLElement | null = document.getElementById('notification_text');

        if (content) {
            content.innerHTML = "";
        };
        containerNotification?.setAttribute('class', 'notification_and_result');
        questionNumberElocutions = 100 / containerElocutionLength.length;
        questionNumberOneElocutions = 100 / containerElocutionLength.length;

        questionNumberElocutionsArrangeStructures = 100 / containerElocutionLengthArrangeStructures.length;
        questionNumberOneElocutionsArrangeStructures = 100 / containerElocutionLengthArrangeStructures.length;

        const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');

        containerProgressbarChildId?.setAttribute('style', `width: ${questionNumber}%; `);
        const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
        for (let i: number = 0; i < data.length; i++) {
            if (Number(data[i].getAttribute('number')) === 1) {
                data[i].setAttribute('class', 'table_of_contents_li-active');
            } else {
                data[i].setAttribute('class', 'table_of_contents_li');
            };
        };
    } else if (nameOne === "vocabulary") {
        containerDataLearnLenght = [];
        dataParagraphLenght = [];
        dataParagraphLenghtHearFrom = [];
        dataElocutionArrangeStructures = [];
        containerElocutionLengthArrangeStructures = [];
        containerNumber = 0;
        count = 1;

        const className: HTMLElement | null = document.getElementById('start_learn_id');
        let containerIdgird8LessonsId: HTMLElement | null = document.getElementById('gird-8-lessons_id');

        const classNameGird2: HTMLElement | null = document.getElementById('gird-2_id');

        containerIdgird8LessonsId?.setAttribute('class', 'gird-8 ');
        classNameGird2?.setAttribute('class', 'gird-2 ');
        className?.setAttribute('class', 'start_learn displayNone');
        const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

        if (containerContentMiddbleId) {
            containerContentMiddbleId.innerHTML = `
        <div class="content_img_audio">
            <div class="">
            <audio controls class="content_img_audio_audio">
                <source src="${containerDataLearn1Element.audio}" type="audio/mpeg">
            </audio>
            </div>
            <img src="${containerDataLearn1Element.img}" alt="" class="content_img_audio-img">
            <br>
            <span class="content_img_audio-title">${containerDataLearn1Element.englishVocabulary}</span>
        </div>
        <div class="content_answer"> 
            <ul class="content_answer-ul">
                <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                class="content_answer-one isTakeContentInputOne">
                ${containerDataLearn[5].vietnameseVocabulary}
                </li>
                <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                class="content_answer-one isTakeContentInputOne">
                ${containerDataLearn[3].vietnameseVocabulary}
                </li>
                <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                class="content_answer-one isTakeContentInputOne">
                ${containerDataLearn1Element.vietnameseVocabulary}
                </li>
            </ul>
        </div>
        `
        }

        const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
        const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');


        const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

        containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
        containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


        containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone');
        const containerNotification: HTMLElement | null = document.getElementById('notification');
        const content: HTMLElement | null = document.getElementById('notification_text');

        if (content) {
            content.innerHTML = "";
        };
        containerNotification?.setAttribute('class', 'notification_and_result');
        count = 1;
        questionNumber = 100 / containerDataLearnLenght.length;
        questionNumberOne = 100 / containerDataLearnLenght.length;

        const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');

        containerProgressbarChildId?.setAttribute('style', `width: ${questionNumber}%; `);

        handleOnclickLearnCourseEnglish(nameOne);


        const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
        for (let i: number = 0; i < data.length; i++) {
            if (Number(data[i].getAttribute('number')) === 1) {
                data[i].setAttribute('class', 'table_of_contents_li-active');
            } else {
                data[i].setAttribute('class', 'table_of_contents_li');
            };
        };
    }





};



// xử lí đóng mở cái bảng đăng nhập

const handleOnlickCloseLogin = () => {
    const container: HTMLElement | null = document.getElementById('login_id');
    const inputEmail: HTMLInputElement | null = document.getElementById('body_login_input_idEmail') as HTMLInputElement;
    const inputPassword: HTMLInputElement | null = document.getElementById('body_login_input_idPassword') as HTMLInputElement;
    inputEmail.value = '';
    inputPassword.value = '';
    container?.setAttribute("class", "login displayNone");
};


// method take data input để login

const handleTakeValueInput = async (): Promise<void> => {
    try {
        let dataServer: any;
        const inputEmail: HTMLInputElement | null = document.getElementById('body_login_input_idEmail') as HTMLInputElement;
        const inputPassword: HTMLInputElement | null = document.getElementById('body_login_input_idPassword') as HTMLInputElement;
        if (inputEmail && inputPassword) {
            const emailValue: string = inputEmail.value;
            const passwordValue: string = inputPassword.value;
            if (emailValue !== "" && passwordValue !== "") {
                const data = await fetchDataLogin(emailValue, passwordValue);
                dataServer = data;
                console.log('Dữ liệu đã được lấy:', data);
                isLogin = data.data.isLogin;
            } else {
                const containerBodyRegisterInputIdEmail: HTMLInputElement = document.getElementById('body_register_input_idEmail') as HTMLInputElement;
                const containerBodyRegisterInputIdPassword: HTMLInputElement = document.getElementById('body_register_input_idPassword') as HTMLInputElement;
                const emailValue: string = containerBodyRegisterInputIdEmail.value;
                const passwordValue: string = containerBodyRegisterInputIdPassword.value;
                const data = await fetchDataLogin(emailValue, passwordValue);
                dataServer = data;
                console.log('Dữ liệu đã được lấy:', data);
                isLogin = data.data.isLogin;

                const containerBodyRegisterInputIdFirstName: HTMLInputElement = document.getElementById('body_register_input_idFirstName') as HTMLInputElement;
                const containerBodyRegisterInputIdLastName: HTMLInputElement = document.getElementById('body_register_input_idLastName') as HTMLInputElement;
                const containerBodyRegisterInputIdPhoneNumber: HTMLInputElement = document.getElementById('body_register_input_idPhoneNumber') as HTMLInputElement;
                const containerBodyRegisterInputIdenterThePassword: HTMLInputElement = document.getElementById('body_register_input_identerThePassword') as HTMLInputElement;
                const containerAvatarFullImgId: HTMLElement | null = document.getElementById('container_avatar_full_img_id');
                if (containerBodyRegisterInputIdFirstName && containerBodyRegisterInputIdLastName &&
                    containerBodyRegisterInputIdEmail && containerBodyRegisterInputIdPassword &&
                    containerBodyRegisterInputIdPhoneNumber && containerBodyRegisterInputIdenterThePassword && containerAvatarFullImgId
                ) {
                    containerBodyRegisterInputIdFirstName.value = "";
                    containerBodyRegisterInputIdLastName.value = "";
                    containerBodyRegisterInputIdEmail.value = "";
                    containerBodyRegisterInputIdPassword.value = "";
                    containerBodyRegisterInputIdPhoneNumber.value = "";
                    containerBodyRegisterInputIdenterThePassword.value = "";
                    containerAvatarFullImgId.setAttribute('src', '../public/image/login/hoangquan.gif')
                }
            }
        } else {
            alert('Vui lòng nhập tài khoản và mật khẩu!');
        };



        if (isLogin === true) {
            const containerHeaderRightLiIdNotifications: HTMLElement | null = document.getElementById('header_right_li_notifications_id');
            if (containerHeaderRightLiIdNotifications) {
                containerHeaderRightLiIdNotifications.innerHTML = `
                Thông báo
                <div id="number_of_notifications" class="number_of_notifications">
                    1
                </div>
                <div class="content_header_right_li_notifications">
                    <div onclick="handleDeleteAllNotifications()" class="content_header_right_li_notifications_deleteAll">
                        Xóa hết thông báo
                    </div>
                    <ul class="header_right_li_ul"> 
                        <li onclick="handleShowAndCloseNotifications(1)" number="1" id="header_right_li_ul_li_id" class="header_right_li_ul_li">
                            <img class="hearder_right_li_ul_li_img_icon" src="../public/image/logo/favicon.ico" alt="#">
                            <img class="header_right_li_ul_li_img" src="../public/image/notifications/maxresdefault.jpg" alt="">
                            <span class="header_right_li_ul_li_span">Đáp Án Cuối Cùng | QUÂN A.P x NGUYỄN PHÚC THIỆN l Official Music Video</span>
                        </li>
                        <li onclick="handleShowAndCloseNotifications(2)" number="2" id="header_right_li_ul_li_id" class="header_right_li_ul_li">
                            <img class="hearder_right_li_ul_li_img_icon" src="../public/image/logo/favicon.ico" alt="#">
                            <img class="header_right_li_ul_li_img" src="../public/image/notifications/maxresdefault.jpg" alt="">
                            <span class="header_right_li_ul_li_span">Đáp Án Cuối Cùng | QUÂN A.P x NGUYỄN PHÚC THIỆN l Official Music Video</span>
                        </li>
                        <li onclick="handleShowAndCloseNotifications(3)" number="3" id="header_right_li_ul_li_id" class="header_right_li_ul_li">
                            <img class="hearder_right_li_ul_li_img_icon" src="../public/image/logo/favicon.ico" alt="#">
                            <img class="header_right_li_ul_li_img" src="../public/image/notifications/maxresdefault.jpg" alt="">
                            <span class="header_right_li_ul_li_span">Đáp Án Cuối Cùng | QUÂN A.P x NGUYỄN PHÚC THIỆN l Official Music Video</span>
                        </li>
                        <li onclick="handleShowAndCloseNotifications(4)" number="4" id="header_right_li_ul_li_id" class="header_right_li_ul_li">
                            <img class="hearder_right_li_ul_li_img_icon" src="../public/image/logo/favicon.ico" alt="#">
                            <img class="header_right_li_ul_li_img" src="../public/image/notifications/maxresdefault.jpg" alt="">
                            <span class="header_right_li_ul_li_span">Đáp Án Cuối Cùng | QUÂN A.P x NGUYỄN PHÚC THIỆN l Official Music Video</span>
                        </li>
                        <li onclick="handleShowAndCloseNotifications(5)" number="5" id="header_right_li_ul_li_id" class="header_right_li_ul_li">
                            <img class="hearder_right_li_ul_li_img_icon" src="../public/image/logo/favicon.ico" alt="#">
                            <img class="header_right_li_ul_li_img" src="../public/image/notifications/maxresdefault.jpg" alt="">
                            <span class="header_right_li_ul_li_span">Đáp Án Cuối Cùng | QUÂN A.P x NGUYỄN PHÚC THIỆN l Official Music Video</span>
                        </li>
                        <li onclick="handleShowAndCloseNotifications(6)" number="6" id="header_right_li_ul_li_id" class="header_right_li_ul_li">
                            <img class="hearder_right_li_ul_li_img_icon" src="../public/image/logo/favicon.ico" alt="#">
                            <img class="header_right_li_ul_li_img" src="../public/image/notifications/maxresdefault.jpg" alt="">
                            <span class="header_right_li_ul_li_span">Đáp Án Cuối Cùng | QUÂN A.P x NGUYỄN PHÚC THIỆN l Official Music Video</span>
                        </li>
                    </ul>
                </div>    
                `
            }

            const containerHeaderRightLi: HTMLElement | null = document.getElementById('header_right_li_register_id');

            if (containerHeaderRightLi) {
                containerHeaderRightLi.setAttribute('class', 'header_right_li loginLi displayNone');
            };

            const containerHeaderRightLiUlLiId: NodeListOf<Element> = document.querySelectorAll('#header_right_li_ul_li_id');

            if (containerHeaderRightLiUlLiId) {
                const containerNumberOfNotifications: HTMLElement | null = document.getElementById('number_of_notifications');
                if (containerNumberOfNotifications) {
                    containerNumberOfNotifications.innerText = String(containerHeaderRightLiUlLiId.length);
                }
            }
            const container: HTMLElement | null = document.getElementById('login_id');
            const takeIdShowWasLoginTwo: HTMLElement | null = document.getElementById('header_right_li_login_id');
            const takeIdShowWasLoginOne: HTMLElement | null = document.getElementById('header_right_li_id');
            const idheaderRightLiIoginId: HTMLElement | null = document.getElementById('header_right_li_login_id');
            const containerGird2: HTMLElement | null = document.getElementById('gird-2_id');

            const containerPoint: number = 100 / 1000000;
            const containerPointPhanTram: number = containerPoint * dataUserInpormation.point;

            let dataAllUser: any = await getAllUser();

            dataAllUser.data.sort((a: any, b: any) => b.point - a.point);
            let contentLeaderboard: string = '';
            for (let i: number = 0; i < dataAllUser.data.length; i++) {
                if (i === 0) {

                    contentLeaderboard += `
                    <li class="Leaderboard_content_li">
                                <span class="Leaderboard_content_li_STT"><i style="color: #ffd700;" class="fa-solid fa-trophy"></i> :</span>
                                <img class="Leaderboard_content_li_img" src="${dataAllUser.data[i].img}" alt="">
                                <span class="Leaderboard_content_li_name">
                                    ${dataAllUser.data[i].lastName + " " + dataAllUser.data[i].firstName}
                                </span>
                                <span class="Leaderboard_content_li_point">
                                    ${dataAllUser.data[i].point}
                                    <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
                                </span>
                            </li>
                        `
                } else if (i === 1) {
                    contentLeaderboard += `
                    <li class="Leaderboard_content_li">
                                <span class="Leaderboard_content_li_STT"><i style="color: #c0c0c0;" class="fa-solid fa-trophy"></i> :</span>
                                <img class="Leaderboard_content_li_img" src="${dataAllUser.data[i].img}" alt="">
                                <span class="Leaderboard_content_li_name">
                                    ${dataAllUser.data[i].lastName + " " + dataAllUser.data[i].firstName}
                                </span>
                                <span class="Leaderboard_content_li_point">
                                    ${dataAllUser.data[i].point}
                                    <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
                                </span>
                            </li>
                        `
                } else if (i === 2) {
                    contentLeaderboard += `
                    <li class="Leaderboard_content_li">
                                <span class="Leaderboard_content_li_STT"><i style="color: #6d4031;" class="fa-solid fa-trophy"></i> :</span>
                                <img class="Leaderboard_content_li_img" src="${dataAllUser.data[i].img}" alt="">
                                <span class="Leaderboard_content_li_name">
                                    ${dataAllUser.data[i].lastName + " " + dataAllUser.data[i].firstName}
                                </span>
                                <span class="Leaderboard_content_li_point">
                                    ${dataAllUser.data[i].point}
                                    <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
                                </span>
                            </li>
                        `
                } else {
                    contentLeaderboard += `
                    <li class="Leaderboard_content_li">
                                <span style="margin: 0px 8px 0px 12px;" class="Leaderboard_content_li_STT"><span style="margin: 0px 5px 0px 0px;">${i + 1}</span> : </span>
                                <img class="Leaderboard_content_li_img" src="${dataAllUser.data[i].img}" alt="">
                                <span class="Leaderboard_content_li_name">
                                    ${dataAllUser.data[i].lastName + " " + dataAllUser.data[i].firstName}
                                </span>
                                <span class="Leaderboard_content_li_point">
                                    ${dataAllUser.data[i].point}
                                    <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
                                </span>
                            </li>
                        `
                }
            }
            if (containerPoint >= 1) {
                if (containerGird2) {

                    console.log("containerPoint: ", containerPointPhanTram)
                    containerGird2.innerHTML = `
                    <div>
                    <div onclick="handleShowHonors()" class="content_point_gird_2">
                        <img id="content_point_imgi_id" src="../public/image/medal/1.png" alt="">
                    </div>
                    <div class="content_progressbar_point_child_point">${dataUserInpormation.point}/1.000.000</div>
                    <div class="container_progressbar_point">
                        <div id="content_progressbar_point_id" class="content_progressbar_point">
                            <div id="content_progressbar_point_child_id" style="width: ${containerPointPhanTram}%;"
                            class="content_progressbar_point_chld">
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="ngan_cach">

            </div>
            <div class="Leaderboard">
                <div class="Leaderboard_header">
                    Bảng xếp hạng
                </div>
                <div class="Leaderboard_content" style="overflow: auto; max-height: 300px;">
                    <ul class="Leaderboard_content_ul">
                    ${contentLeaderboard}
                    </ul>
                </div>
            </div>
            <div class="ngan_cach">

                </div>
                <div>
                    <img style="width: 300px; height: 300px; border-radius: 10px; padding: 0px 0px 0px 2px ;"
                        src="../public/image/logo/quang_cao.png" alt="quang_cao">
                </div>
                    `
                }
            } else {
                if (containerGird2) {
                    containerGird2.innerHTML = `
                    <div>
                    <div onclick="handleShowHonors()" class="content_point_gird_2">
                        <img id="content_point_img_id" src="../public/image/medal/1.png" alt="">
                    </div>
                    <div class="content_progressbar_point_child_point">${dataUserInpormation.point}/1.000.000 </div>
                    <div class="container_progressbar_point">
                        <div id="content_progressbar_point_id" class="content_progressbar_point">
                            <div id="content_progressbar_point_child_id" style="width: ${containerPointPhanTram}%;"
                            class="content_progressbar_point_child">
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="ngan_cach">

            </div>
            <div class="Leaderboard">
                <div class="Leaderboard_header">
                    Bảng xếp hạng
                </div>
                <div class="Leaderboard_content" style="overflow: auto; max-height: 300px;">
                    <ul class="Leaderboard_content_ul">
                    ${contentLeaderboard}
                    </ul>
                </div>
            </div>
            <div class="ngan_cach">

                </div>
                <div>
                    <img style="width: 300px; height: 300px; border-radius: 10px; padding: 0px 0px 0px 2px ;"
                        src="../public/image/logo/quang_cao.png" alt="quang_cao">
                </div>
                    `
                }
            }

            if (Number(dataUserInpormation.point) <= 5000 && Number(dataUserInpormation.point) > 0) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/1.png'
                }
            } else if (Number(dataUserInpormation.point) <= 50000 && Number(dataUserInpormation.point) > 5000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/2.png'
                }
            } else if (Number(dataUserInpormation.point) <= 100000 && Number(dataUserInpormation.point) > 50000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/3.png'
                }
            } else if (Number(dataUserInpormation.point) <= 200000 && Number(dataUserInpormation.point) > 100000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/4.png'
                }
            } else if (Number(dataUserInpormation.point) <= 300000 && Number(dataUserInpormation.point) > 200000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/5.png'
                }
            } else if (Number(dataUserInpormation.point) <= 400000 && Number(dataUserInpormation.point) > 300000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/2.png'
                }
            } else if (Number(dataUserInpormation.point) <= 500000 && Number(dataUserInpormation.point) > 400000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/6.png'
                }
            } else if (Number(dataUserInpormation.point) <= 600000 && Number(dataUserInpormation.point) > 500000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/8.png'
                }
            } else if (Number(dataUserInpormation.point) <= 700000 && Number(dataUserInpormation.point) > 600000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/9.png'
                }
            } else if (Number(dataUserInpormation.point) <= 800000 && Number(dataUserInpormation.point) > 700000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/10.png'
                }
            } else if (Number(dataUserInpormation.point) <= 1000000 && Number(dataUserInpormation.point) > 800000) {
                const containerContentPointImg: HTMLImageElement | null = document.getElementById('content_point_img_id') as HTMLImageElement;
                if (containerContentPointImg) {
                    containerContentPointImg.src = '../public/image/medal/11.png'
                }
            }



            const containercontent_progressbar_point_id: HTMLElement | null = document.getElementById('content_progressbar_point_id');


            if (containercontent_progressbar_point_id) {
                containercontent_progressbar_point_id.setAttribute('class', 'content_progressbar_point_deleteDisplayFlex')
            }


            container?.setAttribute("class", "login displayNone");

            takeIdShowWasLoginTwo?.setAttribute("class", "header_right_li_login");

            takeIdShowWasLoginOne?.setAttribute("class", "header_right_li loginLi displayNone");

            if (idheaderRightLiIoginId) {
                idheaderRightLiIoginId.innerHTML = `
                <img class="image_of_user" src="${dataServer.data.data.image}" alt="iu">
                ${dataServer.data.data.lastName} ${dataServer.data.data.firstName}
                <div id="header_right_li_login_child_id" class="header_right_li_login_child">
                    <ul class="header_right_li_login_child_ul">
                        <li onclick="handleShowUserInformation()" class="header_right_li_login_child_li">
                        <i class="fa-solid fa-user header_right_li_login_child_li_icon"></i>
                        Thông tin
                        </li>
                        <li class="header_right_li_login_child_li">
                        <i class="fa-solid fa-building-columns header_right_li_login_child_li_icon "></i>
                        Nạp tiền
                        </li>
                        <li class="header_right_li_login_child_li">
                        <i class="fa-solid fa-circle-info header_right_li_login_child_li_icon"></i>
                        Hỗ trợ
                        </li>
                        <li id="header_right_li_login_child_li_id" onclick="handleLogout()" class="header_right_li_login_child_li">
                        <i class="fa-solid fa-arrow-right-from-bracket header_right_li_login_child_li_icon"></i>
                        Đăng xuất
                        </li>
                    </ul>
                    </div>
                `;
            };
        } else {
            const containerHeaderRightLiIdNotifications: HTMLElement | null = document.getElementById('header_right_li_notifications_id');
            if (containerHeaderRightLiIdNotifications) {
                containerHeaderRightLiIdNotifications.innerHTML = `
            Thông báo
            <div class="content_header_right_li_notifications">
                <div class="content_header_right_li_notifications_LoginFalse">
                    <span class="content_header_right_li_notifications_LoginFalse_text">
                    Vui lòng đăng nhập để nhận thông báo!.
                    </span>
                </div>
            </div>    
            `
            }
        }

    } catch (error) {
        console.error('Lỗi trong quá trình lấy dữ liệu:', error);
    };
};

// show password 

const handleshowPasswordEye = (): void => {
    let containerEye: HTMLElement | null = document.getElementById('body_login_child_icon_eye');
    let containerEyeSlash: HTMLElement | null = document.getElementById('body_login_child_icon_eye_slash');
    let containerTypeInput: HTMLElement | null = document.getElementById("body_login_input_idPassword");
    containerTypeInput?.setAttribute('type', "password");
    containerEye?.setAttribute('class', "fa-solid fa-eye body_login_child_icon displayNone");
    containerEyeSlash?.setAttribute('class', "fa-solid fa-eye-slash body_login_child_icon ");


};

const handleshowPasswordEyeSlash = (): void => {
    let containerEye: HTMLElement | null = document.getElementById('body_login_child_icon_eye');
    let containerEyeSlash: HTMLElement | null = document.getElementById('body_login_child_icon_eye_slash');
    let containerTypeInput: HTMLElement | null = document.getElementById("body_login_input_idPassword");
    containerTypeInput?.setAttribute('type', "text");
    containerEye?.setAttribute('class', "fa-solid fa-eye body_login_child_icon ");
    containerEyeSlash?.setAttribute('class', "fa-solid fa-eye-slash body_login_child_icon displayNone");
}


// show table login

const handleShowTableLogin = (): void => {
    let container: HTMLElement | null = document.getElementById('login_id');

    container?.setAttribute("class", "login")



}




// xử lý quay về chọn khóa học


const handleOnclickBack = (): void => {
    let containerIdgird8LessonsId: HTMLElement | null = document.getElementById('gird-8-lessons_id');
    let containerIdgird8Id: HTMLElement | null = document.getElementById('gird-8_id');
    const containerIdlessonsListId: HTMLElement | null = document.getElementById('container_lessons_list_id');

    containerIdgird8LessonsId?.setAttribute('class', 'gird-8-lessons displayNone');
    containerIdgird8Id?.setAttribute('class', 'gird-8')
    if (containerIdlessonsListId) {
        containerIdlessonsListId.innerHTML = ``;
    }
}


// xử lý chuyển tới phần nội dung học


let containerDataLearn: any;

let containerDataLearn1Element: any;

let questionNumber: number;
let questionNumberOne: number;


let questionNumberFunctionFour: number;
let questionNumberOneFunctionFour: number;

let containerDataLearnLenght: any = [];


let dataParagraph: any;

let dataParagraph1Element: any;

let dataParagraphLenght: any = [];


let dataParagraphHearFrom: any;

let dataParagraph1ElementHearFrom: any;

let dataParagraphLenghtHearFrom: any = [];

// data phần Elocutions

///  GetTableContentLessionElocution
let dataElocution: any = [];
let containerElocution1Element: any = [];
let containerElocutionLength: any = [];

let questionNumberElocutions: number;
let questionNumberOneElocutions: number;

///  GetTableContentLessionElocutionArrangeStructures
let dataElocutionArrangeStructures: any = [];
let containerElocution1ElementArrangeStructures: any = [];
let containerElocutionLengthArrangeStructures: any = [];

let questionNumberElocutionsArrangeStructures: number;
let questionNumberOneElocutionsArrangeStructures: number;
const handleOnlickShowStartLearn = async (parameters: string): Promise<void> => {

    if (nameOne === "elocution") {
        idMucHoc = 1
        let containerIdStartLearnId: HTMLElement | null = document.getElementById('start_learn_id');
        let containerIdgird8LessonsId: HTMLElement | null = document.getElementById('gird-8-lessons_id');
        let containerIdGird2: HTMLElement | null = document.getElementById('gird-2_id');

        containerIdStartLearnId?.setAttribute('class', 'start_learn');
        containerIdgird8LessonsId?.setAttribute('class', 'gird-8-lessons displayNone');
        containerIdGird2?.setAttribute('class', 'gird-2 displayNone');
        containerDataLearnLenght = [];
        dataParagraphLenght = [];
        dataParagraphLenghtHearFrom = [];


        let data: any = await GetTableContentLessionElocution();
        dataElocution = data.data;
        for (let i: number = 0; i < dataElocution.length; i++) {
            if (parameters === dataElocution[i].name) {
                containerElocution1Element = dataElocution[i];
                break;
            }
        }

        for (let i: number = 0; i < dataElocution.length; i++) {
            if (parameters === dataElocution[i].name) {
                containerElocutionLength.push(dataElocution[i]);
            };
        };

        let dataa: any = await GetTableContentLessionElocutionArrangeStructures();
        dataElocutionArrangeStructures = dataa.data;
        for (let i: number = 0; i < dataElocutionArrangeStructures.length; i++) {
            if (parameters === dataElocutionArrangeStructures[i].name) {
                containerElocution1ElementArrangeStructures = dataElocutionArrangeStructures[i];
                break;
            }
        }

        for (let i: number = 0; i < dataElocutionArrangeStructures.length; i++) {
            if (parameters === dataElocutionArrangeStructures[i].name) {
                containerElocutionLengthArrangeStructures.push(dataElocutionArrangeStructures[i]);
            };
        };


        questionNumberElocutions = 100 / containerElocutionLength.length;
        questionNumberOneElocutions = 100 / containerElocutionLength.length;

        questionNumberElocutionsArrangeStructures = 100 / containerElocutionLengthArrangeStructures.length;
        questionNumberOneElocutionsArrangeStructures = 100 / containerElocutionLengthArrangeStructures.length;

        const containerStartLearnId: HTMLElement | null = document.getElementById('start_learn_id');
        if (containerStartLearnId) {
            containerStartLearnId.innerHTML = `
                <div class="table_of_contents ">
                        <ul class="table_of_contents_ul">
                            <li id="table_of_contents-id" onclick="handleOnclickShowBtnBack()" class="table_of_contents_li_elucotions">
                                <i class="fa-solid fa-backward table_of_contents_icon"></i>
                                Quay lại
                            </li>
                            <li id="table_of_contents-id" number="1" onclick="handleOclickActiveAndShowContentLearn('1')"
                                class="table_of_contents_li_elucotions-active">
                                <i class="fa-solid fa-book table_of_contents_icon"></i>
                                Xem video
                            </li>
                            <li id="table_of_contents-id" number="2" onclick="handleOclickActiveAndShowContentLearn('2')"
                                class="table_of_contents_li_elucotions">
                                <i class="fa-solid fa-book table_of_contents_icon"></i>
                                Xác định thành phần câu
                            </li>
                            <br>
                            <li id="table_of_contents-id" number="3" onclick="handleOclickActiveAndShowContentLearn('3')"
                                class="table_of_contents_li_elucotions">
                                <i class="fa-solid fa-a table_of_contents_icon"></i>
                                Xác định cấu trúc câu
                            </li>
                            <br>
                            <li id="table_of_contents-id" number="4" onclick="handleOclickActiveAndShowContentLearn('4')"
                                class="table_of_contents_li_elucotions">
                                <i class="fa-solid fa-file-pen table_of_contents_icon"></i>
                                Sắp xếp từ thành câu hoàn chỉnh
                            </li>
                            <br>
                            <li id="table_of_contents-id" number="5" onclick="handleOclickActiveAndShowContentLearn('5')"
                                class="table_of_contents_li_elucotions">
                                <i class="fa-solid fa-border-all table_of_contents_icon"></i>
                                Chọn đáp án đúng
                            </li>
                            <br>
                            <li id="table_of_contents-id" number="6" onclick="handleOclickActiveAndShowContentLearn('6')"
                                class="table_of_contents_li_elucotions">
                                <i class="fa-solid fa-ear-listen table_of_contents_icon"></i>
                                True or False?
                            </li>
                        </ul>s
                    </div>
                    <div class="content_learn">
                <div class="content_course_elocution">
                    <div class="progressbar">
                        <div id="progressbar-child_id" style="width: 0;" class="progressbar-child"></div>
                    </div>
                    <div id="content_middble_id" number="1" class="content_middble">
                    </div>
                    <audio id="content_img_audio_audio_id_true" controls class="content_img_audio_audio displayNone">
                        <source src="../public/audio/trueAndFalse/true.mp3" type="audio/mpeg">
                    </audio>
                    <audio id="content_img_audio_audio_id_false" controls class="content_img_audio_audio displayNone ">
                        <source src="../public/audio/trueAndFalse/false.mp3" type="audio/mpeg">
                    </audio>

                    <div id="notification" class="notification_and_result ">
                        <span id="notification_text" class="notification_and_result_text"></span>
                        <button id="btn_result_id_KiemTra" onclick="handleOnclickShowBtn()"
                            class="notification_and_result_btn ">
                            Kiểm tra
                        </button>
                        <button id="btn_result_id_TiepTuc" onclick="handleOnclickNext()"
                            class="notification_and_result_btn displayNone ">
                            Tiếp tục
                        </button>
                        <button id="btn_result_id_HocMucKhac" onclick="handleOnclickNextLearnOr()"
                            class="notification_and_result_btn displayNone ">
                            Học mục khác
                        </button>
                    </div>

                </div>
            </div>
                `;

            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');



            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_FuncOne');
            }
            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                    <video class="video_lisson1" width="600" height="320" controls>
                        <source src="${containerElocution1Element.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    `
            };

        };


    } else if (nameOne === "vocabulary") {

        idMucHoc = 1
        let containerIdStartLearnId: HTMLElement | null = document.getElementById('start_learn_id');
        let containerIdgird8LessonsId: HTMLElement | null = document.getElementById('gird-8-lessons_id');
        let containerIdGird2: HTMLElement | null = document.getElementById('gird-2_id');

        containerIdStartLearnId?.setAttribute('class', 'start_learn');
        containerIdgird8LessonsId?.setAttribute('class', 'gird-8-lessons displayNone');
        containerIdGird2?.setAttribute('class', 'gird-2 displayNone');
        const containerStartLearnId: HTMLElement | null = document.getElementById('start_learn_id');

        if (containerStartLearnId) {
            containerStartLearnId.innerHTML = `
        <div class="table_of_contents ">
                <ul class="table_of_contents_ul">
                    <li id="table_of_contents-id" onclick="handleOnclickShowBtnBack()" class="table_of_contents_li">
                        <i class="fa-solid fa-backward table_of_contents_icon"></i>
                        Quay lại
                    </li>
                    <li id="table_of_contents-id" number="1" onclick="handleOclickActiveAndShowContentLearn('1')"
                        class="table_of_contents_li-active">
                        <i class="fa-solid fa-book table_of_contents_icon"></i>
                        Học từ
                    </li>
                    <br>
                    <li id="table_of_contents-id" number="2" onclick="handleOclickActiveAndShowContentLearn('2')"
                        class="table_of_contents_li">
                        <i class="fa-solid fa-a table_of_contents_icon"></i>
                        Diền từ
                    </li>
                    <br>
                    <li id="table_of_contents-id" number="3" onclick="handleOclickActiveAndShowContentLearn('3')"
                        class="table_of_contents_li">
                        <i class="fa-solid fa-file-pen table_of_contents_icon"></i>
                        Dịch từ
                    </li>
                    <br>
                    <li id="table_of_contents-id" number="4" onclick="handleOclickActiveAndShowContentLearn('4')"
                        class="table_of_contents_li">
                        <i class="fa-solid fa-border-all table_of_contents_icon"></i>
                        Chọn đáp án
                    </li>
                    <br>
                    <li id="table_of_contents-id" number="5" onclick="handleOclickActiveAndShowContentLearn('5')"
                        class="table_of_contents_li">
                        <i class="fa-solid fa-ear-listen table_of_contents_icon"></i>
                        Nghe từ
                    </li>
                    <br>
                    <li id="table_of_contents-id" number="6" onclick="handleOclickActiveAndShowContentLearn('6')"
                        class="table_of_contents_li">
                        <i class="fa-solid fa-microphone-lines table_of_contents_icon"></i>
                        Ghi âm
                    </li>
                </ul>
            </div>
            <div class="content_learn">
                <div class="content_course_elocution">
                    <div class="progressbar">
                        <div id="progressbar-child_id" style="width: 0;" class="progressbar-child"></div>
                    </div>
                    <div id="content_middble_id" number="1" class="content_middble">
                    </div>
                    <audio id="content_img_audio_audio_id_true" controls class="content_img_audio_audio displayNone">
                        <source src="../public/audio/trueAndFalse/true.mp3" type="audio/mpeg">
                    </audio>
                    <audio id="content_img_audio_audio_id_false" controls class="content_img_audio_audio displayNone ">
                        <source src="../public/audio/trueAndFalse/false.mp3" type="audio/mpeg">
                    </audio>

                    <div id="notification" class="notification_and_result ">
                        <span id="notification_text" class="notification_and_result_text"></span>
                        <button id="btn_result_id_KiemTra" onclick="handleOnclickShowBtn()"
                            class="notification_and_result_btn ">
                            Kiểm tra
                        </button>
                        <button id="btn_result_id_TiepTuc" onclick="handleOnclickNext()"
                            class="notification_and_result_btn displayNone ">
                            Tiếp tục
                        </button>
                        <button id="btn_result_id_HocMucKhac" onclick="handleOnclickNextLearnOr()"
                            class="notification_and_result_btn displayNone ">
                            Học mục khác
                        </button>
                    </div>
                </div>
            </div>
        `;
        };

        GetContentLession
        const database = await GetContentLession();
        containerDataLearn = database.data;

        for (let i: number = 0; i < containerDataLearn.length; i++) {
            if (parameters === containerDataLearn[i].name) {
                containerDataLearn1Element = containerDataLearn[i];
                break;
            }
        }

        for (let i: number = 0; i < containerDataLearn.length; i++) {
            if (parameters === containerDataLearn[i].name) {
                containerDataLearnLenght.push(containerDataLearn[i]);
            };
        };


        let dataPG: any = await GetTableParagraph();

        dataParagraph = dataPG.data;

        for (let i: number = 0; i < dataParagraph.length; i++) {
            if (parameters === dataParagraph[i].name) {
                dataParagraph1Element = dataParagraph[i];
                break;
            }
        }

        for (let i: number = 0; i < dataParagraph.length; i++) {
            if (parameters === dataParagraph[i].name) {
                dataParagraphLenght.push(dataParagraph[i]);
            };
        };

        let dataPGHearFrom: any = await GetTableParagraphHearFrom();
        dataParagraphHearFrom = dataPGHearFrom.data
        for (let i: number = 0; i < dataParagraphHearFrom.length; i++) {
            if (parameters === dataParagraphHearFrom[i].name) {
                dataParagraph1ElementHearFrom = dataParagraphHearFrom[i];
                break;
            }
        }

        for (let i: number = 0; i < dataParagraphHearFrom.length; i++) {
            if (parameters === dataParagraphHearFrom[i].name) {
                dataParagraphLenghtHearFrom.push(dataParagraphHearFrom[i]);
            };
        };


        questionNumber = 100 / containerDataLearnLenght.length;
        questionNumberOne = 100 / containerDataLearnLenght.length;

        questionNumberFunctionFour = 100 / dataParagraphLenghtHearFrom.length;
        questionNumberOneFunctionFour = 100 / dataParagraphLenghtHearFrom.length;

        const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
        containerProgressbarChildId?.setAttribute('style', `width: ${questionNumber}%; `);



        const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

        if (containerContentMiddbleId) {
            containerContentMiddbleId.innerHTML = `
        <div class="content_img_audio">
            <div class="">
            <audio controls autoplay class="content_img_audio_audio">
                <source src="${containerDataLearn1Element.audio}" type="audio/mpeg">
            </audio>
            </div>
            <img src="${containerDataLearn1Element.img}" alt="" class="content_img_audio-img">
            <br>
            <span class="content_img_audio-title">${containerDataLearn1Element.englishVocabulary}</span>
        </div>
        <div class="content_answer">
            <ul class="content_answer-ul">
                <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                class="content_answer-one isTakeContentInputOne">
                ${containerDataLearn[6].vietnameseVocabulary}
                </li>
                <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                class="content_answer-one isTakeContentInputOne">
                ${containerDataLearn[2].vietnameseVocabulary}
                </li>
                <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                class="content_answer-one isTakeContentInputOne">
                ${containerDataLearn1Element.vietnameseVocabulary}
                </li>
            </ul>
        </div>
        `
        };
        const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
        const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

        const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');



        containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

        containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');

        containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')



    } else if (nameOne === "pronounce") {
        alert('pronounce')
    } else if (nameOne === "communicate") {
        alert('communicate');

    }

};





// test let isValueCheck: boolean = true;
let containerNumber: number = 0;
let ischeckanswer: boolean = false;
let isCheckanswerFunctionFourOfElocutions: boolean = false;
// method xử lý quay lại khi muốn chọn chủ đề khác
const handleOnclickShowBtn = async (): Promise<void> => {
    if (nameOne === "elocution") {
        if (idMucHoc === 2) {
            if (ischeckanswer === true) {

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');

                if (isValueAnswer === true) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = `
                        Congratulations, you guessed 100% correctly.
                        <br>
                        <br>
                        ${containerElocution1Element.answer_2}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_success');

                    containerNumber++;
                };
                if (isValueAnswer === false) {

                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = `
                        Your result is wrong.
                        <br>
                        <br>
                        ${containerElocution1Element.answer_2}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_error');

                };
                ischeckanswer = false
            } else {
                alert('Vui lòng chọn đáp án!')
            }
        } else if (idMucHoc === 3) {
            if (ischeckanswer === true) {

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');

                if (isValueAnswer === true) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = `
                        Congratulations, you guessed 100% correctly.
                        <br>
                        <br>
                        ${containerElocution1Element.answer_3}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_success');

                    containerNumber++;
                };
                if (isValueAnswer === false) {

                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = `
                        Your result is wrong.
                        <br>
                        <br>
                        ${containerElocution1Element.answer_3}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_error');

                };
                ischeckanswer = false
            } else {
                alert('Vui lòng chọn đáp án!')
            }
        } else if (idMucHoc === 4) {
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_elocution_FuncFour');
            }
            if (ardataNewCheck.length >= contenDivCheck.length) {

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');
                for (let i: number = 0; i < ardataNewCheck.length; i++) {
                    if (ardataNewCheck[i] === contenDivCheck[i]) {
                        isCheckanswerFunctionFourOfElocutions = true;
                    } else {
                        isCheckanswerFunctionFourOfElocutions = false;
                        break;
                    };
                };

                if (isCheckanswerFunctionFourOfElocutions === true) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = `
                        Congratulations, you guessed 100% correctly.
                        <br>
                        <br>
                        ${containerElocution1ElementArrangeStructures.englishParagraph}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_success');

                    containerNumber++;
                };
                if (isCheckanswerFunctionFourOfElocutions === false) {

                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = `
                        Your result is wrong.
                        <br>
                        <br>
                        ${containerElocution1ElementArrangeStructures.englishParagraph}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_error');
                };

            } else {
                alert('Vui lòng chọn đáp án!')
            }

        } else if (idMucHoc === 5) {
            if (ischeckanswer === true) {

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');

                if (isValueAnswer === true) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = `
                        Congratulations, you guessed 100% correctly.
                        <br>
                        <br>
                        ${containerElocution1Element.answer_5}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_success');

                    containerNumber++;
                };
                if (isValueAnswer === false) {

                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = `
                        Your result is wrong.
                        <br>
                        <br>
                        ${containerElocution1Element.answer_5}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_error');

                };
                ischeckanswer = false
            } else {
                alert('Vui lòng chọn đáp án!')
            }
        } else if (idMucHoc === 6) {
            if (ischeckanswer === true) {

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');

                if (isValueAnswer === true) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = `
                        Congratulations, you guessed 100% correctly.
                        <br>
                        <br>
                        ${containerElocution1ElementArrangeStructures.answer_6}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_success');

                    containerNumber++;
                };
                if (isValueAnswer === false) {

                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = `
                        Your result is wrong.
                        <br>
                        <br>
                        ${containerElocution1ElementArrangeStructures.answer_6}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_error');

                };
                ischeckanswer = false
            } else {
                alert('Vui lòng chọn đáp án!')
            }
        }
    } else if (nameOne === "vocabulary") {
        if (idMucHoc === 1) {
            if (ischeckanswer === true) {

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');

                if (isValueAnswer === true) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = `
                        Congratulations, you guessed 100% correctly.
                        <br>
                        <br>
                        ${containerDataLearn1Element.answer_func1}
                        `;
                    };
                    container?.setAttribute('class', 'notification_and_result_success');

                    containerNumber++;
                };
                if (isValueAnswer === false) {

                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = `
                        Your result is wrong.
                        <br>
                        <br>
                        ${containerDataLearn1Element.answer_func1}`;
                    };
                    container?.setAttribute('class', 'notification_and_result_error');

                };
                ischeckanswer = false
            } else {
                alert('Vui lòng chọn đáp án!')
            }

        } else if (idMucHoc === 2) {
            const containerTakeAnswer: HTMLElement | null = document.getElementById('take_answer');
            const containerContentInputId: HTMLInputElement | null = document.getElementById('content_input_id') as HTMLInputElement;

            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');
            if (containerContentInputId.value !== '') {

                if (containerTakeAnswer?.innerText === containerContentInputId.value.trim().toLocaleLowerCase()) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = "Congratulations, you guessed 100% correctly.";
                    };
                    container?.setAttribute('class', 'notification_and_result_success');
                    containerNumber++;
                } else {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = "Your result is wrong.";
                    };
                    container?.setAttribute('class', 'notification_and_result_error');
                }
            } else {
                alert('Vui lòng nhập đáp án!');
            };

        } else if (idMucHoc === 3) {

            if (ischeckanswer === true) {

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');

                if (isValueAnswer === true) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = "Congratulations, you guessed 100% correctly.";
                    };
                    container?.setAttribute('class', 'notification_and_result_success');

                    containerNumber++;
                };
                if (isValueAnswer === false) {

                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = "Your result is wrong.";
                    };
                    container?.setAttribute('class', 'notification_and_result_error');

                };
                ischeckanswer = false
            } else {
                alert('Vui lòng chọn đáp án!')
            }

        } else if (idMucHoc === 4) {
            if (ischeckanswer === true) {

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');

                if (isValueAnswer === true) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = "Congratulations, you guessed 100% correctly.";
                    };
                    container?.setAttribute('class', 'notification_and_result_success');

                    containerNumber++;
                };
                if (isValueAnswer === false) {

                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = "Your result is wrong.";
                    };
                    container?.setAttribute('class', 'notification_and_result_error');

                };
                ischeckanswer = false
            } else {
                alert('Vui lòng chọn đáp án!')
            }
        } else if (idMucHoc === 5) {
            const containerContentInputId: HTMLInputElement | null = document.getElementById('content_input_id') as HTMLInputElement;
            const containerTakeAnswer: HTMLElement | null = document.getElementById('take_answer');



            if (containerContentInputId.value !== "") {
                if (containerContentInputId.value.trim().toLocaleLowerCase() === containerTakeAnswer?.innerText) {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_true') as HTMLAudioElement;
                    audioElement.play();

                    if (content) {
                        content.innerHTML = "Congratulations, you guessed 100% correctly.";
                    };
                    container?.setAttribute('class', 'notification_and_result_success');

                    containerNumber++;
                } else {
                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    const audioElement = document.getElementById('content_img_audio_audio_id_false') as HTMLAudioElement;
                    audioElement.play();
                    if (content) {
                        content.innerHTML = "Your result is wrong.";
                    };
                    container?.setAttribute('class', 'notification_and_result_error');
                };

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn');
            } else {
                alert('Vui lòng nhập lại đáp án!')
            }

        } else if (idMucHoc === 6) {
            alert('Chức Năng chưa hoàn thành!')
        };
    } else if (nameOne === "pronounce") {

    } else if (nameOne === "communicate") {

    }

};


// xử lí active mục lục chọn cách học 
let idMucHoc: number;
let dataAnswers: string[];
let contenDiv: string[] = [];
let contenDivCheck: string[] = [];
let contenDivPublic: string[] = [];
const handleOclickActiveAndShowContentLearn = async (id: string) => {
    if (nameOne === "elocution") {
        idMucHoc = Number(id);
        const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
        const container: NodeListOf<Element> = document.querySelectorAll('#content_middble_id');
        for (let i: number = 0; i < data.length; i++) {
            if (data[i].getAttribute('number') === id) {
                data[i].setAttribute('class', 'table_of_contents_li_elucotions-active');
            } else {
                data[i].setAttribute('class', 'table_of_contents_li_elucotions');
            };
        };
        if (id === "1") {

            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_FuncOne');
            }

            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${0}%; `);

            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <video class="video_lisson1" width="600" height="320" controls>
                    <source src="${containerElocution1Element.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                `
            };
        } else if (id === "2") {
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberOneElocutions}%; `);
            questionNumberElocutions = 100 / containerElocutionLength.length;

            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            count = 1;
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            containerElocution1Element = containerElocutionLength[0];

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <img src="${containerElocution1Element.img_xacDinhThanhPhanCau}" alt="" class="content_img_audio-img">
                <br>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                    <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLength[6].sentenceComponents}
                    </li>
                    <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLength[4].sentenceComponents}
                    </li>
                    <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocution1Element.sentenceComponents}
                    </li>
                </ul>
            </div>
                </div>
                `
            };
        } else if (id === "3") {
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberOneElocutions}%; `);
            questionNumberElocutions = 100 / containerElocutionLength.length;


            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            count = 1;
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            containerElocution1Element = containerElocutionLength[0];

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <img src="${containerElocution1Element.img_xacDinhCauTrucCau}" alt="" class="content_img_audio-img">
                <br>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                    <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLength[6].sentenceStructures}
                    </li>
                    <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLength[4].sentenceStructures}
                    </li>
                    <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocution1Element.sentenceStructures}
                    </li>
                </ul>
            </div>
                </div>
                `
            };
        } else if (id === "4") {
            contenDiv = [];
            ardataNew = [];
            contenDivCheck = [];
            ardataNewCheck = [];
            isCheckanswerFunctionFourOfElocutions = false;
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_elocution_FuncFour');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberOneElocutions}%; `);
            questionNumberElocutionsArrangeStructures = 100 / containerElocutionLengthArrangeStructures.length;
            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            count = 1;
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            containerElocution1ElementArrangeStructures = containerElocutionLengthArrangeStructures[0];
            let arData: string = containerElocution1ElementArrangeStructures.englishParagraph;
            dataAnswers = arData.split(" ");
            let countFunctionFour: number = 1;

            for (let i: number = 0; i < dataAnswers.length; i++) {
                contenDivCheck.push(dataAnswers[i]);
            };

            function fisherYatesShuffle(array: string[]) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            fisherYatesShuffle(dataAnswers); // Đảo lộn toàn bộ mảng
            for (let i: number = 0; i < dataAnswers.length; i++) {
                contenDiv.push(`
                <span id="content_answer-one_function_4_id" number="${countFunctionFour}" onclick="handleArrangeFunctionFour(${countFunctionFour})"
                    class="content_answer-one_function_4 isTakeContentInputOneFunctionFour">
                    ${dataAnswers[i]}
                </span>
                `)
                countFunctionFour++;
            };

            let data: string = '';
            for (let i: number = 0; i < contenDiv.length; i++) {
                data += contenDiv[i]
            }
            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="functionFour">
                    <div class="functionFour_title">
                        Sắp xếp thành câu hoàn chỉnh.
                    </div>
                    <div class="functionFour_paragraph">
                        ${containerElocution1ElementArrangeStructures.vietnameseParagraph}
                    </div>
                    <div class="content_answerChoose_function_4">
                        <div id="content_answer-div_function_4_id" class="content_answer-div_function_4">
                            ${data}
                        </div>
                    </div>
                    <div id="container_answer_functions_4_id" class="container_answer_functions_4">
                    </div> 
                </div>
                `
            };
        } else if (id === "5") {
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_elocution_FuncFour');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberOneElocutions}%; `);
            questionNumberElocutions = 100 / containerElocutionLength.length;

            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            count = 1;
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            containerElocution1Element = containerElocutionLength[0];

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="functionFour">
                <div class="functionFour_title">Chọn đáp án:</div>
                <div class="functionFour_paragraph">${containerElocution1Element.paragraph_5}</div>
                <div class="content_answer">
                    <ul class="content_answer-ul">
                        <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                        class="content_answer-one_5 isTakeContentInputOne">
                        ${containerElocutionLength[3].answer_55}
                        </li>
                        <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                        class="content_answer-one_5 isTakeContentInputOne">
                        ${containerElocutionLength[4].answer_55}
                        </li>
                        <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                        class="content_answer-one_5 isTakeContentInputOne">
                        ${containerElocution1Element.answer_55}
                        </li>
                    </ul>
                </div>
                    </div>
            </div> 
                </div>
                `
            };
        } else if (id === "6") {
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberOneElocutionsArrangeStructures}%; `);
            questionNumberElocutionsArrangeStructures = 100 / containerElocutionLengthArrangeStructures.length

            containerElocution1ElementArrangeStructures = containerElocutionLengthArrangeStructures[0]
            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            count = 1;
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            containerElocution1Element = containerElocutionLength[0];

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="container_imgAndSpan">
                <img src="${containerElocution1ElementArrangeStructures.img}" alt="" class="content_img_audio-img">
                <br>
                <span class="content_img_audio-title" >True Or False?</span>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                    <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLengthArrangeStructures[2].answer}
                    </li>
                    <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocution1ElementArrangeStructures.answer}
                    </li>
                </ul>
            </div>
                </div>
                `
            };
        }
    } else if (nameOne === "vocabulary") {
        containerDataLearn1Element = containerDataLearnLenght[0];
        containerNumber = 0
        idMucHoc = Number(id);
        const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
        const container: NodeListOf<Element> = document.querySelectorAll('#content_middble_id');
        for (let i: number = 0; i < data.length; i++) {
            if (data[i].getAttribute('number') === id) {
                data[i].setAttribute('class', 'table_of_contents_li-active');
            } else {
                data[i].setAttribute('class', 'table_of_contents_li');
            };
        };
        if (id === "1") {
            questionNumber = 100 / containerDataLearnLenght.length;
            containerNumber = 0
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="content_img_audio">
                <div class="">
                <audio controls autoplay class="content_img_audio_audio">
                    <source src="${containerDataLearn1Element.audio}" type="audio/mpeg">
                </audio>
                </div>
                <img src="${containerDataLearn1Element.img}" alt="" class="content_img_audio-img">
                <br>
                <span class="content_img_audio-title">${containerDataLearn1Element.englishVocabulary}</span>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                    <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerDataLearn[3].vietnameseVocabulary}
                    </li>
                    <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerDataLearn[4].vietnameseVocabulary}
                    </li>
                    <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerDataLearn1Element.vietnameseVocabulary}
                    </li>
                </ul>
            </div>
                </div>
                `
            };


        } else if (id === '2') {
            questionNumber = 100 / containerDataLearnLenght.length;
            containerNumber = 0
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_FuncOne');
            }

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="content_img_audio">
                <div class="">
                <audio controls autoplay class="content_img_audio_audio">
                    <source src="${containerDataLearn1Element.audio}" type="audio/mpeg">
                </audio>
                </div>
                <img src="${containerDataLearn1Element.img}" alt="" class="content_img_audio-img">
                <br>
                <div id="take_answer" class="displayNone">${containerDataLearn1Element.englishVocabulary}</div>
                <input id="content_input_id" class="content_input"></input>
            </div>
            `
            };

        } else if (id === "3") {
            containerNumber = 0
            questionNumber = 100 / containerDataLearnLenght.length;
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_FuncOne');
            }
            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="container_content_functionLearn3">
                    <div class="title_functionLearn3">"${containerDataLearn1Element.vietnameseVocabulary}"</div>
                    <p class="title_functionLearn3_p">trong tiếng Anh là:</p>
                    <div class="container_content_functionLearn3_answer">
                        <div number="1" onclick="handleHoverAnswer('1')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                            <img src="${containerDataLearn1Element.img}" alt="" class="content_img_audio-img">
                            <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearn1Element.englishVocabulary}</div>
                            <div id="dataInnerText" class="displayNone">${containerDataLearn1Element.vietnameseVocabulary}</div>
                            <audio id="content_img_audio_audio_id_1" controls class="content_img_audio_audio displayNone">
                                <source src="${containerDataLearn1Element.audio}" type="audio/mpeg">
                            </audio>
                        </div>
                        <div number="2" onclick="handleHoverAnswer('2')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                            <img src="${containerDataLearnLenght[3].img}" alt="" class="content_img_audio-img">
                            <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[3].englishVocabulary}</div>
                            <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[3].vietnameseVocabulary}</div>
                            <audio id="content_img_audio_audio_id_2" controls class="content_img_audio_audio displayNone">
                                <source src="${containerDataLearnLenght[3].audio}" type="audio/mpeg">
                            </audio>
                        </div>
                        <div number="3" onclick="handleHoverAnswer('3')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                            <img src="${containerDataLearnLenght[5].img}" alt="" class="content_img_audio-img">
                            <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[5].englishVocabulary}</div>
                            <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[5].vietnameseVocabulary}</div>
                            <audio id="content_img_audio_audio_id_3" controls class="content_img_audio_audio displayNone">
                                <source src="${containerDataLearnLenght[5].audio}" type="audio/mpeg">
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
            `
            };
        } else if (id === "4") {
            containerNumber = 0
            questionNumberFunctionFour = 100 / dataParagraphLenght.length;
            dataParagraph1Element = dataParagraphLenght[0];
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
            <div class="functionFour">
                <div class="functionFour_title">Chọn đáp án:</div>
                <div class="functionFour_paragraph">${dataParagraph1Element.paragraph}</div>
                <div class="content_answer">
                    <ul class="content_answer-ul">
                        <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                        class="content_answer-one isTakeContentInputOne">
                        ${dataParagraphLenght[3].englishVocabulary}
                        </li>
                        <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                        class="content_answer-one isTakeContentInputOne">
                        ${dataParagraphLenght[4].englishVocabulary}
                        </li>
                        <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                        class="content_answer-one isTakeContentInputOne">
                        ${dataParagraph1Element.englishVocabulary}
                        </li>
                    </ul>
                </div>
                    </div>
            </div>        
                `
            };
        } else if (id === "5") {
            questionNumberFunctionFour = 100 / dataParagraphLenghtHearFrom.length;
            containerNumber = 0
            dataParagraph1ElementHearFrom = dataParagraphLenghtHearFrom[0];
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="functionFour">
                    <div class="functionFour_title">Nghe điền từ:</div>
                    <div class="">
                        <audio controls autoplay class="content_img_audio_audio">
                        <source src="${dataParagraph1ElementHearFrom.audio}" type="audio/mpeg">
                    </audio>
                    </div>
                    <div class="functionFour_paragraph">${dataParagraph1ElementHearFrom.paragraph}</div>
                    <div class="content_answer">
                        <div id="take_answer" class="displayNone">${dataParagraph1ElementHearFrom.englishVocabulary}</div>
                        <input id="content_input_id" class="content_input"></input>
                    </div>
                </div> 
            `
            };
        } else if (id === "6") {
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="content_img_audio">
                <div class="">
                </div>
                <span class="content_img_audio-title_End">Chức năng học 6 chưa được hoàn thành <br> vui lòng chọn mục học khác!</span>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                </ul>
            </div> 
            `
            };
        }

        const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
        const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

        const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

        containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

        containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


        containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone');
        const containerNotification: HTMLElement | null = document.getElementById('notification');
        const content: HTMLElement | null = document.getElementById('notification_text');

        if (content) {
            content.innerHTML = "";
        };
        containerNotification?.setAttribute('class', 'notification_and_result');
        count = 1;
        questionNumber = 100 / containerDataLearnLenght.length;
        questionNumberOne = 100 / containerDataLearnLenght.length;
        const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');

        containerProgressbarChildId?.setAttribute('style', `width: ${questionNumber}%; `);

    } else if (nameOne === "pronounce") {

    } else if (nameOne === "communicate") {

    }

};


let isValueAnswer: boolean;
const handleOclickActiveAnswer = (id: string) => {
    if (nameOne === "elocution") {
        if (idMucHoc === 2) {
            const data: NodeListOf<Element> = document.querySelectorAll('#content_answer-one-id');
            for (let i: number = 0; i < data.length; i++) {
                if (data[i].getAttribute('number') === id) {
                    data[i].setAttribute('class', 'content_answer-one-active');
                    let content: string | undefined = data[i].textContent?.trim();
                    let contentLowercase: string | undefined = content;

                    if (contentLowercase === containerElocution1Element.sentenceComponents) {
                        isValueAnswer = true
                        ischeckanswer = true
                    } else {
                        isValueAnswer = false
                        ischeckanswer = true
                    };
                } else {
                    data[i].setAttribute('class', 'content_answer-one');
                };
            };
        } else if (idMucHoc === 3) {
            const data: NodeListOf<Element> = document.querySelectorAll('#content_answer-one-id');
            for (let i: number = 0; i < data.length; i++) {
                if (data[i].getAttribute('number') === id) {
                    data[i].setAttribute('class', 'content_answer-one-active');
                    let content: string | undefined = data[i].textContent?.trim();
                    let contentLowercase: string | undefined = content;

                    if (contentLowercase === containerElocution1Element.sentenceStructures) {
                        isValueAnswer = true
                        ischeckanswer = true
                    } else {
                        isValueAnswer = false
                        ischeckanswer = true
                    };
                } else {
                    data[i].setAttribute('class', 'content_answer-one');
                };
            };
        } else if (idMucHoc === 5) {
            const data: NodeListOf<Element> = document.querySelectorAll('#content_answer-one-id');
            for (let i: number = 0; i < data.length; i++) {
                if (data[i].getAttribute('number') === id) {
                    data[i].setAttribute('class', 'content_answer-one_5-active');
                    let content: string | undefined = data[i].textContent?.trim();
                    let contentLowercase: string | undefined = content;

                    if (contentLowercase === containerElocution1Element.answer_55) {
                        isValueAnswer = true
                        ischeckanswer = true
                    } else {
                        isValueAnswer = false
                        ischeckanswer = true
                    };
                } else {
                    data[i].setAttribute('class', 'content_answer-one_5');
                };
            };
        } else if (idMucHoc === 6) {
            const data: NodeListOf<Element> = document.querySelectorAll('#content_answer-one-id');
            for (let i: number = 0; i < data.length; i++) {
                if (data[i].getAttribute('number') === id) {
                    data[i].setAttribute('class', 'content_answer-one-active');
                    let content: string | undefined = data[i].textContent?.trim();
                    let contentLowercase: string | undefined = content;

                    if (contentLowercase === containerElocution1ElementArrangeStructures.answer) {
                        isValueAnswer = true
                        ischeckanswer = true
                    } else {
                        isValueAnswer = false
                        ischeckanswer = true
                    };
                } else {
                    data[i].setAttribute('class', 'content_answer-one');
                };
            };
        }
    } else if (nameOne === "vocabulary") {
        if (idMucHoc === 1) {
            const data: NodeListOf<Element> = document.querySelectorAll('#content_answer-one-id');
            for (let i: number = 0; i < data.length; i++) {
                if (data[i].getAttribute('number') === id) {
                    data[i].setAttribute('class', 'content_answer-one-active');
                    let content: string | undefined = data[i].textContent?.trim();
                    let contentLowercase: string | undefined = content?.toLocaleLowerCase();

                    if (contentLowercase === containerDataLearn1Element.vietnameseVocabulary) {
                        isValueAnswer = true
                        ischeckanswer = true
                    } else {
                        isValueAnswer = false
                        ischeckanswer = true
                    };
                } else {
                    data[i].setAttribute('class', 'content_answer-one');
                };
            };
        } else if (idMucHoc === 4) {
            const data: NodeListOf<Element> = document.querySelectorAll('#content_answer-one-id');
            for (let i: number = 0; i < data.length; i++) {
                if (data[i].getAttribute('number') === id) {
                    data[i].setAttribute('class', 'content_answer-one-active');
                    let content: string | undefined = data[i].textContent?.trim();
                    let contentLowercase: string | undefined = content?.toLocaleLowerCase();

                    console.log('data[i]: ', data[i]);
                    if (contentLowercase === dataParagraph1Element.englishVocabulary) {
                        isValueAnswer = true
                        ischeckanswer = true
                    } else {
                        isValueAnswer = false
                        ischeckanswer = true
                    };

                    console.log('containerDataLearn1Element.englishVocabulary: ', dataParagraph1Element.englishVocabulary);
                } else {
                    data[i].setAttribute('class', 'content_answer-one');
                };
            };
        }
    } else if (nameOne === "pronounce") {

    } else if (nameOne === "communicate") {

    }


};

let count: number = 1;
// method xử lý để chuyển đến phần tiếp theo sau khi chọn đáp án true or fasle
const handleOnclickNext = async (): Promise<void> => {
    console.log('idMucHoc: ', idMucHoc);
    if (nameOne === "elocution") {
        if (idMucHoc === 1) {
            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');

            containerNumber = 1;
            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
            <div class="content_img_audio">
                <div class="">
                    <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                </div>
                <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/1</span>
                <div class="content_point">
                    Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                </div>
            </div>
            `
            };

            const containerPointTong: string = String(Number(dataUserInpormation.point) + containerNumber);
            PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${100}%; `);
        } else if (idMucHoc === 2) {
            if (count !== containerElocutionLength.length) {
                let data: string[] = [
                    "Complement",
                    "Object",
                    "Subject"
                ]
                let STT: number = Math.floor(Math.random() * 3);
                let STT1: number = Math.floor(Math.random() * 3);
                let STT2: number = Math.floor(Math.random() * 3);

                while (data[STT1] === containerElocutionLength[count].sentenceComponents
                ) {
                    STT1 = Math.floor(Math.random() * 3);
                }
                while (data[STT1] === containerElocutionLength[count].sentenceComponents
                ) {
                    STT1 = Math.floor(Math.random() * 3);
                }
                while (data[STT1] === data[STT2]
                ) {
                    STT1 = Math.floor(Math.random() * 3);

                }
                while (data[STT2] === containerElocutionLength[count].sentenceComponents
                ) {
                    STT2 = Math.floor(Math.random() * 3);
                }
                while (data[STT1] === containerElocutionLength[STT2].sentenceComponents
                ) {
                    STT2 = Math.floor(Math.random() * 3);
                }
                while (data[STT1] === containerElocutionLength[STT2].sentenceComponents
                ) {
                    STT2 = Math.floor(Math.random() * 3);
                }
                while (data[STT1] === data[STT2]
                ) {
                    STT1 = Math.floor(Math.random() * 3);

                }

                while (data[STT1] === containerElocutionLength[count].sentenceComponents
                ) {
                    STT1 = Math.floor(Math.random() * 3);
                }
                while (data[STT1] === containerElocutionLength[count].sentenceComponents
                ) {
                    STT1 = Math.floor(Math.random() * 3);
                }
                while (data[STT1] === data[STT2]
                ) {
                    STT1 = Math.floor(Math.random() * 3);

                }
                while (data[STT2] === containerElocutionLength[count].sentenceComponents
                ) {
                    STT2 = Math.floor(Math.random() * 3);
                }
                while (data[STT2] === containerElocutionLength[count].sentenceComponents
                ) {
                    STT2 = Math.floor(Math.random() * 3);
                }
                while (data[STT1] === containerElocutionLength[STT2].sentenceComponents
                ) {
                    STT2 = Math.floor(Math.random() * 3);
                }
                while (data[STT1] === containerElocutionLength[STT2].sentenceComponents
                ) {
                    STT2 = Math.floor(Math.random() * 3);
                }


                let contentInput: string = ``;
                if (STT === 0) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one isTakeContentInputOne">
                ${containerElocutionLength[count].sentenceComponents}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT1]}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT2]}
            </li>
            `;
                } else if (STT === 1) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT1]}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one isTakeContentInputOne">
            ${containerElocutionLength[count].sentenceComponents}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT2]}
            </li>
            `;
                } else if (STT === 2) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT2]}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT1]}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one isTakeContentInputOne">
            ${containerElocutionLength[count].sentenceComponents}
            </li>
            `;
                }

                containerElocution1Element = containerElocutionLength[count];

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');

                // notification_and_result

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');
                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                    <img src="${containerElocution1Element.img_xacDinhThanhPhanCau}" alt="" class="content_img_audio-img">
                    <br>
                </div>
                <div class="content_answer">
                    <ul class="content_answer-ul">
                        ${contentInput}
                    </ul>
                </div>
                    </div>
            `
                }



                const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                questionNumberElocutions += questionNumberOneElocutions
                containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberElocutions}%; `);
            } else {

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
            <div class="content_img_audio">
                <div class="">
                    <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                </div>
                <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${containerElocutionLength.length}</span>
                <div class="content_point">
                    Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                </div>
            </div>
            `
                };

                const containerPointTong: string = String(Number(dataUserInpormation.point) + containerNumber);
                console.log('containerPointTong 1: ', containerPointTong)
                PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            };
            count++;
        } else if (idMucHoc === 3) {
            if (count !== containerElocutionLength.length) {
                let data: string[] = [
                    "S + linking verb + Adj",
                    "S + V + O",
                    "S + V",
                    "S + linking verb + N",
                    "S + V + O + C",
                    "S + V + O + O",
                ]
                let STT: number = Math.floor(Math.random() * 3);
                let STT1: number = Math.floor(Math.random() * data.length);
                let STT2: number = Math.floor(Math.random() * data.length);

                while (data[STT1] === containerElocutionLength[count].sentenceStructures
                ) {
                    STT1 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[count].sentenceStructures
                ) {
                    STT1 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === data[STT2]
                ) {
                    STT1 = Math.floor(Math.random() * data.length);

                }
                while (data[STT2] === containerElocutionLength[count].sentenceStructures
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[STT2].sentenceStructures
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[STT2].sentenceStructures
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === data[STT2]
                ) {
                    STT1 = Math.floor(Math.random() * data.length);

                }

                while (data[STT1] === containerElocutionLength[count].sentenceStructures
                ) {
                    STT1 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[count].sentenceStructures
                ) {
                    STT1 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === data[STT2]
                ) {
                    STT1 = Math.floor(Math.random() * data.length);

                }
                while (data[STT2] === containerElocutionLength[count].sentenceStructures
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT2] === containerElocutionLength[count].sentenceStructures
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[STT2].sentenceStructures
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[STT2].sentenceStructures
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }


                let contentInput: string = ``;
                if (STT === 0) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one isTakeContentInputOne">
                ${containerElocutionLength[count].sentenceStructures}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT1]}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT2]}
            </li>
            `;
                } else if (STT === 1) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT1]}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one isTakeContentInputOne">
            ${containerElocutionLength[count].sentenceStructures}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT2]}
            </li>
            `;
                } else if (STT === 2) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT2]}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one isTakeContentInputOne">
            ${data[STT1]}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one isTakeContentInputOne">
            ${containerElocutionLength[count].sentenceStructures}
            </li>
            `;
                }

                containerElocution1Element = containerElocutionLength[count];

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');

                // notification_and_result

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');
                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                    <img src="${containerElocution1Element.img_xacDinhCauTrucCau}" alt="" class="content_img_audio-img">
                    <br>
                </div>
                <div class="content_answer">
                    <ul class="content_answer-ul">
                        ${contentInput}
                    </ul>
                </div>
                    </div>
            `
                }



                const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                questionNumberElocutions += questionNumberOneElocutions
                containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberElocutions}%; `);
            } else {

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
            <div class="content_img_audio">
                <div class="">
                    <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                </div>
                <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${containerElocutionLength.length}</span>
                <div class="content_point">
                    Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                </div>
            </div>
            `
                };

                const containerPointTong: string = String(Number(dataUserInpormation.point) + containerNumber);
                console.log('containerPointTong 1: ', containerPointTong)
                PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            };
            count++;
        } else if (idMucHoc === 4) {
            if (count !== containerElocutionLengthArrangeStructures.length) {
                containerElocution1ElementArrangeStructures = containerElocutionLengthArrangeStructures[count];
                console.log('containerElocution1ElementArrangeStructures: ', containerElocution1ElementArrangeStructures);
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');
                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');

                ///
                contenDiv = [];
                ardataNew = [];
                contenDivCheck = [];
                ardataNewCheck = [];
                isCheckanswerFunctionFourOfElocutions = false;
                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

                let arData: string = containerElocution1ElementArrangeStructures.englishParagraph;
                dataAnswers = arData.split(" ");
                let countFunctionFour: number = 1;

                for (let i: number = 0; i < dataAnswers.length; i++) {
                    contenDivCheck.push(dataAnswers[i]);
                };

                function fisherYatesShuffle(array: string[]) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                }
                fisherYatesShuffle(dataAnswers); // Đảo lộn toàn bộ mảng
                for (let i: number = 0; i < dataAnswers.length; i++) {
                    contenDiv.push(`
                <span id="content_answer-one_function_4_id" number="${countFunctionFour}" onclick="handleArrangeFunctionFour(${countFunctionFour})"
                    class="content_answer-one_function_4 isTakeContentInputOneFunctionFour">
                    ${dataAnswers[i]}
                </span>
                `)
                    countFunctionFour++;
                };

                let data: string = '';
                for (let i: number = 0; i < contenDiv.length; i++) {
                    data += contenDiv[i]
                }
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                <div class="functionFour">
                    <div class="functionFour_title">
                        Sắp xếp thành câu hoàn chỉnh.
                    </div>
                    <div class="functionFour_paragraph">
                        ${containerElocution1ElementArrangeStructures.vietnameseParagraph}
                    </div>
                    <div class="content_answerChoose_function_4">
                        <div id="content_answer-div_function_4_id" class="content_answer-div_function_4">
                            ${data}
                        </div>
                    </div>
                    <div id="container_answer_functions_4_id" class="container_answer_functions_4">
                    </div> 
                </div>
                `
                };
                ///
                const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                questionNumberElocutionsArrangeStructures += questionNumberOneElocutionsArrangeStructures
                containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberElocutionsArrangeStructures}%; `);
            } else {

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
            <div class="content_img_audio">
                <div class="">
                    <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                </div>
                <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${containerElocutionLengthArrangeStructures.length}</span>
                <div class="content_point">
                    Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                </div>
            </div>
            `
                };

                const containerPointTong: string = String(Number(dataUserInpormation.point) + containerNumber);
                console.log('containerPointTong 1: ', containerPointTong)
                PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            };
            count++;
        } else if (idMucHoc === 5) {
            if (count !== containerElocutionLength.length) {
                let data: string[] = [
                    "The baby woke up.",
                    "We painted the fence green.",
                    "Jenny seemed nervous.",
                    "The number of foreign companies in Vietnam continues to grow.",
                    "Tim and his colleagues usually have lunch at 12:30 p.m.",
                    "I am happy that it is Friday night.",
                    "Devin bought me a cup of bubble tea on the way home.",
                    "Justin isn't home, so please call him or leave him a message.",
                    "Most people find learning foreign languages challenging.",
                ]
                let STT: number = Math.floor(Math.random() * 3);
                let STT1: number = Math.floor(Math.random() * data.length);
                let STT2: number = Math.floor(Math.random() * data.length);

                while (data[STT1] === containerElocutionLength[count].answer_55
                ) {
                    STT1 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[count].answer_55
                ) {
                    STT1 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === data[STT2]
                ) {
                    STT1 = Math.floor(Math.random() * data.length);

                }
                while (data[STT2] === containerElocutionLength[count].answer_55
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[STT2].answer_55
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[STT2].answer_55
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === data[STT2]
                ) {
                    STT1 = Math.floor(Math.random() * data.length);

                }

                while (data[STT1] === containerElocutionLength[count].answer_55
                ) {
                    STT1 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[count].answer_55
                ) {
                    STT1 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === data[STT2]
                ) {
                    STT1 = Math.floor(Math.random() * data.length);

                }
                while (data[STT2] === containerElocutionLength[count].answer_55
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT2] === containerElocutionLength[count].answer_55
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[STT2].answer_55
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }
                while (data[STT1] === containerElocutionLength[STT2].answer_55
                ) {
                    STT2 = Math.floor(Math.random() * data.length);
                }


                let contentInput: string = ``;
                if (STT === 0) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one_5 isTakeContentInputOne">
                ${containerElocutionLength[count].answer_55}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one_5 isTakeContentInputOne">
            ${data[STT1]}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one_5 isTakeContentInputOne">
            ${data[STT2]}
            </li>
            `;
                } else if (STT === 1) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one_5 isTakeContentInputOne">
            ${data[STT1]}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one_5 isTakeContentInputOne">
            ${containerElocutionLength[count].answer_55}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one_5 isTakeContentInputOne">
            ${data[STT2]}
            </li>
            `;
                } else if (STT === 2) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one_5 isTakeContentInputOne">
            ${data[STT2]}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one_5 isTakeContentInputOne">
            ${data[STT1]}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one_5 isTakeContentInputOne">
            ${containerElocutionLength[count].answer_55}
            </li>
            `;
                }

                containerElocution1Element = containerElocutionLength[count];

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');

                // notification_and_result

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');
                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                    <div class="functionFour">
                    <div class="functionFour_title">Chọn đáp án:</div>
                    <div class="functionFour_paragraph">${containerElocution1Element.paragraph_5}</div>
                    <div class="content_answer">
                        <ul class="content_answer-ul">
                            ${contentInput}
                        </ul>
                    </div>
                        </div>
                </div> 
                    </div>
            `
                }





                const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                questionNumberElocutions += questionNumberOneElocutions
                containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberElocutions}%; `);
            } else {

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
            <div class="content_img_audio">
                <div class="">
                    <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                </div>
                <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${containerElocutionLength.length}</span>
                <div class="content_point">
                    Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                </div>
            </div>
            `
                };

                const containerPointTong: string = String(Number(dataUserInpormation.point) + containerNumber);
                console.log('containerPointTong 1: ', containerPointTong)
                PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            };
            count++;
        } else if (idMucHoc === 6) {
            if (count !== containerElocutionLengthArrangeStructures.length) {
                let STT: number = Math.floor(Math.random() * 2);
                let STT1: number = Math.floor(Math.random() * containerElocutionLengthArrangeStructures.length);
                let STT2: number = Math.floor(Math.random() * containerElocutionLengthArrangeStructures.length);

                while (containerElocutionLengthArrangeStructures[STT1].answer === containerElocutionLengthArrangeStructures[count].answer
                ) {
                    STT1 = Math.floor(Math.random() * containerElocutionLengthArrangeStructures.length);
                }
                let contentInput: string = ``;
                if (STT === 0) {
                    contentInput = `
                <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLengthArrangeStructures[count].answer}
                </li>
                <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                class="content_answer-one isTakeContentInputOne">
                ${containerElocutionLengthArrangeStructures[STT1].answer}
                `;
                } else if (STT === 1) {
                    contentInput = `
                <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                class="content_answer-one isTakeContentInputOne">
                ${containerElocutionLengthArrangeStructures[STT1].answer}
                </li>
                <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                class="content_answer-one isTakeContentInputOne">
                ${containerElocutionLengthArrangeStructures[count].answer}
                </li>
                `;
                }

                containerElocution1ElementArrangeStructures = containerElocutionLengthArrangeStructures[count];

                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');

                // notification_and_result

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');
                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                    <div class="container_imgAndSpan">
                    <img src="${containerElocution1ElementArrangeStructures.img}" alt="" class="content_img_audio-img">
                    <br>
                    <span class="content_img_audio-title" >True Or False?</span>
                </div>
                <div class="content_answer">
                    <ul class="content_answer-ul">
                        ${contentInput}
                    </ul>
                </div>
                    </div>
            `
                }



                const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                questionNumberElocutionsArrangeStructures += questionNumberOneElocutionsArrangeStructures
                containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberElocutionsArrangeStructures}%; `);
            } else {

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
            <div class="content_img_audio">
                <div class="">
                    <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                </div>
                <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${containerElocutionLengthArrangeStructures.length}</span>
                <div class="content_point">
                    Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                </div>
            </div>
            `
                };

                const containerPointTong: string = String(Number(dataUserInpormation.point) + containerNumber);
                console.log('containerPointTong 1: ', containerPointTong)
                PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            };
            count++;
        }
    } else if (nameOne === "vocabulary") {
        if (idMucHoc === 1) {

            if (count !== containerDataLearnLenght.length) {

                let STT: number = Math.floor(Math.random() * 3);
                let STT1: number = Math.floor(Math.random() * containerDataLearnLenght.length);
                let STT2: number = Math.floor(Math.random() * containerDataLearnLenght.length);

                while (containerDataLearnLenght[STT1].vietnameseVocabulary === containerDataLearnLenght[count].vietnameseVocabulary
                ) {
                    STT1 = Math.floor(Math.random() * containerDataLearnLenght.length);
                }
                while (containerDataLearnLenght[STT1].vietnameseVocabulary === containerDataLearnLenght[STT2].vietnameseVocabulary
                ) {
                    STT1 = Math.floor(Math.random() * containerDataLearnLenght.length);

                }
                while (containerDataLearnLenght[STT2].vietnameseVocabulary === containerDataLearnLenght[count].vietnameseVocabulary
                ) {
                    STT2 = Math.floor(Math.random() * containerDataLearnLenght.length);
                }
                while (containerDataLearnLenght[STT1].vietnameseVocabulary === containerDataLearnLenght[STT2].vietnameseVocabulary
                ) {
                    STT2 = Math.floor(Math.random() * containerDataLearnLenght.length);
                }

                let contentInput: string = ``;
                if (STT === 0) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one isTakeContentInputOne">
                ${containerDataLearnLenght[count].vietnameseVocabulary}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one isTakeContentInputOne">
            ${containerDataLearnLenght[STT1].vietnameseVocabulary}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one isTakeContentInputOne">
            ${containerDataLearnLenght[STT2].vietnameseVocabulary}
            </li>
            `;
                } else if (STT === 1) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one isTakeContentInputOne">
            ${containerDataLearnLenght[STT2].vietnameseVocabulary}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one isTakeContentInputOne">
            ${containerDataLearnLenght[count].vietnameseVocabulary}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one isTakeContentInputOne">
            ${containerDataLearnLenght[STT1].vietnameseVocabulary}
            </li>
            `;
                } else if (STT === 2) {
                    contentInput = `
            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
            class="content_answer-one isTakeContentInputOne">
            ${containerDataLearnLenght[STT1].vietnameseVocabulary}
            </li>
            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
            class="content_answer-one isTakeContentInputOne">
            ${containerDataLearnLenght[STT2].vietnameseVocabulary}
            </li>
            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
            class="content_answer-one isTakeContentInputOne">
            ${containerDataLearnLenght[count].vietnameseVocabulary}
            </li>
            `;
                }
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');

                // notification_and_result

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');
                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
            <div class="content_img_audio">
                <div class="">
                <audio controls autoplay class="content_img_audio_audio">
                    <source src="${containerDataLearnLenght[count].audio}" type="audio/mpeg">
                </audio>
                </div>
                <img src="${containerDataLearnLenght[count].img}" alt="" class="content_img_audio-img">
                <br>
                <span class="content_img_audio-title">${containerDataLearnLenght[count].englishVocabulary}</span>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                    ${contentInput}
                </ul>
            </div>
            `
                }


                containerDataLearn1Element = containerDataLearnLenght[count];

                const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                questionNumber += questionNumberOne
                containerProgressbarChildId?.setAttribute('style', `width: ${questionNumber}%; `);
            } else {

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
            <div class="content_img_audio">
                <div class="">
                    <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                </div>
                <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${containerDataLearnLenght.length}</span>
                <div class="content_point">
                    Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                </div>
            </div>
            `
                };

                const containerPointTong: string = String(Number(dataUserInpormation.point) + containerNumber);
                console.log('containerPointTong 1: ', containerPointTong)
                PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            };
            count++;
        } else if (idMucHoc === 2) {

            const containerContentInputId: HTMLInputElement | null = document.getElementById('content_input_id') as HTMLInputElement;
            if (containerContentInputId.value !== '') {

                if (count !== containerDataLearnLenght.length) {

                    const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                    const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                    const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');


                    if (containerContentMiddbleId) {
                        containerContentMiddbleId.innerHTML = `
                <div class="content_img_audio">
                <div class="">
                <audio controls autoplay class="content_img_audio_audio">
                    <source src="${containerDataLearnLenght[count].audio}" type="audio/mpeg">
                </audio>
                </div>
                <img src="${containerDataLearnLenght[count].img}" alt="" class="content_img_audio-img">
                <br>
                <div id="take_answer" class="displayNone" >${containerDataLearnLenght[count].englishVocabulary}</div>
                <input id="content_input_id" class="content_input"></input>
            </div>
            `
                    };
                    containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

                    containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');

                    const container: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    if (content) {
                        content.innerHTML = "";
                    };
                    container?.setAttribute('class', 'notification_and_result');

                    const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                    questionNumber += questionNumberOne
                    containerProgressbarChildId?.setAttribute('style', `width: ${questionNumber}%; `);

                    count++;
                } else {


                    const containerNotification: HTMLElement | null = document.getElementById('notification');
                    const content: HTMLElement | null = document.getElementById('notification_text');

                    if (content) {
                        content.innerHTML = "";
                    };
                    containerNotification?.setAttribute('class', 'notification_and_result');
                    const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                    const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                    const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                    containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                    containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                    containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                    const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                    if (containerContentMiddbleId) {
                        containerContentMiddbleId.innerHTML = `
                        <div class="content_img_audio">
                        <div class="">
                            <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                        </div>
                        <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${containerDataLearnLenght.length}</span>
                        <div class="content_point">
                            Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                        </div>
                    </div>
                `
                    };
                    let dataLoginTakePointUser: any = await fetchDataLogin(emailPublic, passwordPublic);
                    const containerPointTong: string = String(Number(dataLoginTakePointUser.data.data.point) + containerNumber);
                    PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
                }
            } else {
                alert('Vui lòng nhập đáp án!');
            };



        } else if (idMucHoc === 3) {

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            if (count !== containerDataLearnLenght.length) {

                let STT: number = Math.floor(Math.random() * 3);
                let STT1: number = Math.floor(Math.random() * containerDataLearnLenght.length);
                let STT2: number = Math.floor(Math.random() * containerDataLearnLenght.length);

                while (containerDataLearnLenght[STT1].vietnameseVocabulary === containerDataLearnLenght[count].vietnameseVocabulary
                ) {
                    STT1 = Math.floor(Math.random() * containerDataLearnLenght.length);
                }
                while (containerDataLearnLenght[STT1].vietnameseVocabulary === containerDataLearnLenght[STT2].vietnameseVocabulary
                ) {
                    STT1 = Math.floor(Math.random() * containerDataLearnLenght.length);

                }
                while (containerDataLearnLenght[STT2].vietnameseVocabulary === containerDataLearnLenght[count].vietnameseVocabulary
                ) {
                    STT2 = Math.floor(Math.random() * containerDataLearnLenght.length);
                }
                while (containerDataLearnLenght[STT1].vietnameseVocabulary === containerDataLearnLenght[STT2].vietnameseVocabulary
                ) {
                    STT2 = Math.floor(Math.random() * containerDataLearnLenght.length);
                }

                let contentInput: string = ``;
                if (STT === 0) {
                    contentInput = `
                        <div number="1" onclick="handleHoverAnswer('1')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                            <img src="${containerDataLearnLenght[count].img}" alt="" class="content_img_audio-img">
                            <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[count].englishVocabulary}</div>
                            <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[count].vietnameseVocabulary}</div>
                            <audio id="content_img_audio_audio_id_1" controls  class="content_img_audio_audio displayNone">
                                <source src="${containerDataLearnLenght[count].audio}" type="audio/mpeg">
                            </audio>
                        </div>
                        <div number="2" onclick="handleHoverAnswer('2')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                            <img src="${containerDataLearnLenght[STT1].img}" alt="" class="content_img_audio-img">
                            <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[STT1].englishVocabulary}</div>
                            <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[STT1].vietnameseVocabulary}</div>
                            <audio id="content_img_audio_audio_id_2" controls  class="content_img_audio_audio displayNone">
                                <source src="${containerDataLearnLenght[STT1].audio}" type="audio/mpeg">
                            </audio>
                        </div>
                        <div number="3" onclick="handleHoverAnswer('3')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                            <img src="${containerDataLearnLenght[STT2].img}" alt="" class="content_img_audio-img">
                            <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[STT2].englishVocabulary}</div>
                            <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[STT2].vietnameseVocabulary}</div>
                            <audio id="content_img_audio_audio_id_3" controls  class="content_img_audio_audio displayNone">
                                <source src="${containerDataLearnLenght[STT2].audio}" type="audio/mpeg">
                            </audio>
                        </div>
            `;
                } else if (STT === 1) {
                    contentInput = `
                    <div number="1" onclick="handleHoverAnswer('1')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                    <img src="${containerDataLearnLenght[STT1].img}" alt="" class="content_img_audio-img">
                    <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[STT1].englishVocabulary}</div>
                    <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[STT1].vietnameseVocabulary}</div>
                    <audio controls id="content_img_audio_audio_id_1"  class="content_img_audio_audio displayNone">
                        <source src="${containerDataLearnLenght[STT1].audio}" type="audio/mpeg">
                    </audio>
                </div>
                <div number="2" onclick="handleHoverAnswer('2')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                    <img src="${containerDataLearnLenght[count].img}" alt="" class="content_img_audio-img">
                    <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[count].englishVocabulary}</div>
                    <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[count].vietnameseVocabulary}</div>
                    <audio controls id="content_img_audio_audio_id_2"  class="content_img_audio_audio displayNone">
                        <source src="${containerDataLearnLenght[count].audio}" type="audio/mpeg">
                    </audio>
                </div>
                <div number="3" onclick="handleHoverAnswer('3')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                    <img src="${containerDataLearnLenght[STT2].img}" alt="" class="content_img_audio-img">
                    <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[STT2].englishVocabulary}</div>
                    <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[STT2].vietnameseVocabulary}</div>
                    <audio controls id="content_img_audio_audio_id_3"  class="content_img_audio_audio displayNone">
                        <source src="${containerDataLearnLenght[STT2].audio}" type="audio/mpeg">
                    </audio>
                </div>
            `;
                } else if (STT === 2) {
                    contentInput = `
    
                    <div number="1" onclick="handleHoverAnswer('1')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                    <img src="${containerDataLearnLenght[STT2].img}" alt="" class="content_img_audio-img">
                    <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[STT2].englishVocabulary}</div>
                    <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[STT2].vietnameseVocabulary}</div>
                    <audio controls id="content_img_audio_audio_id_1"  class="content_img_audio_audio displayNone">
                        <source src="${containerDataLearnLenght[STT2].audio}" type="audio/mpeg">
                    </audio>
                </div>
                <div number="2" onclick="handleHoverAnswer('2')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                    <img src="${containerDataLearnLenght[STT1].img}" alt="" class="content_img_audio-img">
                    <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[STT1].englishVocabulary}</div>
                    <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[STT1].vietnameseVocabulary}</div>
                    <audio controls id="content_img_audio_audio_id_2"  class="content_img_audio_audio displayNone">
                        <source src="${containerDataLearnLenght[STT1].audio}" type="audio/mpeg">
                    </audio>
                </div>
                <div number="3" onclick="handleHoverAnswer('3')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                    <img src="${containerDataLearnLenght[count].img}" alt="" class="content_img_audio-img">
                    <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[count].englishVocabulary}</div>
                    <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[count].vietnameseVocabulary}</div>
                    <audio controls id="content_img_audio_audio_id_3"  class="content_img_audio_audio displayNone">
                        <source src="${containerDataLearnLenght[count].audio}" type="audio/mpeg">
                    </audio>
                </div>
            `;
                }
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');

                // notification_and_result

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');
                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                    <div class="container_content_functionLearn3">
                    <div class="title_functionLearn3">"${containerDataLearnLenght[count].vietnameseVocabulary}"</div>
                    <p class="title_functionLearn3_p">trong tiếng Anh là:</p>
                    <div class="container_content_functionLearn3_answer">
                        ${contentInput}
                    </div>
                </div>
            </div>
            `
                }


                containerDataLearn1Element = containerDataLearnLenght[count];

                const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                questionNumber += questionNumberOne
                containerProgressbarChildId?.setAttribute('style', `width: ${questionNumber}%; `);
            } else {

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                    <div class="content_img_audio">
                    <div class="">
                        <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                    </div>
                    <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${containerDataLearnLenght.length}</span>
                    <div class="content_point">
                        Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                    </div>
                </div>
                `
                };
                let dataLoginTakePointUser: any = await fetchDataLogin(emailPublic, passwordPublic);
                const containerPointTong: string = String(Number(dataLoginTakePointUser.data.data.point) + containerNumber);
                PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            };
            count++;
        } else if (idMucHoc === 4) {
            if (count !== dataParagraphLenght.length) {

                let STT: number = Math.floor(Math.random() * 3);
                let STT1: number = Math.floor(Math.random() * dataParagraphLenght.length);
                let STT2: number = Math.floor(Math.random() * dataParagraphLenght.length);

                while (dataParagraphLenght[STT1].englishVocabulary === dataParagraphLenght[count].englishVocabulary
                ) {
                    STT1 = Math.floor(Math.random() * dataParagraphLenght.length);
                }
                while (dataParagraphLenght[STT1].englishVocabulary === dataParagraphLenght[STT2].englishVocabulary
                ) {
                    STT1 = Math.floor(Math.random() * dataParagraphLenght.length);

                }
                while (dataParagraphLenght[STT2].englishVocabulary === dataParagraphLenght[count].englishVocabulary
                ) {
                    STT2 = Math.floor(Math.random() * dataParagraphLenght.length);
                }
                while (dataParagraphLenght[STT1].englishVocabulary === dataParagraphLenght[STT2].englishVocabulary
                ) {
                    STT2 = Math.floor(Math.random() * dataParagraphLenght.length);
                }

                let contentInput: string = ``;
                if (STT === 0) {
                    contentInput = `
                        <ul class="content_answer-ul">
                            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                            class="content_answer-one isTakeContentInputOne">
                            ${dataParagraphLenght[count].englishVocabulary}
                            </li>
                            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                            class="content_answer-one isTakeContentInputOne">
                            ${dataParagraphLenght[STT1].englishVocabulary}
                            </li>
                            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                            class="content_answer-one isTakeContentInputOne">
                            ${dataParagraphLenght[STT2].englishVocabulary}
                            </li>
                        </ul>
                 `;
                } else if (STT === 1) {
                    contentInput = `
                        <ul class="content_answer-ul">
                            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                            class="content_answer-one isTakeContentInputOne">
                            ${dataParagraphLenght[STT2].englishVocabulary}
                            </li>
                            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                            class="content_answer-one isTakeContentInputOne">
                            ${dataParagraphLenght[count].englishVocabulary}
                            </li>
                            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                            class="content_answer-one isTakeContentInputOne">
                            ${dataParagraphLenght[STT1].englishVocabulary}
                            </li>
                        </ul>
                `;
                } else if (STT === 2) {
                    contentInput = `
                        <ul class="content_answer-ul">
                            <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                            class="content_answer-one isTakeContentInputOne">
                            ${dataParagraphLenght[STT1].englishVocabulary}
                            </li>
                            <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                            class="content_answer-one isTakeContentInputOne">
                            ${dataParagraphLenght[STT2].englishVocabulary}
                            </li>
                            <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                            class="content_answer-one isTakeContentInputOne">
                            ${dataParagraphLenght[count].englishVocabulary}
                            </li>
                        </ul>
                        `;
                }
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');

                // notification_and_result

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');
                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');
                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                    <div class="functionFour">
                    <div class="functionFour_title">Chọn đáp án:</div>
                    <div class="functionFour_paragraph">${dataParagraphLenght[count].paragraph}</div>
                    <div class="content_answer">
                    ${contentInput}
                    </div>
                        </div>
                </div>
                `;
                }

                dataParagraph1Element = dataParagraphLenght[count];

                questionNumber = 0;
                questionNumberOne = 0
                const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                questionNumberFunctionFour += questionNumberOneFunctionFour
                containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberFunctionFour}%; `);
            } else {

                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                <div class="content_img_audio">
                <div class="">
                    <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                </div>
                <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${dataParagraphLenght.length}</span>
                <div class="content_point">
                    Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                </div>
                </div>
                `
                };
                let dataLoginTakePointUser: any = await fetchDataLogin(emailPublic, passwordPublic);
                const containerPointTong: string = String(Number(dataLoginTakePointUser.data.data.point) + containerNumber);
                PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            };
            count++;
        } else if (idMucHoc === 5) {
            if (count !== dataParagraphLenghtHearFrom.length) {
                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');


                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                    <div class="functionFour">
                    <div class="functionFour_title">Nghe điền từ:</div>
                    <div class="functionFour_audio">
                        <audio controls autoplay class="content_img_audio_audio">
                        <source src="${dataParagraphLenghtHearFrom[count].audio}" type="audio/mpeg">
                    </audio>
                    </div>
                    <div class="functionFour_paragraph">${dataParagraphLenghtHearFrom[count].paragraph}</div>
                    <div class="content_answer">
                        <div id="take_answer" class="displayNone">${dataParagraphLenghtHearFrom[count].englishVocabulary}</div>
                        <input id="content_input_id" class="content_input"></input>
                    </div>
                </div>
                `
                };
                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');

                const container: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                container?.setAttribute('class', 'notification_and_result');

                const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
                questionNumberFunctionFour += questionNumberOneFunctionFour
                containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberFunctionFour}%; `);
                count++;
            } else {


                const containerNotification: HTMLElement | null = document.getElementById('notification');
                const content: HTMLElement | null = document.getElementById('notification_text');

                if (content) {
                    content.innerHTML = "";
                };
                containerNotification?.setAttribute('class', 'notification_and_result');
                const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
                const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

                const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');

                containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn displayNone');

                containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');


                containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn');


                const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
                if (containerContentMiddbleId) {
                    containerContentMiddbleId.innerHTML = `
                    <div class="content_img_audio">
                    <div class="">
                        <img class="content_img_img" src="../public/image/ALL/dong-luc-lam-viec.jpg" alt="tạo_động_lực">
                    </div>
                    <span class="content_img_audio-title_End">Bạn đã làm bài đúng ${containerNumber}/${dataParagraphLenghtHearFrom.length}</span>
                    <div class="content_point">
                        Bạn được cộng thêm ${containerNumber} điểm vào tài khoản.
                    </div>
                </div>
                `
                };
                let dataLoginTakePointUser: any = await fetchDataLogin(emailPublic, passwordPublic);
                const containerPointTong: string = String(Number(dataLoginTakePointUser.data.data.point) + containerNumber);
                PostUpdatePointOfUser(dataUserInpormation.id, containerPointTong);
            }
        }
    } else if (nameOne === "pronounce") {

    } else if (nameOne === "communicate") {

    }

};



const handleLogout = (): void => {

    isLogin = false
    idMucHoc = 1;
    count = 1
    containerDataLearnLenght = [];
    dataParagraphLenght = [];
    const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
    for (let i: number = 0; i < data.length; i++) {
        if (Number(data[i].getAttribute('number')) === idMucHoc) {
            data[i].setAttribute('class', 'table_of_contents_li-active');
        } else {
            data[i].setAttribute('class', 'table_of_contents_li');
        };
    };
    if (isLogin === false) {
        const containerHeaderRightLiIdNotifications: HTMLElement | null = document.getElementById('header_right_li_notifications_id');
        if (containerHeaderRightLiIdNotifications) {
            containerHeaderRightLiIdNotifications.innerHTML = `
        Thông báo
        <div class="content_header_right_li_notifications">
            <div class="content_header_right_li_notifications_LoginFalse">
                <span class="content_header_right_li_notifications_LoginFalse_text">
                Vui lòng đăng nhập để nhận thông báo!.
                </span>
            </div>
        </div>    
        `
        }

        const containerHeaderRightLi: HTMLElement | null = document.getElementById('header_right_li_register_id');

        if (containerHeaderRightLi) {
            containerHeaderRightLi.setAttribute('class', 'header_right_li loginLi ');
        };
        const takeIdShowWasLoginTwo: HTMLElement | null = document.getElementById('header_right_li_login_id');
        const takeIdShowWasLoginOne: HTMLElement | null = document.getElementById('header_right_li_id');
        const idheaderRightLiIoginId: HTMLElement | null = document.getElementById('header_right_li_login_id');

        /// 

        const containergird8Id: HTMLElement | null = document.getElementById('gird-8_id');
        if (containergird8Id) {
            containergird8Id.setAttribute('class', 'gird-8')
        }
        const containerGird8LessonsId: HTMLElement | null = document.getElementById('gird-8-lessons_id');
        if (containerGird8LessonsId) {
            containerGird8LessonsId.setAttribute('class', 'gird-8-lessons displayNone')
        }
        const containerStartLearnId: HTMLElement | null = document.getElementById('start_learn_id');
        if (containerStartLearnId) {
            containerStartLearnId.setAttribute('class', 'start_learn displayNone ')
        }
        const containerGird2Id: HTMLElement | null = document.getElementById('gird-2_id');
        if (containerGird2Id) {
            containerGird2Id.setAttribute('class', 'gird-2')
        }


        takeIdShowWasLoginTwo?.setAttribute("class", "header_right_li_login displayNone");

        takeIdShowWasLoginOne?.setAttribute("class", "header_right_li loginLi ");

        if (idheaderRightLiIoginId) {
            idheaderRightLiIoginId.innerHTML = `
            `;
        };
    };

    const containerGird2Id: HTMLElement | null = document.getElementById('gird-2_id');
    if (containerGird2Id) {
        containerGird2Id.innerHTML = `
        <div>
        <div class="content_point_gird_2">
            <img class="image_loading" src="../public/image/loading/loading.gif" alt="">
        </div>
        <div class="container_progressbar_point">
            <div id="content_progressbar_point_id" class="content_progressbar_point ">
                <span class="content_progressbar_point_child_text">loading...</span>
            </div>
        </div>
    </div>
    <div class="ngan_cach">

    </div>
    <div class="Leaderboard">
        <div class="Leaderboard_header">
            Bảng xếp hạng
        </div>
        <div class="Leaderboard_content" style="overflow: auto; max-height: 300px;">
        <ul class="Leaderboard_content_ul">
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_top1" class="Leaderboard_content_li_STT">1 :</span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                Hà Hoàn......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_top2" class="Leaderboard_content_li_STT">2 :</span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                thùy li......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_top3" class="Leaderboard_content_li_STT">3 :</span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                hoan......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_topvv" class="Leaderboard_content_li_STT"><span
                    style="margin: 0px 5px 0px 0px;">4</span> : </span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                hoan......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_topvv" class="Leaderboard_content_li_STT"><span
                    style="margin: 0px 5px 0px 0px;">5</span> : </span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                hoan......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_topvv" class="Leaderboard_content_li_STT"><span
                    style="margin: 0px 5px 0px 0px;">6</span> : </span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                hoan......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_topvv" class="Leaderboard_content_li_STT"><span
                    style="margin: 0px 5px 0px 0px;">7</span> : </span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                hoan......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_topvv" class="Leaderboard_content_li_STT"><span
                    style="margin: 0px 5px 0px 0px;">8</span> : </span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                hoan......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_topvv" class="Leaderboard_content_li_STT"><span
                    style="margin: 0px 5px 0px 0px;">9</span> : </span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                hoan......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
        <li class="Leaderboard_content_li">
            <span id="Leaderboard_content_li_STT_id_topvv" class="Leaderboard_content_li_STT"><span
                    style="margin: 0px 5px 0px 0px;">10</span> : </span>
            <img class="Leaderboard_content_li_img"
                src="../public/image/progressbar/white-2484120_640.webp" alt="">
            <span class="Leaderboard_content_li_name">
                hoan......
            </span>
            <span class="Leaderboard_content_li_point">
                000
                <i class="fa-solid fa-star Leaderboard_content_li_point_icon"></i>
            </span>
        </li>
    </ul>
        </div>
        <div class="ngan_cach">

        </div>
        <div>
            <img style="width: 300px; height: 300px; border-radius: 10px;"
                src="../public/image/logo/quang_cao.png" alt="quang_cao">
        </div>
    </div>

        `
    }


    const containerLeaderboardContentLiSTTIdTop1: HTMLElement | null = document.getElementById('Leaderboard_content_li_STT_id_top1');
    const containerLeaderboardContentLiSTTIdTop2: HTMLElement | null = document.getElementById('Leaderboard_content_li_STT_id_top2');
    const containerLeaderboardContentLiSTTIdTop3: HTMLElement | null = document.getElementById('Leaderboard_content_li_STT_id_top3');
    const containerLeaderboardContentLiSTTIdTopvv: NodeListOf<Element> = document.querySelectorAll('#Leaderboard_content_li_STT_id_topvv');


    if (containerLeaderboardContentLiSTTIdTop1 && containerLeaderboardContentLiSTTIdTop2 && containerLeaderboardContentLiSTTIdTop3 && containerLeaderboardContentLiSTTIdTopvv) {
        containerLeaderboardContentLiSTTIdTop1.innerHTML = `
        <i style="color: #ffd700;" class="fa-solid fa-trophy"></i> :
        `;
        containerLeaderboardContentLiSTTIdTop2.innerHTML = `
        <i style="color: #c0c0c0;" class="fa-solid fa-trophy"></i> :
        `;
        containerLeaderboardContentLiSTTIdTop3.innerHTML = `
        <i style="color: #6d4031;" class="fa-solid fa-trophy"></i> :
        `;
        for (let i = 0; i < containerLeaderboardContentLiSTTIdTopvv.length; i++) {
            const element = containerLeaderboardContentLiSTTIdTopvv[i] as HTMLElement;
            element.style.margin = '0px 8px 0px 12px';
        }
    };
}



const handleShowUserInformation = (): void => {
    const containerUserInpromationId: HTMLElement | null = document.getElementById('User_inpromation_id');
    if (containerUserInpromationId) {
        console.log(containerUserInpromationId.setAttribute('class', 'User_inpromation'));
    }
};


// const handleCloseUserInformation = (event: any): void => {
//     const containerUserInpromationId: HTMLElement | null = document.getElementById('User_inpromation_id');
//     if (containerUserInpromationId) {
//         containerUserInpromationId.setAttribute('class', 'User_inpromation displayNone');
//         event.preventDefault()
//     }

// }

const handleCloseUserInformation = (event: MouseEvent): void => {
    const containerUserInformation: HTMLElement | null = document.getElementById('User_inpromation_id');
    const targetElement = event.target as HTMLElement;
    if (containerUserInformation && targetElement === containerUserInformation) {


        event.preventDefault();
        containerUserInformation.classList.add('displayNone');
        event.stopPropagation(); // Ngăn chặn sự kiện click từ lan ra ngoài nếu cần



        const containerUserInpromationId: HTMLElement | null = document.getElementById('User_inpromation_id');

        if (containerUserInpromationId) {
            containerUserInpromationId.innerHTML = `
            <div class="User_inpromation_container">
            <div class="User_inpromation_container_header">
                <span class="User_inpromation_container_header_title">Thông tin của bạn</span>
            </div>
            <div class="User_inpromation_container_content">
                <div class="User_inpromation_container_content_image">
                <img id="User_inpromation_container_content_image_img_id" class="User_inpromation_container_content_image_img" src="${dataUserInpormation.image}" alt="">
                    <br>
                    <button class="User_inpromation_container_content_changeImage displayNone">
                        <i class="fa-solid fa-file"></i>
                        open folder
                    </button>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-user User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input class="User_inpromation_container_content_name_8_input" type="text"
                            placeholder="${dataUserInpormation.lastName + " " + dataUserInpormation.firstName}" disabled>
                    </div>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-id-card User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input class="User_inpromation_container_content_name_8_input" type="text"
                            placeholder="${dataUserInpormation.email}" disabled>
                    </div>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-lock User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input class="User_inpromation_container_content_name_8_input" type="password"
                            placeholder="*******" disabled>
                    </div>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-phone User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input class="User_inpromation_container_content_name_8_input" type="text"
                            placeholder="${dataUserInpormation.phoneNumber}" disabled>
                    </div>
                </div>
                <button id="User_inpromation_container_content_btn_id" onclick="handleEditUserInpormation()"
                    class="User_inpromation_container_content_btn">
                    Edit
                </button>
            </div>
        </div>
            `
        }
    }
}

const userInformationElement: HTMLElement | null = document.getElementById('User_inpromation_id');
if (userInformationElement) {
    userInformationElement.addEventListener('click', handleCloseUserInformation);
}

const handleEditUserInpormation = (): void => {


    const containerUserInpromationId: HTMLElement | null = document.getElementById('User_inpromation_id');

    if (containerUserInpromationId) {
        containerUserInpromationId.innerHTML = `
            <div class="User_inpromation_container">
            <div class="User_inpromation_container_header">
                <span class="User_inpromation_container_header_title">Thông tin của bạn</span>
            </div>
            <div class="User_inpromation_container_content">
                <div class="User_inpromation_container_content_image">
                    <img id="User_inpromation_container_content_image_img_id" class="User_inpromation_container_content_image_img" src="${dataUserInpormation.image}" alt="">
                    <br>
                    <button id="User_inpromation_container_content_changeImage_idShow" class="User_inpromation_container_content_changeImage" onclick="handleShowListimage('Show')">
                        <i class="fa-solid fa-image"></i>
                        Show image
                    </button>
                    <div id="content_chooseImage_id" class="content_chooseImage displayNone">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('1')" number="1"
                            class="content_chooseImage_img_edit_information" src="../public/image/login/0106_hinh-nen-4k-may-tinh47.jpg" alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('2')" number="2"
                            class="content_chooseImage_img_edit_information" src="../public/image/login/0106_hinh-nen-may-tinh-full-hd43.jpg"
                            alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('3')" number="3"
                            class="content_chooseImage_img_edit_information"
                            src="../public/image/login/13_999-hinh-nen-tai-mien-phi-full-hd-1920x1080-dep-2k-4k-8k-da-chu-de.jpg"
                            alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('4')" number="4"
                            class="content_chooseImage_img_edit_information"
                            src="../public/image/login/375664217_1342574439951213_3914003967176323577_n.jpg" alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('5')" number="5"
                            class="content_chooseImage_img_edit_information" src="../public/image/login/anh pc all.png" alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('6')" number="6"
                            class="content_chooseImage_img_edit_information" src="../public/image/login/Anh-IU.jpg" alt="7">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('7')" number="7"
                            class="content_chooseImage_img_edit_information"
                            src="../public/image/login/bo-suu-tap-nhung-con-meo-dep-nhat-cho-hinh-nen-may-tinh-va-dien-thoai-8.jpeg"
                            alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('8')" number="8"
                            class="content_chooseImage_img_edit_information" src="../public/image/login/Hoàng Quân.jpg" alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('9')" number="9"
                            class="content_chooseImage_img_edit_information" src="../public/image/login/Hình-nền-máy-tính-3d-sáng-tạo.jpg"
                            alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('10')" number="10"
                            class="content_chooseImage_img_edit_information" src="../public/image/login/quang_cao.png" alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('11')" number="11"
                            class="content_chooseImage_img_edit_information" src="../public/image/login/sleepy_kitten-1920x1080.jpg" alt="">
                        <img id="content_chooseImage_img_edit_information_id" onclick="handleShowImgEditInformation('12')" number="12"
                            class="content_chooseImage_img_edit_information" src="../public/image/login/thuylinh.jpg" alt="">
                    </div>
                    <button id="User_inpromation_container_content_changeImage_idHidden" class="User_inpromation_container_content_changeImage displayNone" onclick="handleShowListimage('hidden')">
                    <i class="fa-solid fa-image"></i>
                    Hidden image
                </button>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-user User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input id="input_lastName" style="cursor: auto !important;" class="User_inpromation_container_content_name_8_input" type="text"
                            placeholder="${dataUserInpormation.lastName}" >
                    </div>
                </div>
                 <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-user User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input id="input_fisrtName" style="cursor: auto !important;" class="User_inpromation_container_content_name_8_input" type="text"
                            placeholder="${dataUserInpormation.firstName}" >
                    </div>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-id-card User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input id="input_email"  style="cursor: auto !important;" class="User_inpromation_container_content_name_8_input" type="email"
                            placeholder="${dataUserInpormation.email}">
                    </div>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-lock User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input id="input_password" style="cursor: auto !important;" class="User_inpromation_container_content_name_8_input" type="password"
                            placeholder="*******" >
                    </div>
                </div>
                <div class="User_inpromation_container_content_name">
                    <div class="User_inpromation_container_content_name_2">
                        <i class="fa-solid fa-phone User_inpromation_container_content_name_2_icon"></i>
                    </div>
                    <div class="User_inpromation_container_content_name_8">
                        <input id="input_phoneNumber" style="cursor: auto !important;" class="User_inpromation_container_content_name_8_input" type="text"
                            placeholder="${dataUserInpormation.phoneNumber}" >
                    </div>
                </div>
                <button id="User_inpromation_container_content_btn_id" onclick="handleEditUserInpormation()"
                    class="User_inpromation_container_content_btn displayNone">
                    Edit
                </button>
                <button id="User_inpromation_container_content_btn_id" onclick="handleSaveUserInpormation()"
                    class="User_inpromation_container_content_btn">
                    save
                </button>
            </div>
        </div>
            `
    }
}


const handleSaveUserInpormation = async (): Promise<void> => {
    const containerinputLastName: HTMLInputElement | null = document.getElementById('input_lastName') as HTMLInputElement;
    const containerinputFirstName: HTMLInputElement | null = document.getElementById('input_fisrtName') as HTMLInputElement;
    const containerinputEmail: HTMLInputElement | null = document.getElementById('input_email') as HTMLInputElement;
    const containerinputPassword: HTMLInputElement | null = document.getElementById('input_password') as HTMLInputElement;
    const containerinputPhoneNumber: HTMLInputElement | null = document.getElementById('input_phoneNumber') as HTMLInputElement;
    const containerUserInpromationContainerContentImageImgId: HTMLElement | null = document.getElementById('User_inpromation_container_content_image_img_id');

    let dataImg: string | null | undefined = containerUserInpromationContainerContentImageImgId?.getAttribute('src');
    if (containerinputEmail.value.slice(-10) === '@gmail.com') {

        if (containerinputPhoneNumber.value.trim().length === 10 || containerinputPhoneNumber.value.trim().length === 11) {


            let containerDataNewUserInpormation: UserData = await fetchDataUpdateUserInpormation(dataUserInpormation.id, containerinputFirstName.value, containerinputLastName.value, containerinputEmail.value, containerinputPassword.value, containerinputPhoneNumber.value, dataImg);

            const dataMessage = containerDataNewUserInpormation.data;
            const email = containerDataNewUserInpormation.email;
            const firstName = containerDataNewUserInpormation.firstName;
            const lastName = containerDataNewUserInpormation.lastName;
            const message = containerDataNewUserInpormation.message;
            const phoneNumber = containerDataNewUserInpormation.phoneNumber;
            const image = containerDataNewUserInpormation.img;
            const checkIsLogin: any = containerDataNewUserInpormation.data;

            console.log('containerDataNewUserInpormation: ', containerDataNewUserInpormation);
            const containerUserInpromationId: HTMLElement | null = document.getElementById('User_inpromation_id');
            if (checkIsLogin.isLogin === true) {
                if (containerUserInpromationId) {
                    containerUserInpromationId.innerHTML = `
                    <div class="User_inpromation_container">
                <div class="User_inpromation_container_header">
                    <span class="User_inpromation_container_header_title">Thông tin của bạn</span>
                </div>
                <div class="User_inpromation_container_content">
                    <div class="User_inpromation_container_content_image">
                        <img id="User_inpromation_container_content_image_img_id" class="User_inpromation_container_content_image_img" src="${image}" alt="">
                        <br>
                        <button class="User_inpromation_container_content_changeImage displayNone">
                            <i class="fa-solid fa-file"></i>
                            open folder
                        </button>
                    </div>
                    <div class="User_inpromation_container_content_name">
                        <div class="User_inpromation_container_content_name_2">
                            <i class="fa-solid fa-user User_inpromation_container_content_name_2_icon"></i>
                        </div>
                        <div class="User_inpromation_container_content_name_8">
                            <input class="User_inpromation_container_content_name_8_input" type="text"
                                placeholder="${lastName + " " + firstName}" disabled>
                        </div>
                    </div>
                    <div class="User_inpromation_container_content_name">
                        <div class="User_inpromation_container_content_name_2">
                            <i class="fa-solid fa-id-card User_inpromation_container_content_name_2_icon"></i>
                        </div>
                        <div class="User_inpromation_container_content_name_8">
                            <input class="User_inpromation_container_content_name_8_input" type="text"
                                placeholder="${email}" disabled>
                        </div>
                    </div>
                    <div class="User_inpromation_container_content_name">
                        <div class="User_inpromation_container_content_name_2">
                            <i class="fa-solid fa-lock User_inpromation_container_content_name_2_icon"></i>
                        </div>
                        <div class="User_inpromation_container_content_name_8">
                            <input class="User_inpromation_container_content_name_8_input" type="password"
                                placeholder="*******" disabled>
                        </div>
                    </div>
                    <div class="User_inpromation_container_content_name">
                        <div class="User_inpromation_container_content_name_2">
                            <i class="fa-solid fa-phone User_inpromation_container_content_name_2_icon"></i>
                        </div>
                        <div class="User_inpromation_container_content_name_8">
                            <input class="User_inpromation_container_content_name_8_input" type="text"
                                placeholder="${phoneNumber}" disabled>
                        </div>
                    </div>
                    <button id="User_inpromation_container_content_btn_id" onclick="handleEditUserInpormation()"
                        class="User_inpromation_container_content_btn">
                        Edit
                    </button>
                </div>
            </div>
                    `
                }

                const idheaderRightLiIoginId: HTMLElement | null = document.getElementById('header_right_li_login_id');

                if (idheaderRightLiIoginId) {
                    idheaderRightLiIoginId.innerHTML = `
                    <img class="image_of_user" src="${image}" alt="iu">
                    ${lastName} ${firstName}
                    <div id="header_right_li_login_child_id" class="header_right_li_login_child">
                        <ul class="header_right_li_login_child_ul">
                            <li onclick="handleShowUserInformation()" class="header_right_li_login_child_li">
                            <i class="fa-solid fa-user header_right_li_login_child_li_icon"></i>
                            Thông tin
                            </li>
                            <li class="header_right_li_login_child_li">
                            <i class="fa-solid fa-building-columns header_right_li_login_child_li_icon "></i>
                            Nạp tiền
                            </li>
                            <li class="header_right_li_login_child_li">
                            <i class="fa-solid fa-circle-info header_right_li_login_child_li_icon"></i>
                            Hỗ trợ
                            </li>
                            <li id="header_right_li_login_child_li_id" onclick="handleLogout()" class="header_right_li_login_child_li">
                            <i class="fa-solid fa-arrow-right-from-bracket header_right_li_login_child_li_icon"></i>
                            Đăng xuất
                            </li>
                        </ul>
                        </div>
                    `;
                };
            } else {
                alert('Email Or Phone Number đã tồn tại, Vui lòng nhập lại!');
            }


        } else {
            alert('Vui lòng nhập đúng số điện thoại!');
        };



    } else {
        alert('Vui lòng nhập Gmail đúng!');
    };
};




//     
const handleOnclickNextLearnOr = (): void => {
    if (nameOne === "elocution") {
        if (idMucHoc === 1) {
            idMucHoc = 2;
            count = 1;
            containerNumber = 0;
            questionNumberElocutions = 0;
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            questionNumberElocutions += questionNumberOneElocutions
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberElocutions}%; `);
            const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < data.length; i++) {
                if (Number(data[i].getAttribute('number')) === idMucHoc) {
                    data[i].setAttribute('class', 'table_of_contents_li_elucotions-active');
                } else {
                    data[i].setAttribute('class', 'table_of_contents_li_elucotions');
                };
            };

            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            count = 1;
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            containerElocution1Element = containerElocutionLength[0];

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <img src="${containerElocution1Element.img_xacDinhThanhPhanCau}" alt="" class="content_img_audio-img">
                <br>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                    <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLength[6].sentenceComponents}
                    </li>
                    <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLength[4].sentenceComponents}
                    </li>
                    <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocution1Element.sentenceComponents}
                    </li>
                </ul>
            </div>
                </div>
                `
            };


        } else if (idMucHoc === 2) {
            idMucHoc = 3;
            count = 1;
            containerNumber = 0;
            questionNumberElocutions = 0;
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            questionNumberElocutions += questionNumberOneElocutions
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberElocutions}%; `);
            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');
            const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < data.length; i++) {
                if (Number(data[i].getAttribute('number')) === idMucHoc) {
                    data[i].setAttribute('class', 'table_of_contents_li_elucotions-active');
                } else {
                    data[i].setAttribute('class', 'table_of_contents_li_elucotions');
                };
            };
            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');

            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            containerElocution1Element = containerElocutionLength[0];

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <img src="${containerElocution1Element.img_xacDinhCauTrucCau}" alt="" class="content_img_audio-img">
                <br>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                    <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLength[6].sentenceStructures}
                    </li>
                    <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLength[4].sentenceStructures}
                    </li>
                    <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocution1Element.sentenceStructures}
                    </li>
                </ul>
            </div>
                </div>
                `
            };
        } else if (idMucHoc === 3) {
            contenDiv = [];
            ardataNew = [];
            contenDivCheck = [];
            ardataNewCheck = [];
            isCheckanswerFunctionFourOfElocutions = false;
            idMucHoc = 4;
            count = 1;
            containerNumber = 0;
            questionNumberElocutionsArrangeStructures = 0;

            const dataActive: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < dataActive.length; i++) {
                if (Number(dataActive[i].getAttribute('number')) === idMucHoc) {
                    dataActive[i].setAttribute('class', 'table_of_contents_li_elucotions-active');
                } else {
                    dataActive[i].setAttribute('class', 'table_of_contents_li_elucotions');
                };
            };
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_elocution_FuncFour');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberOneElocutions}%; `);
            questionNumberElocutionsArrangeStructures = 100 / containerElocutionLengthArrangeStructures.length;
            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            count = 1;
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            containerElocution1ElementArrangeStructures = containerElocutionLengthArrangeStructures[0];
            let arData: string = containerElocution1ElementArrangeStructures.englishParagraph;
            dataAnswers = arData.split(" ");
            let countFunctionFour: number = 1;

            for (let i: number = 0; i < dataAnswers.length; i++) {
                contenDivCheck.push(dataAnswers[i]);
            };

            function fisherYatesShuffle(array: string[]) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            fisherYatesShuffle(dataAnswers); // Đảo lộn toàn bộ mảng
            for (let i: number = 0; i < dataAnswers.length; i++) {
                contenDiv.push(`
                <span id="content_answer-one_function_4_id" number="${countFunctionFour}" onclick="handleArrangeFunctionFour(${countFunctionFour})"
                    class="content_answer-one_function_4 isTakeContentInputOneFunctionFour">
                    ${dataAnswers[i]}
                </span>
                `)
                countFunctionFour++;
            };

            let data: string = '';
            for (let i: number = 0; i < contenDiv.length; i++) {
                data += contenDiv[i]
            }
            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="functionFour">
                    <div class="functionFour_title">
                        Sắp xếp thành câu hoàn chỉnh.
                    </div>
                    <div class="functionFour_paragraph">
                        ${containerElocution1ElementArrangeStructures.vietnameseParagraph}
                    </div>
                    <div class="content_answerChoose_function_4">
                        <div id="content_answer-div_function_4_id" class="content_answer-div_function_4">
                            ${data}
                        </div>
                    </div>
                    <div id="container_answer_functions_4_id" class="container_answer_functions_4">
                    </div> 
                </div>
                `
            };
        } else if (idMucHoc === 4) {
            idMucHoc = 5;
            count = 1;
            containerNumber = 0;
            questionNumberElocutions = 0;
            const dataActive: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < dataActive.length; i++) {
                if (Number(dataActive[i].getAttribute('number')) === idMucHoc) {
                    dataActive[i].setAttribute('class', 'table_of_contents_li_elucotions-active');
                } else {
                    dataActive[i].setAttribute('class', 'table_of_contents_li_elucotions');
                };
            };
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_elocution_FuncFour');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberOneElocutions}%; `);
            questionNumberElocutions = 100 / containerElocutionLength.length;

            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            count = 1;
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            containerElocution1Element = containerElocutionLength[0];

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="functionFour">
                <div class="functionFour_title">Chọn đáp án:</div>
                <div class="functionFour_paragraph">${containerElocution1Element.paragraph_5}</div>
                <div class="content_answer">
                    <ul class="content_answer-ul">
                        <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                        class="content_answer-one_5 isTakeContentInputOne">
                        ${containerElocutionLength[3].answer_55}
                        </li>
                        <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                        class="content_answer-one_5 isTakeContentInputOne">
                        ${containerElocutionLength[4].answer_55}
                        </li>
                        <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                        class="content_answer-one_5 isTakeContentInputOne">
                        ${containerElocution1Element.answer_55}
                        </li>
                    </ul>
                </div>
                    </div>
            </div> 
                </div>
                `
            };
        } else if (idMucHoc === 5) {
            idMucHoc = 6;
            count = 1;
            containerNumber = 0;
            questionNumberElocutionsArrangeStructures = 0;
            const dataActive: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < dataActive.length; i++) {
                if (Number(dataActive[i].getAttribute('number')) === idMucHoc) {
                    dataActive[i].setAttribute('class', 'table_of_contents_li_elucotions-active');
                } else {
                    dataActive[i].setAttribute('class', 'table_of_contents_li_elucotions');
                };
            };
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble');
            }
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberOneElocutionsArrangeStructures}%; `);
            questionNumberElocutionsArrangeStructures = 100 / containerElocutionLengthArrangeStructures.length

            containerElocution1ElementArrangeStructures = containerElocutionLengthArrangeStructures[0]
            const containerNotification: HTMLElement | null = document.getElementById('notification');
            const content: HTMLElement | null = document.getElementById('notification_text');

            if (content) {
                content.innerHTML = "";
            };
            containerNotification?.setAttribute('class', 'notification_and_result');
            count = 1;
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');
            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone ');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            containerElocution1Element = containerElocutionLength[0];

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="container_imgAndSpan">
                <img src="${containerElocution1ElementArrangeStructures.img}" alt="" class="content_img_audio-img">
                <br>
                <span class="content_img_audio-title" >True Or False?</span>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                    <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocutionLengthArrangeStructures[2].answer}
                    </li>
                    <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                    class="content_answer-one isTakeContentInputOne">
                    ${containerElocution1ElementArrangeStructures.answer}
                    </li>
                </ul>
            </div>
                </div>
                `
            };
        } else if (idMucHoc === 6) {
            alert('Đã chuyển sang mục the end');
        }
    } else if (nameOne === "vocabulary") {
        if (idMucHoc === 1) {
            idMucHoc = 2;
            count = 1;
            containerNumber = 0;
            questionNumber = 0;
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            questionNumber += questionNumberOne
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumber}%; `);
            const containerContentmiddbleId: HTMLElement | null = document.getElementById('content_middble_id');
            if (containerContentmiddbleId) {
                containerContentmiddbleId.setAttribute('class', 'content_middble_FuncOne');
            }
            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < data.length; i++) {
                if (Number(data[i].getAttribute('number')) === idMucHoc) {
                    data[i].setAttribute('class', 'table_of_contents_li-active');
                } else {
                    data[i].setAttribute('class', 'table_of_contents_li');
                };
            };
            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="content_img_audio">
                <div class="">
                <audio controls autoplay class="content_img_audio_audio">
                    <source src="${containerDataLearnLenght[0].audio}" type="audio/mpeg">
                </audio>
                </div>
                <img src="${containerDataLearnLenght[0].img}" alt="" class="content_img_audio-img">
                <br>
                <div id="take_answer" class="displayNone">${containerDataLearnLenght[0].englishVocabulary}</div>
                <input id="content_input_id" class="content_input"></input>
            </div>
            `
            };


            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');



            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')


        } else if (idMucHoc === 2) {


            idMucHoc = 3
            count = 1
            containerNumber = 0
            questionNumber = 0
            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            questionNumber += questionNumberOne
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumber}%; `);
            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < data.length; i++) {
                if (Number(data[i].getAttribute('number')) === idMucHoc) {
                    data[i].setAttribute('class', 'table_of_contents_li-active');
                } else {
                    data[i].setAttribute('class', 'table_of_contents_li');
                };
            };

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="container_content_functionLearn3">
                <div class="title_functionLearn3">"${containerDataLearn1Element.vietnameseVocabulary}"</div>
                <p class="title_functionLearn3_p">trong tiếng Anh là:</p>
                <div class="container_content_functionLearn3_answer">
                    <div number="1" onclick="handleHoverAnswer('1')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                        <img src="${containerDataLearn1Element.img}" alt="" class="content_img_audio-img">
                        <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearn1Element.englishVocabulary}</div>
                        <div id="dataInnerText" class="displayNone">${containerDataLearn1Element.vietnameseVocabulary}</div>
                        <audio id="content_img_audio_audio_id_1" controls class="content_img_audio_audio displayNone">
                            <source src="${containerDataLearn1Element.audio}" type="audio/mpeg">
                        </audio>
                    </div>
                    <div number="2" onclick="handleHoverAnswer('2')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                        <img src="${containerDataLearnLenght[3].img}" alt="" class="content_img_audio-img">
                        <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[3].englishVocabulary}</div>
                        <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[3].vietnameseVocabulary}</div>
                        <audio id="content_img_audio_audio_id_2" controls class="content_img_audio_audio displayNone">
                            <source src="${containerDataLearnLenght[3].audio}" type="audio/mpeg">
                        </audio>
                    </div>
                    <div number="3" onclick="handleHoverAnswer('3')" id="container_content_functionLearn3_answer_123_id" class="container_content_functionLearn3_answer_123">
                        <img src="${containerDataLearnLenght[5].img}" alt="" class="content_img_audio-img">
                        <div id="take_answer" class="title_functionLearn3_answer">${containerDataLearnLenght[5].englishVocabulary}</div>
                        <div id="dataInnerText" class="displayNone">${containerDataLearnLenght[5].vietnameseVocabulary}</div>
                        <audio id="content_img_audio_audio_id_3" controls class="content_img_audio_audio displayNone">
                            <source src="${containerDataLearnLenght[5].audio}" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>
        </div>
            `
            };

            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');



            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')
        } else if (idMucHoc === 3) {
            idMucHoc = 4
            count = 1
            containerNumber = 0
            questionNumberFunctionFour = 0;

            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            questionNumberFunctionFour += questionNumberOneFunctionFour
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberFunctionFour}%; `);

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < data.length; i++) {
                if (Number(data[i].getAttribute('number')) === idMucHoc) {
                    data[i].setAttribute('class', 'table_of_contents_li-active');
                } else {
                    data[i].setAttribute('class', 'table_of_contents_li');
                };
            };

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
            <div class="functionFour">
                <div class="functionFour_title">Chọn đáp án:</div>
                <div class="functionFour_paragraph">${dataParagraph1Element.paragraph}</div>
                <div class="content_answer">
                    <ul class="content_answer-ul">
                        <li id="content_answer-one-id" number="1" onclick="handleOclickActiveAnswer('1')"
                        class="content_answer-one isTakeContentInputOne">
                        ${dataParagraphLenght[3].englishVocabulary}
                        </li>
                        <li id="content_answer-one-id" number="2" onclick="handleOclickActiveAnswer('2')"
                        class="content_answer-one isTakeContentInputOne">
                        ${dataParagraphLenght[4].englishVocabulary}
                        </li>
                        <li id="content_answer-one-id" number="3" onclick="handleOclickActiveAnswer('3')"
                        class="content_answer-one isTakeContentInputOne">
                        ${dataParagraph1Element.englishVocabulary}
                        </li>
                    </ul>
                </div>
                    </div>
            </div>        
                `
            };
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');



            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')
        } else if (idMucHoc === 4) {
            idMucHoc = 5
            count = 1
            containerNumber = 0
            questionNumberFunctionFour = 0;
            questionNumberOneFunctionFour = 100 / dataParagraphLenghtHearFrom.length;
            dataParagraph1ElementHearFrom = dataParagraphLenghtHearFrom[0];

            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            questionNumberFunctionFour += questionNumberOneFunctionFour
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberFunctionFour}%; `);

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < data.length; i++) {
                if (Number(data[i].getAttribute('number')) === idMucHoc) {
                    data[i].setAttribute('class', 'table_of_contents_li-active');
                } else {
                    data[i].setAttribute('class', 'table_of_contents_li');
                };
            };

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="functionFour">
                <div class="functionFour_title">Nghe điền từ:</div>
                <div class="">
                    <audio controls autoplay class="content_img_audio_audio">
                    <source src="${dataParagraph1ElementHearFrom.audio}" type="audio/mpeg">
                </audio>
                </div>
                <div class="functionFour_paragraph">${dataParagraph1ElementHearFrom.paragraph}</div>
                <div class="content_answer">
                    <div id="take_answer" class="displayNone">${dataParagraph1ElementHearFrom.englishVocabulary}</div>
                    <input id="content_input_id" class="content_input"></input>
                </div>
            </div>        
                `
            };
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');



            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

        } else if (idMucHoc === 5) {
            idMucHoc = 6
            count = 1
            containerNumber = 0
            questionNumberFunctionFour = 0;
            questionNumberOneFunctionFour = 100 / dataParagraphLenghtHearFrom.length;
            dataParagraph1ElementHearFrom = dataParagraphLenghtHearFrom[0];

            const containerProgressbarChildId: HTMLElement | null = document.getElementById('progressbar-child_id');
            questionNumberFunctionFour += questionNumberOneFunctionFour
            containerProgressbarChildId?.setAttribute('style', `width: ${questionNumberFunctionFour}%; `);

            const containerContentMiddbleId: HTMLElement | null = document.getElementById('content_middble_id');

            const data: NodeListOf<Element> = document.querySelectorAll('#table_of_contents-id');
            for (let i: number = 0; i < data.length; i++) {
                if (Number(data[i].getAttribute('number')) === idMucHoc) {
                    data[i].setAttribute('class', 'table_of_contents_li-active');
                } else {
                    data[i].setAttribute('class', 'table_of_contents_li');
                };
            };

            if (containerContentMiddbleId) {
                containerContentMiddbleId.innerHTML = `
                <div class="content_img_audio">
                <div class="">
                </div>
                <span class="content_img_audio-title_End">Chức năng học 6 chưa được hoàn thành <br> vui lòng chọn mục học khác!</span>
            </div>
            <div class="content_answer">
                <ul class="content_answer-ul">
                </ul>
            </div>       
                `
            };
            const containerBtnResultIdKiemTra: HTMLElement | null = document.getElementById('btn_result_id_KiemTra');
            const containerBtnResultIdTiepTuc: HTMLElement | null = document.getElementById('btn_result_id_TiepTuc');

            const containerBtnResultIdHocMucKhac: HTMLElement | null = document.getElementById('btn_result_id_HocMucKhac');



            containerBtnResultIdKiemTra?.setAttribute('class', 'notification_and_result_btn ');

            containerBtnResultIdTiepTuc?.setAttribute('class', 'notification_and_result_btn displayNone');

            containerBtnResultIdHocMucKhac?.setAttribute('class', 'notification_and_result_btn displayNone ')

        }
    } else if (nameOne === "pronounce") {

    } else if (nameOne === "communicate") {

    };

};

let countShowMenu: number = 0;
document.addEventListener("DOMContentLoaded", (): void => {

    const containerMenuButton: HTMLElement | null = document.getElementById('menuButton');

    if (containerMenuButton) {
        containerMenuButton.onclick = (): void => {
            const containerMenuDropdown: HTMLElement | null = document.getElementById('menuDropdown');
            if (containerMenuDropdown) {
                if (countShowMenu % 2 === 0) {
                    containerMenuDropdown.setAttribute('class', 'menu_dropdown')
                    countShowMenu++;
                } else {
                    containerMenuDropdown.setAttribute('class', 'menu_dropdown displayNone')
                    countShowMenu++;
                };
            };
        };
    };
})

// xử lí hover vào để chọn đáp án;

const handleHoverAnswer = (ma: string): void => {
    const containerContentFunctionLearn3Answer123Id: NodeListOf<Element> = document.querySelectorAll('#container_content_functionLearn3_answer_123_id');
    const containerContentImgaudioAudio1: HTMLAudioElement = document.getElementById('content_img_audio_audio_id_1') as HTMLAudioElement;
    const containerContentImgaudioAudio2: HTMLAudioElement = document.getElementById('content_img_audio_audio_id_2') as HTMLAudioElement;
    const containerContentImgaudioAudio3: HTMLAudioElement = document.getElementById('content_img_audio_audio_id_3') as HTMLAudioElement;
    if (containerContentFunctionLearn3Answer123Id && containerContentImgaudioAudio1 && containerContentImgaudioAudio2 && containerContentImgaudioAudio3) {
        for (let i: number = 0; i < containerContentFunctionLearn3Answer123Id.length; i++) {
            if (containerContentFunctionLearn3Answer123Id[i].getAttribute('number') === ma) {
                containerContentFunctionLearn3Answer123Id[i].setAttribute('class', ' container_content_functionLearn3_answer_123 container_content_functionLearn3_answer_123_hover');


                // Lấy nội dung của <div id="dataInnerText">
                const dataInnerText = containerContentFunctionLearn3Answer123Id[i].querySelector('.displayNone');
                if (dataInnerText) {
                    const vietnameseVocabulary = dataInnerText.textContent;
                    console.log(vietnameseVocabulary); // In ra nội dung


                    if (vietnameseVocabulary?.trim().toLocaleLowerCase() === containerDataLearn1Element.vietnameseVocabulary) {
                        isValueAnswer = true
                        ischeckanswer = true
                        if (ma === "1") {
                            containerContentImgaudioAudio1.play();

                        } else if (ma === "2") {
                            containerContentImgaudioAudio2.play();

                        } else if (ma === "3") {
                            containerContentImgaudioAudio3.play();

                        };
                    } else {
                        isValueAnswer = false
                        ischeckanswer = true
                        if (ma === "1") {
                            containerContentImgaudioAudio1.play();

                        } else if (ma === "2") {
                            containerContentImgaudioAudio2.play();

                        } else if (ma === "3") {
                            containerContentImgaudioAudio3.play();

                        };
                    };
                }
            } else {
                containerContentFunctionLearn3Answer123Id[i].setAttribute('class', 'container_content_functionLearn3_answer_123');
            };
        };
    }


}


const handleShowHonors = (): void => {
    const containerHonorsId: HTMLElement | null = document.getElementById('honors_id');
    if (containerHonorsId) {
        containerHonorsId.setAttribute('class', 'honors');
    }
};


const handleCloseHonors = (): void => {
    const containerHonorsId: HTMLElement | null = document.getElementById('honors_id');
    if (containerHonorsId) {
        containerHonorsId.setAttribute('class', 'honors displayNone');
    }
}
const handleShowAndCloseNotifications = (id: number): void => {
    const containerHeaderRightLiUlLiId: NodeListOf<Element> = document.querySelectorAll('#header_right_li_ul_li_id');
    if (containerHeaderRightLiUlLiId) {
        alert('Đã xem!')
        for (let i: number = 0; i < containerHeaderRightLiUlLiId.length; i++) {
            if (Number(containerHeaderRightLiUlLiId[i].getAttribute('number')) === id) {
                containerHeaderRightLiUlLiId[i].parentNode?.removeChild(containerHeaderRightLiUlLiId[i]);
            };
        };
        const containerHeaderRightLiUlLiIds: NodeListOf<Element> = document.querySelectorAll('#header_right_li_ul_li_id');
        const containerNumberOfNotifications: HTMLElement | null = document.getElementById('number_of_notifications');
        if (containerNumberOfNotifications && containerHeaderRightLiUlLiIds) {
            containerNumberOfNotifications.innerText = String(containerHeaderRightLiUlLiIds.length);
            if (containerNumberOfNotifications.innerText === "0") {
                const containerHeaderRightLiIdNotifications: HTMLElement | null = document.getElementById('header_right_li_notifications_id');
                if (containerHeaderRightLiIdNotifications) {
                    containerHeaderRightLiIdNotifications.innerHTML = `
                Thông báo
                <div class="content_header_right_li_notifications">
                    <div class="content_header_right_li_notifications_LoginFalse">
                        <span class="content_header_right_li_notifications_LoginFalse_text">
                        Hiện tại thông báo không có!.
                        </span>
                    </div>
                </div>    
                `
                }
            }
        }
    };
};


const handleDeleteAllNotifications = (): void => {
    const containerHeaderRightLiUlLiId: NodeListOf<Element> = document.querySelectorAll('#header_right_li_ul_li_id');
    if (containerHeaderRightLiUlLiId) {
        for (let i: number = 0; i < containerHeaderRightLiUlLiId.length; i++) {
            containerHeaderRightLiUlLiId[i].parentNode?.removeChild(containerHeaderRightLiUlLiId[i]);
        };
        const containerNumberOfNotifications: HTMLElement | null = document.getElementById('number_of_notifications');
        if (containerNumberOfNotifications) {
            containerNumberOfNotifications.innerText = String(0);
            if (containerNumberOfNotifications.innerText === "0") {
                const containerHeaderRightLiIdNotifications: HTMLElement | null = document.getElementById('header_right_li_notifications_id');
                if (containerHeaderRightLiIdNotifications) {
                    containerHeaderRightLiIdNotifications.innerHTML = `
                Thông báo
                <div class="content_header_right_li_notifications">
                    <div class="content_header_right_li_notifications_LoginFalse">
                        <span class="content_header_right_li_notifications_LoginFalse_text">
                        Hiện tại thông báo không có!.
                        </span>
                    </div>
                </div>    
                `
                }
            }
        }
    }
}


// xử lý onlick chức năng học 4 của elocutions
let ardataNew: any = [];
let ardataNewCheck: string[] = [];
const handleArrangeFunctionFour = (id: number): void => {
    const containerContentAnswerOneFunction4Id: NodeListOf<Element> = document.querySelectorAll('#content_answer-one_function_4_id');
    const containerContainerAnswerFunctions4Id: HTMLElement | null = document.getElementById('container_answer_functions_4_id');
    if (containerContentAnswerOneFunction4Id && containerContainerAnswerFunctions4Id) {
        for (let i: number = 0; i < containerContentAnswerOneFunction4Id.length; i++) {
            if (Number(containerContentAnswerOneFunction4Id[i].getAttribute('Number')) === id) {
                containerContentAnswerOneFunction4Id[i].setAttribute('class', 'content_answer-one_function_4 isTakeContentInputOneFunctionFour displayNone');
                ardataNew.push(`
                <span id="content_answer-one_functionNew_4_id" number="${containerContentAnswerOneFunction4Id[i].getAttribute("Number")}" onclick="handleChangeArrangeFunctionFour(${containerContentAnswerOneFunction4Id[i].getAttribute("Number")})"
                    class="content_answer-one_function_4 isTakeContentInputOneFunctionFour">
                    ${containerContentAnswerOneFunction4Id[i].innerHTML}
                </span>
                `)
                let data: string = '';
                for (let i: number = 0; i < ardataNew.length; i++) {
                    data += ardataNew[i];
                };
                const containerContainerAnswerFunctions4id: HTMLElement | null = document.getElementById('container_answer_functions_4_id');
                if (containerContainerAnswerFunctions4id) {
                    containerContainerAnswerFunctions4id.innerHTML = `
                    ${data}
                    `;
                };
                ardataNewCheck.push(containerContentAnswerOneFunction4Id[i].innerHTML.trim());

                function removeDuplicates(arr: any) {
                    return arr.filter((value: any, index: any, self: any) => self.indexOf(value) === index);
                }
                ardataNewCheck = removeDuplicates(ardataNewCheck);
            };
        };
        console.log('handleArrangeFunctionFour:ardataNewCheck: ', ardataNewCheck);
    };
};
let dataNew: string[] = [];
const handleChangeArrangeFunctionFour = (id: number): void => {
    const containerContentAnswerOneFunctionNew4id: NodeListOf<Element> = document.querySelectorAll('#content_answer-one_functionNew_4_id');
    const containerContentAnswerOneFunction4Id: NodeListOf<Element> = document.querySelectorAll('#content_answer-one_function_4_id');
    const containerContainerAnswerFunctions4Id: HTMLElement | null = document.getElementById('container_answer_functions_4_id');
    if (containerContentAnswerOneFunctionNew4id && containerContainerAnswerFunctions4Id) {
        for (let i: number = 0; i < containerContentAnswerOneFunction4Id.length; i++) {
            if (Number(containerContentAnswerOneFunction4Id[i].getAttribute("Number")) === id) {
                containerContentAnswerOneFunction4Id[i].setAttribute('class', 'content_answer-one_function_4 isTakeContentInputOneFunctionFour ');
            };
        };
        for (let i: number = 0; i < containerContentAnswerOneFunctionNew4id.length; i++) {
            if (Number(containerContentAnswerOneFunctionNew4id[i].getAttribute('Number')) === id) {
                ardataNew = ardataNew.filter((item: any) => {
                    const htmlString = `${item}`;

                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = htmlString;

                    const element: Element | null = tempDiv.firstElementChild;
                    return Number(element?.getAttribute('number')) !== id;
                });
                ardataNewCheck = ardataNewCheck.filter((item: any) => {
                    const htmlString = `${item}`;

                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = htmlString;

                    const element: Element | null = tempDiv.firstElementChild;
                    return Number(element?.getAttribute('number')) !== id;
                })

                let data: string = '';
                for (let i: number = 0; i < ardataNew.length; i++) {
                    data += ardataNew[i];
                };

                containerContainerAnswerFunctions4Id.innerHTML = `
                ${data} 
                `;
                for (let j: number = 0; j < ardataNewCheck.length; j++) {
                    if (containerContentAnswerOneFunctionNew4id[i].innerHTML.trim() === ardataNewCheck[j]) {
                        ardataNewCheck.splice(j, 1);
                    };
                };
            };
        };
        console.log('handleChangeArrangeFunctionFour:ardataNewCheck: ', ardataNewCheck);
    };
};

// xử lý hiện ảnh để xem trước khi chọn ảnh đại diện


const handleShowImgRegister = (id: string): void => {
    const containerAvatarFullImgId: HTMLElement | null = document.getElementById('container_avatar_full_img_id');
    const containerContentChooseImageImgId: NodeListOf<Element> = document.querySelectorAll('#content_chooseImage_img_id');
    if (containerContentChooseImageImgId && containerAvatarFullImgId) {
        for (let i: number = 0; i < containerContentChooseImageImgId.length; i++) {
            if (containerContentChooseImageImgId[i].getAttribute('Number') === id) {
                containerAvatarFullImgId.setAttribute('src', `${containerContentChooseImageImgId[i].getAttribute('src')}`);
                containerContentChooseImageImgId[i].setAttribute('class', 'content_chooseImage_img_active')
            } else {
                containerContentChooseImageImgId[i].setAttribute('class', 'content_chooseImage_img')
            }
        };
    };
};


const handleRegisterNewAccount = async (): Promise<void> => {
    const containerBodyRegisterInputIdFirstName: HTMLInputElement = document.getElementById('body_register_input_idFirstName') as HTMLInputElement;
    const containerBodyRegisterInputIdLastName: HTMLInputElement = document.getElementById('body_register_input_idLastName') as HTMLInputElement;
    const containerBodyRegisterInputIdEmail: HTMLInputElement = document.getElementById('body_register_input_idEmail') as HTMLInputElement;
    const containerBodyRegisterInputIdPassword: HTMLInputElement = document.getElementById('body_register_input_idPassword') as HTMLInputElement;
    const containerBodyRegisterInputIdPhoneNumber: HTMLInputElement = document.getElementById('body_register_input_idPhoneNumber') as HTMLInputElement;
    const containerBodyRegisterInputIdenterThePassword: HTMLInputElement = document.getElementById('body_register_input_identerThePassword') as HTMLInputElement;
    const containerAvatarFullImgId: HTMLElement | null = document.getElementById('container_avatar_full_img_id');
    if (containerBodyRegisterInputIdFirstName && containerBodyRegisterInputIdLastName &&
        containerBodyRegisterInputIdEmail && containerBodyRegisterInputIdPassword &&
        containerBodyRegisterInputIdPhoneNumber && containerBodyRegisterInputIdenterThePassword && containerAvatarFullImgId
    ) {
        if (containerBodyRegisterInputIdEmail.value.trim().slice(-10) === "@gmail.com") {
            if (containerBodyRegisterInputIdPhoneNumber.value.trim().length === 10 || containerBodyRegisterInputIdPhoneNumber.value.trim().length === 11) {
                if (containerBodyRegisterInputIdenterThePassword.value.trim() === containerBodyRegisterInputIdPassword.value.trim()) {
                    let data: any = await PostRegisterNewUser(
                        containerBodyRegisterInputIdFirstName.value,
                        containerBodyRegisterInputIdLastName.value,
                        containerBodyRegisterInputIdEmail.value,
                        containerBodyRegisterInputIdPassword.value,
                        containerBodyRegisterInputIdPhoneNumber.value,
                        String(containerAvatarFullImgId.getAttribute('src'))
                    );
                    console.log('data: ', data);

                    if (data.data.isLogin === true) {
                        alert(data.data.message);


                        const containerContentChooseImageImgId: NodeListOf<Element> = document.querySelectorAll('#content_chooseImage_img_id');
                        if (containerContentChooseImageImgId && containerAvatarFullImgId) {
                            for (let i: number = 0; i < containerContentChooseImageImgId.length; i++) {
                                containerContentChooseImageImgId[i].setAttribute('class', 'content_chooseImage_img')
                            };
                        };
                        const containerRegisterId: HTMLElement | null = document.getElementById('register_id');
                        if (containerRegisterId) {
                            containerRegisterId.setAttribute('class', 'register displayNone')
                        }
                        await handleTakeValueInput();
                    } else {
                        alert(data.data.message);
                    }
                } else {
                    alert('Vui lòng nhập lại mật khẩu cho trùng khớp!');
                };
            } else {
                alert('Vui lòng nhập đúng số điện thoại!');
            };
        } else {
            alert('Vui lòng nhập đúng Gmail!');
        };
    };
};


const handleShowTableRegister = (): void => {
    const containerRegisterId: HTMLElement | null = document.getElementById('register_id');
    const inputEmail: HTMLInputElement | null = document.getElementById('body_login_input_idEmail') as HTMLInputElement;
    const inputPassword: HTMLInputElement | null = document.getElementById('body_login_input_idPassword') as HTMLInputElement;
    if (containerRegisterId) {
        containerRegisterId.setAttribute('class', 'register');
        inputEmail.value = '';
        inputPassword.value = "";
    };
};

const handleCloseTableRegister = (event: MouseEvent): void => {
    const containerRegisterId: HTMLElement | null = document.getElementById('register_id');
    const targetElement = event.target as HTMLElement;
    if (containerRegisterId && targetElement === containerRegisterId) {
        event.preventDefault();
        containerRegisterId.classList.add('displayNone');
        event.stopPropagation();
    };
};

const handleCloseTableLogin = (event: MouseEvent): void => {
    const containerLoginId: HTMLElement | null = document.getElementById('login_id');
    const targetElement = event.target as HTMLElement;
    if (containerLoginId && targetElement === containerLoginId) {
        const inputEmail: HTMLInputElement | null = document.getElementById('body_login_input_idEmail') as HTMLInputElement;
        const inputPassword: HTMLInputElement | null = document.getElementById('body_login_input_idPassword') as HTMLInputElement;
        inputEmail.value = '';
        inputPassword.value = '';
        event.preventDefault();
        containerLoginId.classList.add('displayNone');
        event.stopPropagation();
    };
}


const handleShowListimage = (name: string): void => {
    const containerContentChooseImageId: HTMLElement | null = document.getElementById('content_chooseImage_id');
    const containerUser_inpromation_container_content_changeImage_idShow: HTMLElement | null = document.getElementById('User_inpromation_container_content_changeImage_idShow');
    const containerUser_inpromation_container_content_changeImage_idHidden: HTMLElement | null = document.getElementById('User_inpromation_container_content_changeImage_idHidden');

    if (name === "Show") {
        containerUser_inpromation_container_content_changeImage_idShow?.setAttribute('class', 'User_inpromation_container_content_changeImage displayNone');
        containerUser_inpromation_container_content_changeImage_idHidden?.setAttribute('class', 'User_inpromation_container_content_changeImage ');
        if (containerContentChooseImageId) {
            containerContentChooseImageId.setAttribute('class', 'content_chooseImage');
        }
    } else if (name === "hidden") {
        containerUser_inpromation_container_content_changeImage_idShow?.setAttribute('class', 'User_inpromation_container_content_changeImage ');
        containerUser_inpromation_container_content_changeImage_idHidden?.setAttribute('class', 'User_inpromation_container_content_changeImage  displayNone');
        if (containerContentChooseImageId) {
            containerContentChooseImageId.setAttribute('class', 'content_chooseImage displayNone');
        }
    }
}



const handleShowImgEditInformation = (id: string): void => {
    const containerContentChooseImageImgEditInformationId: NodeListOf<Element> = document.querySelectorAll('#content_chooseImage_img_edit_information_id');
    const containerUserInpromationContainerContentImageImgId: HTMLElement | null = document.getElementById('User_inpromation_container_content_image_img_id');
    if (containerContentChooseImageImgEditInformationId && containerUserInpromationContainerContentImageImgId) {
        for (let i: number = 0; i < containerContentChooseImageImgEditInformationId.length; i++) {
            if (containerContentChooseImageImgEditInformationId[i].getAttribute('Number') === id) {
                containerContentChooseImageImgEditInformationId[i].setAttribute('class', 'content_chooseImage_img_edit_information_active');
                containerUserInpromationContainerContentImageImgId.setAttribute('src', `${containerContentChooseImageImgEditInformationId[i].getAttribute('src')}`)
            } else {
                containerContentChooseImageImgEditInformationId[i].setAttribute('class', 'content_chooseImage_img_edit_information');
            };
        };
    };
};
document.addEventListener('DOMContentLoaded', (): void => {
    const containerLeaderboardContentLiSTTIdTop1: HTMLElement | null = document.getElementById('Leaderboard_content_li_STT_id_top1');
    const containerLeaderboardContentLiSTTIdTop2: HTMLElement | null = document.getElementById('Leaderboard_content_li_STT_id_top2');
    const containerLeaderboardContentLiSTTIdTop3: HTMLElement | null = document.getElementById('Leaderboard_content_li_STT_id_top3');
    const containerLeaderboardContentLiSTTIdTopvv: NodeListOf<Element> = document.querySelectorAll('#Leaderboard_content_li_STT_id_topvv');


    if (containerLeaderboardContentLiSTTIdTop1 && containerLeaderboardContentLiSTTIdTop2 && containerLeaderboardContentLiSTTIdTop3 && containerLeaderboardContentLiSTTIdTopvv) {
        containerLeaderboardContentLiSTTIdTop1.innerHTML = `
                    <i style = "color: #ffd700;" class="fa-solid fa-trophy" > </i> :
                        `;
        containerLeaderboardContentLiSTTIdTop2.innerHTML = `
                        <i style = "color: #c0c0c0;" class="fa-solid fa-trophy" > </i> :
                            `;
        containerLeaderboardContentLiSTTIdTop3.innerHTML = `
                            <i style = "color: #6d4031;" class="fa-solid fa-trophy" > </i> :
                                `;
        for (let i = 0; i < containerLeaderboardContentLiSTTIdTopvv.length; i++) {
            const element = containerLeaderboardContentLiSTTIdTopvv[i] as HTMLElement;
            element.style.margin = '0px 8px 0px 12px';
        }
    };


    const containerNumberOfNotifications: HTMLElement | null = document.getElementById('number_of_notifications');

    if (Number(containerNumberOfNotifications?.innerText) === 0) {
        containerNumberOfNotifications?.setAttribute('class', 'number_of_notifications displayNone')
    };
    if (isLogin === false) {
        const containerHeaderRightLiIdNotifications: HTMLElement | null = document.getElementById('header_right_li_notifications_id');
        if (containerHeaderRightLiIdNotifications) {
            containerHeaderRightLiIdNotifications.innerHTML = `
                    Thông báo
                    <div class="content_header_right_li_notifications" >
                        <div class="content_header_right_li_notifications_LoginFalse" >
                            <span class="content_header_right_li_notifications_LoginFalse_text" >
                                Vui lòng đăng nhập để nhận thông báo!.
                            </span>
                        </div>
                    </div>    
                    `
        }
    };

});


