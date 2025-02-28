interface User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    wantsDailyQuiz: boolean;
    company: {
        name: string;
        logoUrl: string;
    }
    userType: {
        type: string;
    }
}