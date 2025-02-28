interface UserQuiz {
    user : {
        firstname: string;
        lastname: string;
        email: string;
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
    startTime: number;
    score: number;
    isPaid: boolean;
}