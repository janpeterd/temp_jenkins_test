interface Feedback {
    message: string;
    user : {
        firstname: string;
        lastname: string;
        email: string;
    }
    question: {
        question: string;
        creationDate: Date;
    }
    quiz: {
        name: string;
        creationDate: Date;
        actualPrice: number;
        isPrivate: boolean;
        photoUrl: string;
        showInstantResult: boolean;
        calculateScore: boolean;
        attempts: number;
        dateScoreRelease: Date;
        description: string;
        isVisible: boolean;
        isDailyQuiz: boolean;
    }
    creationDate: Date;
}